import React from "react";

function AddressInput({ value, onChange }) {
  return (
    <div>
      <label htmlFor="address">Address</label>
      <input
        type="text"
        id="address"
        name="address"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default AddressInput;
