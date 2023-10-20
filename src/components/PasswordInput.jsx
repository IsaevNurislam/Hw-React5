import React from "react";

function PasswordInput({ value, onChange }) {
    return (
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }
  export default PasswordInput