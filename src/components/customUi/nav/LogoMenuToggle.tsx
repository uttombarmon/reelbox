import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import React from "react";
interface LogoMenuToggleProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>; 
}

const LogoMenuToggle = ({ isSidebarOpen,setIsSidebarOpen}:LogoMenuToggleProps) => {
  return (
    <div className="flex items-center space-x-4">
      <Button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        variant="ghost"
        size="icon"
        className="lg:hidden text-gray-500 dark:text-gray-300"
      >
        <MenuIcon className="w-6 h-6" />
      </Button>
      <span className="text-xl font-extrabold text-red-600 tracking-wider">
        Reel<span className="text-gray-900 dark:text-white">Box</span>
      </span>
    </div>
  );
};

export default LogoMenuToggle;
