import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Banner.css'
import { bnnerimg } from '../../images';
function Banner() {
    return (

        <div className="banner">
            <Container >
                <Row>
                    <Col md={6}>


                        <div className="Text ">
                            <h1>We Provide <br />
                                Solutions <br />
                                for your business!</h1>
                            <div className="btn">
                                <button type="button" className="themebtn btn btn-outline-primary rounded-pill text-white " >Get Started</button>
                                <button type="button" className="themebtn btn btn-outline-primary rounded-pill text-white m-3 " >Our Services</button>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>

                        <div className="image d-flex justify-content-end ">
                            <img className='bnnerimg ' src={bnnerimg} />
                        </div>

                    </Col>
                </Row>

            </Container>
        </div>




    )
}

export default Banner
