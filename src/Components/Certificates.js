import {Container,Row,Col} from 'react-bootstrap';
// import offerimg1 from '../STICKER 3RD ANNIVERSARY.png'
import certificate1 from'../certificate1.jpeg';
import certificate2 from'../certificate2.jpeg';

export const Cretificate=()=>{
    return(
        <section className="certificate" id="certificate">
            <Container>
                <Row>
                    <div className="course-title"><h2>Certificate</h2></div>

                    <Col><img src={certificate1} alt="certificate1" style={{width:'38rem'}}/></Col>
                    <Col><img src={certificate2} alt="certificate2" style={{width:'38rem'}}/></Col>
                    {/* <img src={offerimg1} alt="" style={{width:'36rem',height:'34rem'}}/> */}

                </Row>
            </Container>
     </section>
    )
}