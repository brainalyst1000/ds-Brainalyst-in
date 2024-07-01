import {Container,Row,Col} from 'react-bootstrap';
// import offerimg1 from '../STICKER 3RD ANNIVERSARY.png'
import certificate1 from'../certificate1.jpeg';
import certificate2 from'../certificate2.jpeg';

export const Cretificate=()=>{
    return(
        <section className="certificate" id="certificate">
            <Container>
                <Row>
                    <div className="course-title"><h2>Certificate</h2></div><hr />

                    <Col style={{display: 'flex',alignItems: 'center',justifyContent: 'center',flexDirection: 'column'}}>
                    <div><img src={certificate1} alt="certificate1" style={{maxWidth: '30rem',maxHeight: '35em',width: '30rem',paddingTop: '10px'}}/></div>                    
                     <div><img src={certificate2} alt="certificate2" style={{maxWidth: '30rem',maxHeight: '35em',width: '30rem',paddingTop: '10px'}}/></div>  
                    </Col>
                    
                    {/* <img src={offerimg1} alt="" style={{width:'36rem',height:'34rem'}}/> */}

                </Row>
            </Container>
     </section>
    )
}