import {Container,Row, Col,Card} from 'react-bootstrap';
import bonusImg1 from '../undraw_chat_bot_re_e2gj.svg';
import bonusImg2 from '../undraw_business_chat_re_gg4h.svg';
import bonusImg3 from '../undraw_referral_re_0aji.svg';
import bonusImg4 from '../undraw_certificate_re_yadi.svg';
import bonusImg5 from '../undraw_hacker_mind_-6-y85.svg';
import bonusImg6 from '../undraw_access_account_re_8spm.svg'

export const Bonus=()=>{
    return(
        <section className="bonus" id="bonus">
            <hr />
            <Container>
                <Row>
                    <div className="course-title"><h2 style={{fontWeight:'600',textDecoration:'underline'}}>Additional Bonus</h2></div>                    
                    
                      <Col style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <Card style={{ width: '20rem', marginBottom:'3rem',display:'flex', justifyContent: 'center',alignItems:'center' }}>
                         <Card.Img variant="top" src={bonusImg1} style={{maxWidth:"7rem", marginTop:'2rem'}} />
                           <Card.Body>
                             <Card.Title style={{fontFamily:"'Tahoma', Sans-serif",textAlign:'center',fontSize:'large',fontWeight:'600'}}>Full Generative AI Course</Card.Title>
                          </Card.Body>
                       </Card>
                   </Col>
                   <Col style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <Card style={{ width: '20rem', marginBottom:'3rem',display:'flex', justifyContent: 'center',alignItems:'center' }}>
                         <Card.Img variant="top" src={bonusImg2} style={{maxWidth:"7rem", marginTop:'2rem'}} />
                           <Card.Body>
                             <Card.Title style={{fontFamily:"'Tahoma', Sans-serif",textAlign:'center',fontSize:'large',fontWeight:'600'}}>
                             Complete the Self-Paced Course in 100 Days and get a 100% Paid Internship for one Month.</Card.Title>
                          </Card.Body>
                       </Card>
                   </Col>
                   <Col style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <Card style={{ width: '20rem', marginBottom:'3rem',display:'flex', justifyContent: 'center',alignItems:'center' }}>
                         <Card.Img variant="top" src={bonusImg3} style={{maxWidth:"7rem", marginTop:'2rem'}} />
                           <Card.Body>
                             <Card.Title style={{fontFamily:"'Tahoma', Sans-serif",textAlign:'center',fontSize:'large',fontWeight:'600'}}>Reffral Bonus</Card.Title>
                          </Card.Body>
                       </Card>
                   </Col>
                   <Col style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <Card style={{ width: '20rem', marginBottom:'3rem',display:'flex', justifyContent: 'center',alignItems:'center' }}>
                         <Card.Img variant="top" src={bonusImg4} style={{maxWidth:"7rem", marginTop:'2rem'}} />
                           <Card.Body>
                             <Card.Title style={{fontFamily:"'Tahoma', Sans-serif",textAlign:'center',fontSize:'large',fontWeight:'600'}}>Course Completion & Internship Certificate</Card.Title>
                          </Card.Body>
                       </Card>
                   </Col>
                   <Col style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <Card style={{ width: '20rem', marginBottom:'3rem',display:'flex', justifyContent: 'center',alignItems:'center' }}>
                         <Card.Img variant="top" src={bonusImg5} style={{maxWidth:"7rem", marginTop:'2rem'}} />
                           <Card.Body>
                             <Card.Title style={{fontFamily:"'Tahoma', Sans-serif",textAlign:'center',fontSize:'large',fontWeight:'600'}}>Access to Hackthons,Coding Competitions & Webinars On Completion of This Course </Card.Title>
                          </Card.Body>
                       </Card>
                   </Col>
                   <Col style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <Card style={{ width: '20rem', marginBottom:'3rem',display:'flex', justifyContent: 'center',alignItems:'center' }}>
                         <Card.Img variant="top" src={bonusImg6} style={{maxWidth:"7rem", marginTop:'2rem'}} />
                           <Card.Body>
                             <Card.Title style={{fontFamily:"'Tahoma', Sans-serif",textAlign:'center',fontSize:'large',fontWeight:'600'}}>Life-Time LMS Access</Card.Title>
                          </Card.Body>
                       </Card>
                   </Col>                

                    
                </Row>
            </Container>
        </section>
    )
}