import {Container,Row,Col,Button} from 'react-bootstrap';
import careerImgleft from '../careerimg1.jpg';
import './Career.css';
import TrackVisibility from 'react-on-screen';
import { ArrowRightCircle } from "react-bootstrap-icons"
export const Career=()=>{
    return(
        <section className='career' id='career'>
            <Container fluid>
                <Row>
                    <Col><img src={careerImgleft} alt="careerimg" style={{maxHeight:'30rem'}} /></Col>
                    <Col id='cc2'>
                    <TrackVisibility>
                    {({ isVisible }) => 
                    <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'flex-start'}}>
                    <h2 style={{textAlign:'left',fontSize:'4rem',fontWeight:'800'}} className={isVisible ? 'animate__animated animate__lightSpeedInRight':''}>LETS START CAREER HERE!</h2>
                    <p style={{textAlign:'left',fontSize:'1rem',fontWeight:'800'}} className={isVisible ? 'animate__animated animate__rollIn':''}>Fast forward your career in Data Science with BRAINALYST.</p>
                    <Button onClick={()=> document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} style={{color:'#ffff',background:'#0000',border:'none'}} className={isVisible ? 'animate__animated animate__shakeX animate__delay-3s':''}>Let's Connect <ArrowRightCircle size={25}/></Button>                   
                    </div>}
                    </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}