import { useState } from "react";
import DailySevas from "./tables/DailySevas";
import { Router } from "react-router-dom";
import HomeSevas from "./tables/HomeSevas";
import FridaySevas from "./tables/FridaySevas";
import Tulabhara from "./tables/Tulabhara";
import YearlySevas from "./tables/YearlySevas";

function SevaDetails() {
  const [currentSevaPage, setCurrentSevaPage] = useState("1");
  let content;
  let bgColor1;
  let textColor1;
  let bgColor2;
  let textColor2;
  let bgColor3;
  let textColor3;
  let bgColor4;
  let textColor4;
  let bgColor5;
  let textColor5;
  if (currentSevaPage === "1") {
    content = <DailySevas />;
    bgColor1 = "dark-pink";
    textColor1 = "light-black";
  } else if (currentSevaPage === "2") {
    content = <HomeSevas />;
    bgColor2 = "dark-pink";
    textColor2 = "light-black";
  } else if (currentSevaPage === "3") {
    content = <FridaySevas />;
    bgColor3 = "dark-pink";
    textColor3 = "light-black";
  } else if (currentSevaPage === "4") {
    content = <YearlySevas />;
    bgColor4 = "dark-pink";
    textColor4 = "light-black";
  } else if (currentSevaPage === "5") {
    content = <Tulabhara />;
    bgColor5 = "dark-pink";
    textColor5 = "light-black";
  }
  return (
    <>
      <div className="bg-light-pink">
        <div className="w-[70%] mx-auto my-0">
          <br />
          <h1 className="text-[1.3rem] font-semibold ">
            Sri Kshetra Seva Details
          </h1>
          <br />
          <div className="w-[95%] mb-4 mx-auto my-0">
            <ul className="flex items-center justify-evenly  bg-[#33222e] text-white rounded-xl cursor-pointer">
              <li
                className={`ease-in-out hover:ease-in-out duration-300  h-full w-full flex items-center justify-center p-3 rounded-lg bg-${bgColor1} text-${textColor1}`}
                onClick={() => setCurrentSevaPage("1")}
              >
                Daily Sevas
              </li>
              <li
                className={`ease-in-out hover:ease-in-out duration-300  h-full w-full flex items-center justify-center p-3 rounded-lg bg-${bgColor2} text-${textColor2}`}
                onClick={() => setCurrentSevaPage("2")}
              >
                Homa Sevas
              </li>
              <li
                className={`ease-in-out hover:ease-in-out duration-300  h-full w-full flex items-center justify-center p-3 rounded-lg bg-${bgColor3} text-${textColor3}`}
                onClick={() => setCurrentSevaPage("3")}
              >
                Friday Sevas
              </li>
              <li
                className={`ease-in-out hover:ease-in-out duration-300  h-full w-full flex items-center justify-center p-3 rounded-lg bg-${bgColor4} text-${textColor4}`}
                onClick={() => setCurrentSevaPage("4")}
              >
                Yearly Sevas
              </li>
              <li
                className={`ease-in-out hover:ease-in-out duration-300  h-full w-full flex items-center justify-center p-3 rounded-lg bg-${bgColor5} text-${textColor5}`}
                onClick={() => setCurrentSevaPage("5")}
              >
                Tulabhara
              </li>
            </ul>
          </div>

          {content}
        </div>
      </div>
    </>
  );
}

export default SevaDetails;
