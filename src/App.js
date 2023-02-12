
import "./App.css";
import { Button } from "react-bootstrap";
import React, { useState } from "react";
import {
  GetHello,
  GetNumbers,
  GetQuestions,
  GetCompares,
  GetMadLib,
  GetOddEven,
  GetReverseIt,
  GetStudents,
  GetRestaurant,
} from "./Services/DataServices";
import LandingPageComponent from "./Components/LandingPageComponent";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SayHelloComponent from "./Components/SayHelloComponent";
import AddNumbersComponent from "./Components/AddNumbersComponent";
import AskingQuestionsComponent from "./Components/AskingQuestionsComponent";
import GreaterThanLessComponent from "./Components/GreaterLessThanComponent";
import MadLibComponent from "./Components/MadLibComponent";
import OddOrEvenComponent from "./Components/OddOrEvenComponent";
import ReverseComponent from "./Components/ReverseComponent";
import StudentDirectComponent from "./Components/StudentDirectComponent";
import RespickerComponent from "./Components/ResPickerComponent";

// let ch1;


function App() {
  return (
    <BrowserRouter>
      <h1 className="letters">ALL FOR ONE MINI CHALLENGES</h1>
      <Routes>
        <Route path='/' element={<LandingPageComponent />}></Route>
        <Route path='SayHello' element={<SayHelloComponent />}></Route>
        <Route path='AddTwoNumbers' element={<AddNumbersComponent />}></Route>
        <Route path='Asking Questions'element={<AskingQuestionsComponent />}></Route>
        <Route path='GreaterThanLessThan'element={<GreaterThanLessComponent/>}></Route>
        <Route path='MadLib'element={<MadLibComponent/>}></Route>
        <Route path='OddOrEvenThen'element={<OddOrEvenComponent/>}></Route>
        <Route path='ReverseIt'element={<ReverseComponent/>}></Route>
        <Route path='StudentDirectory'element={<StudentDirectComponent/>}></Route>
        <Route path='ResPicker'element={<RespickerComponent/>}></Route>



      </Routes>
    </BrowserRouter>
  );
}
// const [count, setCount] = useState(5);
  // const [inputfield, setInputfield] = useState("");
export default App;
 