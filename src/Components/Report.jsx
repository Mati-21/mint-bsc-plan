import { useSelector } from "react-redux";

function Report() {
  const layoutRatio = useSelector((store) => store.adminMain.layoutRatio);
  return (
    <div
      className={`${
        layoutRatio ? "flex-1" : "flex-3"
      }  rounded-sm shadow-lg p-4 transform transition-all duration-500
      `}
    >
      <h1 className="text-4xl font-semibold font-sans">Report</h1>
    </div>
  );
}

export default Report;
