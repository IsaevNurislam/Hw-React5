import React from "react";

function FirstName1Input({ value, onChange }) {
  return (
    <div>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
export default FirstName1Input;
