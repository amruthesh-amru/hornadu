import { NavLink } from "react-router-dom";
import logo from "../assets/horanadu_logo.jpeg";
import DropDownMenu from "./DropDownMenu";
import { useState } from "react";

function Navbar() {
  const [dropDown, setDropDown] = useState(false);

  return (
    <>
      <div className="w-full flex items-center justify-evenly bg-light-pink text-black">
        <div className="">
          <h1 className="text-[17px]">
            Adhishakthyathmaka Sri Annapoorneshwari Temple
          </h1>
          <h1 className="text-[24px] font-[600]">Sri Kshetra Horanadu</h1>
        </div>
        <div className="w-[6rem] h-[6rem]">
          <img src={logo} alt="" className="w-full h-full" />
        </div>
        <div className="flex items-end justify-end flex-col">
          <h1 className="text-[17px]">
            ಆದಿಶಕ್ತ್ಯಾತ್ಮಕ ಶ್ರೀ ಅನ್ನಪೂರ್ಣೇಶ್ವರಿ ದೇವಸ್ಥಾನ
          </h1>
          <h1 className="text-[24px] font-[600]">ಶ್ರೀಕ್ಷೇತ್ರ ಹೊರನಾಡು</h1>
        </div>
      </div>
      <div className="w-full bg-dark-pink text-[17px]  h-[3.5rem] flex items-center justify-center">
        <ul className="flex items-center justify-center gap-10 h-full">
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/temple">
            <li>Temple</li>
          </NavLink>
          <NavLink to="">
            <li>Sevas</li>
          </NavLink>
          <NavLink to="">
            <li>News</li>
          </NavLink>
          <NavLink to="/bookRoom">
            <li>Book Room</li>
          </NavLink>
          <NavLink to="/howToReach">
            <li
              onMouseEnter={() => setDropDown(true)}
              onMouseLeave={() => setDropDown(false)}
            >
              Info
            </li>

            {/* {dropDown && (
              <div
                className="absolute  bg-white  w-[10%]"
                onMouseEnter={() => setDropDown(true)}
                onMouseLeave={() => setDropDown(false)}
              >
                <li className="p-3 hover:bg-light-pink subMenu">about</li>
                <li className="p-3 hover:bg-light-pink subMenu">about</li>
                <li className="p-3 hover:bg-light-pink subMenu">about</li>
              </div>
            )} */}
            <DropDownMenu
              dropDown={dropDown}
              setDropDown={setDropDown}
              attribute1="Temple Timing"
              navLink1="/templeTiming"
              attribute2="How To Reach"
              navLink2="/howToReach"
            />
          </NavLink>
          <NavLink to="">
            <li>Gallery</li>
          </NavLink>
          <NavLink to="">
            <li>E-Hundi</li>
          </NavLink>
          <NavLink to="">
            <li>Contact</li>
          </NavLink>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
