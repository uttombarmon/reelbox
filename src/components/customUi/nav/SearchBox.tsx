import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

const SearchBox = () => {
  return (
    <div className="hidden sm:flex grow max-w-lg mx-4">
      <div className="flex w-full rounded-full overflow-hidden border border-gray-300 dark:border-gray-600">
        <Input
          type="search"
          placeholder="Search videos, creators, and sounds..."
          className="rounded-r-none border-none focus-visible:ring-0 focus-visible:ring-offset-0 h-10"
        />
        <Button
          className={`rounded-l-none h-10 transition-colors bg-red-600 hover:bg-red-700`}
        >
          <SearchIcon className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default SearchBox;
