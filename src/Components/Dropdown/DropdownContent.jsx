function DropdownContent({ children, open }) {
  return (
    <div
      className={`${
        open ? "opacity-100 " : "opacity-0 "
      } absolute -right-5 overflow-auto scrollbar-hidden max-h-[160px] bg-white w-48 flex flex-col gap-2 text-sm p-2 mt-2 rounded transition-opacity duration-300`}
    >
      {children}
    </div>
  );
}

export default DropdownContent;
