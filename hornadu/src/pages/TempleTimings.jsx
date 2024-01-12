import React from "react";
import Navbar from "../components/Navbar";
import Subnavbar from "../components/Subnavbar";

function TempleTimings() {
  return (
    <>
      <Navbar />
      <div className="bg-light-pink text-light-black">
        <br />
        <Subnavbar title="TEMPLE TIMINGS" />
        <div>
          <div className="w-[67%] mx-auto my-0 p-3">
            <div className="flex flex-col gap-3">
              <h1 className="font-bold text-[2rem]">
                Darshan Timings - 6:00 am to 9:00 pm
              </h1>

              <h3 className="font-semibold text-[1.1rem]">
                NOTE :- EVERY WEDNESDAY 02-30 PM TO 06-00 PM SRIMATHA'S DARSHANA
                WILL BE CLOSED FOR CLEANING PURPOSE
              </h3>
            </div>
            <div className="flex flex-col gap-14">
              <div>
                <h1 className="font-[500] text-[1.8rem] mt-5">
                  MAHAMANGALARATI TIMINGS :
                </h1>
                <ul>
                  <li>
                    <span className="font-[700]">Morning :</span> 09:00 am
                  </li>
                  <li>
                    <span className="font-[700]">Afternoon :</span> 01:30 pm
                  </li>
                  <li>
                    <span className="font-[700]">Evening :</span> 09:00 pm
                  </li>
                </ul>
              </div>

              <div>
                <h1 className="font-[500] text-[1.8rem]">POOJA TIMINGS :</h1>
                <ul>
                  <li>
                    <span className="font-[700]">Morning :</span> 07:00 am -
                    09:00 am
                  </li>
                  <li>
                    <span className="font-[700]">Afternoon :</span> 11:00 am -
                    01:30 pm
                  </li>
                  <li>
                    <span className="font-[700]">Evening :</span> 07:00 am -
                    09:00 pm
                  </li>
                </ul>
              </div>

              <div>
                <h1 className="font-[500] text-[1.8rem]">
                  SRI KSHETRA PRASADA TIMINGS :
                </h1>
                <ul>
                  <li>
                    <span className="font-[700]">Afternoon :</span> 12:00 pm -
                    01:30 pm
                  </li>
                  <li>
                    <span className="font-[700]">Evening :</span> 07:30 pm -
                    09:00 pm
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TempleTimings;
