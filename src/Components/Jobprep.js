import {Container,Row,Col,Card} from 'react-bootstrap';
import jobprepimg1 from '../cv_8347432.png';
import jobprepimg2 from '../electronics_1773765.png';
import jobprepimg3 from '../appointment-book_4694809.png';
import jobprepimg4 from '../networking_6038728.png';
import jobprepimg5 from '../share-link_1389029.png';
import jobprepimg6 from '../undraw_job_hunt_re_q203.svg';
import { isVisible } from '@testing-library/user-event/dist/utils';
import TrackVisibility from 'react-on-screen';

export const Jobprep=()=>{
    return(
        <section className='Jobprep' id='jobprep'>
            <Container>
                <Row><TrackVisibility>
                {({ isVisible }) =>
                <div className="course-title"><h2 style={{fontWeight:'600'}} className={isVisible ?'animate__animated animate__flipInY' : ''}>Job Prepration</h2></div>}
                </TrackVisibility><hr />
                  
                <Col style={{display:'flex',justifyContent:'center',alignItems:'center'}}><Card style={{ width: '20rem', marginBottom:'3rem',display:'flex', justifyContent: 'center',alignItems:'center' }}>
                         <Card.Img variant="top" src={jobprepimg1} style={{maxWidth:"7rem", marginTop:'2rem'}} />
                       <Card.Body>
                             <Card.Title style={{fontFamily:"'Tahoma', Sans-serif",textAlign:'center',fontSize:'large',fontWeight:'600'}}>Resume Building</Card.Title>
                       </Card.Body>
                   </Card></Col>
                   <Col style={{display:'flex',justifyContent:'center',alignItems:'center'}}><Card style={{ width: '20rem', marginBottom:'3rem',display:'flex', justifyContent: 'center',alignItems:'center' }}>
                         <Card.Img variant="top" src={jobprepimg2} style={{maxWidth:"7rem", marginTop:'2rem'}} />
                       <Card.Body>
                             <Card.Title style={{fontFamily:"'Tahoma', Sans-serif",textAlign:'center',fontSize:'large',fontWeight:'600'}}>Industry Mentorship Session</Card.Title>
                       </Card.Body>
                   </Card></Col>
                   <Col style={{display:'flex',justifyContent:'center',alignItems:'center'}}><Card style={{ width: '20rem', marginBottom:'3rem',display:'flex', justifyContent: 'center',alignItems:'center' }}>
                         <Card.Img variant="top" src={jobprepimg3} style={{maxWidth:"7rem", marginTop:'2rem'}} />
                       <Card.Body>
                             <Card.Title style={{fontFamily:"'Tahoma', Sans-serif",textAlign:'center',fontSize:'large',fontWeight:'600'}}>General Aptitude preparation sessions</Card.Title>
                       </Card.Body>
                   </Card></Col>
                   <Col style={{display:'flex',justifyContent:'center',alignItems:'center'}}><Card style={{ width: '20rem', marginBottom:'3rem',display:'flex', justifyContent: 'center',alignItems:'center' }}>
                         <Card.Img variant="top" src={jobprepimg4} style={{maxWidth:"7rem", marginTop:'2rem'}} />
                       <Card.Body>
                             <Card.Title style={{fontFamily:"'Tahoma', Sans-serif",textAlign:'center',fontSize:'large',fontWeight:'600'}}>Github Repository Building Course</Card.Title>
                       </Card.Body>
                   </Card></Col>
                   <Col style={{display:'flex',justifyContent:'center',alignItems:'center'}}><Card style={{ width: '20rem', marginBottom:'3rem',display:'flex', justifyContent: 'center',alignItems:'center' }}>
                         <Card.Img variant="top" src={jobprepimg5} style={{maxWidth:"7rem", marginTop:'2rem'}} />
                       <Card.Body>
                             <Card.Title style={{fontFamily:"'Tahoma', Sans-serif",textAlign:'center',fontSize:'large',fontWeight:'600'}}>Linkedin Profile Building Course</Card.Title>
                       </Card.Body>
                   </Card></Col>
                   <Col style={{display:'flex',justifyContent:'center',alignItems:'center'}}><Card style={{ width: '20rem', marginBottom:'3rem',display:'flex', justifyContent: 'center',alignItems:'center' }}>
                         <Card.Img variant="top" src={jobprepimg6} style={{maxWidth:"7rem", marginTop:'2rem'}} />
                       <Card.Body>
                             <Card.Title style={{fontFamily:"'Tahoma', Sans-serif",textAlign:'center',fontSize:'large',fontWeight:'600'}}>Mock Interview</Card.Title>
                       </Card.Body>
                   </Card></Col>
                </Row>
             </Container>
        </section>
    )
}
