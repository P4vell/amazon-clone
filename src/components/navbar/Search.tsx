import { Button } from "../ui/Button";
import { Icons } from "../shared/Icons";

export const Search = () => {
  return (
    <form className="h-10 flex flex-1 items-center bg-white rounded-md overflow-hidden">
      <input
        type="text"
        placeholder="Search Amazon"
        className="w-full h-full text-sm font-medium pl-2 placeholder:text-neutral-600"
      />
      <Button size="icon" className="rounded-l-none">
        <Icons.Search className="w-4 h-4" />
      </Button>
    </form>
  );
};
