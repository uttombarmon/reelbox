import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

export const VideoCard = ({
  title,
  user,
  index,
}: {
  title: string;
  user: string;
  index: number;
}) => (
  <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col h-full">
    <div className="relative w-full aspect-[9/16] bg-gray-200 dark:bg-gray-700">
      <img
        src={`https://placehold.co/300x533/1E293B/E2E8F0?text=Clip+${index}`}
        alt={`Video thumbnail for ${title}`}
        className="object-cover w-full h-full"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = `https://placehold.co/300x533/1E293B/E2E8F0?text=Clip+${index}`;
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
      <div className="absolute bottom-3 left-3 text-white">
        <p className="text-lg font-bold truncate max-w-[90%]">{title}</p>
        <div className="flex items-center space-x-2 text-sm font-light opacity-80 mt-1">
          <Avatar>
            <span className="h-5 w-5">
              {user.substring(0, 2).toUpperCase()}
            </span>
          </Avatar>
          <span>@{user}</span>
        </div>
      </div>
    </div>
  </Card>
);
