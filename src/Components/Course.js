import { Container,Row,Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import student from '../undraw_reading_book_re_kqpk.svg';
import Graduate from '../undraw_teacher_re_sico.svg';
import experienced from '../undraw_project_completed_re_jr7u.svg';
import './Course.css';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

function Courses() {
  return (
    <section className='course' id='course'>
        <Container>
            <Row className='justify-content-cemter'>
              <TrackVisibility>
              {({ isVisible }) => 
                <div className="course-title"><h2 style={{fontWeight:'600'}} className={isVisible ? 'animate__animated animate__fadeInLeft' : ''}>This Course Is Specially Curated for ?</h2></div>}
                </TrackVisibility><hr />           
                <Col>
                <div className="card-container">
                <Card style={{ width: '20rem', marginBottom:'3rem',display:'flex', justifyContent: 'center',alignItems:'center' }}>
                         <Card.Img variant="top" src={student} style={{maxWidth:"7rem", marginTop:'2rem'}} />
                       <Card.Body>
                        <div className="card-overlay">
                             <Card.Title style={{fontFamily:"'Tahoma', Sans-serif",textAlign:'center',fontSize:'large',fontWeight:'600'}}>Students</Card.Title>
                           <Card.Text style={{fontSize:14,fontWeight:'400'}}>
                           It is a perfect option for learners those want to start or transition their career as Data Analyst, Data Scientist, Business Analyst or ML Engineer.
                           </Card.Text>
                           </div>                          
                       </Card.Body>
                   </Card>
                   </div>
                   </Col>
                <Col>
                <div className="card-container">
                <Card style={{ width: '20rem', marginBottom:'3rem',display:'flex', justifyContent: 'center',alignItems:'center' }}>
                         <Card.Img variant="top" src={Graduate} style={{maxWidth:"7rem", marginTop:'2rem'}}/>
                       <Card.Body><div className="card-overlay">
                             <Card.Title style={{fontFamily:"'Tahoma', Sans-serif",textAlign:'center',fontSize:'large',fontWeight:'600'}}>Fresher Graduate</Card.Title>
                           <Card.Text style={{fontSize:14,fontWeight:'400'}}>
                             Get the knowledge and experience required for your dream data analytics, data science, artificial intelligence, big data, or cloud computing job.
                           </Card.Text></div>                         
                       </Card.Body>
                   </Card></div></Col>
                <Col>
                <div className="card-container">
                <Card style={{ width: '20rem', marginBottom:'3rem',display:'flex', justifyContent: 'center',alignItems:'center'}}>
                         <Card.Img variant="top" src={experienced} style={{maxWidth:"7rem", marginTop:'2rem'}}/>
                       <Card.Body><div className="card-overlay">
                             <Card.Title style={{fontFamily:"'Tahoma',textAlign:'center', Sans-serif",fontSize:'large',fontWeight:'600'}}>Experienced Professional</Card.Title>
                           <Card.Text style={{fontSize:14,fontWeight:'400'}}>
                           Deep dive into the world of data science with the right blend of tools, techniques, and projects. Start your dream career/transition as a data analyst, data scientist, ML engineer, etc.
                           </Card.Text></div>                           
                       </Card.Body>
                   </Card></div></Col>                   
            </Row>
        </Container>
    </section>
  );
}

export default Courses;