import "../styles/OtpInput.css";
import { useEffect, useRef, useState } from "react";

const OtpInpSection = ({ length, onOtpSubmit }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inpRefs = useRef([]);

  useEffect(() => {
    if (inpRefs.current[0]) {
      inpRefs.current[0].focus();
    }
  }, []);

  console.log(inpRefs);

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    //allow only one input
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    //submit trigger
    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === 4) {
      onOtpSubmit(combinedOtp);
    }

    //validation of automatically switching to another input field
    if (value && index < length - 1 && inpRefs.current[index + 1]) {
      //move focus to the previous input field using backspace
      inpRefs.current[index + 1].focus();
    }
  };
  const handleClick = (index) => {
    inpRefs.current[index].setSelectionRange(1, 1);
  };
  const handleKeyDown = (index, e) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      length > 0 &&
      inpRefs.current[index - 1]
    ) {
      inpRefs.current[index - 1].focus();
    }
  };

  return (
    <div>
      {otp.map((value, index) => (
        <input
          className="otpInput"
          type="text"
          key={index}
          ref={(input) => (inpRefs.current[index] = input)}
          value={value}
          onChange={(e) => handleChange(index, e)}
          onClick={() => handleClick(index)}
          onKeyDown={(e) => handleKeyDown(index, e)}
        />
      ))}
    </div>
  );
};

export default OtpInpSection;
