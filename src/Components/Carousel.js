import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';
import B1 from '../b1.jpeg';
import B2 from '../b2.jpeg';
import B3 from '../b3.jpeg';

function IndividualIntervalsExample() {
  return (
    <section className='home' id='home'>
    <Carousel>
      <Carousel.Item interval={1000}>
        <img src={B1} alt="Carousel-First-Img"/>
        <Carousel.Caption>
          <h3>Master Data Science and Analytics With</h3>
          <p>Brainalyst's Data
          Science 360 Program</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img src={B2} alt="Carousel-Third-Img" />
        <Carousel.Caption>
          <h3>100% Paid Internship Opportunity on Completion*</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={B3} alt="Carousel-Third-Img" />
        <Carousel.Caption>
          <h3>Master Data Science and Analytics</h3>
          <p>
          #1 Affordable Course
Industry-Relevant Curriculum
450+ Hours of Course Material
Interactive Online Classes
Dedicated & Exclusive Study Material i.e. Handbooks, Reference Books, Cheat Sheets, Notes, Class Notes & Practice Material
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </section>
  );
}

export default IndividualIntervalsExample;