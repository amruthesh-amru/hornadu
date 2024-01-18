import React from "react";
import Subnavbar from "../components/Subnavbar";

function ContactUs() {
  return (
    <>
      <div className="bg-light-pink">
        <br />
        <Subnavbar title="CONTACT US" />
        <br />
        <br />
        <div className="w-[71%] mx-auto my-0">
          <div className=" bg-white w-full p-6 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <h1 className="text-[1.6rem] font-semibold mb-3">
              ADHISHAKTHYATHMAKA SRI ANNAPOORNESHWARI TEMPLE SRIKSHETRA HORANADU
            </h1>
            <div className="flex gap-3 flex-col text-[1.2rem]">
              <h3>
                <span className="ml-8 mr-3">
                  <i className="fa-solid fa-location-dot" />
                </span>
                Mudigere Taluk, Chickmagaluru district, Karnataka - 577181.
              </h3>
              <h3>
                <span className="ml-8 mr-3">
                  <i className="fa-solid fa-mobile-screen-button"></i>
                </span>
                Mobile: 9448282410/9900076410
              </h3>
              <h3>
                <span className="ml-8 mr-3">
                  <i className="fa-regular fa-envelope"></i>
                </span>
                Email: shriaath@gmail.com
              </h3>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    </>
  );
}

export default ContactUs;
