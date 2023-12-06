//import Add from "./components / Add";
//import Greetings from "./components / Greetings";
//import { Fragment } from "react";

//import Home from "./components / Home";
//import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/conditional/Main';



// Conditional rendering - ternary operator (? :) sample

function App() {

  return (

    <>
      <Main isLoggedIn={false} />
    </>
  );

}

export default App;
