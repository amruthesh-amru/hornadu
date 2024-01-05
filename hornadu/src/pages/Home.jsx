import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// Import Swiper styles
import "swiper/css";

function Home() {
  return (
    <>
      <div className="w-full  bg-light-pink">
        <div className="w-[70%] my-0 mx-auto">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            loop={true}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <img
                src="https://horanadu-app-assets.s3.ap-south-1.amazonaws.com/main%20slider.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://horanadu-app-assets.s3.ap-south-1.amazonaws.com/main%20slider%202.jpg"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="w-[70%] my-0 mx-auto ">
          <div className="flex items-center justify-center bg-white p-3 text-light-black">
            <div className="flex flex-col gap-3 ">
              <h1>SRIKSHETRA HORANADU</h1>
              <p>
                “Sri Kshetra Horanadu” is situated on the banks of river Bhadra
                in a remote corner of Chikkamagaluru dist, Karnataka, surrounded
                by the natural vegetation, forest, green lands, and natural
                beauty of the Western Ghats. The great deity of
                Adishakthyathmaka Sri Annapoorneshwari’s Prathistapana was done
                by his holiness Agasthya Maharishi several centuries back. The
                hereditary Dharmakartharu of our family started 400 years back.
                Till the 5th Dharmakartharu, the temple was having a very small
                structure surrounded by full of natural vegetation and forest.
                Even then at least one or more people used to visit the temple,
                have pooja and were provided with free food {"{annaprasadam}"}{" "}
                and shelter and it is continued till date.
              </p>
              <button className="p-3 bg-light-black self-start text-white text-lg">
                Read More
              </button>
            </div>
            <div className=" w-full h-full">
              <img
                src="https://horanadu-app-assets.s3.ap-south-1.amazonaws.com/Old+temple+image.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
