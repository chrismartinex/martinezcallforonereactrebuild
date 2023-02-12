import { GetOddEven } from "../Services/DataServices";
import { Navbar, Container, Row, Col, Nav } from "react-bootstrap";
import "../App.css";
import { useState } from "react";

import { Link } from "react-router-dom";


export default function OddOrEvenComponent() {
  let ch6 = "";
  let answr;
  const [userInput, setUserInput] = useState("our input is here");
 return (
   <>
     <div className='OddOrEvenImg'>
       <h1 className='letters'>ODD OR 3V3N TYP3 IN A NUMB3R</h1>
       <input
         onChange={(e) => {
           console.log(e.target.value);
           answr = e.target.value;
         }}
       ></input>

       <button
         onClick={async () => {
           console.log("ans", userInput);
           ch6 = await GetOddEven(answr);
           setUserInput(ch6);
           console.log("ch6", userInput);
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