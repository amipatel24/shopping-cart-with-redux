import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './About.css'
import { AboutImg } from '../../images'
import { FaShoppingBag, FaImage , FaChartBar} from "react-icons/fa";

function About() {
    return (
        <div>
            <div className="text-About mt-5">
                <h1>About Us</h1>
                <h6 class="mt-3" style={{ color: "grey" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</h6>
                <h6 style={{ color: "grey" }}>tempor incididunt ut labore et dolore magna aliqua</h6>
            </div>
            <Container fluid >
                <Row>
                    <Col sm={6}><div className="content">
                        <div className="leftcontent" class="ms-5 mt-5">
                            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat  </h5>

                        </div>

                        <div class="card  border-0">
                            <div class="row g-0 ms-5">
                                <div className="icon" class="col-sm-5 ">
                                    <FaShoppingBag className="icon1" style={{ color: 'DodgerBlue', width: 50, }} />
                                </div>
                                <div class="card-body ms-5">
                                    <b> <h5 class="card-title">Eiusmod tempor</h5></b>
                                    <h6 style={{ color: "grey" }} class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h6>


                                </div>
                                <div>

                                </div>
                            </div>
                        </div>
                        <div class="card  border-0">
                            <div class="row g-0 ms-5">
                                <div className="icon" class="col-sm-5 ">
                                    <FaImage className="icon1" style={{ color: 'DodgerBlue', width: 50, }} />
                                </div>
                                <div class="card-body ms-5">
                                    <b> <h5 class="card-title">Magni Dolores</h5></b>
                                    <h6 style={{ color: "grey", textTransform: "lowercase" }} className="card-text">EXCEPTEUR SINT OCCAECAT CUPIDATAT NON PROIDENT, SUNT IN CULPA QUI OFFICIA DESERUNT MOLLIT ANIM ID EST LABORUM. </h6>


                                </div>
                                <div>

                                </div>
                            </div>
                        </div>
                        <div class="card  border-0">
                            <div class="row g-0 ms-5">
                                <div className="icon" class="col-sm-5 ">
                                    <FaChartBar className="icon1" style={{ color: 'DodgerBlue', width: 50, }} />
                                </div>
                                <div class="card-body ms-5">
                                    <b> <h5 class="card-title">Dolor Sitema</h5></b>
                                    <h6 style={{ color: "grey", textTransform: "lowercase" }} class="card-text">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat.</h6>


                                </div>
                                <div>

                                </div>
                            </div>
                        </div>

                    </div></Col>
                    <Col sm={6}><div className="leftimg">
                        <img className="aboutimg" src={AboutImg} />
                    </div></Col>
                </Row>

            </Container>

        </div>
    )
}
export default About