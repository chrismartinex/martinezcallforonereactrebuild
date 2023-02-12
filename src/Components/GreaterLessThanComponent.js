import { GetCompares } from "../Services/DataServices";
import { Navbar, Container, Row, Col, Nav } from "react-bootstrap";
import "../App.css";
import { useState } from "react";
import { Link } from "react-router-dom";


export default function GreaterThanLessComponent (){
 let ch4 = "";
 let answr;
 let answr2;
 const [userInput, setUserInput] = useState("YOUR ANSWER");
  
return (
  <>
    <div className='GreaterThanImg'>
      <h1 className='letters'>GREATER THAN LESS THAN</h1>
      <h2 className='letters'>ENTER FIRST NUMBER</h2>
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
          ch4 = await GetCompares(answr, answr2);
          setUserInput(ch4);
          console.log("ch4", userInput);
          // console.log('userInput', userInput);
        }}
      >
        {" "}
        Button{" "}
      </button>

      <h1 className='letters'>{userInput}</h1>
    </div>
  </>
);

}