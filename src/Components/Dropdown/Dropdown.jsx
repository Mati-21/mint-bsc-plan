import DropdownButton from "./DropdownButton";
import DropdownContent from "./DropdownContent";

function Dropdown({ buttonText, content, toggle, open }) {
  return (
    <div className="relative items-center justify-center h-8  overflow-hidden">
      <DropdownButton toggle={toggle}>{buttonText}</DropdownButton>
      <DropdownContent open={open}>{content}</DropdownContent>
    </div>
  );
}

export default Dropdown;
