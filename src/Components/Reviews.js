import { Container,Row,Col } from "react-bootstrap";
import { Player } from 'video-react';
// import '~video-react/dist/video-react.css'; 

export const Review=()=>{
    return(
        <section className="review" id="review">
            <Container>
                <Row>
                    <div className="course-title"><h2>Student Reviews</h2></div>
                    <Col>
                    <Player>
                        <source src="https://ds.brainalyst.in/wp-content/uploads/2024/06/b-removed.mp4"/>
                    </Player>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}