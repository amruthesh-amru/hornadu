import { NavLink } from "react-router-dom";

function DropDownMenu({ attribute1, attribute2, attribute3, attribute4 }) {
  return (
    <>
      <div className="absolute mt-4 bg-white  w-[10%] hiddenContent">
        {attribute1 && (
          <li className="p-3 hover:bg-light-pink subMenu">{attribute1}</li>
        )}
        {attribute2 && (
          <li className="p-3 hover:bg-light-pink subMenu">{attribute2}</li>
        )}
        {attribute3 && (
          <li className="p-3 hover:bg-light-pink subMenu">{attribute3}</li>
        )}
        {attribute4 && (
          <li className="p-3 hover:bg-light-pink subMenu">{attribute4}</li>
        )}
      </div>
    </>
  );
}

export default DropDownMenu;
