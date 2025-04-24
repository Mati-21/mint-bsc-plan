import { useSelector } from "react-redux";

function UserManagment() {
  const layoutRatio = useSelector((store) => store.adminMain.layoutRatio);

  return (
    <div
      className={`${
        layoutRatio ? "flex-1" : "flex-3"
      }  rounded-sm shadow-lg p-4 transform transition-all duration-500
      `}
    >
      <h1 className="text-4xl font-semibold font-sans">User Managmnet</h1>
    </div>
  );
}

export default UserManagment;
