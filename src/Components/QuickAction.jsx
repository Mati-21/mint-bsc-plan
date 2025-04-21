import { CgAdd } from "react-icons/cg";
import { RiSettings5Fill } from "react-icons/ri";
import { TbReport } from "react-icons/tb";
import { IoMdNotificationsOutline } from "react-icons/io";

function QuickAction({ handlemodal }) {
  return (
    <div className="flex gap-4 p-2">
      <div className="flex-1 rounded-sm shadow-lg">
        <div className="mx-auto mt-2 p-1 flex justify-around w-55 shadow ">
          <div className="w-25 font-semibold p-2 text-center rounded text-sm cursor-pointer text-white bg-black shadow ">
            Line Chart
          </div>
          <div className="w-25 font-semibold p-2 text-center rounded text-sm cursor-pointer bg-slate-50 shadow">
            Bar Chart
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-2 rounded-sm shadow-lg p-4">
        <h2 className="text-3xl">Quick Actions</h2>
        <h4 className="mb-4">Common tasks and Shortcuts</h4>
        <div className="grid grid-cols-2 grid-rows-2 justify-items-stretch gap-4">
          <div
            className="p-2 flex flex-col items-center bg-black text-white cursor-pointer gap-1 justify-center border border-gray-400 rounded"
            onClick={handlemodal}
          >
            <p className="p-2 font-bold">Add User</p>
            <CgAdd size={25} />
          </div>
          <div className="p-2  hover:bg-slate-200 transition-all duration-100 flex flex-col items-center gap-1 justify-center cursor-pointer border border-gray-400 rounded">
            <p className="p-2 font-bold">Configuration</p>{" "}
            <RiSettings5Fill size={25} />
          </div>
          <div className="p-2 hover:bg-slate-200 transition-all duration-100 flex flex-col items-center gap-1 justify-center cursor-pointer border border-gray-400 rounded">
            <p className="p-2 font-bold">Generatte Report</p>{" "}
            <TbReport size={25} />
          </div>
          <div className="p-2  hover:bg-slate-200 transition-all duration-100 flex flex-col items-center gap-1 justify-center cursor-pointer border border-gray-400 rounded">
            <p className="p-2 font-bold">View Alert</p>{" "}
            <IoMdNotificationsOutline size={25} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickAction;
