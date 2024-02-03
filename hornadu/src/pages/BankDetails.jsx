import Subnavbar from "../components/Subnavbar";
function BankDetails() {
  return (
    <>
      <div className="bg-light-pink flex flex-col gap-8 ">
        <br />
        <Subnavbar title="BANK ACCOUNT DETAILS" />
        <div className="w-[90%] md:w-[70%] mx-auto my-0 flex md:flex-row flex-col gap-5 items-center justify-center p-6">
          <div className="bg-white w-full p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <h1 className="text-[1.6rem] font-semibold mb-3">
              KARNATAKA BANK
              <span className="text-[1.2rem] font-semibold">
                {" "}
                (Horanadu branch)
              </span>
            </h1>
            <ul className="list-disc">
              <li className="ml-10">
                Account Name :
                <span className="font-semibold">
                  ADISHAKTYATMAKA SRI ANNAPOORNESHWARI DEVASTHANADA RAKSHANA
                  PRATHISTANA
                </span>
              </li>
              <li className="ml-10">
                Account Number :
                <span className="font-semibold"> 4022000100034101</span>
              </li>
              <li className="ml-10">
                Account Type :
                <span className="font-semibold">Current Account</span>
              </li>
              <li className="ml-10">
                IFSC : <span className="font-semibold"> KARB0000338</span>
              </li>
            </ul>
          </div>
          <div className="bg-white w-full p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <h1 className="text-[1.6rem] font-semibold mb-3">
              CANARA BANK{" "}
              <span className="md:hidden">
                <br />
              </span>
              <span className="text-[1.2rem] font-semibold">
                (Kalasa branch)
              </span>
            </h1>
            <ul className="list-disc">
              <li className="ml-10">
                Account Name :
                <span className="font-semibold">
                  ADISHAKTYATMAKA SRI ANNAPOORNESHWARI DEVASTHANADA RAKSHANA
                  PRATHISTANA
                </span>
              </li>
              <li className="ml-10">
                Account Number :
                <span className="font-semibold"> 0864101002696</span>
              </li>
              <li className="ml-10">
                Account Type :
                <span className="font-semibold">Savings Bank</span>
              </li>
              <li className="ml-10">
                IFSC : <span className="font-semibold"> CNRB0000864</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default BankDetails;
