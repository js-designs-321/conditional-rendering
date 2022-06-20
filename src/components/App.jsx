import React from "react";
import Login from "./Login";

var loggedIn = true; 

function Display(){
    if(loggedIn){
      return <h1>Hello</h1>; 
    }else{
      return <Login />; 
    }
}

function App() {
  return (
    <div className="container">
      {Display()}
    </div>
  );
}

export default App;
