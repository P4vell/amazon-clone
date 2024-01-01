import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" className="hidden md:block">
      <Image
        src="/images/logo.png"
        alt="Amazon logo"
        width={100}
        height={100}
      />
    </Link>
  );
};
