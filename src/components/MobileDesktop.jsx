"use client";

import Link from "next/link";
import { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const MobileDesktop = ({ menu }) => {
  const hasSubmenu = menu?.sublinks?.length > 0;
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  return (
    <div>
      <Link
        className="flex justify-between mr-30 transition-all duration-600"
        onClick={() => {
          heading !== menu.title ? setHeading(menu.title) : setHeading("");
          setSubHeading("");
        }}
        href={menu.href}
      >
        {menu.title}
        <span className={` transition-all duration-600 ${heading === menu.title ? "rotate-90" : null}`}>
          <FaLongArrowAltRight className="text-[12px] font-light" />
        </span>
      </Link>

      <div
        className={` 
        ${heading === menu.title ? "xl:hidden" : "hidden"}
        `}
      >
        {hasSubmenu && (
          <div>
            <div>
              {menu.sublinks.map((item) => (
                <div key={item.id} className={`pr-4 }`}>
                  <h1
                    className="cursor-pointer pl-4 flex justify-between mr-30"
                    onClick={() =>
                      subHeading !== item.Head
                        ? setSubHeading(item.Head)
                        : setSubHeading("")
                    }
                  >
                    {item.Head}
                    <span
                      className={` transition-all duration-200 ${
                        subHeading === item.Head ? "rotate-90" : null
                      }`}
                    >
                      <FaLongArrowAltRight className="text-[12px] font-light " />
                    </span>
                  </h1>
                  <div
                    className={` ${
                      subHeading === item.Head ? "xl:hidden" : "hidden"
                    }`}
                  >
                    {item.sublink.map((finalItem) => (
                      <div key={finalItem.id} className="pl-10">
                        <div>
                          <p>{finalItem.title}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileDesktop;
