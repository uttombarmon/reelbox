import { Button } from "@/components/ui/button";
import { UploadIcon } from "lucide-react";
import React from "react";

const UploadButton = () => {
  return (
    <Button variant="secondary" className="hidden sm:inline-flex">
      <UploadIcon className=" w-4 h-4" />
      Upload
    </Button>
  );
};

export default UploadButton;
