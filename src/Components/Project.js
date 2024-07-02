import {Container,Row,Col,Card} from 'react-bootstrap';
import project1 from '../project1img.svg';
import project2 from '../project2img.svg';
import project3 from '../project3img.svg';
import TrackVisibility from 'react-on-screen';


export const Project=()=>{
    return(
        <section className='project' id='project'>
            <Container>
                <Row>
                    <TrackVisibility>
                    {({ isVisible }) =>
                <div className="course-title"><h2 style={{display:'flex',justifyContent:'center',alignItems:'center',fontWeight:'600'}} className={isVisible ? 'animate__animated animate__bounce' : ''}>Project</h2></div>}
                </TrackVisibility><hr />
                <Col style={{display:'flex',justifyContent:'center',alignItems:'center'}}><Card style={{ width: '20rem', marginBottom:'3rem',display:'flex', justifyContent: 'center',alignItems:'center' }}>
                         <Card.Img variant="top" src={project1} style={{maxWidth:"7rem", marginTop:'2rem'}} />
                       <Card.Body>
                             <Card.Title style={{fontFamily:"'Tahoma', Sans-serif",textAlign:'center',fontSize:'large',fontWeight:'600'}}>100+ Assignments</Card.Title>
                       </Card.Body>
                   </Card></Col>
                   <Col style={{display:'flex',justifyContent:'center',alignItems:'center'}}><Card style={{ width: '20rem', marginBottom:'3rem',display:'flex', justifyContent: 'center',alignItems:'center' }}>
                         <Card.Img variant="top" src={project2} style={{maxWidth:"7rem", marginTop:'2rem'}} />
                       <Card.Body>
                             <Card.Title style={{fontFamily:"'Tahoma', Sans-serif",textAlign:'center',fontSize:'large',fontWeight:'600'}}>50+ Industry Relevant Case Studies</Card.Title>
                       </Card.Body>
                   </Card></Col>
                   <Col style={{display:'flex',justifyContent:'center',alignItems:'center'}}><Card style={{ width: '20rem', marginBottom:'3rem',display:'flex', justifyContent: 'center',alignItems:'center' }}>
                         <Card.Img variant="top" src={project3} style={{maxWidth:"7rem", marginTop:'2rem'}} />
                       <Card.Body>
                             <Card.Title style={{fontFamily:"'Tahoma', Sans-serif",textAlign:'center',fontSize:'large',fontWeight:'600'}}>2 Capstone Projects</Card.Title>
                       </Card.Body>
                   </Card></Col>
                </Row>
            </Container>
        </section>
    )
}
