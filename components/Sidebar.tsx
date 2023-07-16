"use client";

import { SidebarLinks } from "../constants";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const router = useRouter();
  const pathname = usePathname();
  return (
    <aside className={`sidebar ${open ? "w-12 md:w-52" : "w-14"}`}>
      <ul>
        {SidebarLinks.map((item) => (
          <li
            key={item.id}
            className={`flexStart p-2 gap-2 px-2 rounded-md hover:bg-gray-200 ${
              pathname === item.urlLink || pathname.startsWith(item.urlLink)
                ? "active bg-[#408dfb] text-white hover:bg-zoho-blue hover:text-white"
                : ""
            }`}
          >
            <div className="grow">
              <Link className="flex items-center" href={item.urlLink}>
                {item.icon}
                <span
                  className={`text-base ml-2 flex-1 duration-200 ${
                    !open && "hidden"
                  }`}
                >
                  {item.title}
                </span>
              </Link>
            </div>

            <div className="flex-none">
              <Link
                href={item.actionLink}
                className={`flex-1 duration-200 ${!open && "hidden"}`}
              >
                {item.action && item.actionIcon}
              </Link>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-center items-center absolute bottom-0 left-0 w-full bg-[#ededf7] p-2 cursor-pointer">
        <ChevronLeftIcon
          className={`w-5 h-5 stroke-[3px] ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
      </div>
    </aside>
  );
};

export default Sidebar;
