import AdminSideBarAction from "./AdminSideBarAction";
import AdminsideBareHeader from "./AdminsideBarHeader";
// import SideBarHeader from "./SideBar/SideBarHeader";

function AdminSideBar() {
  return (
    <div className=" bg-green-800 col-start-1 col-end-2 row-start-1 row-end-3 flex flex-col items-center p-6 gap-4 text-white ">
      <AdminsideBareHeader />
      <AdminSideBarAction />
    </div>
  );
}

export default AdminSideBar;
