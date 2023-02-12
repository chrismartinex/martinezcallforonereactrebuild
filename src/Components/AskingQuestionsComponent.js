import { GetQuestions } from "../Services/DataServices";
import { Navbar, Container, Row, Col, Nav } from "react-bootstrap";
import "../App.css";
import { useState } from "react";
import { Link } from "react-router-dom";


export default function AskingQuestionsComponent () {
let ch3 = "";
let answr;
let answr2;
const [userInput, setUserInput] = useState("our input is here");
return (
  <>
    <div className='AskQuestionImg'>
      <h1 className='letters'>Asking Questions Challenge</h1>
      <h2 className='letters'>What is your Name</h2>
      <input
        onChange={(e) => {
          //  console.log(e.target.value);
          answr = e.target.value;
          console.log(answr);
        }}
      ></input>
      <h2 className='letters'>What time you Wake up</h2>
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
          ch3 = await GetQuestions(answr, answr2);
          setUserInput(ch3);
          console.log("ch3", userInput);
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

