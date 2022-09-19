import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MagnifyingGlassIcon as SearchIcon,
  ShoppingBagIcon as CartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { selectBasketItems } from "../redux/basketSlice";

export const Header: React.FC = () => {
  const session = false;
  const items = useSelector(selectBasketItems);

  return (
    <header className="sticky top-0 z-30 flex w-full select-none items-center justify-between bg-[#E7ECEE] p-4">
      {/* Logo */}
      <div className="flex items-center justify-center md:w-1/5">
        <Link href="/">
          <div className="relative h-10 w-5 cursor-pointer opacity-75 transition hover:opacity-100">
            <Image
              src="https://rb.gy/vsvv2o"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
        <a href="#" className="headerLink">
          Product
        </a>
        <a href="#" className="headerLink">
          Explore
        </a>
        <a href="#" className="headerLink">
          Support
        </a>
        <a href="#" className="headerLink">
          Business
        </a>
      </div>

      {/* Cart & Login & User icons */}
      <div className="flex items-center justify-center gap-x-4 md:w-1/5">
        <SearchIcon className="headerIcon" />
        <Link href="/checkout">
          <div className="relative cursor-pointer">
            {items.length > 0 && (
              <span className="absolute -right-1.5 -top-2 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 text-[10px] text-white">
                {items.length}
              </span>
            )}
            <CartIcon className="headerIcon" />
          </div>
        </Link>

        {session ? (
          <Image
            src={
              // session.user?.image ||
              "https://www.gravatar.com/avatar/0000000000000000000000000000000?d=mp&f=y"
            }
            alt=""
            className="cursor-pointer rounded-full"
            width={34}
            height={34}
            // onClick={() => signOut()}
          />
        ) : (
          <UserIcon
            className="headerIcon"
            // onClick={() => signIn()}
          />
        )}
      </div>
    </header>
  );
};
