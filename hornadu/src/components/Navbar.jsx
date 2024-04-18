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
  const [subtoggleMenu1, setsubtoggleMenu1] = useState(false);
  const [subtoggleMenu, setsubtoggleMenu] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const toggleMenuHandler = () => {
    settoggleMenu(!toggleMenu);
  };
  const handleBothMenus = () => {
    setsubtoggleMenu(!subtoggleMenu);
    settoggleMenu(!toggleMenu);
  };
  const handleBothMenus1 = () => {
    setsubtoggleMenu1(!subtoggleMenu1);
    settoggleMenu(!toggleMenu);
  };
  return (
    <>
      <div
        className="flex gap-5 p-2 items-center justify-evenly md:w-full md:flex md:flex-row md:items-center md:justify-evenly md:relative bg-light-pink text-black sticky top-0  z-10"
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
          <h1 className="md:text-[24px] font-[600] md:text-left text-center ">
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
          <NavLink to="/ehundicontainer">
            <li>E-Hundi</li>
          </NavLink>
        </ul>
      </div>
      {/* Mobile Menu */}
      {toggleMenu && (
        <div className="md:hidden h-screen w-[60%] bg-dark-pink flex items-center justify-center  text-[22px]  fixed top-[3.8rem] p-2 z-10">
          <ul className="flex flex-col  items-start p-2 justify-start pt-10 gap-7 h-full w-full">
            <NavLink to="/" onClick={() => scrollToTop()}>
              <li
                className="w-full items-center justify-center h-full flex active:bg-light-pink"
                onClick={() => toggleMenuHandler()}
              >
                Home
              </li>
            </NavLink>

            <div className="flex flex-col  w-full">
              <div
                className="flex justify-between w-full items-center gap-10"
                onClick={() => setsubtoggleMenu(!subtoggleMenu)}
              >
                <div className="w-full">Temple</div>
                <div className="w-full flex items-end justify-end">
                  {subtoggleMenu ? (
                    <i className="fa-solid fa-chevron-up"></i>
                  ) : (
                    <i className="fa-solid fa-chevron-down"></i>
                  )}
                </div>
              </div>
              {subtoggleMenu && (
                <ul className="p-2 flex flex-col ml-4 gap-2 text-[1.3rem]">
                  <NavLink to="/temple" onClick={() => scrollToTop()}>
                    <li onClick={() => handleBothMenus()}>About</li>
                  </NavLink>
                  <NavLink to="/deities" onClick={() => scrollToTop()}>
                    <li onClick={() => handleBothMenus()}>Deities</li>
                  </NavLink>
                  <NavLink to="/history" onClick={() => scrollToTop()}>
                    <li onClick={() => handleBothMenus()}>History</li>
                  </NavLink>
                </ul>
              )}
            </div>

            {/* <li
                className="w-full items-center justify-center h-full flex active:bg-light-pink"
                // onClick={() => toggleMenuHandler()}
              ></li> */}

            <NavLink to="/sevaDetails" onClick={() => scrollToTop()}>
              <li
                className="w-full items-center justify-center h-full flex active:bg-light-pink"
                onClick={() => toggleMenuHandler()}
              >
                Sevas
              </li>
            </NavLink>
            <NavLink to="/darshanaRules" onClick={() => scrollToTop()}>
              <li
                className="w-full items-center justify-center h-full flex active:bg-light-pink"
                onClick={() => toggleMenuHandler()}
              >
                News
              </li>
            </NavLink>
            <NavLink to="/bookRoom" onClick={() => scrollToTop()}>
              <li
                className="w-full items-center justify-center h-full flex active:bg-light-pink"
                onClick={() => toggleMenuHandler()}
              >
                Book Room
              </li>
            </NavLink>
            <div className="flex flex-col  w-full">
              <div
                className="flex justify-between w-full items-center gap-10"
                onClick={() => setsubtoggleMenu1(!subtoggleMenu1)}
              >
                <div className="w-full">Information</div>
                <div className="w-full flex items-end justify-end">
                  {subtoggleMenu1 ? (
                    <i className="fa-solid fa-chevron-up"></i>
                  ) : (
                    <i className="fa-solid fa-chevron-down"></i>
                  )}
                </div>
              </div>
              {subtoggleMenu1 && (
                <ul className="p-2 flex flex-col ml-4 gap-2 text-[1.3rem]">
                  <NavLink to="/templeTiming" onClick={() => scrollToTop()}>
                    <li onClick={() => handleBothMenus1()}>Temple Timing</li>
                  </NavLink>
                  <NavLink to="/howToReach" onClick={() => scrollToTop()}>
                    <li onClick={() => handleBothMenus1()}>How To Reach</li>
                  </NavLink>
                  <NavLink to="/bankDetails" onClick={() => scrollToTop()}>
                    <li onClick={() => handleBothMenus1()}>Bank Details</li>
                  </NavLink>
                </ul>
              )}
            </div>
            <NavLink to="/contactUs" onClick={() => scrollToTop()}>
              <li
                className="w-full items-center justify-center h-full flex active:bg-light-pink"
                onClick={() => toggleMenuHandler()}
              >
                Contact
              </li>
            </NavLink>
            <NavLink to="/ehundicontainer" onClick={() => scrollToTop()}>
              <li
                className="w-full items-center justify-center h-full flex active:bg-light-pink"
                onClick={() => toggleMenuHandler()}
              >
                E-Hundi
              </li>
            </NavLink>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
