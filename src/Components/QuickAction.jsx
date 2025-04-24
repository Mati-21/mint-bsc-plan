import Chart from "../Components/Chart/Chart";
import Actions from "./Actions";
import Configuration from "./Configuration";
import Alert from "./Alert";

import { useSelector } from "react-redux";
import Report from "./Report";

function QuickAction() {
  const activeAction = useSelector((store) => store.adminMain.activeAction);
  return (
    <div className="flex gap-4 p-2">
      {/* {activeAction === 1 ? <Chart /> : ""} */}
      {/* {activeAction === 2 ? <Configuration /> : ""}
      {activeAction === 3 ? <Report /> : ""}
      {activeAction === 4 ? <Alert /> : ""} */}
      <Chart />
      <Actions />
    </div>
  );
}

export default QuickAction;
