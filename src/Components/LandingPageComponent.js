import "../App.css";
import { Navbar, Container, Row, Col, Nav, Header, Button,  } from "react-bootstrap";
// import { SayHello } from '../Assets/SayHello.png';
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";


// export default function LandingPageComponent() {
//  return (
//   <div className="backgroundImage">

//   </div>
//   )
// }

 export default function LandingPageComponent(){
 return (

   <div className='backImg'>
     <div className='letters'>
     <Row>
         <Col>
           <h1 className='letters'>
             <Nav.Item>
               <Nav.Link as={Link} to='SayHello'>
                 Say Hello Mini Challenge
               </Nav.Link>
             </Nav.Item>
           </h1>
         </Col>
         <Col>
           <h1>
             <Nav.Item>
               <Nav.Link as={Link} to='AddTwoNumbers'>
                 Add Two Numbers Challenge
               </Nav.Link>
             </Nav.Item>
           </h1>
         </Col>
         <Col>
           <h1>
             <Nav.Item>
               <Nav.Link as={Link} to='Asking Questions'>
                 Asking Questions
               </Nav.Link>
             </Nav.Item>
           </h1>
         </Col>
         <Col>
           <h1>
             <Nav.Item>
               <Nav.Link as={Link} to='GreaterThanLessThan'>
                 Greater Than Less Than
               </Nav.Link>
             </Nav.Item>
           </h1>
         </Col>
         <Col>
           <h1>
             <Nav.Item>
               <Nav.Link as={Link} to='MadLib'>
                 Mad Lib
               </Nav.Link>
             </Nav.Item>
           </h1>
         </Col>
         <Col>
           <h1>
             <Nav.Item>
               <Nav.Link as={Link} to='OddOrEvenThen'>
                 Odd or Even THen
               </Nav.Link>
             </Nav.Item>
           </h1>
         </Col>
         <Col>
           <h1>
             <Nav.Item>
               <Nav.Link as={Link} to='ReverseIt'>
                 Reverse It
               </Nav.Link>
             </Nav.Item>
           </h1>
         </Col>
         <Col>
           <h1>
             <Nav.Item>
               <Nav.Link as={Link} to='StudentDirectory'>
                 Student Directory
               </Nav.Link>
             </Nav.Item>
           </h1>
         </Col>
         <Col>
           <h1>
             <Nav.Item>
               <Nav.Link as={Link} to='ResPicker'>
                 Restaurant Picker
               </Nav.Link>
             </Nav.Item>
           </h1>
         </Col>
       </Row>
     </div>
   </div>
 );
}
