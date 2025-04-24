import { useDispatch } from "react-redux";
import { closeModal } from "../slices/mainSlice";

const Modal = ({ children }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="fixed inset-0 bg-black/5 backdrop-blur-[4px] backdrop-brightness-80 transition-all duration-300 flex justify-center items-center"
      onClick={() => dispatch(closeModal())}
    >
      <div>{children}</div>
    </div>
  );
};

export default Modal;
