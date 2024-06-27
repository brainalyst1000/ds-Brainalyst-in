import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Container,Row,Col} from 'react-bootstrap';
import './Book.css';
import book1 from '../MACHINE-LEARNING-COVER-PAGE-768x993.png';
import book2 from '../MASTERING-PYTHON-COVER-PAGE-768x930.png';
import book3 from '../NATURAL-LANGUAGE-PROCESSING-COVER-768x994.png';
import book4 from '../POWER-BI-COVER-PAGE-768x994.png';
import book5 from '../POWER-BI-VISUALS-COVER-768x994.png';
import book6 from '../R-BASIC-TO-ADVANCE-768x991.png';
import book7 from '../SQL-BASIC-TO-ADVANCE-COVER-PAGE-768x994.png';
import book8 from '../TIME-SERIES-IN-PYTHON-COVER-768x993.png';
import book9 from '../VBA-COVER-PAGE-768x993.png';
import book10 from '../VISUALIZATION-COVER-PAGE-768x987.png';



export const Book=()=>{
    const responsive = {
        superLargeDekstop:{
        
            breakpoint:{max:4000,min:3000},
            items:5
        },
        desktop:{
            breakpoint:{max:3000,min:1024},
            items:3
        },
        tablet:{
            breakpoint:{max:1024,min:464},
            items:2
        },
        mobile:{
            breakpoint:{max:464,min:0},
            items:1
        }
    };
    return(
        <section className='book' id='book'>
            <Container>
                <Row>
                    <Col>
                    <div className="book-bx">
                        <h2>Books</h2>
                        <hr />
                    <Carousel responsive={responsive} infinite={true} className="book-slider">
                        <div className="items"><img src={book1} alt="books" /></div>
                        <div className="items"><img src={book2} alt="books" /></div>
                        <div className="items"><img src={book3} alt="books" /></div>
                        <div className="items"><img src={book4} alt="books" /></div>
                        <div className="items"><img src={book5} alt="books" /></div>
                        <div className="items"><img src={book6} alt="books" /></div>
                        <div className="items"><img src={book7} alt="books" /></div>
                        <div className="items"><img src={book8} alt="books" /></div>
                        <div className="items"><img src={book9} alt="books" /></div>
                        <div className="items"><img src={book10} alt="books" /></div>
                                              

                    </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}