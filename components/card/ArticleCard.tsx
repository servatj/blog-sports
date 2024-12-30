import React from 'react';
import Link from 'next/link';

interface CardProps {
  slug?: string;
  key: string;
  imagePath: string;
  category: string;
  title: string;
  author: string;
}

export const Card = ({ 
  imagePath, 
  category, 
  title, 
  author, 
  slug
}: CardProps) => {
  return (
    <article className="max-w-3xl overflow-hidden bg-white rounded-lg shadow-sm">
      <div className="relative">
        {/* Image container with 16:9 aspect ratio */}
        <div className="relative pt-[56.25%]">
          <img
            src={imagePath || "/api/placeholder/800/450"}
            alt={title}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
      </div>
      
      <div className="p-4">
        <div className="mb-2">
          <span className="text-sm font-semibold uppercase tracking-wider text-gray-600">
            {category}
          </span>
        </div>

        <h2 className="text-2xl font-bold leading-tight mb-2 text-gray-900">
            <Link href={`/blog/${slug}`}>
              {title}
            </Link>  
        </h2>

        <div className="text-sm text-gray-600">
          {author}
        </div>
      </div>
    </article>
  );
};

interface VideoCardProps {
  key: string;
  title: string;
  url: string;
  thumbnail: string;
}

export const VideoCard = ({ title , url, thumbnail }: VideoCardProps) => {
  return (
    <article className="max-w-3xl overflow-hidden bg-white rounded-lg shadow-sm">
      <div className="relative">
        <div className="relative pt-[56.25%]">
          <img
            src={thumbnail || "/api/placeholder/800/450"}
            alt={title}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
      </div>
      
      <div className="p-4">
        <div className="mb-2">
          <span className="text-sm font-semibold uppercase tracking-wider text-gray-600">
            Video
          </span>
        </div>

        <h2 className="text-2xl font-bold leading-tight mb-2 text-gray-900">
          <Link href={url}>
            {title}
          </Link>
        </h2>
        
      </div>
    </article>
  );
}

interface minCardProps {
  key: string;
  imagePath: string;
  category: string;
  title: string;
}

export const minCard = ({ key, imagePath, category, title }: minCardProps) => {
  return (
    <div className="max-w-md mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <img src="https://via.placeholder.com/400x200" alt="Card Image" className="w-full h-48 object-cover" />
        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase">
          Multimedia Sport
        </div>
      </div>
      
      <div className="p-4">
        <p className="text-sm font-medium text-gray-600">{category}</p>
        
        <h2 className="mt-2 text-lg font-semibold text-gray-800 hover:text-red-500 cursor-pointer">
          {title}
        </h2>
        
        <p className="mt-2 text-sm text-gray-500">{category}</p>
      </div>
    </div>
  )
};

const ArticleCard = ({ slug, imagePath, category, title, author }: CardProps) => (
  <div className="p-4 bg-gray-100">
    <Card
      slug={slug}
      imagePath={imagePath}
      category={category}
      title={title}
      author={author} key={''}    />
  </div>
);

export default ArticleCard;