import React from "react";
import Input from "./Input";

function Bunch() {
  return (
    <div>
      <Input
        labelText="First name"
        type="text"
        error1="Поле не должно быть пустым"
      />
      <Input
        labelText="Last name"
        type="text"
        error1="Поле не должно быть пустым"
      />
      <Input
        labelText="Email"
        type="email"
        error1="Поле не должно быть пустым"
      />
      <Input
        labelText="Password"
        type="password"
        error1="Поле не должно быть пустым"
      />
      <Input
        labelText="Address"
        type="text"
        error1="Поле не должно быть пустым"
      />
      <Input
        labelText="Age"
        type="number"
        error1="Поле не должно быть пустым"
      />
      <Input
        labelText="City"
        type="text"
        error1="Поле не должно быть пустым"
      />
    </div>
  );
}

export default Bunch;
