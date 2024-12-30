import { getPopularPosts } from "@/app/actions/posts/get-popular-posts";
import Link from "next/link";
import { Card } from "../card/ArticleCard";

export default async function PopularPostsPage() {
  const result = await getPopularPosts();

  if (!result.ok) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <h1 className="text-2xl font-bold text-red-500">Error</h1>
        <p className="text-lg text-gray-700">{result.error}</p>
      </div>
    );
  }

  return (
    <div className="py-4">
      <h1 className="text-4xl font-black mb-8">More Barça</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {result.data?.map((post) => (
          <Card
            slug={post.slug}
            key={post.id}
            imagePath={"https://caufiyqjkxwjzbcrrpbq.supabase.co/storage/v1/object/public/images/imagesFcbAtletico.jpg"}
            category={post.category}
            title={post.title}
            author={post.author}
          />
      ))}
      </div>
    </div>
  );
}
