import { useState } from "react";

import SideBarBody from "./SideBarBody";
import SideBarHeader from "./SideBarHeader";
import { BsArrowLeftShort, BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { toggleMainSidenav } from "../../slices/mainSidebarSlice";
// import toggleMainSidenav from "../../slices/mainSidebarSlice";

// kkkkcknkvm

const Sidebar = () => {
  const open = useSelector((store) => store.mainSideBar.open);
  const show = useSelector((store) => store.mainSideBar.show);

  const dispatch = useDispatch();

  return (
    // <div className="bg-green-200 h-full w-50"></div>
    <div
      className={`bg-green-700 h-full   p-4 relative ${
        open ? "w-72" : "w-20"
      } ${!show ? "hidden" : "block"} duration-300 scrollbar-hidden`}
    >
      <BsArrowLeftShort
        className={`text-3xl text-dark-purple  lg:block rounded-full bg-white top-20  absolute right-0  border border-dark-purple translate-x-1/2 cursor-pointer ${
          open ? null : "rotate-180"
        } z-20 `}
        onClick={() => dispatch(toggleMainSidenav())}
      />
      <SideBarHeader open={open} />
      <div className=" h-[450px] overflow-auto scrollbar-hidden">
        <SideBarBody open={open} />
      </div>
    </div>
  );
};

export default Sidebar;
