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
      <div className="w-full flex flex-col gap-10 bg-light-pink">
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
          <div className="flex items-center justify-center bg-white p-3 text-light-black  rounded-lg">
            <div className="flex flex-col gap-3 ">
              <h1 className="text-[2rem]">SRIKSHETRA HORANADU</h1>
              <p className="leading-[1.75] text-[1.025rem] ">
                “<span className="font-bold">Sri Kshetra Horanadu</span>” is
                situated on the banks of river Bhadra in a remote corner of
                Chikkamagaluru dist, Karnataka, surrounded by the natural
                vegetation, forest, green lands, and natural beauty of the
                Western Ghats. The great deity of Adishakthyathmaka Sri
                Annapoorneshwari’s Prathistapana was done by his holiness
                Agasthya Maharishi several centuries back. The hereditary
                Dharmakartharu of our family started 400 years back. Till the
                5th Dharmakartharu, the temple was having a very small structure
                surrounded by full of natural vegetation and forest. Even then
                at least one or more people used to visit the temple, have pooja
                and were provided with free food {"{annaprasadam}"} and shelter
                and it is continued till date.
              </p>
              <button className="p-2 bg-light-black self-start text-white text-lg rounded-md">
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

        <div className="w-[70%]  my-0 mx-auto flex gap-3 ">
          <div>
            <div className="flex flex-col gap-10 bg-white p-3 rounded-lg text-light-black w-full  ">
              <h1 className="text-[2rem]">Darshana Rules and Regulations</h1>
              <ol className="font-[500]">
                <li>1. Darshan Timing- 6:00 am to 9:00 pm</li>
                <li>
                  2. The Darshan of the Sri Matha is only available for Men/
                  Boys wearing traditional attire such as pants, shirts, punches
                  And Girls / ladies compulsorily Should be worn chudidar’s Or
                  sarees.
                </li>
              </ol>
              <ol className="font-[600]">
                <li>
                  1. ದೇವರ ದರ್ಶನಕ್ಕೆ ಬೆಳಗ್ಗೆ 6 ಗಂಟೆ ಇಂದ ರಾತ್ರಿ 9 ಗಂಟೆಯ ವರೆಗೆ
                  ಮಾತ್ರ ಅವಕಾಶ..
                </li>
                <li className="font-[600]">
                  2. ಶ್ರೀ ಮಾತೆಯ ದರ್ಶನವು ಪ್ಯಾಂಟ್, ಶರ್ಟ್, ಪಂಚ್‌ಗಳಂತಹ ಸಾಂಪ್ರದಾಯಿಕ
                  ಉಡುಪುಗಳನ್ನು ಧರಿಸಿರುವ ಪುರುಷರು / ಹುಡುಗರಿಗೆ ಮಾತ್ರ ಲಭ್ಯವಿರುತ್ತದೆ.
                  ಹುಡುಗಿಯರು / ಮಹಿಳೆಯರು ಕಡ್ಡಾಯವಾಗಿ ಚೂಡಿದಾರ್ ಅಥವಾ ಸೀರೆಗಳನ್ನು
                  ಧರಿಸಬೇಕು.
                </li>
              </ol>
            </div>
          </div>
          <div className="bg-white w-[70%] p-3 flex flex-col gap-5">
            <h1 className="text-[2rem]">Announcement</h1>
            <p>
              There is something exciting coming up in this space, stay tuned !!
            </p>
          </div>
        </div>

        <div className="w-[70%]  my-0 mx-auto flex gap-3 ">
          <div>
            <h1>Horanadu Rathothsava - 2021</h1>
            <p>
              ಹೊರನಾಡಿನಲ್ಲಿ 16/3/2021ರಲ್ಲಿ ನಡೆದ "ಶ್ರೀಮಾನ್ ಮಹಾ ರಥೋತ್ಸವ-2021"ದ
              ಪೂರ್ಣ ಕಾರ್ಯಕ್ರಮವನ್ನು ನಮ್ಮ ಯುಟೂಬ್ ಚಾನೆಲ್ನಲ್ಲಿ ತೋರಿಸಲಾಗುತ್ತಿದೆ.
              ಭಕ್ತಾದಿಗಳೆಲ್ಲಾ ಆ ವಿಜೃಂಭಿತ ದಿನದ ವಿಡಿಯೋವನ್ನು ನೋಡಿ ಕಣ್ತುಂಬಿಸಿಕೊಂಡು
              ಅಮ್ಮನವರ ಕೃಪೆಗೆ ಪಾತ್ರರಾಗಬೇಕೆಂದು ಕೋರುತ್ತೇವೆ. ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗಾಗಿ ನಮ್ಮ
              ಯುಟ್ಯೂಬ್ ಚಾನೆಲ್ ಅನ್ನು ಫಾಲೋ ಮಾಡಿ.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
