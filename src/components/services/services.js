import React from "react";
import './services.css';
import './projects/ProjectData.css'
import CardGroup from 'react-bootstrap/CardGroup';
import { Container, Row, Col } from "react-bootstrap";
import { FaGem, FaLanguage } from "react-icons/fa";
import CardCom from './cards/CardCom';
import ProjectData from "./projects/ProjectData";
function Services() {
    const CardData = {
        cards: [{
            title: "Coroporis dolerem",
            text: " Lorem ipsum dolor sit amet consectetuer appears in Microsoft Word online Help. This phrase has the appearance of an intelligent Latin idiom.",
            link: "https://google.com/",
            icon: <FaGem className="serviceIcons" />

        },
        {
            title: "Voluptates dolores",
            text: " Lorem ipsum dolor sit amet consectetuer appears in Microsoft Word online Help. This phrase has the appearance of an intelligent Latin idiom.",
            link: "https://google.com/",
            icon: <FaLanguage className="serviceIcons" />
        },
        {
            title: "Eum ut aspernature",
            text: " Lorem ipsum dolor sit amet consectetuer appears in Microsoft Word online Help. This phrase has the appearance of an intelligent Latin idiom.",
            link: "https://google.com/",
            icon: <FaLanguage className="serviceIcons" />
        }]
    };
    const PData = [
        {number:274, text:"Clients"},
        {number:421, text:"Projects"},
        {number:1364, text:"Hours Of Support"},
        {number:18, text:"Hard Workers"}
    ]
    return (
        <div className="services">
            <div className="text-center">
                <h1 >Why Chosse Us?</h1>
                <h6 className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</h6>
                <h6>tempor incididunt ut labore et dolore magna aliqua</h6>
                <CardGroup>
                    <Container fluid>
                        <Row>
                            <Col className="CardCol" >
                                {CardData.cards.map((info, id) => (
                                    <CardCom key={id} data={info} />
                                ))}
                            </Col>
                        </Row>
                    </Container>
                </CardGroup>
               
            </div>
            <CardGroup>
                    <Container fluid>
                        <Row className="align-items-center">
                            {PData.map((info, id) => (
                                <Col md={3} className="projectdata" >
                                <ProjectData key={id} data={info} />
                            </Col>
                                ))}
               

                        </Row>
                    </Container>
                </CardGroup>
          
        </div>

    )
}
export default Services;
