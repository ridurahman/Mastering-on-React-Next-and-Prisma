import React from "react";
import { useState } from "react";

const FormManaging = () => {
  const [formObj, setFormData] = useState({
    fName: "",
    lName: "",
    city: "",
    gender: "",
  });

  const InputOnChange = (property, value) => {
    setFormData((prevObj) => ({
      ...prevObj,
      [property]: value,
    }));
  };

  const displayData = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formObj));
    console.log(formObj);
  };

  return (
    <div>
      <form onSubmit={displayData}>
        <input
          onChange={(e) => {
            InputOnChange("fName", e.target.value);
          }}
          placeholder="First Name"
        />
        <br />
        <input
          onChange={(e) => {
            InputOnChange("lName", e.target.value);
          }}
          placeholder="Last Name"
        />
        <br />
        <select
          onChange={(e) => {
            InputOnChange("city", e.target.value);
          }}
        >
          <option value="">Choose City</option>
          <option value="Dhaka">Dhaka</option>
          <option value="Rajshahi">Rajshahi</option>
          <option value="Rangpur">Rangpur</option>
        </select>
        <br />
        <input
          onChange={(e) => {
            InputOnChange("gender", "Male");
          }}
          checked={formObj.gender === "Male"}
          type="radio"
          name="gender"
        />
        Male
        <input
          onChange={(e) => {
            InputOnChange("gender", "Female");
          }}
          checked={formObj.gender === "Female"}
          type="radio"
          name="gender"
        />
        Female
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormManaging;
