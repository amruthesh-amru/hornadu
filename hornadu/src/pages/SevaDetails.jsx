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
  if (currentSevaPage === "1") {
    content = <DailySevas />;
  } else if (currentSevaPage === "2") {
    content = <HomeSevas />;
  } else if (currentSevaPage === "3") {
    content = <FridaySevas />;
  } else if (currentSevaPage === "4") {
    content = <YearlySevas />;
  } else if (currentSevaPage === "5") {
    content = <Tulabhara />;
  }
  return (
    <>
      <div className="bg-light-pink">
        <div className="w-[70%] mx-auto my-0">
          <h1>Sri Kshetra Seva Details</h1>
          <div className="w-[95%] mb-4 mx-auto my-0">
            <ul className="flex items-center justify-evenly  bg-[#33222e] text-white rounded-lg cursor-pointer">
              <li
                className="ease-in-out hover:ease-in-out duration-300 hover:text-light-black hover:bg-light-pink h-full w-full flex items-center justify-center p-3 rounded-lg"
                onClick={() => setCurrentSevaPage("1")}
              >
                Daily Sevas
              </li>
              <li
                className="ease-in-out hover:ease-in-out duration-300 hover:text-light-black hover:bg-light-pink h-full w-full flex items-center justify-center p-3 rounded-lg"
                onClick={() => setCurrentSevaPage("2")}
              >
                Homa Sevas
              </li>
              <li
                className="ease-in-out hover:ease-in-out duration-300 hover:text-light-black hover:bg-light-pink h-full w-full flex items-center justify-center p-3 rounded-lg"
                onClick={() => setCurrentSevaPage("3")}
              >
                Friday Sevas
              </li>
              <li
                className="ease-in-out hover:ease-in-out duration-300 hover:text-light-black hover:bg-light-pink h-full w-full flex items-center justify-center p-3 rounded-lg"
                onClick={() => setCurrentSevaPage("4")}
              >
                Yearly Sevas
              </li>
              <li
                className="ease-in-out hover:ease-in-out duration-300 hover:text-light-black hover:bg-light-pink h-full w-full flex items-center justify-center p-3 rounded-lg"
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
