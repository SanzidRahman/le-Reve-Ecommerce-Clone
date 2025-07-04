"use client";

import { GrContact } from "react-icons/gr";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { RiShoppingBagLine } from "react-icons/ri";
import { TbBuildingStore } from "react-icons/tb";
import Image from "next/image";
import { HiMenuAlt4 } from "react-icons/hi";
import Logo from "../../public/logo.svg";
import { useState } from "react";
import Sidebar from "./Sidebar";

const MiddleHeader = () => {
  const [IsOpenSidebar, setIsOpenSidebar] = useState(false);

  return (
    <div>
      <div className=" h-12 w-full bg-[#fff] flex justify-between px-10  items-center">
        <div className="hidden xl:inline-flex">
          <div className="flex mr-6 space-x-1 justify-center items-center">
            <GrContact className="text-sm" />
            <p className="text-[10px] font-light">Contact US</p>
          </div>
          <div className="flex space-x-2">
            <p className="text-[10px] font-light">Download App</p>
            <FaGooglePlay className="border text-[12px]" />
            <FaApple className="border text-[12px]" />
          </div>
        </div>
        <div className="flex gap-x-2">
          <button onClick={() => setIsOpenSidebar(!IsOpenSidebar)}>
            <HiMenuAlt4 className="xl:hidden text-2xl" />
          </button>
          <Image src={Logo} alt="Logo" height={150} width={150} />
        </div>
        <div className="flex gap-x-3">
          <div className="flex gap-x-4 justify-center items-center">
            <div className="hidden xl:flex justify-center items-center">
              <IoIosContact className="text-2xl " />
              <p className="font-light text-[10px]">Log In/Sign Up</p>
            </div>
            <div className="hidden xl:flex justify-center items-center">
              <TbBuildingStore />
              <p className="font-light text-[10px]">Find Store</p>
            </div>
          </div>
          <IoIosContact className="text-2xl md:hidden " />
          <CiSearch className="text-2xl xl:hidden" />
          <RiShoppingBagLine className="text-2xl xl:hidden" />
          <select className="font-light text-sm">
            <option value="BD">BD</option>
            <option value="Int.">Int.</option>
          </select>
        </div>
      </div>
      <div>
        <Sidebar
          isOpen={IsOpenSidebar}
          onClose={() => setIsOpenSidebar(false)}
        />
      </div>
    </div>
  );
};

export default MiddleHeader;
