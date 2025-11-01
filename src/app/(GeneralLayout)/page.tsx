"use client";
import { VideoCard } from "@/components/customUi/video/VideoCard";
import { useAuth } from "@/hooks/useAuth";
import { useUser } from "@/hooks/useUser";

export default function Home() {
  const { user, isAuthenticated, isLoading } = useUser();
  const { logout } = useAuth();

  // Mock Data
  const videoList = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    title: `Viral Trend Clip #${i + 1} - The new dance is here!`,
    user: `cool_creator_${i + 1}`,
  }));

  return (
    <main className={`flex-1 min-w-0 p-4 lg:p-6`}>
      <h1 className="text-3xl font-extrabold mb-6 text-gray-900 dark:text-white">
        For You
      </h1>

      {/* Responsive Video Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xxl:grid-cols-5 gap-4 md:gap-6">
        {videoList.map((video) => (
          <VideoCard
            key={video.id}
            title={video.title}
            user={video.user}
            index={video.id}
          />
        ))}
      </div>

      <p className="text-center py-10 text-gray-500 dark:text-gray-400">
        Scrolling to load more content...
      </p>
    </main>
  );
}
