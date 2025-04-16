import { Outlet } from "react-router-dom";
import Filter from "./Filter";
function Main() {
  return (
    <div className="h-full flex flex-col px-4 pr-6  bg-gray-100 justify-center py-4 gap-4 bg-amber-3 col-start-2 col-end-3 row-start-2 row-end-3 ">
      <div className="w-full grid grid-cols-1  sm:grid-cols-2 justify-items-stretch gap-4  sm:flex-wrap lg:flex  lg:justify-center lg:gap-8 lg:mx-auto ">
        <div className="h-30 shadow-2xl	  text-sm rounded-lg lg:flex-1 bg-red-800 text-white flex flex-col justify-around px-2">
          <p>Ministry of Innovation and Technology Sector Plan and Report</p>
          <p>More Info → </p>
        </div>

        <div className="h-30  text-sm rounded-lg lg:flex-1 text-white bg-green-800 px-4 flex flex-col justify-around">
          <div className="flex justify-between  w-full items-center">
            <p>Number of main objectives/GOAL</p>
            <span className="text-xl">5</span>
          </div>
          <p>More Info → </p>
        </div>

        <div className="h-30  text-sm rounded-lg lg:flex-1 bg-yellow-500 text-white px-4 flex flex-col justify-around">
          <div className="flex justify-between w-full items-center">
            <p>Number of expected results/KRA</p>
            <span className="text-xl">18</span>
          </div>
          <p>More Info → </p>
        </div>
        <div className="h-30  text-sm rounded-lg lg:flex-1 bg-blue-800 text-white px-4 flex flex-col justify-around">
          <div className="flex justify-between  w-full items-center">
            <p>Number of expected results/KRA</p>
            <span className="text-xl">5</span>
          </div>
          <p>More Info → </p>
        </div>
      </div>

      {/* // filter Componenet */}
      <Filter />

      <div className="overflow-y-scroll py-6 shadow-lg max-h-[550px] bg-slate-50 rounded px-4 ">
        <Outlet />
      </div>
    </div>
  );
}

export default Main;
