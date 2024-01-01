import { Popover, PopoverContent, PopoverTrigger } from "../ui/Popover";
import { buttonVariants } from "../ui/Button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const UserMenu = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="flex flex-col text-white">
          <span className="text-xs">Hello, sign in</span>
          <span className="text-xs font-bold sm:text-sm">Account & Lists</span>
        </button>
      </PopoverTrigger>

      <PopoverContent className="max-w-48 space-y-3" align="end">
        <Link
          href="/login"
          className={cn(buttonVariants({ className: "w-full" }))}
        >
          Sign in
        </Link>
        <p className="text-xs text-center text-neutral-800">
          New customer?{" "}
          <Link
            href="/signup"
            className="text-blue-500 hover:text-orange-400 hover:underline"
          >
            Start here.
          </Link>
        </p>
      </PopoverContent>
    </Popover>
  );
};
