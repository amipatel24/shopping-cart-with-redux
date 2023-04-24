import React from "react";
import './ProductCard.css'
import { Col, Card, Button } from "react-bootstrap";
import { placeholderImage } from '../../images'
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


function ProductCard(props) {
  const { data, handleclick, showViewCart } = props
  const navigate = useNavigate()
  const saleBadge = data.on_sale ? <div className="salebadge"><span>Sale!</span></div> : ''




  const navigateData = (data) => {

    navigate(`/ProductDetails/${data.slug}`)
  }
  return (
    <>
      <Col>
        <Card style={{ width: '18rem' }} onClick={() => navigateData(data)} >
          <Card.Body >
            {saleBadge}
            <Card.Img src={(data?.images?.length > 0) ? data.images[0].src : placeholderImage } />
            <Card.Title className="cardTitle mt-4">{data.name}</Card.Title>
            <Card.Text className="mt-3" dangerouslySetInnerHTML={{ __html: data.price_html }}>
            </Card.Text>
           
          </Card.Body>
        </Card>
        {data.type === 'variable' ? <Button variant="primary"   onClick={() => navigateData(data)} >Select Option</Button> :
              <Button variant="primary" onClick={() => handleclick(data)}>Add  to Cart</Button>}

            {
              showViewCart ? <Button className="viewcart"> <NavLink className="nav-link" to='/cart'>view cart</NavLink></Button> : ''
            }
      </Col>
    </>
  )
}
export default ProductCard

