import React from "react";
import { Col } from "react-bootstrap";
import { Container, Row, } from "react-bootstrap";
import './Contact.css'
// import { twittericon } from '../../images'
// import { facebookicon } from '../../images'
// import { instagramicon } from '../../images'
// import { googleicon } from '../../images'
// import { linkedin } from '../../images'
import { FaTwitter,FaFacebookF,FaInstagram,FaGooglePlusG,FaLinkedinIn} from "react-icons/fa";

function Contact() {
    return (
        <div className="contact">
            {/* <h1>Contact us</h1> */}
            <Container fluid>
                <Row >
                    <Col md={4}>
                        <div className="col1">
                            <h6>newbiz</h6>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div className="col2">
                            <h6>useful links</h6>
                            <ul>
                                <li>Home</li>
                                <li>About Us</li>
                                <li>Services</li>
                                <li>Terms of Service</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div className="col3">
                            <h6>contact us</h6>
                            <p>A108 Adam Street New York, NY <br /> 535022 United States. <br /> <b>Phone: </b>+1 5588 55478 55 <br /><b>Email: </b>info@example.com</p>

                    
                       <FaTwitter className="img"/>
                        <FaFacebookF className="img"/>
                        <FaInstagram  className="img"/>
                        <FaGooglePlusG  className="img"/>
                        <FaLinkedinIn  className="img"/>
                 

                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="col4">
                            <h6>our newsletter</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <input type="text" placeholder="Search.." name="search" />
                            <button type="submit">Subscribe</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Contact