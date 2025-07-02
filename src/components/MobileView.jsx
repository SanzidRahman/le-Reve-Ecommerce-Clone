import Link from "next/link";
import React from "react";

const MobileView = ({ menu }) => {
  return (
    <div>
      <li className="list-none">
        <Link href={menu.href}>{menu.title}</Link>
      </li>
    
    </div>
  );
};

export default MobileView;
