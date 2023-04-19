import React, { useState } from "react";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "../PhoneNoComponent/phoneNoComponent.scss";

const PhoneInput = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleOnChange = (value) => {
    setPhoneNumber(value);
  };

  return (
    <div className="phone-component-sec">
      <ReactPhoneInput
        inputExtraProps={{
          name: "phone",
          required: true,
          autoFocus: true,
        }}
        // defaultCountry={"us"}
        value={phoneNumber}
        onChange={handleOnChange}
        className="phone-no-component"
        country={"us"}
      />
    </div>
  );
};

export default PhoneInput;
