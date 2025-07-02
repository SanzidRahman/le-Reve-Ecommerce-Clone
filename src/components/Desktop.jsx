"use client";
import Link from "next/link";

const Desktop = ({ menu }) => {
  const hasSubMenu = menu?.sublinks?.length > 0;
  console.log("Menu: ", menu.sublinks);

  return (
    <div className="">
      <li >
        <Link href={menu.href}>{menu.title}</Link>
        <div>
          <div >
            {hasSubMenu && (
              <div>
                {/* this is for men & Women */}
                <div className="flex absolute h-40 w-screen right-0 justify-center gap-x-10 bg-emerald-600 "> 
                  {menu.sublinks.map((mySublink) => (
                    
                    <div key={mySublink.id}>
                      <h1>{mySublink.Head}</h1>
                      <div className="flex flex-col">
                        {mySublink.sublink.map((link) => (
                          <div className="" key={link.id}>                    <p>{link.title}</p>
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
      </li>
    </div>
  );
};

export default Desktop;
