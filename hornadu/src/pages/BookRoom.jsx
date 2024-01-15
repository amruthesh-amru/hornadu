import React from "react";
import Navbar from "../components/Navbar";
import Subnavbar from "../components/Subnavbar";

function BookRoom() {
  return (
    <>
      <div className="bg-light-pink flex flex-col text-light-black">
        <br />
        <Subnavbar title="BOOK ROOMS" />
        <div className="flex flex-col w-[70%] mx-auto my-0 items-center justify-center gap-5 ">
          <h1 className="mt-6 text-[2rem]">FOR ROOM BOOKING KINDLY CONTACT</h1>
          <div className="flex items-center justify-center gap-10 text-[1.4rem] font-bold">
            <div>Telephone: 08263269615 </div>
            <div>Mobile : +91 98457 04614</div>
          </div>
          <img
            className="rounded-md"
            src="https://shrikshetrahoranadu.com/img/Bhadra.jpeg"
            alt=""
          />
          <h1 className="text-[1.4rem]">Bhadra Nivas</h1>
        </div>
      </div>
    </>
  );
}

export default BookRoom;
