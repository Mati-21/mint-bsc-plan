import TopNavBar from "./TopNavBar";
import SideNavBar from "./SideNavBar";
import Main from "./Main";

function AppLayout() {
  return (
    <div className="h-screen w-screen bg-slate-300 grid box-border  grid-cols-[18rem_1fr] grid-rows-[auto_1fr]">
      <TopNavBar />
      <Main />
      <SideNavBar />
    </div>
  );
}

export default AppLayout;
