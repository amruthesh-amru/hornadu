import React from "react";
import { NavLink } from "react-router-dom";

function Tulabhara() {
  return (
    <>
      <div className="border-light-pink mt-8 text-light-black">
        <table className=" bg-white border-collapse w-full border border-slate-400  ...">
          <thead className="bg-[#33222e] text-white">
            <tr>
              <th className="border p-3   border-light-black text-[1.1rem]  ...">
                Sl.No
              </th>
              <th className="border p-3  border-light-black text-[1.1rem] ...">
                Name of the Seva
              </th>
              <th className="border p-3  border-light-black text-[1.1rem] ...">
                Price( ₹ )
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-3 text-light-black  border-light-black text-[1.1rem] ...">
                1
              </td>
              <td className="border p-3 text-light-black border-light-black text-[1.1rem] ...">
                Tulabhara
              </td>
              <td className="border p-3 text-light-black border-light-black text-[1.1rem] ...">
                200-00
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <p className="font-semibold text-[1.2rem]">Seva Instructions :-</p>
        <br />
        <p className="text-[1.2rem]">
          ಶ್ರೀಕ್ಷೇತ್ರದಲ್ಲಿ ನಡೆಯುವ ರಥೋತ್ಸವ, ಅಕ್ಷಯ ತದಿಗೆ, ನವರಾತ್ರಿಯ ಪ್ರಮುಖ ದಿನಗಳು,
          ಹೊಸಕ್ಕಿ ಪೂಜೆ, ದೀಪೋತ್ಸವದಲ್ಲಿ ತುಲಾಭಾರ ಸೇವೆಯು ನಡೆಯುವುದಿಲ್ಲ. ಭಕ್ತಾದಿಗಳು
          ಇದನ್ನು ಗಮನಿಸಿಕೊಂಡು ಸೇವೆಯನ್ನು ನಡೆಸಬೇಕಾಗಿರುತ್ತದೆ.
        </p>
        <br />
        <p className="text-[1.2rem]">
          TULABHARA Seva Timings : - 08-00 AM to 12-30 PM
        </p>
        <br />
        <p className="text-[1.2rem] font-semibold">
          In the special days of Srikshetra, Like Srimaan Rathotsava, Akshay
          Tadige, The main days of the Navratri, Hosa Akki pooja, Deepotsava,
          Tulabhara Seva are not held. Devotees should observe this and perform
          this Seva.
        </p>
        <br />

        <p>
          <span className="font-semibold">Payment details:</span> The amount may
          be sent for above sevas through RTGS, NEFT, IMPS, EMO and DD, (drawn
          in favour of{" "}
          <span className="font-semibold">
            ADHISHAKTHYATHMAKA SRI ANNAPOORNESHWARI TEMPLE, SRIKSHETRA HORANADU,
          </span>{" "}
          D.D. and covering letter should be sent through Regd. Post),
        </p>
        <br />
        <p>
          Email the transaction details and the pooja details to
          shriaath@gmail.com
        </p>
        <br />
        <p className="mb-3">The following details are required:</p>
        <ol className="list-decimal">
          <li className="ml-6">Bank transaction details</li>
          <li className="ml-6">Name of the Seva from the above list</li>
          <li className="ml-6">
            Name and Star sign of sevakartha/ Sevakarthas.
          </li>
          <li className="ml-6">
            Seva Date (Birthday, Marriage Day, Important Festivals, Etc.)
          </li>
          <li className="ml-6">Permanent address</li>

          <NavLink to="/bankDetails">
            <button className="bg-[#33222e] text-white pl-3 pr-3 pt-2 pb-2 rounded-md mb-2 mt-4  w-[10.6rem]">
              Bank Account Details
            </button>
          </NavLink>
        </ol>
      </div>
    </>
  );
}

export default Tulabhara;
