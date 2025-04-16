import { Outlet } from "react-router-dom";
import { GoDatabase } from "react-icons/go";

function Main() {
  return (
    <div className="h-full flex flex-col px-4 py-4 gap-4 col-start-2 col-end-3 row-start-2 row-end-3 box-border overflow-hidden">
      <div className="w-full grid grid-cols-2 justify-items-stretch gap-4  sm:flex-wrap lg:flex  lg:justify-center lg:gap-8 lg:mx-auto ">
        <div className="h-30  text-sm rounded-lg lg:flex-1 bg-red-800 text-white flex flex-col justify-around px-2">
          <p>Ministry of Innovation and Technology Sector Plan and Report</p>
          <p>More Info → </p>
        </div>

        <div className="h-30  text-sm rounded-lg lg:flex-1 text-white bg-green-800 px-4 flex flex-col justify-around">
          <div className="flex  w-full items-center">
            <p>Number of main objectives/GOAL</p>
            <span className="text-xl">5</span>
          </div>
          <p>More Info → </p>
        </div>

        <div className="h-30  text-sm rounded-lg lg:flex-1 bg-yellow-500 text-white px-4 flex flex-col justify-around">
          <div className="flex  w-full items-center">
            <p>Number of expected results/KRA</p>
            <span className="text-xl">18</span>
          </div>
          <p>More Info → </p>
        </div>
        <div className="h-30  text-sm rounded-lg lg:flex-1 bg-blue-800 text-white px-4 flex flex-col justify-around">
          <div className="flex  w-full items-center">
            <p>Number of expected results/KRA</p>
            <span className="text-xl">5</span>
          </div>
          <p>More Info → </p>
        </div>
      </div>

      {/* // filter Componenet */}

      <div className="bg-white rounded-sm overflow-hidden">
        <div className="py-1 text-sm bg-green-800 text-white px-6 flex justify-between">
          Custom filter
          <span>&ndash;&ndash;</span>
        </div>
        <div className="hidden lg:px-6 lg:py-2 lg:flex lg:flex-col lg:gap-2 ">
          <div className=" flex gap-4">
            <div className="flex gap-2 flex-col flex-1">
              <label for="choices" className="text-sm">
                Select Time Period
              </label>
              <select
                id="choices"
                name="choices"
                className="border border-black px-2 outline-none"
              >
                <option value="option1" className="text-xs">
                  Option 1
                </option>
                <option value="option2" className="text-xs">
                  Option 2
                </option>
              </select>
            </div>
            <div className="flex gap-2 flex-col flex-1">
              <label for="choices" className="text-sm">
                Select Year
              </label>
              <select
                id="choices"
                name="choices"
                className="border border-black  px-2 outline-none"
              >
                <option value="option1" className="text-xs">
                  Option 1
                </option>
                <option value="option2" className="text-xs">
                  Option 2
                </option>
              </select>
            </div>
            <div className="flex gap-2 flex-col flex-1">
              <label for="choices" className="text-sm">
                Select Threshold
              </label>
              <select
                id="choices"
                name="choices"
                className="border border-black  px-2 outline-none"
              >
                <option value="option1" className="text-xs">
                  Option 1
                </option>
                <option value="option2" className="text-xs">
                  Option 2
                </option>
              </select>
            </div>
            <div className="flex gap-2 flex-col flex-1">
              <label for="choices" className="text-sm">
                Select Time Ministry
              </label>
              <select
                id="choices"
                name="choices"
                className="border border-black  px-2 outline-none"
              >
                <option value="option1" className="text-xs">
                  Option 1
                </option>
                <option value="option2" className="text-xs">
                  Option 2
                </option>
              </select>
            </div>
          </div>
          <div className="flex gap-1 items-center bg-green-800  text-white w-35 px-2 py-1">
            <GoDatabase />
            <a href="">Filter</a>
          </div>
        </div>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Main;
