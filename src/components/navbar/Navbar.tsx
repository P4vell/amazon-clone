import { CartLink } from "./CartLink";
import { UserMenu } from "./UserMenu";
import { Search } from "./Search";
import { Logo } from "./Logo";

export const Navbar = () => {
  return (
    <nav className="w-full flex items-center gap-2 bg-primary px-2 py-3 z-10 sm:gap-3 md:px-6 md:gap-6">
      <Logo />
      <Search />
      <UserMenu />
      <CartLink />
    </nav>
  );
};
