"use client";
import { CiSearch } from "react-icons/ci";
import { AiOutlineShopping } from "react-icons/ai";
import { NavbarItem } from "@/lib";
import Desktop from "./Desktop";
import MobileView from "./MobileView";

const Navbar = () => {
  return (
    <div>
      <div className="h-10 w-full bg-[#fff] flex justify-center xl:justify-between xl:px-10 items-center">
        <div className="hidden xl:flex justify-center items-center ">
          <CiSearch className="text-2xl" />
          <input
            placeholder="Type your Search"
            className="text-[12px] outline-0"
          ></input>
        </div>
        <div className="hidden xl:flex gap-x-4 uppercase mr-40 text-sm font-light">
          {NavbarItem.map((menu) => (
            <div key={menu.id}>
              <ul>
                <Desktop menu={menu} key={menu.id} />
              </ul>
            </div>
          ))}
        </div>
        <div className="xl:hidden flex gap-x-4 uppercase text-[12px] font-light">
          {NavbarItem.map((menu) => (
            <MobileView menu={menu} key={menu.id} />
          ))}
        </div>
        <button className="hidden xl:inline-flex">
          <AiOutlineShopping />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
