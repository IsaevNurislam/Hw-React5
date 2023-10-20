import React from "react";

function AgeInput({ value, onChange }) {
  return (
    <div>
      <label htmlFor="age">Age</label>
      <input
        type="text"
        id="age"
        name="age"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default AgeInput;
