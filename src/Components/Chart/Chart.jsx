import { useDispatch, useSelector } from "react-redux";
import LiChart from "./LiChart";

import { barChart, lineChart } from "../../slices/mainSlice";
import BChart from "./BChart";

function Chart() {
  const activeChart = useSelector((store) => store.adminMain.activeChart);
  const layoutRatio = useSelector((store) => store.adminMain.layoutRatio);
  const dispatch = useDispatch();

  return (
    <div
      className={`${
        layoutRatio ? "flex-1" : "flex-3"
      } transform transition-all duration-500  rounded-sm shadow-lg`}
    >
      <div className="mx-auto mt-2 p-1 flex justify-around w-55 shadow mb-4 ">
        <div
          className={`w-25 font-semibold p-2 text-center rounded text-sm cursor-pointer ${
            activeChart === "line" ? "text-white bg-black" : "bg-slate-50"
          } shadow `}
          onClick={() => dispatch(lineChart())}
        >
          Line Chart
        </div>
        <div
          className={`w-25 font-semibold p-2 text-center rounded text-sm cursor-pointer ${
            activeChart === "bar" ? "text-white bg-black" : "bg-slate-50"
          } shadow`}
          onClick={() => dispatch(barChart())}
        >
          Bar Chart
        </div>
      </div>
      {activeChart === "line" ? <LiChart /> : <BChart />}
    </div>
  );
}

export default Chart;
