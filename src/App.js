//import Add from "./components / Add";
//import Greetings from "./components / Greetings";
//import { Fragment } from "react";

//import Home from "./components / Home";
//import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import States from "./components/States";

// Props sample

function App() {
  const states = [
    {
      name: "Kerala", language: "Malayalam", population: 1000
    },
    {
      name: "Tamil Nadu", language: "Tamil", population: 2000
    },
    {
      name: "Karnataka", language: "Kannada", population: 3000
    },
    {
      name: "Andhrapradesh", language: "Telugu", population: 4000
    },
    {
      name: "Maharashtra", language: "Marathi", population: 5000
    },
  ]

  return (

    <>
      <States states={states} />
    </>
  );

}

export default App;
