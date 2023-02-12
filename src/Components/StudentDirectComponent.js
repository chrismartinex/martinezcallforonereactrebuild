import { GetStudents } from "../Services/DataServices";
import { Navbar, Container, Row, Col, Nav } from "react-bootstrap";
import "../App.css";
import { useState } from "react";
import { Link } from "react-router-dom";


export default function StudentDirectComponent () {
  let ch8 = "";
  let answr;
const [userInput, setUserInput] = useState("our input is here");
 return (
   <>
     <div className='StudentsImg'>
       <h1 className='letters'>Student Directory</h1>
       <h2 className='letters'>TYPE IN STUDENT NAME</h2>
       <input
         onChange={(e) => {
           console.log(e.target.value);
           answr = e.target.value;
         }}
       ></input>
       <h2 className='letters'>OR TYPE STUDENT LAST NAME</h2>
       <input
         onChange={(e) => {
           //  console.log(e.target.value);
           answr = e.target.value;
           console.log(answr);
         }}
       ></input>
       <h2 className='letters'>OR TYPE EMAIL</h2>
       <input
         onChange={(e) => {
           //  console.log(e.target.value);
           answr = e.target.value;
           console.log(answr);
         }}
       ></input>
       <button
         onClick={async () => {
           console.log("ans", userInput);
           ch8 = await GetStudents(answr);
           setUserInput(ch8);
           console.log("ch8", userInput);
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


