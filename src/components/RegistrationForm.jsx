import React, { useState } from "react";
import EmailInput from "./EmailInput";
import FirstName1Input from "./FirstName1Input";
import LastNameInput from "./LastNameInput";
import PasswordInput from "./PasswordInput";
import AddressInput from "./AddressInput";
import AgeInput from "./AgeInput";
import CityInput from "./CityInput";

function RegistrationForm() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [age, setAge] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [firstNameValid, setFirstNameValid] = useState(true);
  const [lastNameValid, setLastNameValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [addressValid, setAddressValid] = useState(true);
  const [cityValid, setCityValid] = useState(true);
  const [ageValid, setAgeValid] = useState(true);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "firstName") {
      setFirstName(value);
    } else if (name === "lastName") {
      setLastName(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "address") {
      setAddress(value);
    } else if (name === "city") {
      setCity(value);
    } else if (name === "age") {
      setAge(value);
    }
  };

  function handleFormSubmit(e) {
    e.preventDefault();

    if (email === "") {
      setEmailValid(<h5>Поле не должно быть пустым</h5>);
    } else if (!email.includes("@")) {
      setEmailValid(<h5>невалидный email @</h5>);
    } else {
      setEmailValid("");
    }

    if (firstName === "") {
      setFirstNameValid("Поле не должно быть пустым");
    } else {
      setFirstNameValid("");
    }

    if (lastName === "") {
      setLastNameValid("Поле не должно быть пустым");
    } else {
      setLastNameValid("");
    }

    if (password === "") {
      setPasswordValid("Поле не должно быть пустым");
    } else if (password.length < 6) {
      setPasswordValid("Пароль должен привышать 6 символов ");
    } else {
      setPasswordValid("");
    }

    if (address === "") {
      setAddressValid("Поле не должно быть пустым");
    } else {
      setAddressValid("");
    }

    if (city === "") {
      setCityValid("Поле не должно быть пустым");
    } else {
      setCityValid("");
    }

    if (age === "") {
      setAgeValid("Поле не должно быть пустым");
    } else if (age < 18) {
        setAgeValid("Возраст должен привышать 18 лет");
    } else if (age !== typeof Number) {
        setAgeValid("только числа!");
    } else {
      setAgeValid("");
    }
  }

  return (
    <form>
      <h1>Login Form</h1>
      <div className="container">
        <FirstName1Input value={firstName} onChange={handleInputChange} />

        <h5>{firstNameValid}</h5>

        <LastNameInput value={lastName} onChange={handleInputChange} />

        <h5>{lastNameValid}</h5>

        <EmailInput value={email} onChange={handleInputChange} />

        <h5>{emailValid}</h5>

        <PasswordInput value={password} onChange={handleInputChange} />

        <h5>{passwordValid}</h5>

        <AddressInput value={address} onChange={handleInputChange} />

        <h5>{addressValid}</h5>

        <AgeInput value={age} onChange={handleInputChange} />

        <h5>{ageValid}</h5>

        <CityInput value={city} onChange={handleInputChange} />

        <h5>{cityValid}</h5>

        <button type="submit" onClick={handleFormSubmit}>
          Register
        </button>
      </div>
    </form>
  );
}

export default RegistrationForm;
