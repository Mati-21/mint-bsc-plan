import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function DropdownButton({ children, toggle }) {
  return (
    <div className="h-6 w-6 rounded-full overflow-hidden" onClick={toggle}>
      {children}
    </div>
  );
}

export default DropdownButton;
