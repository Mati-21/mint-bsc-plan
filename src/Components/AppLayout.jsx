import TopNavBar from "./TopNavBar";
import SideNavBar from "./SideNavBar";
import Main from "./Main";
import { useState } from "react";

function AppLayout() {
  const [isSideOpen, setISSideOpen] = useState(true);

  function toggleSidebar() {
   
    setISSideOpen((curr) => !curr);
  }

  return (
    <div className=" w-screen lg:grid  lg:grid-cols-[18rem_1fr] lg:grid-rows-[auto_auto]">
      <TopNavBar toggleSidebar={toggleSidebar} />
      <Main />
      <SideNavBar isSideOpen={isSideOpen} toggleSidebar={toggleSidebar}  />
    </div>
  );
}

export default AppLayout;
