import AdminSideBarAction from "./AdminSideBarAction";
import SideBarHeader from "./SideBarHeader";

function AdminSideBar() {
  return (
    <div className=" bg-green-800 col-start-1 col-end-2 row-start-1 row-end-3 flex flex-col items-center p-6 gap-4 text-white ">
      <SideBarHeader />
      <AdminSideBarAction />
    </div>
  );
}

export default AdminSideBar;
