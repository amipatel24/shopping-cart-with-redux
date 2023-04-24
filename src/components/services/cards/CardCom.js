import React from "react";
import Card from 'react-bootstrap/Card';
import '../services.css'

function CardCom(props) {
    const { data } = props
    console.log("cards comp", data);
    return (
        <div>
            <Card className="cards">
                <Card.Body>
                    {data.icon}
                    <Card.Title className="cardtitle">{data.title}</Card.Title>
                    <Card.Text>
                        {data.text}
                    </Card.Text>
                    <Card.Text style={{ color: "white" }}>
                        <a className="link" href={data.link}>Read More</a>
                    </Card.Text>
                </Card.Body>

            </Card>
        </div>
    )
}
export default CardCom