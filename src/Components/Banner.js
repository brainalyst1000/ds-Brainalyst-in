import{Container,Row,Col,} from 'react-bootstrap';
import './Banner.css';
import bannerimg2 from '../bi2.svg';

export const Banner=()=>{
    return(
        <section className="banner" id="home">
            <Container>
                <Row className='align-item-center' id='custom-row-css'>
                <Col xs={12} md={6} xl={7}>
                <div>
                    <h2 className='h2-col1'>Master Data Science and Analytics With</h2>
                    </div>
                    <div className='div2'>
                        <h5 className="uskill-h5-2">Brainalyst's Data
                        Science 360 Program</h5>
                    </div>
                    <div>
                        <h2 className='h2-1-col'>100% Paid Internship Opportunity on Completion*</h2>
                    </div>
                    <div>
                        <ul>
                            <li>#1 Affordable Course</li>
                            <li>Industry-Relevant Curriculum</li>
                            <li>450+ Hours of Course Material</li>
                            <li>Interactive Online Classes</li>
                            <li>Dedicated & Exclusive Study Material i.e. Handbooks, Reference Books, Cheat Sheets, Notes, Class Notes & Practice Material</li>
                        </ul>
                    </div>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={bannerimg2} alt="Banner-sub-img" className="img-fluid"/>
                    </Col>
                </Row>

            </Container>
        </section>
    )
}

