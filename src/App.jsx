import React from "react";
import "./App.css";
import BunchInputs from "./components/BunchInputs";

const App = () => {
  return (
    <div>
      <form action="">
        <h1>Login form</h1>
        <BunchInputs />
        <button>Register</button>
      </form>
    </div>
  );
};

export default App;
