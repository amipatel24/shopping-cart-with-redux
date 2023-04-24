import React from "react";
import './Testimonials.css'
import { personimg2 } from '../../images'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
function Testimonials() {
  const TestimonialsData = {
    data: [{
      title: "Amisha Patel",
      caption: "React Developer",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      url: personimg2,


    },
    {
      title: "Anjali Patel",
      caption: "Php Developer",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      url: personimg2,

    },
    {
      title: "Nirali Patel",
      caption: ".Net Developer",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      url: personimg2,

    }]
  };
  return (
    <div className="Testimonials">
      <h1>Testimonials</h1>
      <div className="aboutperson">


        <div className="CarouselCom">
          <Carousel variant="dark" controls={false}>

            {TestimonialsData.data.map((info, id) => (
              <Carousel.Item >
                <img
                  className="img d-block img-fluid rounded-circle"
                  src={info.url} width="150px"
                />
                <Carousel.Caption>
                  <h3>{info.title}</h3>
                  <h6>{info.caption}</h6>
                  <p>{info.text}</p>
                </Carousel.Caption>
              </Carousel.Item>
              // <CarouselCom key={id} data={info} />
            ))}
          </Carousel>

        </div>


      </div>
    </div>

  )
}
export default Testimonials;