import { GetMadLib } from "../Services/DataServices";
import { Navbar, Container, Row, Col, Nav } from "react-bootstrap";
import "../App.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function MadLibComponent (){
  let ch5 = "";
  let answr;
  let answr2;
  let answr3;
  let answr4;
  let answr5;
  let answr6;
  let answr7;
  let answr8;
  let answr9;
  let answr10;
  let answr11;
  const [userInput, setUserInput] = useState("our input is here");
 return (
   <>
     <div className='MadLibImg'>
       <h1>Mad Lib</h1>
       <h2 className='letters'>ENTER A WEATHER TYPE</h2>
       <input
         onChange={(e) => {
           //  console.log(e.target.value);
           answr = e.target.value;
           console.log(answr);
         }}
       ></input>
       <h2 className='letters'>ENTER A DAY</h2>
       <input
         onChange={(e) => {
           // console.log(e.target.value);
           answr2 = e.target.value;
           console.log(answr2);
         }}
       ></input>
       <h2 className='letters'>ENTER A TIME</h2>
       <input
         onChange={(e) => {
           // console.log(e.target.value);
           answr3 = e.target.value;
           console.log(answr2);
         }}
       ></input>
       <h2 className='letters'>ENTER A NATIONAL PARK</h2>
       <input
         onChange={(e) => {
           // console.log(e.target.value);
           answr4 = e.target.value;
           console.log(answr2);
         }}
       ></input>
       <h2 className='letters'>ENTER A FAVORITE CELEBRATY</h2>
       <input
         onChange={(e) => {
           // console.log(e.target.value);
           answr5 = e.target.value;
           console.log(answr2);
         }}
       ></input>
       <h2 className='letters'>ENTER YOUR NAME</h2>
       <input
         onChange={(e) => {
           // console.log(e.target.value);
           answr6 = e.target.value;
           console.log(answr2);
         }}
       ></input>
       <h2 className='letters'>ENTER FAVORITE SUPERHERO</h2>
       <input
         onChange={(e) => {
           // console.log(e.target.value);
           answr7 = e.target.value;
           console.log(answr2);
         }}
       ></input>
       <h2 className='letters'>ENTER DESSERT</h2>
       <input
         onChange={(e) => {
           // console.log(e.target.value);
           answr8 = e.target.value;
           console.log(answr2);
         }}
       ></input>
       <h2 className='letters'>ENTER A COUNTRY</h2>
       <input
         onChange={(e) => {
           // console.log(e.target.value);
           answr9 = e.target.value;
           console.log(answr2);
         }}
       ></input>
       <h2 className='letters'>ENTER A FAVORITE BEER</h2>
       <input
         onChange={(e) => {
           // console.log(e.target.value);
           answr10 = e.target.value;
           console.log(answr2);
         }}
       ></input>
       <h2 className='letters'>ENTER A DAY</h2>
       <input
         onChange={(e) => {
           // console.log(e.target.value);
           answr11 = e.target.value;
           console.log(answr2);
         }}
       ></input>

       <button
         onClick={async () => {
           console.log("ans", userInput);
           ch5 = await GetMadLib(answr, answr2);
           setUserInput(ch5);
           console.log("ch5", userInput);
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