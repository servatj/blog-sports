import fs from "node:fs";
import path from "node:path";
import React, { Suspense } from "react";
import type { Metadata, ResolvingMetadata } from "next";
import { format } from "date-fns";
import { isDevMode } from "@/lib/utils/is-dev-mode";
import EditPostButton from "./edit-post-button";
import OpenInVSCode from "./open-in-vs-code-button";
import LikeButton from "@/components/like/like-button";
import MdxContent from "./mdx-content";
import RelatedPostsList from "./related-posts";

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = await getPost(params);
  return {
    title: post.metadata.title,
    description: post.metadata.description,
  };
}

async function getPost({ slug }: { slug: string }) {
  try {
    const mdxPath = path.join("content", "posts", `${slug}.mdx`);
    if (!fs.existsSync(mdxPath)) {
      throw new Error(`MDX file for slug ${slug} does not exist`);
    }

    const { metadata } = await import(`@/content/posts/${slug}.mdx`);

    return {
      slug,
      metadata,
    };
  } catch (error) {
    console.error("Error fetching post:", error);
    throw new Error(`Unable to fetch the post for slug: ${slug}`);
  }
}

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("content", "posts"));
  const params = files
    .filter((filename) => filename.endsWith(".mdx")) // Only process MDX files
    .map((filename) => ({
      slug: filename.replace(".mdx", ""),
    }));

  return params;
}

const Loading = () => (
  <div className="flex justify-center items-center h-full">
    <p>Loading...</p>
  </div>
);

export default async function Blog({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const post = await getPost(params);

  return (
    <div className="max-w-3xl z-10 w-full items-center justify-between">
      <div className="w-full flex justify-center items-center flex-col gap-6">
        <article className="prose prose-lg md:prose-lg lg:prose-lg mx-auto min-w-full">
          <div className="pb-6">
            <p className="font-semibold text-lg">
              <span className="text-primary pr-1">
                {post.metadata.publishDate}
              </span>{" "}
              {post.metadata.categories?.map(
                (category: string, index: number) => (
                  <span key={index + category}>
                    {category}
                    {index < post.metadata.categories.length - 1 && ", "}
                  </span>
                )
              )}
            </p>
          </div>
          <div className="pb-6">
            <h1 className="text-5xl sm:text-6xl font-black capitalize leading-12">
              {post.metadata.title}
            </h1>
            <p className="pt-6">By {post.metadata.author}</p>
          </div>
          {isDevMode() && (
            <div className="flex gap-2 mb-4">
              <EditPostButton slug={slug} author={post.metadata.author} />
              <OpenInVSCode path={slug} />
            </div>
          )}
          <MdxContent slug={slug} id={post.metadata.id} />
        </article>
      </div>
      <div>
        <div>
          <RelatedPostsList relatedSlugs={post.metadata.relatedPosts} />
        </div>
      </div>
      <LikeButton postId={post.metadata.id} />
    </div>
  );
}
