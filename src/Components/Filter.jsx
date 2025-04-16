import { GoDatabase } from "react-icons/go";
function Filter() {
  return (
    <div className="lg:bg-slate-100 min-h-14 rounded-sm overflow-hidden lg:min-h-36  bg-gray-100 shadow-2xl ">
      <div className="py-1 hidden lg:flex text-sm bg-green-800 text-white px-6  justify-between">
        Custom filter
        <span>&ndash;&ndash;</span>
      </div>
      <div className="lg:px-6 lg:py-2 lg:flex lg:flex-col lg:gap-2 ">
        <div className=" hidden lg:flex gap-4">
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
        <div className="flex rounded gap-1 items-center bg-green-800  text-white  w-35 px-2 py-1">
          <GoDatabase />
          <a href="">Filter</a>
        </div>
      </div>
    </div>
  );
}

export default Filter;
