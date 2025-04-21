import { HiOutlineUsers } from "react-icons/hi2";

const settings = [
  {
    setting: "Dashboard",
    emoji: <HiOutlineUsers />,
  },
  {
    setting: "User Managment",
    emoji: <HiOutlineUsers />,
  },
  {
    setting: "Report",
    emoji: <HiOutlineUsers />,
  },
  {
    setting: "Notfication And Alert",
    emoji: <HiOutlineUsers />,
  },

];

function AdminSideBarAction() {
  return (
    <div className="flex flex-col gap-4 rounded py-2 w-full">
      {settings.map((sett) => (
        <div
          key={sett.setting}
          className="flex hover:bg-green-500 transition-all duration-200 cursor-pointer justify-between items-center w-full bg-green-700 p-2 rounded"
        >
          <p>{sett.setting}</p> <p>{sett.emoji}</p>
        </div>
      ))}
    </div>
  );
}

export default AdminSideBarAction;
