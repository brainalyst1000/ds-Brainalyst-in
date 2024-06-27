import {Container,Row,Col,Table} from 'react-bootstrap';

export const Feature=()=>{
    return(
        <section className="feature" id="feature">
            <Container>
                <Row>
                    <div className="course-title"><h2  style={{fontWeight:'600'}}>Features</h2></div>
                    <Table>
                        <thead>
                            <tr>
                                <th>Feature</th>
                                <th>Udemy</th>
                                <th>Coursera</th>
                                <th>Scaler</th>
                                <th>Cloud ML</th>
                                <th>Brainlist</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Afordable Course</th>
                                <th><i class="fa-solid fa-check"></i></th>
                                <th><i class="fa-solid fa-xmark"></i></th>
                                <th><i class="fa-solid fa-xmark"></i></th>
                                <th><i class="fa-solid fa-check"></i></th>
                                <th><i class="fa-solid fa-check"></i></th>
                            </tr>
                            <tr>
                                <th>Hands on Learning</th>
                                <th><i class="fa-solid fa-xmark"></i></th>
                                <th><i class="fa-solid fa-xmark"></i></th>
                                <th><i class="fa-solid fa-check"></i></th>
                                <th><i class="fa-solid fa-check"></i></th>
                                <th><i class="fa-solid fa-check"></i></th>
                            </tr>
                            <tr>
                                <th>1:1 Mentorship</th>
                                <th><i class="fa-solid fa-xmark"></i></th>
                                <th><i class="fa-solid fa-xmark"></i></th>
                                <th><i class="fa-solid fa-xmark"></i></th>
                                <th><i class="fa-solid fa-xmark"></i></th>
                                <th><i class="fa-solid fa-check"></i></th>
                            </tr>
                            <tr>
                                <th>Live 1:1 Doubt Sessions</th>
                                <th><i class="fa-solid fa-xmark"></i></th>
                                <th><i class="fa-solid fa-xmark"></i></th>
                                <th><i class="fa-solid fa-xmark"></i></th>
                                <th><i class="fa-solid fa-check"></i></th>
                                <th><i class="fa-solid fa-check"></i></th>
                            </tr>
                            <tr>
                                <th>Aptitude Test TrainingNo</th>
                                <th><i class="fa-solid fa-xmark"></i></th>
                                <th><i class="fa-solid fa-xmark"></i></th>
                                <th><i class="fa-solid fa-xmark"></i></th>
                                <th><i class="fa-solid fa-check"></i></th>
                                <th><i class="fa-solid fa-check"></i></th>
                            </tr>
                            <tr>
                                <th>Live Interactive Online ClassesNo</th>
                                <th><i class="fa-solid fa-xmark"></i></th>
                                <th><i class="fa-solid fa-xmark"></i></th>
                                <th><i class="fa-solid fa-xmark"></i></th>
                                <th><i class="fa-solid fa-xmark"></i></th>
                                <th><i class="fa-solid fa-check"></i></th>
                            </tr>
                            <tr>
                                <th>100% Paid Internship On Completion*No</th>
                                <th><i class="fa-solid fa-xmark"></i></th>
                                <th><i class="fa-solid fa-xmark"></i></th>
                                <th><i class="fa-solid fa-xmark"></i></th>
                                <th><i class="fa-solid fa-xmark"></i></th>
                                <th><i class="fa-solid fa-check"></i></th>
                            </tr>
                            <tr>
                                <th>LMS Access After CompetionYes</th>
                                <th><i class="fa-solid fa-check"></i></th>
                                <th><i class="fa-solid fa-check"></i></th>
                                <th><i class="fa-solid fa-xmark"></i></th>
                                <th><i class="fa-solid fa-check"></i></th>
                                <th><i class="fa-solid fa-check"></i></th>
                            </tr>
                            <tr>
                                <th>Dedicated Course Books</th>
                                <th><i class="fa-solid fa-xmark"></i></th>
                                <th><i class="fa-solid fa-xmark"></i></th>
                                <th><i class="fa-solid fa-xmark"></i></th>
                                <th><i class="fa-solid fa-xmark"></i></th>
                                <th><i class="fa-solid fa-check"></i></th>
                            </tr>
                        </tbody>
                    </Table>
                </Row>
            </Container>
        </section>
    )
}