import {Container,Row,Col,Button} from 'react-bootstrap';
import careerImgleft from '../careerimg1.jpg';
import './Career.css';
export const Career=()=>{
    return(
        <section className='career' id='career'>
            <Container fluid>
                <Row>
                    <Col><img src={careerImgleft} alt="careerimg" style={{maxHeight:'30rem'}} /></Col>
                    <Col id='cc2'>
                    <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'flex-start'}}>
                    <h2 style={{textAlign:'left',fontSize:'4rem',fontWeight:'800'}} className='animate__animated animate__lightSpeedInRight'>LETS START CAREER HERE!</h2>
                    <p style={{textAlign:'left',fontSize:'1rem',fontWeight:'800'}} className='animate__animated animate__rollIn'>Fast forward your career in Data Science with BRAINALYST.</p>
                    <Button variant="primary" style={{color:'black',background:'#fff'}} className='animate__animated animate__shakeX animate__delay-3s'>Enroll Now</Button>                   
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}