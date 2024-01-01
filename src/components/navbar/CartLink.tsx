import Image from "next/image";
import Link from "next/link";

export const CartLink = () => {
  return (
    <Link href="/cart" className="flex items-end relative">
      <Image src="/images/cart.png" alt="Cart" width={40} height={40} />
      <span className="hidden text-sm text-white font-semibold sm:block">Cart</span>
      <span className="absolute left-[17px] bottom-[11px] text-orange-400 font-bold">0</span>
    </Link>
  );
};
