import React from 'react'
import { Container, Col } from 'react-bootstrap/';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { Button, Row } from 'react-bootstrap';
import { logoImg } from '../../images'
import { FaCartPlus } from "react-icons/fa";
import Badge from "react-bootstrap/Badge";
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { FaWindowClose ,FaTrash} from 'react-icons/fa'
import Card from 'react-bootstrap/Card';
import { deleteItem } from '../../Redux/Action/CartAction'


import './Header.css'
function Header() {
  let itemTotal = useSelector((state) => state?.cartuser?.itemTotal)
  let cartsItem = useSelector((state) => state?.cartuser)
  console.log("cartsItem", cartsItem.cartTotal);
  const  cartTotal = cartsItem.cartTotal

  const [isHovering, setIsHovering] = useState(null);
  const dispatch = useDispatch()
  const handleMouseover = (event) => {
    setIsHovering(true)
  }
  const handleMouseout = () => {
    setIsHovering(null)
  } 
  const handleDelete = (id) => {
    dispatch(deleteItem(id))
  }

  return (
    <div>
      <Navbar bg="light"  >
        <Container>
          <Navbar.Brand href="#home" >
            <img className="d-inline-block align-top" src={logoImg} />
          </Navbar.Brand>
          <Nav className="headerMenu justify-content-end">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <Nav.Link href="#About ">About us</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#team">Team</Nav.Link>
            <NavLink className="nav-link"  to='/OrderData'>Contact us</NavLink>
            <NavLink  className="nav-link" to='/cart'>Cart</NavLink>
            <Nav>
              <NavLink className="nav-link">


                <FaCartPlus className='carticon' onClick={handleMouseover} />


              </NavLink>
              {itemTotal > 0 ? <Badge pill>{itemTotal}</Badge> : ''}
            </Nav>
          </Nav>

          <Nav>

            <Button className="shopbtn" variant="outline-primary">
              <NavLink to="/shop">Shop Now</NavLink>
            </Button>

          </Nav>
        </Container>
      </Navbar>
      <Container className='cartContainer' >
        <div
          className={isHovering ? 'displayCartShow' : 'displaycartnone'} >
          <div className='displaycart shadow   bg-white rounde'>
            <Row>
              <Col>
               
           {itemTotal  === 0 ? '' :  <FaWindowClose className="closeIcon" onClick={handleMouseout} />}  
                {cartsItem.carts.map((product, id) => (
               
                  <Card style={{ width: 200 }} className='p-2' >
   
   <FaTrash  className='trashicon' onClick={() => handleDelete(id)} />
                    
                    <Card.Body  className="border-bottom" >
                      <Row>
                        <Col md={5}>
                          <img  src={product.img} className="rounded-circle" width={50} />

                        </Col>
                        <Col md={7} >
                          <Card.Text >{product.name}</Card.Text>
                          <Card.Text  >${product.price} x {product.quantity} = ${(product.price) * (product.quantity)}
                          </Card.Text>

                        </Col>
                      </Row>  

                    </Card.Body>
                

                  </Card>
                    
                ))}
                
                {cartTotal === 0 ? "" : 
              <>
                <h6 className='ps-5 pb-2 '>SubTotal: ${cartTotal}</h6>
                <Button className='cartviewcart'> <NavLink className="nav-link" to='/cart'>view cart</NavLink>
                </Button> </>}  
               
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  )
}
export default Header;

