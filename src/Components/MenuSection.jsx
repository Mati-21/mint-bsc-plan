import { ChevronDownIcon } from "@heroicons/react/24/outline";
function MenuSection({ data, stat, activestat }) {
  return (
    <div className="w-full bg-green-900 text-white p-2 rounded-lg ">
      <div>
        {data.map((menu) => (
          <div key={menu.title}>
            <button
              onClick={stat}
              className="w-full flex items-center mb-2  justify-between  p-2 hover:bg-gray-700 rounded transition-colors"
            >
              <span>{menu.title}</span>
              <ChevronDownIcon
                className={`h-4 w-4 transition-transform ${
                  activestat === true ? "rotate-180" : ""
                }`}
              />
            </button>

            {activestat && (
              <div className="pl-2  pr-2 mt-1">
                {menu.submenus.map((submenu) => (
                  <a
                    key={submenu}
                    href="#"
                    className="block p-2 border border-white mb-2 text-xs hover:bg-gray-700 rounded transition-colors"
                  >
                    {submenu}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuSection;
