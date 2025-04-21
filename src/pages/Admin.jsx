import TopNavBar from "../Components/TopNavBar";
import AdminSideBar from "../Components/AdminSideBar";
import Modal from "../Components/Modal";
import AdminInfo from "../Components/AdminInfo";
import QuickAction from "../Components/QuickAction";
import AddUserForm from "../Components/AddUserForm";

import { useState } from "react";

function Admin() {
  const [ismodalOpen, setIsModalOpen] = useState(false);

  function handlemodal() {
    setIsModalOpen((curr) => !curr);
  }
  function closeModal() {
    setIsModalOpen(false);
  }
  return (
    <div className="grid grid-cols-[300px_auto] grid-rows-[50px_auto] w-screen h-screen">
      <TopNavBar bgColor="bg-slate-300" />
      <AdminSideBar />
      <main className=" bg-slate-100 p-4 space-y-10">
        <AdminInfo />
        <QuickAction handlemodal={handlemodal} />

        {ismodalOpen ? (
          <Modal closeModal={closeModal}>
            <AddUserForm />
          </Modal>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default Admin;
