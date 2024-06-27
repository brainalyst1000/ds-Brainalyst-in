import {Container,Row} from 'react-bootstrap';
import offerimg1 from '../STICKER 3RD ANNIVERSARY.png'
// import './Details.css';

export const Details=()=>{
    return(
        <section className="details" id="details">
        <Container >
            <Row style={{marginTop:'4rem',justifyContent:'center'}}>
                {/* <div className='dtail-div'>
                <div><span>3rd Anniversarry Offer</span></div>
                <div><h1>Master Data Science</h1></div>
                <div>
                <div><span>₹</span></div>
                <div><span>7999</span></div>
                <div>18%GST</div>
                </div>
                <div>
                    <h4>Features</h4>
                    <ul>
                        <li>300+ Hours of Self Placed Material</li>
                        <li>180+ Hours of Live Online Classes by Industry Experts.</li>
                        <li>Classes on Weekdays and Weekend (10:00 AM – 01:00 PM (IST)</li>
                        <li>Dedicated Daily Doubt Sessions from 10:00 AM – 10:00 PM (IST)</li>
                        <li>Dedicated & Exclusive Study Material i.e. Handbooks, Reference Books, Cheat Sheets, Notes, Class Notes & Practice Material.</li>
                        <li>Assignments for every Module, Industry Similar Case Studies & Capstone Projects</li>
                        <li>Resume Building, Mock Interviews & General Aptitude preparation sessions</li>
                        <li>Lifetime LMS Access.</li>
                    </ul>
                </div>
                </div> */}
                <img src={offerimg1} alt="" style={{height:'34rem',width:'38rem'}}/>
            </Row>
        </Container>
    </section>
    )
}