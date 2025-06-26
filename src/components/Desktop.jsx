"use client";

import Link from "next/link";
import React, { useState } from "react";
import { easeIn, easeInOut, motion } from "framer-motion";

const Desktop = ({ menu }) => {
  const hasSubMenu = menu?.sublinks?.length > 0;
  const [isHover, setIsHover] = useState(false);

  const toggleHoverMenu = () => {
    setIsHover(!isHover);
  };
  const subHoverAnimationMenu = {
    enter: {
      opacity: 1,
      rotateX: 0,
      Transition: {
        duration: 0.1,
      },
      display: "block",
    },

    exit: {
      opacity: 0,
      rotateX: -15,
      Transition: {
        duration: 0.5,
      },
      display: "none",
    },
  };

  return (
    <div>
      <motion.li
        onHoverStart={toggleHoverMenu}
        onHoverEnd={toggleHoverMenu}
        className="flex justify-evenly "
      >
        <Link className="text-[12px] " href={menu.href}>
          {menu.title}
        </Link>
        {hasSubMenu && (
          <motion.div
            className="absolute  top-[9.8rem] h-150 w-100 bg-red-500"
            initial="exit"
            animate={isHover ? "enter" : "exit"}
            variants={subHoverAnimationMenu}
          >
            <div className="h-65 w-full absolute z-999999 flex justify-center space-x-10 bg-white">
              {menu?.sublinks?.map((items) => (
                <div key={items.title}>
                  <h1 className="text-sm mt-4 font-bold">{items.Head}</h1>
                  {items.sublink.map((sublinkItem) => (
                    <div className="flex">
                      <Link
                        key={sublinkItem.title}
                        href={sublinkItem.href}
                        className="text-black text-[10px]"
                      >
                        {sublinkItem.title}
                      </Link>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </motion.li>
    </div>
  );
};

export default Desktop;
