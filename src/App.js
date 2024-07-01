import React from 'react';
import {NavBar} from './Components/NavBar';
import IndividualIntervalsExample from './Components/Carousel';
import Courses from './Components/Course';
import CurriculumSection from './Components/Curriculum';
import {Project} from './Components/Project';
import {Jobprep} from './Components/Jobprep';
import {Career} from './Components/Career'
import { Expert } from './Components/Expert';
import { Contact } from './Components/Contact';
import {Cretificate} from './Components/Certificates';
import { Bonus } from './Components/Bonus';
import { Feature } from './Components/Feature';
import { Review } from './Components/Reviews';
import { Details } from './Components/Details';
import { Book } from './Components/Book';
import { FAQ } from './Components/Faq';
import {Foot} from './Components/Footer';
import { BrowserRouter as Router, Route, Routes,Link} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';



function App() {
  return (  
    <Router>
    <div className="App">
      <NavBar/>
      <Routes>
          <Route path="/" element={
            <>
            <IndividualIntervalsExample/>
      <Courses/>
      <CurriculumSection/>
      <Project/>
      <Jobprep/>
      <Career/>
      <Contact/>
      <Expert/>
      <Bonus/>
      <Feature/>
      <Review/>
      <Cretificate/>
      <Details/>
      <Book/>

            </>} />
          
          <Route path="/faq" element={<FAQ />} />
        </Routes>
       
      <Foot/>      
    </div>
    </Router>
  );
}

export default App;
