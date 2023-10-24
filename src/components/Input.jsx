import React, { useState } from "react";

const Input = ({ labelText, type, error1 }) => {
  const [inputsValue, setInputsValue] = useState("");
  const [error, setError] = useState("");

  const changeInputHandler = (e) => {

    setInputsValue(e.target.value);

    if (labelText === "Email") {
      if (e.target.value.includes("@")) {
        setError("");
      } else {
        setError("invalid email @");
      }
    }
    if (labelText === "Password") {
      if (inputsValue.length > 6) {
        setError("");
      } else {
        setError("The input must be at least 6 characters long");
      }
    }
    if (labelText === "City") {
      if (inputsValue.length >= 4) {
        setError("");
      }
    }
    if (labelText === "Age") {
      if (e.target.value >= 18) {
        setError("");
      } else {
        setError("The value must be between 18");
      }
    }
  };

  return (
    <>
      <label>
        {labelText} <br />{" "}
      </label>
      <input
        id={labelText}
        type={type ? type : "text"}
        value={inputsValue}
        onChange={changeInputHandler}
      />
      {inputsValue === "" ? <p>{error1}</p> : ""}
      <p>{error}</p>
    </>
  );
};
export default Input;
