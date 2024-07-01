import React from 'react';
import { Container, Row, Col,Card} from 'react-bootstrap';
import excelImg from '../undraw_segmentation_re_gduq.svg'
import TrackVisibility from 'react-on-screen';

const CurriculumSection = () => {
  return (
    <section className='curriculum' id='Curriculum'>
        <Container className="two_elementor_element">
            <Row>
                  <TrackVisibility>
                  {({ isVisible }) =>
            <div className="course-title"><h2  style={{fontWeight:'600'}} className={isVisible ? 'animate__animated animate__heartBeat' : ''}>Curriculum</h2></div>}
            </TrackVisibility>
                <Col style={{display:'flex',justifyContent:'center',alignItems:'center'}}><Card style={{ width: '20rem', marginBottom:'3rem',display:'flex', justifyContent: 'center',alignItems:'center', }}>
                         <Card.Img variant="top" src={excelImg} style={{maxWidth:"7rem", marginTop:'2rem'}}/>
                       <Card.Body>
                             <Card.Title style={{fontFamily:"'Tahoma', Sans-serif",fontSize:'large',fontWeight:'600',textAlign:'center'}}>Advanced Excel for Data Analytics</Card.Title>
                       </Card.Body>
                   </Card></Col>
                   <Col style={{display:'flex',justifyContent:'center',alignItems:'center'}}><Card style={{ width: '20rem', marginBottom:'3rem',display:'flex', justifyContent: 'center',alignItems:'center', }}>
                         <Card.Img variant="top" src={excelImg} style={{maxWidth:"7rem", marginTop:'2rem'}}/>
                       <Card.Body>
                             <Card.Title style={{fontFamily:"'Tahoma', Sans-serif",fontSize:'large',fontWeight:'600',textAlign:'center'}}>VBA for Macros</Card.Title>
                       </Card.Body>
                   </Card></Col>
                   <Col style={{display:'flex',justifyContent:'center',alignItems:'center'}}><Card style={{ width: '20rem', marginBottom:'3rem',display:'flex', justifyContent: 'center',alignItems:'center', }}>
                         <Card.Img variant="top" src={excelImg} style={{maxWidth:"7rem", marginTop:'2rem'}}/>
                       <Card.Body>
                             <Card.Title style={{fontFamily:"'Tahoma', Sans-serif",fontSize:'large',fontWeight:'600',textAlign:'center'}}>SQL for Data Analytics</Card.Title>
                       </Card.Body>
                   </Card></Col>
                   <Col style={{display:'flex',justifyContent:'center',alignItems:'center'}}><Card style={{ width: '20rem', marginBottom:'3rem',display:'flex', justifyContent: 'center',alignItems:'center', }}>
                         <Card.Img variant="top" src={excelImg} style={{maxWidth:"7rem", marginTop:'2rem'}}/>
                       <Card.Body>
                             <Card.Title style={{fontFamily:"'Tahoma', Sans-serif",fontSize:'large',fontWeight:'600',textAlign:'center'}}>Data Analytics & Visualization with Tableau</Card.Title>
                       </Card.Body>
                   </Card></Col>
                   <Col style={{display:'flex',justifyContent:'center',alignItems:'center'}}><Card style={{ width: '20rem', marginBottom:'3rem',display:'flex', justifyContent: 'center',alignItems:'center', }}>
                         <Card.Img variant="top" src={excelImg} style={{maxWidth:"7rem", marginTop:'2rem'}}/>
                       <Card.Body>
                             <Card.Title style={{fontFamily:"'Tahoma', Sans-serif",fontSize:'large',fontWeight:'600',textAlign:'center'}}>Data Analytics & Visualization with PowerBi</Card.Title>
                       </Card.Body>
                   </Card></Col>
                   <Col style={{display:'flex',justifyContent:'center',alignItems:'center'}}><Card style={{ width: '20rem', marginBottom:'3rem',display:'flex', justifyContent: 'center',alignItems:'center', }}>
                         <Card.Img variant="top" src={excelImg} style={{maxWidth:"7rem", marginTop:'2rem'}}/>
                       <Card.Body>
                             <Card.Title style={{fontFamily:"'Tahoma', Sans-serif",fontSize:'large',fontWeight:'600',textAlign:'center'}}>Data Science with R (Including Machine Learning)</Card.Title>
                       </Card.Body>
                   </Card></Col>
                   <Col style={{display:'flex',justifyContent:'center',alignItems:'center'}}><Card style={{ width: '20rem', marginBottom:'3rem',display:'flex', justifyContent: 'center',alignItems:'center', }}>
                         <Card.Img variant="top" src={excelImg} style={{maxWidth:"7rem", marginTop:'2rem'}}/>
                       <Card.Body>
                             <Card.Title style={{fontFamily:"'Tahoma', Sans-serif",fontSize:'large',fontWeight:'600',textAlign:'center'}}>Data Science with Python (Including Machine Learning)</Card.Title>
                       </Card.Body>
                   </Card></Col>
            </Row>

        </Container>   
    </section>  
  
   
  );
};

export default CurriculumSection;
