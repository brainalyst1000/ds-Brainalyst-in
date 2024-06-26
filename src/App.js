import {NavBar} from './Components/NavBar';
import IndividualIntervalsExample from './Components/Carousel';
import Courses from './Components/Course';
import CurriculumSection from './Components/Curriculum';
import {Project} from './Components/Project';
import {Jobprep} from './Components/Jobprep';
import {Career} from './Components/Career'
// import { Banner } from './Components/Banner';
import { Contact } from './Components/Contact';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <IndividualIntervalsExample/>
      <Courses/>
      <CurriculumSection/>
      <Project/>
      <Jobprep/>
      <Career/>
      {/* <Banner/> */}
      <Contact/>
      
    </div>
  );
}

export default App;
