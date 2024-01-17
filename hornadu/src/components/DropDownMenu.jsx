import { NavLink } from "react-router-dom";

function DropDownMenu({
  dropDown,
  setDropDown,
  attribute1,
  attribute2,
  attribute3,
  attribute4,
  navLink1,
  navLink2,
  navLink3,
  navLink4,
}) {
  return (
    <>
      {dropDown && (
        <div
          className="absolute z-[2] bg-white  w-[10%]  "
          onMouseEnter={() => {
            setDropDown(true);
          }}
          onMouseLeave={() => {
            setDropDown(false);
          }}
        >
          {attribute1 && (
            <NavLink to={navLink1}>
              <li className="p-3 hover:bg-light-pink subMenu">{attribute1}</li>
            </NavLink>
          )}
          {attribute2 && (
            <NavLink to={navLink2}>
              <li className="p-3 hover:bg-light-pink subMenu">{attribute2}</li>
            </NavLink>
          )}
          {attribute3 && (
            <NavLink to={navLink3}>
              <li className="p-3 hover:bg-light-pink subMenu">{attribute3}</li>
            </NavLink>
          )}
          {attribute4 && (
            <NavLink to={navLink4}>
              <li className="p-3 hover:bg-light-pink subMenu">{attribute4}</li>
            </NavLink>
          )}
        </div>
      )}
    </>
  );
}

export default DropDownMenu;
