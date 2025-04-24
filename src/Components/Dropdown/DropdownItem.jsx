function DropdownItem({children}) {
  return (
    <div className="bg-slate-100 rounded px-2 py-1 w-full hover:bg-green-100">
      {children}
    </div>
  );
}

export default DropdownItem;
