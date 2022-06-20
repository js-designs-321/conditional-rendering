import React from "react";
import Form from "./Form";

var userIsRegistered = true;

function App() {
  return (
    <div className="container">
      {(userIsRegistered && <Form buttonValue = "Login"/>) || (<Form buttonValue = "Register"/>)}
    </div>
  );
}

export default App;
