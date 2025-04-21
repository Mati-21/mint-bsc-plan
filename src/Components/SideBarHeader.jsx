import { IoSearch } from "react-icons/io5";
function SideBarHeader() {
  return (
    <div className=" flex flex-col items-center justify-center">
      
      <h2 className="text-lg text-center font-bold mb-6">
        Minister of Innovation & Technology
      </h2>

      <div className="flex gap-4 mb-6 items-center">
        <div className="w-12 h-12 rounded-full bg-amber-200 text-center overflow-hidden ">
          <img src="/download.jpg" alt="" />
        </div>
        <p>የኢኖቬሽንና ቴክኖሎጂ ሚኒስቴር </p>
      </div>

      <div className="mb-6 flex gap-4 items-center">
        <input
          type="text"
          placeholder="Search"
          className="border border-white rounded-sm px-2 py-1 outline-none"
        />
        <IoSearch size={25} />
      </div>
    </div>
  );
}

export default SideBarHeader;
