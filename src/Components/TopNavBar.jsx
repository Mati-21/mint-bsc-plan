import { Link, NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { HiChatBubbleLeftEllipsis } from "react-icons/hi2";
import { IoIosNotifications } from "react-icons/io";
import manjpg from "../assets/man.jpg";
import { IoMdMenu } from "react-icons/io";

function Top() {
  return (
    <div className="flex justify-between px-4 py-1 bg-white lg:pl-8 lg:py-2 lg:pr-24 lg:text-lg ">
      <div className="flex gap-8 items-center">
        <IoMdMenu size={23} />
        <div className="sm:hidden lg:block lg:flex lg:gap-2 lg:items-center ">
          <IoHome />
          <NavLink to="/" className="text-sm">
            Home
          </NavLink>
        </div>
        <div className="sm:hidden lg:block lg:flex lg:gap-2 lg:items-center">
          <HiChatBubbleLeftEllipsis />
          <NavLink className="text-sm">Contact</NavLink>
        </div>
        <div className="sm:hidden lg:block lg:flex lg:gap-2 lg:items-center">
          <IoIosNotifications />
          <NavLink to="/notification" className="text-sm">
            Notification
          </NavLink>
        </div>
      </div>

      <div className="flex items-center gap-6 ">
        <div className="h-10 w-10  rounded-full overflow-hidden">
          <img src={manjpg} alt="user" />
        </div>
        <p className="text-sm">Jonas</p>
      </div>
    </div>
  );
}

export default Top;
