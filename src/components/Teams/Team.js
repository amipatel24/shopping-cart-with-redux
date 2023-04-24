import React from "react";
import './Team.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { personimg1 } from '../../images'
import { personimg2 } from '../../images'
function Team() {

    return (
        <div className="team">
            <div className="team-uppertext">
                <h1>Team</h1>
                <div className="h6">
                    <h6>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</h6>
                    <h6> ETIAS stands for the European Travel Information and Authorization System</h6>
                </div>
            </div>
            <div className="roundedimg">
                <Container fluid overflow-hidden>
                    <Row className="row1 gx-1 ">
                        <Col md={3} justify-content-center>

                            <div className="">
                                <img width="400px" height="340px"
                                    src={personimg2}
                                    className='img-fluid rounded-circle'

                                />

                            </div>
                        </Col>
                        <Col md={3} justify-content-center>

                            <div className="">
                                <img width="400px" height="340px"
                                    src={personimg2}
                                    className='img-fluid rounded-circle'

                                />

                            </div>
                        </Col>
                        <Col md={3} justify-content-center>

                            <div className="">
                                <img width="400px" height="340px"
                                    src={personimg2}
                                    className='img-fluid rounded-circle'

                                />

                            </div>
                        </Col>
                        <Col md={3} justify-content-center>

                            <div className="">
                                <img width="400px" height="340px"
                                    src={personimg2}
                                    className='img-fluid rounded-circle'

                                />

                            </div>
                        </Col>




                    </Row>
                </Container>
            </div>
        </div>
    )
}
export default Team