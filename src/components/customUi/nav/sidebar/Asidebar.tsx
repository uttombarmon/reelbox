import { Separator } from "@/components/ui/separator";
import { NavLink } from "../NavLink";
import { HomeIcon, TrendingUpIcon, UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Asidebar = ({ isSidebarOpen }: { isSidebarOpen: boolean }) => {
  return (
    <aside
      className={`fixed lg:sticky top-16 h-[calc(100vh-4rem)] z-30 
                    bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4 
                    transition-transform duration-300 ease-in-out 
                    ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
                    lg:translate-x-0 lg:w-60 w-64`}
    >
      <div className="space-y-6">
        {/* Primary Navigation */}
        <nav className="space-y-1">
          <h3 className="text-xs font-semibold uppercase text-gray-400 mb-2 px-3">
            Feeds
          </h3>
          <NavLink Icon={HomeIcon} label="For You" isActive={true} />
          <NavLink Icon={UserIcon} label="Following" isActive={false} />
          <NavLink Icon={TrendingUpIcon} label="Trending" isActive={false} />
        </nav>

        <Separator />

        {/* Suggested Categories */}
        <div className="space-y-2">
          <h3 className="text-xs font-semibold uppercase text-gray-400 mb-2 px-3">
            Categories
          </h3>
          <div className="flex flex-wrap gap-2">
            {["Comedy", "Gaming", "Food", "Music", "DIY"].map((tag) => (
              <Button
                key={tag}
                variant="secondary"
                size="sm"
                className="rounded-full text-xs"
              >
                #{tag}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Asidebar;
