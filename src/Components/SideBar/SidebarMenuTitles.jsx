import { LuFrame } from "react-icons/lu";
import { MdOutlineDisplaySettings } from "react-icons/md";
import { IoAnalytics } from "react-icons/io5";
import { FcPlanner } from "react-icons/fc";
import { TbReportAnalytics } from "react-icons/tb";


const Datas = [
  {
    sectionTitle: "Result Framework",
    menu: ["Sector Policy Area"],
    submenu: true,
    key: "menu1",
    icon: <LuFrame size={23} className="text-white" />,
    subMenuItems: [
      "Sectorial area plan",
      "Ministries sector plan",
      "Innovation and research",
      "ICT and Digital economy ",
      "Affiliated institutions ",
      "Minister office",
      "Admin issues",
    ],
  },
  {
    menu: ["Sub-Sector Policy Area"],
    submenu: true,
    key: "menu2",
    subMenuItems: [
      "Sub-Sector-1",
      "Sub-Sector-2",
      "Sub-Sector-3",
      "Sub-Sector-4",
      "Sub-Sector-3",
      "Sub-Sector-4",
    ],
  },

  {
    sectionTitle: "Annual/Quarterly",
    menu: ["Planning"],
    icon: <FcPlanner size={23} className="text-white" />,
  },
  {
    menu: ["Performance"],
  },

  {
    sectionTitle: "Data Managment",
    menu: ["Performance Alert"],
    icon: <MdOutlineDisplaySettings size={23} className="text-white" />,
  },

  { menu: ["Above Treshhold Performance"] },
  { menu: ["Below Treshhold Performance"] },

  {
    sectionTitle: "Data Analysis",
    menu: ["Sectorial Illustration"],
    icon: <IoAnalytics size={23} className="text-white" />,
  },
  {
    menu: ["Sub-Sectororial Illustration"],
  },

  {
    sectionTitle: "Master Report",
    menu: ["Performance Report"],
    icon: <TbReportAnalytics size={23} className="text-white" />,
  },
  {
    menu: ["Report Affiliated"],
  },
];

export default Datas;
