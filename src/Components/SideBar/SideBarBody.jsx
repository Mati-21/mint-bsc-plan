import { ChevronDown } from "lucide-react";
import Datas from "./SidebarMenuTitles";
import { useState } from "react";

import { LuFrame } from "react-icons/lu";
import { MdOutlineDisplaySettings } from "react-icons/md";
import { IoAnalytics } from "react-icons/io5";
import { FcPlanner } from "react-icons/fc";
import { TbReportAnalytics } from "react-icons/tb";

function SideBarBody({ open }) {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState({
    menu1: false,
    menu2: false,
    menu3: false,
    menu4: false,
  });

  // ${!show && "hidden"}

  const toggleDropdown = (key) => {
    setIsSubMenuOpen((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div
      className={`overflow-auto ${
        !open ? "px-0" : "px-4 "
      }  text-sm bg-green-700 h-[450px] rounded scrollbar-hidden`}
    >
      <ul>
        {Datas.map((data, index) => (
          <div key={index}>
            {data.sectionTitle && (
              <div
                className={`flex items-center  border-b pb-2 mt-4  ${
                  !open ? "justify-center cursor-pointer" : "justify-between"
                } border-black/50 `}
              >
                <h1 className={`${!open && "hidden"}  font-bold text-md `}>
                  {data.sectionTitle}
                </h1>
                <span className={`${!open && "text-4xl"}  `}>{data.icon}</span>
              </div>
            )}

            <li
              className={` ${
                !open && "hidden"
              } flex gap-4 px-2 py-1 items-center bg-green-300/20 cursor-pointer rounded duration-500 text-white hover:bg-slate-300/20 mt-1   `}
            >
              <span className="flex-1 font-bold text-xs">{data.menu}</span>
              {data.submenu && (
                <ChevronDown
                  className={`  cursor-pointer text-white  transition-transform  duration-200 ${
                    isSubMenuOpen[data.key] ? "rotate-180" : ""
                  }`}
                  onClick={() => toggleDropdown(data.key)}
                  size={15}
                />
              )}
            </li>

            {data.subMenuItems && isSubMenuOpen[data.key] && (
              <ul className="flex flex-col list-disc mt-1 gap-1">
                {data.subMenuItems.map((item, subIndex) => (
                  <li
                    key={subIndex}
                    className=" rounded duration-300 px-2 ml-4 mr-1 cursor-pointer hover:bg-green-300/20"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
}

export default SideBarBody;
