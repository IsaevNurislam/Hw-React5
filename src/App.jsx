import React from "react";
import "./App.css";
import BunchInputs from "./components/BunchInputs";

const App = () => {
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <h1>Login form</h1>
        <BunchInputs />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default App;
