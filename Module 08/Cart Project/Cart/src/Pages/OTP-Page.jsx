import React, { useState, useRef } from "react";
import { createCart, verifyLogin } from "../APIRequest/APIRequest";
import { useNavigate, useSearchParams, useLocation } from "react-router-dom";

const OtpPage = () => {
  const [pin, setPin] = useState("");
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log("🚀 ~ file: OTP-Page.jsx:9 ~ OtpPage ~ state:", state.p);

  const pItem = useRef();
  console.log("🚀 ~ file: OTP-Page.jsx:12 ~ OtpPage ~ pItem:", pItem);
  pItem.current = state ? state.p : "";
  console.log(
    "🚀 ~ file: OTP-Page.jsx:12 ~ OtpPage ~ pItem.current:",
    pItem.current
  );
  console.log(
    "🚀 ~ file: OTP-Page.jsx:12 ~ OtpPage ~ pItem.current.current:",
    pItem.current.current
  );
  const [searchParam] = useSearchParams();
  const email = searchParam.get("email");
  const pId = searchParam.get("pId");
  const handleVerifyLogin = () => {
    verifyLogin(email, pin)
      .then((data) => {
        if (data?.msg === "success") {
          localStorage.setItem("token", data.data);
          // if (pItem.current !== "") {
          //   createCart(pItem.current.current)
          //     .then((Pdata) => {
          //       if (Pdata?.msg == "success") {
          //         alert("The product was added to cart");
          //       }
          //     })
          //     .catch((err) => console.log("There was an error: " + err));
          // }
          navigate("/", {
            state: { proId: pItem.current.current },
          });
        }
      })
      .catch((err) => console.log("There was an error: " + err));
  };

  return (
    <div className="container  mx-auto">
      <div className="grid grid-cols-1 mt-2 md:grid-cols-1 lg:grid-cols-1 gap-3">
        <div className="flex items-center w-full justify-center h-screen">
          <div className="card w-8/12 card-side bg-white shadow-xl">
            <figure>
              <img
                className="h-96 w-96"
                src="/images/login-banner.png"
                alt="Movie"
              />
            </figure>
            <div className="card-body justify-center items-center">
              <div className="w-8/12">
                <h1 className="text-2xl my-4">PIN VERIFICATION</h1>
                <p className="mb-4 text-gray-600 text-sm">
                  4 Digit Verification PIN has been send to your email
                </p>
                <input
                  value={pin}
                  type="text"
                  placeholder="4 Digit Pin"
                  className="input w-full bg-white rounded-lg input-bordered"
                  onChange={(e) => setPin(e.target.value)}
                />
                <button
                  onClick={handleVerifyLogin}
                  className="btn rounded-lg w-full my-4 btn-primary"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpPage;
