"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const Desktop = ({ menu }) => {
  const hasSubMenu = menu?.sublinks?.length > 0;
  const [isHover, setIsHover] = useState(false);

  const toggleHoverMenu = () => setIsHover(!isHover);

  const subMenuAnimation = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -20,
      transition: {
        duration: 0.5,
      },
      display: "none",
    },
  };

  return (
    <>
      <motion.li className="list-none" onHoverEnd={toggleHoverMenu} onHoverStart={toggleHoverMenu}>
        <Link className="text-[11px]" href={menu.href}>
          {menu.title}
        </Link>
        <div>
          <div>
            {hasSubMenu && (
              <div className="">
                {/* this is for men & Women */}
                <motion.div
                  className=" absolute h-60 w-screen z-9999999 top-29 right-0 bg-[#fff] "
                  initial="exit"
                  animate={isHover ? "enter" : " exit"}
                  variants={subMenuAnimation}
                >
                  <div className="flex justify-center gap-x-10 mt-6">
                    {menu.sublinks.map((mySublink) => (
                      <div key={mySublink.id} className="flex gap-x-5">
                        <div>
                          <Image
                            src={mySublink.image}
                            alt="Image"
                            height={100}
                            width={100}
                          />
                        </div>
                        <div className="flex flex-col">
                          <h1 className="font-bold text-[12px] underline">
                          {mySublink.Head}
                        </h1>
                        
                          {mySublink.sublink.map((link) => (
                            <div className="" key={link.id}>
                              {" "}
                              <Link href={link.href} className="text-[10px] hover:text-blue-500">
                                {link.title}
                              </Link>
                            </div>
                          ))}
                        </div>
                        
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </motion.li>
    </>
  );
};

export default Desktop;
