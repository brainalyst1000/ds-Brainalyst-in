import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Container,Row,Col} from 'react-bootstrap';
import mentor1 from '../sir2.png.webp';
import mentor2 from '../rohan.jpg.webp';
import mentor3 from '../Ratnesh.jpg.webp';
import mentor4 from '../Arpit.jpg.webp';
import mentor5 from '../Shweta.jpg.webp';
import mentor6 from '../shaurab-768x768.jpg.webp';
import './Expert.css';

export const Expert=()=>{
    const responsive = {
        superLargeDekstop:{
        
            breakpoint:{max:4000,min:3000},
            items:5
        },
        desktop:{
            breakpoint:{max:3000,min:1024},
            items:3
        },
        tablet:{
            breakpoint:{max:1024,min:464},
            items:2
        },
        mobile:{
            breakpoint:{max:464,min:0},
            items:1
        }
    };

    return(
        <section className='expert' id='expert'>
            <Container>
                <Row>
                    <Col>
                    <div className="expert-bx">
                        <h2>Mentors & Expert</h2>
                        <hr />
                    <Carousel responsive={responsive} infinite={true} className="expert-slider">
                        <div className="items"><img src={mentor1} alt="mentors" /><h5>FOUNDER - BRAINALYST</h5><p>Nitin Sharma</p></div>
                        <div className="items"><img src={mentor2} alt="mentors" /><h5>DATA SCIENTIST AT CBRE</h5><p>Rohan Saini</p></div>
                        <div className="items"><img src={mentor3} alt="mentors" /><h5>DATA SCIENTIST | PROBLEM SOLVER</h5><p>Ratnesh Kumar</p></div>
                        <div className="items"><img src={mentor4} alt="mentors" /><h5>CERTIFIED BIG DATA SCIENTIST</h5><p>Arpit Goel</p></div>
                        <div className="items"><img src={mentor5} alt="mentors" /><h5>DATA ENGINEER AT WALMART</h5><p>Sweta Agarwal</p></div>
                        <div className="items"><img src={mentor6} alt="mentors" /><h5>ASSOCIATE DIRECTOR @ UBS</h5><p>Saurabh Kulkarni</p></div>

                    </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}