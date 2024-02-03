import { NavLink } from "react-router-dom";
import logo from "../assets/horanadu_logo.jpeg";
import DropDownMenu from "./DropDownMenu";
import { useState } from "react";

function Navbar() {
  const [dropDown, setDropDown] = useState(false);
  const [templeDropDown, setTempleDropDown] = useState(false);
  const [infoDropDown, setinfoDropDown] = useState(false);
  const [newsDropDown, setnewsDropDown] = useState(false);
  const [sevaDropDown, setsevaDropDown] = useState(false);

  const [toggleMenu, settoggleMenu] = useState(false);

  const toggleMenuHandler = () => {
    settoggleMenu(!toggleMenu);
  };

  return (
    <>
      <div
        className="flex gap-5 p-2 items-center justify-center md:w-full md:flex md:flex-row md:items-center md:justify-evenly md:relative bg-light-pink text-black sticky top-0  z-10"
        onClick={() => toggleMenuHandler()}
      >
        <div className="md:hidden text-[1.7rem]">
          <button onClick={() => toggleMenuHandler()}>
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
        <div className="">
          <h1 className="md:text-[16px] text-[14px] ">
            Adhishakthyathmaka Sri Annapoorneshwari Temple
          </h1>
          <h1 className="md:text-[24px] font-[600] text-center ">
            Sri Kshetra Horanadu
          </h1>
        </div>
        <div className="w-[6rem] h-[6rem] hidden md:block">
          <img src={logo} alt="" className="w-full h-full" />
        </div>
        <div className="hidden text-center md:flex md:items-end md:justify-end md:flex-col">
          <h1 className="md:text-[17px]">
            ಆದಿಶಕ್ತ್ಯಾತ್ಮಕ ಶ್ರೀ ಅನ್ನಪೂರ್ಣೇಶ್ವರಿ ದೇವಸ್ಥಾನ
          </h1>
          <h1 className="md:text-[24px] md:font-[600]">ಶ್ರೀಕ್ಷೇತ್ರ ಹೊರನಾಡು</h1>
        </div>
      </div>

      <div className="hidden md:w-full bg-dark-pink text-[17px]  md:h-[3.5rem] md:flex md:items-center md:justify-center">
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

          <NavLink to="/darshanaRules">
            <li
              onMouseEnter={() => {
                setDropDown(true);
                setnewsDropDown(true);
              }}
              onMouseLeave={() => {
                setDropDown(false);
                setnewsDropDown(false);
              }}
            >
              News
              {newsDropDown && (
                <DropDownMenu
                  dropDown={dropDown}
                  setDropDown={setDropDown}
                  attribute1="Darshana Rules"
                  navLink1="/darshanaRules"
                />
              )}
            </li>
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
                // attribute3="Nearby Places"
                // navLink3="/nearbyPlaces"
                attribute4="Bank Details"
                navLink4="/bankDetails"
              />
            )}
          </li>

          {/* <NavLink to="">
            <li>Gallery</li>
          </NavLink>
          <NavLink to="">
            <li>E-Hundi</li>
          </NavLink> */}
          <NavLink to="/contactUs">
            <li>Contact</li>
          </NavLink>
        </ul>
      </div>
      {/* Mobile Menu */}
      {toggleMenu && (
        <div className="md:hidden h-screen w-[60%] bg-dark-pink flex items-center justify-center  text-[18px]  fixed top-[3.8rem]  z-10">
          <ul className="flex flex-col items-center justify-start pt-10 gap-10 h-full w-full">
            <NavLink to="/">
              <li
                className="w-[15.6rem] items-center justify-center h-full flex active:bg-light-pink"
                onClick={() => toggleMenuHandler()}
              >
                Home
              </li>
            </NavLink>
            <NavLink to="/temple">
              <li
                className="w-[15.6rem] items-center justify-center h-full flex active:bg-light-pink"
                onClick={() => toggleMenuHandler()}
              >
                Temple
              </li>
            </NavLink>
            <NavLink to="/sevaDetails">
              <li
                className="w-[15.6rem] items-center justify-center h-full flex active:bg-light-pink"
                onClick={() => toggleMenuHandler()}
              >
                Sevas
              </li>
            </NavLink>
            <NavLink to="/">
              <li
                className="w-[15.6rem] items-center justify-center h-full flex active:bg-light-pink"
                onClick={() => toggleMenuHandler()}
              >
                News
              </li>
            </NavLink>
            <NavLink to="/bookRoom">
              <li
                className="w-[15.6rem] items-center justify-center h-full flex active:bg-light-pink"
                onClick={() => toggleMenuHandler()}
              >
                Book Room
              </li>
            </NavLink>
            <NavLink to="/info">
              <li
                className="w-[15.6rem] items-center justify-center h-full flex active:bg-light-pink"
                onClick={() => toggleMenuHandler()}
              >
                Info
              </li>
            </NavLink>
            <NavLink to="/contactUs">
              <li
                className="w-[15.6rem] items-center justify-center h-full flex active:bg-light-pink"
                onClick={() => toggleMenuHandler()}
              >
                Contact
              </li>
            </NavLink>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
