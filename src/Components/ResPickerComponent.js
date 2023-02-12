import { GetRestaurant } from "../Services/DataServices";
import { Navbar, Container, Row, Col, Nav } from "react-bootstrap";
import "../App.css";
import {useState} from 'react'
import { Link } from "react-router-dom";


export default function RespickerComponent (){
  let ch9 = "";
  let answr;
  const [userInput, setUserInput] = useState("our input is here");
return (
  <>
    <div className='ReverseImg'>
      <h1>Restaurant Picker</h1>
      <input
        onChange={(e) => {
          console.log(e.target.value);
          answr = e.target.value;
        }}
      ></input>

      <button
        onClick={async () => {
          console.log("ans", userInput);
          ch9 = await GetRestaurant(answr);
          setUserInput(ch9);
          console.log("ch9", userInput);
          //  console.log('userInput', userInput);
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