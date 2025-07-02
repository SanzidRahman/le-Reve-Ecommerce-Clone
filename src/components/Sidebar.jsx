import { IoCloseSharp } from "react-icons/io5";
import { NavbarItem } from "@/lib";
import Link from "next/link";
import { MdStorefront } from "react-icons/md";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div
      className={` h-dvh absolute z-9999999999 w-90 top-0 left-0 bg-blue-300 pl-4 pt-2 transform ${
        isOpen ? "translate-x-0" : " -translate-x-full"
      } `}
    >
     
      <div className="flex gap-x-2">
        <button className="uppercase h-6 text-[12px] px-2 bg-gray-100/40">
          Shop
        </button>
        <button className="uppercase h-6 text-[12px] px-2 bg-gray-100/40">
          Sign In / Sign Up
        </button>
         
        <button onClick={onClose}>
          <IoCloseSharp className="text-2xl ml-25" />
        </button>
      
      </div>
      <div className="mt-4 space-y-2">
        {NavbarItem.map((item) => (
          <div key={item.title}>
            <Link href={item.href} className="font-light text-[12px]">
              {item.title}{" "}
            </Link>
            <hr className="h-2 w-60 border-black/20"></hr>
          </div>
        ))}
      </div>
      <div className="mt-15">
        <div className=" flex relative">
          <MdStorefront />
          <p className="text-[12px]">Find Store</p>
          <hr className="h-2 w-60 border-black/20 absolute top-[22px]"></hr>
        </div>
        <div className=" flex relative mt-4">
          <FaApple />
          <p className="text-[12px]">Download App For IOS</p>
          <hr className="h-2 w-60 border-black/20 absolute top-[22px]"></hr>
        </div>
        <div className=" flex relative mt-4">
          <FaGooglePlay />
          <p className="text-[12px]">Download App For Android</p>
          <hr className="h-2 w-60 border-black/20 absolute top-[22px]"></hr>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
