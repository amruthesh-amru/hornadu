import imageGallery from "../assets/image-gallery.png";
import donation from "../assets/donation.png";
import onlineVideo from "../assets/online-video.png";
import calender from "../assets/outline.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import { NavLink } from "react-router-dom";

function Home() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // You can also use 'auto' or 'instant'
    });
  };
  return (
    <>
      <div className="w-full flex flex-col gap-16 bg-light-pink">
        <div className="md:w-[70%] w-[90%]  my-0 mx-auto">
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
          >
            <SwiperSlide>
              <img
                src="https://hornadu-images.s3.us-west-2.amazonaws.com/hornadu+images/main+slider.jpg"
                alt=""
                className="h-[30rem] object-cover md:h-full md:w-full"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://hornadu-images.s3.us-west-2.amazonaws.com/hornadu+images/main+slider+2.jpg"
                alt=""
                className="h-[30rem] object-cover md:h-full md:w-full"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="md:w-[70%] w-[90%] my-0 mx-auto ">
          <div className="md:flex items-center justify-center  bg-white p-3 text-light-black  rounded-lg">
            <div className="flex flex-col gap-3 w-[100%]">
              <h1 className="md:text-[2rem] text-[1.7rem] text-center md:text-left">
                SRI KSHETRA HORANADU
              </h1>
              <p className="leading-[1.75] text-[1.025rem] text-justify ">
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
              <NavLink to="/history">
                <button
                  className="p-1 bg-light-black self-start text-white text-lg rounded-md "
                  onClick={scrollToTop}
                >
                  Read More
                </button>
              </NavLink>
            </div>
            <div className="mt-4 w-full md:w-[30rem] h-full flex items-center justify-center p-3">
              <img
                src="https://hornadu-images.s3.us-west-2.amazonaws.com/hornadu+images/Old+temple+image.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="md:w-[70%] w-[90%]  my-0 mx-auto md:flex md:flex-row md:gap-3  flex flex-col gap-5 ">
          <div>
            <div className="flex flex-col gap-10 bg-white p-3 rounded-lg text-light-black w-full  ">
              <h1 className="text-[2rem] md:text-left text-center">
                Darshana Rules and Regulations
              </h1>
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
          <div className="bg-white md:w-[70%] p-3 md:flex md:flex-col md:gap-5  rounded-md ">
            <h1 className="text-[2rem]">Announcement</h1>
            <p>
              There is something exciting coming up in this space, stay tuned !!
            </p>
          </div>
        </div>

        <div className="md:w-[70%] w-[90%]  my-0 mx-auto md:flex md:flex-row flex items-center justify-center flex-col gap-3 md:items-start md:justify-center ">
          <div className="flex flex-col gap-5">
            <h1 className="md:text-[1.5rem] font-[600] text-[1.6rem] text-center md:text-left ">
              Horanadu Rathothsava - 2021
            </h1>
            <p className="text-justify md:text-left ">
              ಹೊರನಾಡಿನಲ್ಲಿ 16/3/2021ರಲ್ಲಿ ನಡೆದ "ಶ್ರೀಮಾನ್ ಮಹಾ ರಥೋತ್ಸವ-2021"ದ
              ಪೂರ್ಣ ಕಾರ್ಯಕ್ರಮವನ್ನು ನಮ್ಮ ಯುಟೂಬ್ ಚಾನೆಲ್ನಲ್ಲಿ ತೋರಿಸಲಾಗುತ್ತಿದೆ.
              ಭಕ್ತಾದಿಗಳೆಲ್ಲಾ ಆ ವಿಜೃಂಭಿತ ದಿನದ ವಿಡಿಯೋವನ್ನು ನೋಡಿ ಕಣ್ತುಂಬಿಸಿಕೊಂಡು
              ಅಮ್ಮನವರ ಕೃಪೆಗೆ ಪಾತ್ರರಾಗಬೇಕೆಂದು ಕೋರುತ್ತೇವೆ. ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗಾಗಿ ನಮ್ಮ
              ಯುಟ್ಯೂಬ್ ಚಾನೆಲ್ ಅನ್ನು ಫಾಲೋ ಮಾಡಿ.
            </p>
          </div>
          <div className="rounded-md">
            <iframe
              className="rounded-md"
              width="300"
              height="238"
              src="https://www.youtube.com/embed/da3S4ZF9Fdo"
              title="Short Video on temple and its surroundings | Sri Kshetra | Horanadu"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="rounded-md">
            <iframe
              className="rounded-md"
              width="300"
              height="238"
              src="https://www.youtube.com/embed/kksQ89HDdgk?si=nZJOXjC0FyQgsZdg"
              title="Short Video on temple and its surroundings | Sri Kshetra | Horanadu"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <div className="md:w-[70%] w-[90%] flex items-center justify-center flex-col md:flex-row my-0 mx-auto md:flex  gap-3 md:items-start md:justify-center  text-light-black">
          <div className="flex flex-col gap-5 md:w-[60%] w-[90%]">
            <h1 className="text-[1.5rem] font-[600] md:text-left text-center">
              Dharmakaratharu
            </h1>
            <p className="text-justify md:text-left">
              With the blessing of his holiness Jagadhguru Shankaracharya Sri
              Bharathitheertha Maha Swamiji of Sringeri Sharadapeetam, and in
              the holy presence of his holiness Gokarna Mandalacharya Jagadhguru
              Shankaracharya Sri Sri Raghavendra Bharathi Swamiji of Hosanagar
              Matha, Karnataka, Sri G.Bheemeshwara Jhoshy sworn as the
              hereditary "7th Dharmakartharu" of adishakthyathmaka sri
              Annapoorneshwari temple on 21.10.1991
            </p>
          </div>
          <div className=" md:w-[500px] w-[100%] h-[20rem] md:h-full mb-5 md:mb-0">
            <img
              className="w-full h-full rounded-md "
              src="https://hornadu-images.s3.us-west-2.amazonaws.com/hornadu+images/About.png"
              alt=""
            />
          </div>
        </div>

        <div className=" hidden md:inline-block md:w-[70%] my-0 mx-auto md:flex  gap-10 items-center justify-center p-3 bg-dark-pink text-light-black mb-8">
          <div className="flex items-center justify-center gap-10 border-r border-light-black  pr-5 ">
            <div>
              <img src={imageGallery} alt="" />
            </div>
            <div className="text-center">
              Temple Images <br />
              View Gallery
            </div>
          </div>
          <div className="flex items-center justify-center gap-10 border-r border-light-black pr-5 ">
            <div>
              <img src={onlineVideo} alt="" />
            </div>
            <div className="text-center">Temple Videos</div>
          </div>
          <div className="flex items-center justify-center gap-10 border-r border-light-black  pr-5">
            <div>
              <img src={donation} alt="" />
            </div>
            <div className="text-center">E-Hundi</div>
          </div>
          <div className="flex items-center justify-center gap-10  pr-5 ">
            <div>
              <img src={calender} alt="" />
            </div>
            <div className="text-center">Events Calender</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
