"use client";
import BottomNavLink from "@/components/customUi/nav/bottom/BottomNavLink";
import LogoMenuToggle from "@/components/customUi/nav/LogoMenuToggle";
import SearchBox from "@/components/customUi/nav/SearchBox";
import Asidebar from "@/components/customUi/nav/sidebar/Asidebar";
import UploadButton from "@/components/customUi/nav/UploadButton";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MessageSquareIcon } from "lucide-react";
import { useState } from "react";

export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans text-gray-900 dark:text-gray-100 relative overflow-x-hidden">
      {/* --- Fixed Header --- */}
      <header className="fixed top-0 left-0 right-0 z-40 h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm flex items-center justify-between px-4 lg:px-6">
        {/* Logo & Menu Toggle */}
        <LogoMenuToggle
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        {/* Search Bar */}
        <SearchBox />

        {/* User Actions */}
        <div className="flex items-center space-x-3">
          <UploadButton />
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-500 dark:text-gray-300"
          >
            <MessageSquareIcon className="w-6 h-6" />
          </Button>
          <Avatar className=" bg-red-600 hover:bg-red-700 text-center">
            <span className="text-sm font-medium mx-auto my-auto">JD</span>
          </Avatar>
        </div>
      </header>

      {/* --- Main Layout: Sidebar & Content --- */}
      <div className="flex pt-16 pb-16 lg:pb-0">
        {/* Sidebar */}
        <Asidebar isSidebarOpen={isSidebarOpen} />

        {/* Overlay for mobile sidebar */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-20 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
        )}
        {/* Main Content Feed */}
        {children}
      </div>
      {/* --- Fixed Bottom Navigation (Mobile Only) --- */}
      <footer className="fixed bottom-0 left-0 right-0 z-50 h-16 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 lg:hidden shadow-lg">
        <BottomNavLink />
      </footer>
    </div>
  );
}
