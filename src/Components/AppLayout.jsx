import TopNavBar from "./TopNavBar";
import SideNavBar from "../Components/SideBar/SideNavBar";
import Main from "./Main";
import { useState } from "react";

function AppLayout() {
  const [openSideNav, setOpenSideNav] = useState(true);

  function toggleSidebar() {
    setOpenSideNav((curr) => !curr);
  }

  return (
    <div className="flex ">
      {/* Side Nav Bar */}
      <div className="h-screen ">
        <SideNavBar isSideOpen={openSideNav} toggleSidebar={toggleSidebar} />
      </div>
      {/* Main Section */}
      <div className="flex-1 flex flex-col ">
        <TopNavBar  />
        <Main />
      </div>
    </div>
  );
}

export default AppLayout;
