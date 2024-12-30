import { getLatestYoutuberVideos, Video } from "@/app/actions/youtube/get-latest-youtuber-videos";
import { VideoCard } from "../card/ArticleCard";

export default async function YoutubeVideos() {
  const { videos } = await getLatestYoutuberVideos();

  return (
    <div className="py-4">
      <h1 className="text-4xl font-black mb-8">Top Youtube Barça Videos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {videos.map((video: Video, index: number) => (
        <div className="">
          <VideoCard
            key={index.toString()}
            thumbnail={"https://caufiyqjkxwjzbcrrpbq.supabase.co/storage/v1/object/public/images/imagesFcbAtletico.jpg"}
            url={video.url}
            title={video.title}
          />
        </div>
      ))}
      </div>
    </div>
  );
}
