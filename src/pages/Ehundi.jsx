import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
function Ehundi() {
  //   const amount = 15 * 100;
  const currency = "INR";
  //   const receiptId = "qwsaq1";

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  // const [amountinpaise, setAmountinpaise] = useState();
  const [amount, setAmount] = useState();
  const [email, setEmail] = useState("");
  const [remark, setRemark] = useState("");
  //   const amountHandler = () => {
  //     set;
  //   };
  const attachCheckoutScript = () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.id = "rzp";
    document.body.appendChild(script);
  };
  useEffect(() => {
    attachCheckoutScript();
  }, []);

  const paymentHandler = async (e) => {
    e.preventDefault();
    const response = await fetch("http://52.66.243.132:5000/order", {
      method: "POST",
      body: JSON.stringify({
        amount,
        currency,
        receipt: uuidv4(),
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const order = await response.json();

    var options = {
      // key: "rzp_live_Uwv7op9wsrDA89",
      key: "rzp_test_Xv0iMXBdOLAZxD",
      amount,
      currency,
      name: "Sri Kshetra Horanadu",
      description: "E-Hundi",
      image:
        "https://hornadu-images.s3.us-west-2.amazonaws.com/hornadu+images/horanadu_logo.jpeg",
      order_id: order.id,
      handler: async function (response) {
        const body = {
          ...response,
        };

        const validateRes = await fetch(
          //   "http://3.110.49.106:5000/order/validate",
          "http://52.66.243.132/order/validate",
          {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const jsonRes = await validateRes.json();
        console.log(jsonRes);
      },
      prefill: {
        name: name,
        email: email,
        contact: phone,
      },
      notes: {
        name: name,
        address: address,
        remark: remark,
      },
      theme: {
        color: "#f9bf8f",
      },
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
    rzp1.open();
  };
  return (
    <div className="bg-[#fee9d6] w-full h-full">
      <div className="container mx-auto ">
        <div className="flex justify-center px-6 p-8">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            <div className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2  bg-cover rounded-l-lg object-cover">
              <img
                src="https://hornadu-images.s3.us-west-2.amazonaws.com/hornadu+images/main+slider.jpg"
                alt=""
                className="object-cover h-full"
              />
            </div>
            <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h3 className="pt-4 text-2xl text-center">E-Hundi</h3>
              <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700">
                    Name
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700">
                    Phone Number
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="phone"
                    type="number"
                    placeholder="number"
                    required
                    min={0}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700">
                    E-Mail
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="mail"
                    type="mail"
                    placeholder="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <label className="block mb-2 text-sm font-bold text-gray-700">
                    Full Address
                  </label>
                  <textarea
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline resize-none"
                    id="address"
                    type="text"
                    placeholder="number"
                    rows={4}
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <label className="block mb-2 text-sm font-bold text-gray-700">
                    Remark
                  </label>
                  <textarea
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline resize-none"
                    id="remark"
                    type="text"
                    placeholder="remark"
                    rows={4}
                    value={remark}
                    onChange={(e) => setRemark(e.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700">
                    Amount
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="mail"
                    type="number"
                    placeholder="amount"
                    required
                    onChange={(e) => setAmount(e.target.value * 100)}
                  />
                </div>
                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-[#f9bf8f] rounded-full hover:text-black hover:bg-[#fee9d6] focus:outline-none focus:shadow-outline"
                    onClick={(e) => paymentHandler(e)}
                  >
                    Pay
                  </button>
                </div>

                <hr className="mb-6 border-t" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ehundi;
