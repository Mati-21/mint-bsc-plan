import TopNavBar from "../Components/TopNavBar";
import AdminSideBar from "../Components/AdminSideBar";
import Modal from "../Components/Modal";
import AdminInfo from "../Components/AdminInfo";
import QuickAction from "../Components/QuickAction";
import AddUserForm from "../Components/AddUserForm";

import UserManagment from "../Components/UserManagment";

import { useSelector } from "react-redux";
import Alert from "../Components/Alert";
import Configuration from "../Components/Configuration";

function Admin() {
  const modalState = useSelector((store) => store.adminMain.modalState);
  const index = useSelector((store) => store.adminSide.index);

  return (
    <div className="grid grid-cols-[300px_auto] grid-rows-[50px_auto] w-screen h-screen">
      <TopNavBar bgColor="bg-slate-300" />
      <AdminSideBar />
      <main className=" bg-slate-200 p-4 space-y-10">
        {index === 0 && (
          <>
            <AdminInfo />
            <QuickAction />
            {modalState ? (
              <Modal>
                <AddUserForm />
              </Modal>
            ) : (
              ""
            )}
          </>
        )}

        {index === 1 && <UserManagment />}
        {index === 2 && <Configuration />}
        {index === 3 && <Alert />}
      </main>
    </div>
  );
}

export default Admin;
