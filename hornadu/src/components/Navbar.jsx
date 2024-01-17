import { NavLink } from "react-router-dom";
import logo from "../assets/horanadu_logo.jpeg";
import DropDownMenu from "./DropDownMenu";
import { useState } from "react";

function Navbar() {
  const [dropDown, setDropDown] = useState(false);
  const [templeDropDown, setTempleDropDown] = useState(false);
  const [infoDropDown, setinfoDropDown] = useState(false);
  const [sevaDropDown, setsevaDropDown] = useState(false);

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
            <li
              onMouseEnter={() => {
                setDropDown(true);
                setTempleDropDown(true);
              }}
              onMouseLeave={() => {
                setDropDown(false);
                setTempleDropDown(false);
              }}
            >
              Temple
              {templeDropDown && (
                <DropDownMenu
                  dropDown={dropDown}
                  setDropDown={setDropDown}
                  attribute1="About"
                  navLink1="/temple"
                  attribute2="Deities"
                  navLink2="/deities"
                  attribute3="History"
                  navLink3="/history"
                />
              )}
            </li>
          </NavLink>

          <NavLink to="/sevaDetails">
            <li
              onMouseEnter={() => {
                setDropDown(true);
                setsevaDropDown(true);
              }}
              onMouseLeave={() => {
                setDropDown(false);
                setsevaDropDown(false);
              }}
            >
              Sevas
              {sevaDropDown && (
                <DropDownMenu
                  dropDown={dropDown}
                  setDropDown={setDropDown}
                  attribute1="Seva Details"
                  navLink1="/sevaDetails"
                />
              )}
            </li>
          </NavLink>
          <NavLink to="">
            <li>News</li>
          </NavLink>
          <NavLink to="/bookRoom">
            <li>Book Room</li>
          </NavLink>

          <li
            onMouseEnter={() => {
              setDropDown(true);
              setinfoDropDown(true);
            }}
            onMouseLeave={() => {
              setDropDown(false);
              setinfoDropDown(false);
            }}
          >
            Info
            {infoDropDown && (
              <DropDownMenu
                dropDown={dropDown}
                setDropDown={setDropDown}
                attribute1="Temple Timing"
                navLink1="/templeTiming"
                attribute2="How To Reach"
                navLink2="/howToReach"
                attribute3="Nearby Places"
                navLink3="/nearbyPlaces"
                attribute4="Bank Details"
                navLink4="/bankDetails"
              />
            )}
          </li>

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
