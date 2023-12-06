//import Add from "./components / Add";
//import Greetings from "./components / Greetings";
//import { Fragment } from "react";

//import Home from "./components / Home";
//import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';



// Conditional rendering - ternary operator (? :) sample

function App() {
  let number = 0;
  return (

    <>
      {number > 0 ? <h1>Positive number </h1> : number < 0 ? <h1>Negative number</h1> : <h1>Zero</h1>}
    </>
  );

}

export default App;
