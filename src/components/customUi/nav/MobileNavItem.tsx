import Link from "next/link";

export const MobileNavItem = ({
  Icon,
  label,
  isActive,
  isVibrant,
}: {
  Icon: React.FC;
  label: string;
  isActive?: boolean;
  isVibrant?: boolean;
}) => {
  const baseClasses =
    "flex flex-col items-center justify-center space-y-1 transition-colors";

  if (isVibrant) {
    return (
      <Link href="#" className={baseClasses}>
        <div
          className={`p-1.5 rounded-xl text-white bg-red-600 hover:bg-red-700`}
        >
          <span className=" w-6 h-6">
            <Icon />
          </span>
        </div>
        <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
          {label}
        </span>
      </Link>
    );
  }

  return (
    <Link href="#" className={baseClasses}>
      <span
        className={`w-6 h-6 ${
          isActive ? "text-red-600" : "text-gray-500 dark:text-gray-400"
        }`}
      >
        <Icon />
      </span>
      <span
        className={`text-xs font-medium ${
          isActive ? "text-red-600" : "text-gray-500 dark:text-gray-400"
        }`}
      >
        {label}
      </span>
    </Link>
  );
};
