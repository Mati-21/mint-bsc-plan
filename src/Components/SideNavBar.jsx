import { useState } from "react";


import MenuSection from "./MenuSection";
import { menu1, menu2, menu3 } from "./SidebarMenuTitles";
import SideBarHeader from "./SideBarHeader";

const Sidebar = ({ isSideOpen, toggleSidebar }) => {
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
    <div
      className={`max-w-72  ${
        isSideOpen ? "hidden" : " fixed top-0 left-0 "
      }   bg-green-800 lg:flex lg:thin-scrollbar lg:flex-col lg:fixed  text-white h-screen p-4 col-start-1 col-end-2 row-start-1 row-end-3`}
    >
      <SideBarHeader />

      <div className="h-[450px] overflow-y-auto ">
        <div className="flex flex-col gap-2   ">
          <MenuSection
            data={menu1}
            stat={toggleMenu}
            activestat={frameWorkMenu}
            toggleSidebar={toggleSidebar}
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
