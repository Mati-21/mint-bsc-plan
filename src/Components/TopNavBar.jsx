import { Link, NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { HiChatBubbleLeftEllipsis } from "react-icons/hi2";
import { IoIosNotifications } from "react-icons/io";
import manjpg from "../assets/man.jpg";
import { IoMdMenu } from "react-icons/io";

function Top({ toggleSidebar, bgColor = "bg-white" }) {
  return (
    <div
      className={`w-full flex justify-between  px-4 py-1 lg:col-start-2 lg:col-end-3 lg:justify-between  lg:pl-8 lg:py-2 lg:pr-24 lg:text-lg  ${bgColor} `}
    >
      <div className="flex gap-8 items-center">
        <IoMdMenu
          size={23}
          className="cursor-pointer"
          onClick={toggleSidebar}
        />
        <div>
          <NavLink
            to="/"
            className="hidden text-sm lg:flex lg:gap-2 lg:items-center "
          >
            <IoHome size={23} />
            Home
          </NavLink>
        </div>
        <div>
          <NavLink className="text-sm hidden  lg:flex lg:gap-2 lg:items-center">
            <HiChatBubbleLeftEllipsis size={23} />
            Contact
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/notification"
            className="text-sm hidden  lg:flex lg:gap-2 lg:items-center"
          >
            <IoIosNotifications size={23} />
            Notification
          </NavLink>
        </div>
      </div>

      <div className="flex items-center gap-2 lg:gap-6 ">
        <div className="h-10 w-10  rounded-full overflow-hidden">
          <img src={manjpg} alt="user" />
        </div>
        <p className="text-sm">Jonas</p>
      </div>
    </div>
  );
}

export default Top;
