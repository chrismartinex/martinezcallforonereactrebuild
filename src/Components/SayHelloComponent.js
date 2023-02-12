import { GetHello } from "../Services/DataServices";
import { Navbar, Container, Row, Col, Nav } from "react-bootstrap";
import "../App.css";
import {useState} from 'react'

import { Link } from "react-router-dom";

export default function SayHelloComponent (){
  let ch1 = '';
  let answr;
  const [userInput, setUserInput] = useState("our input is here");
 return (
   <div className='SayHelloImg'>
     <h1 className='letters'>Say Hello Challenge</h1>
     <h2 className='letters'>Type in your Name</h2>
     <input
       onChange={(e) => {
         console.log(e.target.value);
         answr = e.target.value;
       }}
     ></input>
     <button
       onClick={async () => {
         console.log("ans", userInput);
         ch1 = await GetHello(answr);
         setUserInput(ch1);

         console.log("ch1", userInput);
         // console.log('userInput', userInput);
       }}
     >
       {" "}
       Button{" "}
     </button>

     <h1 className='letters'>{userInput}</h1>
     <div className='letters'>
 {/* <h1>Chris Martinez / CodeStack Academy © 2023 Copyright</h1> */}
     </div>
   </div>
 );
}
