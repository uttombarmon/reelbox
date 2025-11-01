import { Button } from "@/components/ui/button";
import React from "react";

export const NavLink = ({
  Icon,
  label,
  isActive,
}: {
  Icon: React.FC;
  label: string;
  isActive: boolean;
}) => (
  <Button
    variant={isActive ? "default" : "ghost"}
    className={`w-full justify-start ${
      isActive
        ? "bg-red-500 hover:bg-red-500/90"
        : "text-gray-600 dark:text-gray-300"
    }`}
    size="lg"
  >
    <Icon/>
    {label}
  </Button>
);
