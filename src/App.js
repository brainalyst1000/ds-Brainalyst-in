import {NavBar} from './Components/NavBar';
import IndividualIntervalsExample from './Components/Carousel';
import Courses from './Components/Course';
import CurriculumSection from './Components/Curriculum';
import {Project} from './Components/Project';
import {Jobprep} from './Components/Jobprep';
import {Career} from './Components/Career'
import { Expert } from './Components/Expert';
import { Contact } from './Components/Contact';
import { Bonus } from './Components/Bonus';
import { Feature } from './Components/Feature';
import { Review } from './Components/Reviews';
import { Cretifiacte } from './Components/Certificates';
import { Details } from './Components/Details';
import { Book } from './Components/Book';
import { FAQ } from './Components/Faq';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Banner } from './Components/Banner';

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
      <Contact/>
      <Expert/>
      <Bonus/>
      <Feature/>
      <Review/>
      <Cretifiacte/>
      <Details/>
      <Book/>
      <FAQ/>
      {/* <Banner/> */}
      
    </div>
  );
}

export default App;
