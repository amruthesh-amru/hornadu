import React from "react";
import Navbar from "../components/Navbar";
import Subnavbar from "../components/Subnavbar";
function Temple() {
  return (
    <>
      <Navbar />
      <div className="bg-light-pink">
        <div className="flex flex-col gap-10">
          <div className="w-[70%] mx-auto my-0">
            <img
              className="w-full h-[33rem]"
              src="https://horanadu-app-assets.s3.ap-south-1.amazonaws.com/Old+temple+image.png"
              alt=""
            />
          </div>
          <Subnavbar title="ABOUT SRI KSHETRA" />
          <div className="w-[68%]  my-0 mx-auto flex  gap-10 items-center justify-center p-2  text-light-black">
            <p>
              “ <span className="font-bold">Sri Kshetra Horanadu</span> ” is
              situated on the banks of river Bhadra in a remote corner of
              Chikkamagaluru dist, Karnataka, surrounded by the natural
              vegetation, forest, green lands, and natural beauty of the Western
              Ghats. The great deity of Adishakthyathmaka Sri Annapoorneshwari’s
              Prathistapana was done by his holiness Agasthya Maharishi several
              centuries back. The hereditary Dharmakartharu of our family
              started 400 years back. Till the 5th Dharmakartharu, the temple
              was having a very small structure surrounded by full of natural
              vegetation and forest. Even then at least one or more people used
              to visit the temple, have pooja and were provided with free food{" "}
              {"annaprasadam"} and shelter and it is continued till date.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Temple;
