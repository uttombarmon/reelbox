import React from "react";
import { MobileNavItem } from "../MobileNavItem";
import { HomeIcon, MessageCircleIcon, MessageCircleXIcon, SearchIcon, UploadIcon, UserIcon } from "lucide-react";

const BottomNavLink = () => {
  return (
    <div className="flex justify-around h-full items-center">
      <MobileNavItem Icon={HomeIcon} label="Home" isActive={true} />
      <MobileNavItem Icon={SearchIcon} label="Search" isActive={false} />
      <MobileNavItem Icon={UploadIcon} label="Post" isVibrant={true} />
      <MobileNavItem Icon={MessageCircleXIcon} label="Inbox" isActive={false} />
      <MobileNavItem Icon={UserIcon} label="Profile" isActive={false} />
    </div>
  );
};

export default BottomNavLink;
