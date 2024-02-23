import { NavLink } from "react-router-dom";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // You can also use 'auto' or 'instant'
    });
  };
  return (
    <>
      <div className="w-full bg-dark-pink p-8 ">
        <div className="md:w-[85%] md:[90%] text-light-black mx-auto my-0 md:flex flex md:flex-row flex-col md:justify-between md:items-start items-center justify-center gap-10">
          <div>
            <h1 className="text-[1.4rem] md:text-left text-center">
              Contact Us
            </h1>
            <ul>
              <li className="font-semibold md:text-left text-center mt-5 md:mt-0">
                ADHISHAKTHYATHMAKA SRI ANNAPOORNESHWARI TEMPLE, <br />
                SHREEKHETRA HORANADU
              </li>
              <li className=" md:text-left text-center">Mudigere Taluk</li>
              <li className=" md:text-left text-center">
                Chikkamagaluru - Dist
              </li>
              <li className=" md:text-left text-center">Pin- 577181</li>
              <li className=" md:text-left text-center">
                Mobile: 9448282410/9900076410
              </li>
              <li className=" md:text-left text-center">
                Email: shriaath@gmail.com
              </li>
            </ul>
          </div>
          <div className="flex  md:items-start items-center justify-center flex-col">
            <h1 className="text-[1.4rem] md:text-left  text-center mb-5 md:mb-0">
              Quick links
            </h1>
            <div className="flex items-center justify-center gap-10">
              <div>
                <ul className="list-disc">
                  <NavLink to="/sevaDetails">
                    <li onClick={scrollToTop}>Sevas</li>
                  </NavLink>

                  <li>Announcement</li>
                  <NavLink to="/bookRoom">
                    <li onClick={scrollToTop}>Book Room</li>
                  </NavLink>

                  <NavLink to="/deities">
                    <li onClick={scrollToTop}>Deities</li>
                  </NavLink>

                  <NavLink to="/terms">
                    <li onClick={scrollToTop}>Terms & Conditions</li>
                  </NavLink>
                </ul>
              </div>
              <div>
                <ul className="list-disc">
                  <li>Donate</li>
                  <NavLink to="/history">
                    <li onClick={scrollToTop}>History</li>
                  </NavLink>
                  <a
                    href="https://www.google.com/maps/place/Adhishakthyathmaka+Shri+Annapurneshwari+Devi+Temple+-+(Horanadu)/@13.2767139,75.3412627,17z/data=!3m1!4b1!4m6!3m5!1s0x3bbb37e060ccf5b3:0x74031e2d5f52c0ca!8m2!3d13.2767139!4d75.3438376!16zL20vMGgwd3Zy?entry=ttu"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <li>Location</li>
                  </a>

                  <NavLink to="/terms">
                    <li onClick={scrollToTop}>Refund Policy</li>
                  </NavLink>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-[1.4rem] text-center md:text-left">
              Follow Us
            </h1>
            <div className="flex gap-5 mt-4 md:items-center md:justify-start items-center justify-center text-[1.5rem] mb-4 ">
              <i className="fa-brands fa-facebook-f text-[#3b5998]"></i>
              <i className="fa-brands fa-twitter text-[##55acee]"></i>
              <a
                href="https://www.instagram.com/srikshetrahoranadu?igsh=MXhvZDdwMHVqYXp4dQ=="
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-instagram text-[#b7242a]"></i>
              </a>
              <a
                href="https://youtube.com/@SriKshetraHoranaduOfficial?si=GFQ-12DYBMsABTXU"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-youtube text-[#ff0000]"></i>
              </a>
            </div>
            <div className="text-white flex items-center  gap-5">
              <NavLink to="/howToReach">
                <button
                  onClick={scrollToTop}
                  className="bg-[#33222e] pl-5 pr-3 pt-2 pb-2 rounded-md mb-2 w-[10.6rem]"
                >
                  How To Reach
                </button>
              </NavLink>
              <NavLink to="/bankDetails">
                <button
                  onClick={scrollToTop}
                  className="bg-[#33222e] pl-3 pr-3 pt-2 pb-2 rounded-md mb-2  w-[10.6rem]"
                >
                  Bank Account Details
                </button>
              </NavLink>
            </div>
            <div className="text-white flex items-center  gap-5 ">
              <NavLink to="/templeTiming">
                <button
                  onClick={scrollToTop}
                  className="bg-[#33222e] pl-3 pr-3 pt-2 pb-2 rounded-md  w-[10.6rem]"
                >
                  Temple Timings
                </button>
              </NavLink>

              <button
                onClick={scrollToTop}
                className="bg-[#33222e] pl-3 pr-3 pt-2 pb-2 rounded-md  w-[10.6rem]"
              >
                Nearby Locations
              </button>
            </div>
          </div>
        </div>

        <hr className="my-6 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-light-black to-transparent opacity-25 dark:opacity-100" />
        <h1 className="text-[1rem] text-center">
          Copyright @2021 Sri Annapoorneshwari Temple, Horanadu All Rights
          Reserved
        </h1>
      </div>
    </>
  );
}

export default Footer;
