//import Add from "./components / Add";
//import Greetings from "./components / Greetings";
//import { Fragment } from "react";

import Home from "./components/Home";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
function App() {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    if (count === 0) {
      setCount(count);
    }
    else {
      setCount(count - 1);
    }

  }
  // const userInfo = [
  //   {
  //     userName: "Sanath",
  //     email: "test1@gmail.com",
  //     location: "UAE"
  //   },
  //   {
  //     userName: "Manaf",
  //     email: "test2@gmail.com",
  //     location: "UK"
  //   },
  //   {
  //     userName: "Nazween",
  //     email: "test3@gmail.com",
  //     location: "USA"
  //   }
  // ]
  return (
    <>
      <h1>Counter is {count} </h1>
      <br />
      <br />
      <Button onClick={increment} className="m-2 bg-success">+</Button >
      <Button onClick={decrement} className="m-2 bg-danger" > -</Button >
      {/* {userInfo.map(user => (
        <ul key={Math.random() * 10} >
          <li>{user.userName}</li>
          <li>{user.email}</li>
          <li>{user.location}</li>

        </ul >

      ))
      } */}
      < Home />
    </>
  );
  // const myName = "Sanath Abdul Manaf";
  // const multiply = (a, b) => a * b;
  // const specialCalss = "simple-class"

  // return (
  //   <>
  //     <h1>{myName}</h1>
  //     <p>2*2 = {multiply(2, 2)} (multiply function)</p>
  //     <p>2*2 = {2 * 2}</p>
  //     <p>My friends list : {["Nisha", "Roshna", "Shabna"]}</p>
  //     <p className={specialCalss}>This is special class className</p >
  //     {/* <Add />
  //     <Greetings /> */}

  //   </>
  // );

}

export default App;
