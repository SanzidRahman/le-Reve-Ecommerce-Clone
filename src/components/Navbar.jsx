"use client";
import { CiSearch } from "react-icons/ci";
import { AiOutlineShopping } from "react-icons/ai";
import { MobileNavbarItem, NavbarItem } from "@/lib";
import Desktop from "./Desktop";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="h-15 w-full bg-[#fff] flex justify-center xl:justify-between xl:px-10 items-center">
      <div className="hidden xl:flex justify-center items-center ">
        <CiSearch className="text-2xl"/>
        <input placeholder="Type your Search" className="text-sm"></input>
      </div>
      <div
        className={`hidden xl:flex gap-x-4 uppercase mr-40 text-sm font-light  `}
      >
        {NavbarItem.map((item) => (
          <ul key={item.title}>
            <Desktop menu={item} />
          </ul>
        ))}
      </div>
      <div className="xl:hidden flex gap-x-4 uppercase text-sm font-light">
        {MobileNavbarItem.map((item) => (
          <Link key={item.title} href={item.href}>
            {item.title}
          </Link>
        ))}
      </div>
      <div className="hidden xl:inline-flex">
        <AiOutlineShopping />
      </div>
    </div>
  );
};

export default Navbar;
