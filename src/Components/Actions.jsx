import { CgAdd } from "react-icons/cg";
import { RiSettings5Fill } from "react-icons/ri";
import { TbReport } from "react-icons/tb";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { actionActivator, openModal } from "../slices/mainSlice";

function Actions() {
  const dispatch = useDispatch();

  const activeAction = useSelector((store) => store.adminMain.activeAction);
  const layoutRatio = useSelector((store) => store.adminMain.layoutRatio);

  return (
    <div className="flex-1 flex flex-col gap-2 rounded-sm shadow-lg p-4  transform transition-all duration-500 max-h-76">
      <h2 className="text-3xl">Quick Actions</h2>
      <h4 className="mb-4">Common tasks and Shortcuts</h4>
      <div className="grid grid-cols-2 grid-rows-2 justify-items-stretch gap-4">
        <div
          className={`p-2 flex flex-col items-center ${
            activeAction === 1
              ? "bg-black text-white"
              : " hover:bg-slate-200 transition-all duration-100"
          }  cursor-pointer gap-1 justify-center border border-gray-400 rounded ${
            layoutRatio ? "" : "text-xs"
          }`}
          onClick={() => dispatch(openModal(1))}
        >
          <p className="p-2 font-bold">Add User</p>
          <CgAdd size={25} />
        </div>

        <div
          className={`p-2   flex flex-col items-center  ${
            activeAction === 2
              ? "bg-black text-white"
              : " hover:bg-slate-200 transition-all duration-100"
          } gap-1 justify-center cursor-pointer border border-gray-400 rounded ${
            layoutRatio ? "" : "text-xs"
          }`}
          onClick={() => dispatch(actionActivator(2))}
        >
          <p className="p-2 font-bold">Configuration</p>
          <RiSettings5Fill size={25} />
        </div>

        <div
          className={`p-2  ${
            activeAction === 3
              ? "bg-black text-white"
              : " hover:bg-slate-200 transition-all duration-100"
          } flex flex-col items-center gap-1 justify-center cursor-pointer border border-gray-400 rounded ${
            layoutRatio ? "" : "text-xs"
          }`}
          onClick={() => dispatch(actionActivator(3))}
        >
          <p className="p-2 font-bold">Generate Report</p>
          <TbReport size={25} />
        </div>

        <div
          className={`p-2  ${
            activeAction === 4
              ? "bg-black text-white"
              : " hover:bg-slate-200 transition-all "
          } flex flex-col items-center gap-1 justify-center cursor-pointer border border-gray-400 rounded ${
            layoutRatio ? "" : "text-xs duration-400 "
          }`}
          onClick={() => dispatch(actionActivator(4))}
        >
          <p className="p-2 font-bold">View Alert</p>
          <IoMdNotificationsOutline size={25} />
        </div>
      </div>
    </div>
  );
}

export default Actions;
