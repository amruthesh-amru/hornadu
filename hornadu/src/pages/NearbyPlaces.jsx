import React from "react";
import Navbar from "../components/Navbar";
import Subnavbar from "../components/Subnavbar";

function NearbyPlaces() {
  return (
    <>
      <Navbar />
      <div className="bg-light-pink p-5">
        <Subnavbar title="NEAR BY PLACES" />
        <br />
        <div className="mx-auto my-0 w-[70%] flex gap-5">
          <div>
            <div>
              <img
                className=""
                src="https://horanadu-app-assets.s3.ap-south-1.amazonaws.com/IMG_8273.jpg"
                alt=""
              />
            </div>
            <div className="p-4 rounded-md bg-white">Ambatheertha</div>
          </div>
          <div>
            <div>
              <img
                src="https://horanadu-app-assets.s3.ap-south-1.amazonaws.com/IMG_8565.jpg"
                alt=""
              />
            </div>
            <div className="p-4 rounded-md bg-white">
              Kalasheshwaraswamy Temple
            </div>
          </div>
          <div>
            <div>
              <img
                src="https://horanadu-app-assets.s3.ap-south-1.amazonaws.com/IMG_8737.jpg"
                alt=""
              />
            </div>
            <div className="p-4 rounded-md bg-white">
              Kyatanamakki Hill Station
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NearbyPlaces;
