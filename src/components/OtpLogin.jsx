import { useState } from "react";
import "../styles/OtpLogin.css";
import OtpInpSection from "./OtpInpSection";

const OtpLogin = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtp, setShowOtp] = useState(false);

  const handleNumberSubmit = (e) => {
    e.preventDefault();

    //Validation of inout number
    const regex = /[^0-9]/g;
    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      alert("Invalid phone number");
      return;
    }
    setShowOtp(true);
  };

  const onOtpSubmit = (otp) => {
    console.log("Login succesfull with otp: " + otp);
  };

  return (
    <div className="loginForm">
      <h1>Login with Phone</h1>
      {!showOtp ? (
        <form onSubmit={handleNumberSubmit}>
          <input
            type="text"
            placeholder="Enter Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button>Submit</button>
        </form>
      ) : (
        <div
          className="otpInputSection"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <h4 style={{ fontWeight: "200", alignSelf: "center" }}>
            Enter OTP sent to {phoneNumber}
          </h4>
          <OtpInpSection length={4} onOtpSubmit={onOtpSubmit} />
        </div>
      )}
    </div>
  );
};

export default OtpLogin;
