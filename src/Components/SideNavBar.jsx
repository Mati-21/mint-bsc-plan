import { useState } from "react";

import { IoSearch } from "react-icons/io5";
import MenuSection from "./MenuSection";
import { menu1, menu2, menu3 } from "./SidebarMenuTitles";

const Sidebar = () => {
  const [frameWorkMenu, setframeWorkMenu] = useState(true);
  const [ManagmentMenu, setManagmentMenu] = useState(false);
  const [dataMenu, setDataMenu] = useState(false);

  const toggleMenu = () => {
    setframeWorkMenu((men) => !men);
  };
  const toggleMenu1 = () => {
    setManagmentMenu((men) => !men);
  };
  const toggleMenu2 = () => {
    setDataMenu((men) => !men);
  };

  return (
    <div className="w-72  bg-green-800 lg:flex lg:thin-scrollbar lg:flex-col  text-white h-screen p-4 col-start-1 col-end-2 row-start-1 row-end-3 ">
      <h2 className="text-lg font-bold mb-6">
        Minister of Innovation & Technology
      </h2>

      <div className="flex gap-4 mb-6 items-center">
        <div className="w-12 h-12 rounded-full bg-amber-200 text-center overflow-hidden  ">
          <img src="/download.jpg" alt="" />
        </div>
        <p>የኢኖቬሽንና ቴክኖሎጂ ሚኒስቴር </p>
      </div>

      <div className="mb-6 flex gap-4 items-center">
        <input
          type="text"
          placeholder="Search"
          className="border border-white rounded-sm px-2 py-1 outline-none"
        />
        <IoSearch size={25} />
      </div>

      <div className="h-[450px] overflow-y-auto ">
        <div className="flex flex-col gap-2    ">
          <MenuSection
            data={menu1}
            stat={toggleMenu}
            activestat={frameWorkMenu}
          />
          <MenuSection
            data={menu2}
            stat={toggleMenu1}
            activestat={ManagmentMenu}
          />
          <MenuSection data={menu3} stat={toggleMenu2} activestat={dataMenu} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
