"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

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
        duration: 0.2,
      },
      display: "none",
    },
  };

  return (
    <>
      <motion.li onHoverEnd={toggleHoverMenu} onHoverStart={toggleHoverMenu}>
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
                  <div className="flex justify-center gap-x-10 pt-4">
                    {menu.sublinks.map((mySublink) => (
                      <div key={mySublink.id}>
                        <h1 className="font-bold text-[12px]">
                          {mySublink.Head}
                        </h1>
                        <div className="flex flex-col justify-center">
                          {mySublink.sublink.map((link) => (
                            <div className="" key={link.id}>
                              {" "}
                              <p className="text-[10px]">{link.title}</p>
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
