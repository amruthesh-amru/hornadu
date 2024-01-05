import logo from "../assets/horanadu_logo.jpeg";

function Navbar() {
  return (
    <>
      <div className="w-full flex items-center justify-evenly bg-light-pink text-black">
        <div className="">
          <h1 className="text-[17px]">
            Adhishakthyathmaka Sri Annapoorneshwari Temple
          </h1>
          <h1 className="text-[24px] font-[600]">Sri Kshetra Horanadu</h1>
        </div>
        <div className="w-[6rem] h-[6rem]">
          <img src={logo} alt="" className="w-full h-full" />
        </div>
        <div className="flex items-end justify-end flex-col">
          <h1 className="text-[17px]">
            ಆದಿಶಕ್ತ್ಯಾತ್ಮಕ ಶ್ರೀ ಅನ್ನಪೂರ್ಣೇಶ್ವರಿ ದೇವಸ್ಥಾನ
          </h1>
          <h1 className="text-[24px] font-[600]">ಶ್ರೀಕ್ಷೇತ್ರ ಹೊರನಾಡು</h1>
        </div>
      </div>
      <div className="w-full bg-dark-pink text-[17px] p-4">
        <ul className="flex items-center justify-center gap-10 ">
          <li>Home</li>
          <li>Temple</li>
          <li>Sevas</li>
          <li>News</li>
          <li>Book Room</li>
          <li>Info</li>
          <li>Gallery</li>
          <li>E-Hundi</li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
