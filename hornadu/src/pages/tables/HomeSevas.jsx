import React from "react";
import { NavLink } from "react-router-dom";

function HomeSevas() {
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
                Shri Mahaganapathi Homa
              </td>
              <td className="border p-3 text-light-black border-light-black text-[1.1rem] ...">
                15,000-00
              </td>
            </tr>
            <tr>
              <td className="border p-3 text-light-black  border-light-black text-[1.1rem] ...">
                2
              </td>
              <td className="border p-3 text-light-black border-light-black text-[1.1rem] ...">
                Shri Mahachandika Homa
              </td>
              <td className="border p-3 text-light-black border-light-black text-[1.1rem] ...">
                20,000-00
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <p>
          The bookings for this homa will be taken in personal at the temple
          office, Once the booking is done the devotee will be informed about
          the homa date in 2 months advance, the devotee has to give the
          confirmation for the given date. Cancellation of allotted date is
          allowed if the devotee is not able to perform the homa for the given
          date. 10 to 12 people are allowed with this pooja, 2 rooms will be
          provided for the devotee. All the pooja materials for the homa will be
          provided by us, the devotee has to bring flowers for the homa.
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

export default HomeSevas;
