import React from "react";
import Navbar from "../components/Navbar";
import Subnavbar from "../components/Subnavbar";
function Temple() {
  return (
    <>
      <div className="bg-light-pink">
        <div className="flex flex-col gap-10">
          <div className="md:w-[70%] w-[90%] mx-auto my-0">
            <img
              className="w-full md:h-[33rem]"
              src="https://hornadu-images.s3.us-west-2.amazonaws.com/hornadu+images/Old+temple+image.png"
              alt=""
            />
          </div>
          <Subnavbar title="ABOUT SRI KSHETRA" />
          <div className="md:w-[68%] w-[90%]  my-0 mx-auto flex  gap-10 items-center justify-center p-2  text-light-black">
            <p className="text-justify">
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
        <br />
        <br />
      </div>
    </>
  );
}

export default Temple;
