import React from "react";
import Navbar from "../components/Navbar";
import Subnavbar from "../components/Subnavbar";

function BookRoom() {
  return (
    <>
      <div className="bg-light-pink flex flex-col text-light-black">
        <br />
        <Subnavbar title="BOOK ROOMS" />
        <div className="flex flex-col w-[90%] md:w-[70%] mx-auto my-0 items-center justify-center gap-5 ">
          <h1 className="mt-6 text-center  text-[2rem]">
            FOR ROOM BOOKING KINDLY CONTACT
          </h1>
          <div className="w-full flex justify-evenly md:items-center md:justify-center gap-5 md:gap-10 text-[1.2rem] md:text-[1.4rem] font-bold">
            <div className="text-center">
              Telephone:
              <span className="md:hidden">
                <br />
              </span>{" "}
              08263269615{" "}
            </div>
            <div className="text-center">
              Mobile:
              <span className="md:hidden">
                <br />
              </span>
              +91 98457 04614
            </div>
          </div>
          <img
            className="rounded-md w-[30rem] h-[20rem]"
            src="https://hornadu-images.s3.us-west-2.amazonaws.com/hornadu+images/Banner.png"
            alt=""
          />
          <h1 className="text-[1.4rem] font-[600] mb-3">Bhadra Nivas</h1>
        </div>
      </div>
    </>
  );
}

export default BookRoom;
