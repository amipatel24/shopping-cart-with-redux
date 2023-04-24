import React from "react";
import './OurClients.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { sponserimage1, sponserimage2,sponserimage3,sponserimage4,sponserimage5,sponserimage6,sponserimage7,sponserimage8 } from '../../images'

function OurClients() {
    return (
        <div className="Clients">
            <div className="uppertext">
                <h1>Our Clients</h1>
                <h6>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</h6>
            </div>
            <Container fluid overflow-hidden>
                <Row className="row gx-1 mt-5 ">
                    <Col md={3} justify-content-center>

                        <div className="widget-Box">    
                            <img src={sponserimage1} height="100px" />

                        </div>
                    </Col>
                    <Col md={3} className="img2">

                        <div className="widget-Box">
                            <img src={sponserimage2}  height="100px" />

                        </div>
                    </Col>
                    <Col md={3} className="img3">

                        <div className="widget-Box">
                            <img src={sponserimage3} height="100px" />

                        </div>
                    </Col>
                    <Col md={3} className="img4">

                        <div className="widget-Box">
                            <img src={sponserimage4} height="100px" />

                        </div>
                    </Col>
                </Row>
                <Row className="row gx-1 mt-1">
                    <Col md={3} className="img5 ">
                     <div className="widget-Box">
                     <img className="img-fluid " src={sponserimage5}  height="100px"  />
                     </div>
                    </Col>
                    <Col md={3} className="img6">
                       <div className="widget-Box">
                       <img className="img-fluid " src={sponserimage6}  height="100px"  />
                       </div>
                    </Col>
                    <Col md={3} className="img7">
                       <div className="widget-Box">
                       <img className="img-fluid mt-4" src={sponserimage7}  height="100px" />
                       </div>
                    </Col>
                    <Col md={3} className="img8">
                       <div className="widget-Box">
                       <img className="img-fluid " src={sponserimage8}  height="100px"  />
                       </div>
                    </Col>
                </Row>


            </Container>
        </div>

    )
}
export default OurClients