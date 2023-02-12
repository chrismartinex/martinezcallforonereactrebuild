import { GetNumbers } from "../Services/DataServices";
import { Navbar, Container, Row, Col, Nav } from "react-bootstrap";
import "../App.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function AddNumbersComponent() {
  let ch2 = "";
  let answr;
  let answr2;
  const [userInput, setUserInput] = useState("Your Total is");
  
  return (
    <div className='AddNumbersImg'>
      <h1 className="letters" >+ ADD 2 NUMBERS TOGETHER</h1>
      <h2 className="letters">ENTER FIRST NUMBER</h2>
      <input
        onChange={(e) => {
          //  console.log(e.target.value);
          answr = e.target.value;
          console.log(answr);
        }}
      ></input>
      <h2 className='letters'>ENTER SECOND NUMBERS</h2>
      <br></br>
      <input
        onChange={(e) => {
          // console.log(e.target.value);
          answr2 = e.target.value;
          console.log(answr2);
        }}
      ></input>

      <button
        onClick={async () => {
          console.log("ans", userInput);
          ch2 = await GetNumbers(answr, answr2);
          setUserInput(ch2);
          console.log("ch2", userInput);
          // console.log('userInput', userInput);
        }}
      >
        {" "}
        Button{" "}
      </button>

      <h1 className='letters'>{userInput}</h1>
    </div>
  );
}
