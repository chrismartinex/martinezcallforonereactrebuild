import { GetReverseIt } from "../Services/DataServices";
import { Navbar, Container, Row, Col, Nav } from "react-bootstrap";
import "../App.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ReverseComponent () {
  let ch7 = "";
  let answr;
  const [userInput, setUserInput] = useState("our input is here");
 return (
   <>
     <div className='ReverseImg'>
       <h1 className='letters'>R3V3RS3 IT CHALLENGE</h1>
       <h2 className='letters'>TYPE IN A NUMB3R</h2>
       <input
         onChange={(e) => {
           console.log(e.target.value);
           answr = e.target.value;
         }}
       ></input>
       <button
         onClick={async () => {
           console.log("ans", userInput);
           ch7 = await GetReverseIt(answr);
           setUserInput(ch7);
           console.log("ch7", userInput);
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