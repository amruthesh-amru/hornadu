function Footer() {
  return (
    <>
      <div className="w-full bg-dark-pink p-8">
        <div className="w-[85%] text-light-black mx-auto my-0 flex justify-between items-start">
          <div>
            <h1 className="text-[1.4rem]">Contact Us</h1>
            <ul>
              <li className="font-semibold">
                ADHISHAKTHYATHMAKA SRI ANNAPOORNESHWARI TEMPLE, <br />
                SHREEKHETRA HORANADU
              </li>
              <li>Mudigere Taluk</li>
              <li>Chikkamagaluru - Dist</li>
              <li>Pin- 577181</li>
              <li>Mobile: 9448282410/9900076410</li>
              <li>Email: shriaath@gmail.com</li>
            </ul>
          </div>
          <div className="flex justify-start flex-col">
            <h1 className="text-[1.4rem]">Quick links</h1>
            <div className="flex items-start gap-10">
              <div>
                <ul className="list-disc">
                  <li>Sevas</li>
                  <li>Announcement</li>
                  <li>Book Room</li>
                  <li>Deities</li>
                  <li>Terms & Conditions</li>
                </ul>
              </div>
              <div>
                <ul className="list-disc">
                  <li>Donate</li>
                  <li>History</li>
                  <li>Location</li>
                  <li>Privacy Policy</li>
                  <li>Refund Policy</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-[1.4rem]">Follow Us</h1>
            <div className="flex gap-5 mt-4 items-center justify-start text-[1.5rem] mb-4">
              <i className="fa-brands fa-facebook-f text-[#3b5998]"></i>
              <i className="fa-brands fa-twitter text-[##55acee]"></i>
              <i className="fa-brands fa-instagram text-[#b7242a]"></i>
              <i className="fa-brands fa-youtube text-[#ff0000]"></i>
            </div>
            <div className="text-white flex items-center  gap-5">
              <button className="bg-[#33222e] pl-5 pr-3 pt-2 pb-2 rounded-md mb-2 w-[10.6rem]">
                How To Reach
              </button>
              <button className="bg-[#33222e] pl-3 pr-3 pt-2 pb-2 rounded-md mb-2  w-[10.6rem]">
                Bank Account Details
              </button>
            </div>
            <div className="text-white flex items-center  gap-5 ">
              <button className="bg-[#33222e] pl-3 pr-3 pt-2 pb-2 rounded-md  w-[10.6rem]">
                Temple Timings
              </button>
              <button className="bg-[#33222e] pl-3 pr-3 pt-2 pb-2 rounded-md  w-[10.6rem]">
                Nearby Locations
              </button>
            </div>
          </div>
        </div>

        <hr className="my-6 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-light-black to-transparent opacity-25 dark:opacity-100" />
        <h1 className="text-[1rem] text-center">
          Copyright @2021 Sri Annapoorneshwari Temple, Horanadu All Rights
          Reserved
        </h1>
      </div>
    </>
  );
}

export default Footer;
