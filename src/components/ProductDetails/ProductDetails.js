import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router';
import { Col, Card, Container, Row, Nav, Tab } from "react-bootstrap";
import { FaAngleRight } from "react-icons/fa"
import { useEffect } from "react";
import { getProduct } from "../../Redux/Action/GetProduct";
import { addToProductCart } from '../../Redux/Action/CartAction'
import './ProductDetails.css'
import { useState } from "react";
import { placeholderImage } from "../../images";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";


const ProductDetails = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const ProductData = useSelector((state) => state?.ProductReducer?.oneProductdata)
    const loader = useSelector((state) => state?.ProductReducer?.loading)
    console.log("productvariationdata", ProductData.product_variations);
    

    const [inputvalue, setInputValue] = useState(1)
    const [selected, setSelected] = useState('')
    // console.log('selected===>',selected);
    const [images, setImages] = useState(null)
    const saleBadge = ProductData.on_sale ? <div className="salebadge"><span>Sale!</span></div> : ''

    const { slug } = params
    console.log("slug======>", slug);




    useEffect(() => {
        if (ProductData.images && ProductData.images.length > 1) {
            setImages(
                ProductData.images.map(url => ({
                    original: `${url.src}`,
                    thumbnail: `${url.src}`
                }))
            )

        }
        else {
            setImages(null)

        }

    }, [ProductData.images])
    useEffect(() => {
        dispatch(getProduct(slug))
    }, [slug])




    const handleAddToCart = (inputvalue) => {

        dispatch(addToProductCart({
            data: ProductData,
            quantity: parseInt(inputvalue)
        }))
        console.log("aaaaaaaaa=======>");
    }
    const handleSelected = (e) => {
      
        e.preventDefault();
        setSelected(e.target.value)
       
        
    }
    console.log("selected====>",selected);

// just practice 
    var result = [];
    if (selected !== "") {
      result =  ProductData?.product_variations?.filter((p) =>
        p.attributes.find((c) => c.title === selected)
      );

    } else {
 
    }
    console.log("result",result);


    return (
        <div className="ProductDetails">
            <Card>

                <Card.Body>
                    <Container>
                        {ProductData.length !== 0 ? <Row className="individualproductrowdata  align-items-center">
                            <Col md={4} className='g-5  position-relative'>
                                {saleBadge}
                                {images ? <ImageGallery showFullscreenButton={false} showPlayButton={false} items={images} /> :
                                    (<Card.Img className="productimg"
                                        src={
                                            ProductData?.images?.length ? ProductData?.images[0]?.src : placeholderImage}
                                    ></Card.Img>)}
    

                            </Col>
                            <Col md={8} className='g-5'>

                                <div className="pb-5 border-bottom">
                                    <Card.Text style={{ color: "black", fontSize: 20 }}>{ProductData.name}</Card.Text>
                                    <Card.Text dangerouslySetInnerHTML={{ __html: ProductData.price_html }}></Card.Text>
                                    <div>
                                {/* select materials */}
                                        {
                                            ProductData.attributes.filter((item => item.name === 'Material' || 'Size')).map((attribute,id) =>
                                            (
                                                <div>
                                                    <Card.Text className="sizetext">{attribute.name}</Card.Text>
                                                    <select key={id} className="selectsize" value={selected} 
                                                    onChange = {handleSelected}>
                                                        <option>Choose an Option</option>
                                                        {
                                                            
                                                            attribute.options.map((option) => (<option  value={option} >{option}</option>)
                                                            
                                                            )}

                                                    </select> </div>
                                            ))
                                        }
                                        {/* select size */}
                                        {/* {
                                            ProductData.attributes.filter((item => item.name === 'Size')).map((attribute) =>
                                            (
                                                <div>
                                                    <Card.Text className="sizetext">{attribute.name}</Card.Text>
                                                    <select  className="selectsize" value={selected} 
                                                    onChange = {(e) => handleSelected(e)}>
                                                        <option>Choose an Option</option>
                                                        {
                                                            
                                                            attribute.options.map((option) => (<option  value={option} >{option}</option>)
                                                            
                                                            )}

                                                    </select> </div>
                                            ))
                                        }
                                     */}
                                     {/* {
                                        ProductData?.product_variations?.attributes?.filter((item ) => item.name === 'Material').map((option) => (
                                            <select>
                                                <option>
                                                {option.title}
                                                </option>
                                            </select>
                                              
                                     
                                        ))
                                     } */}
                                     

                                    </div>
                                    <input type="number" min={1} className="inputBox mt-4" value={inputvalue} onChange={(e) => setInputValue(e.target.value)} />
                                    <button className="Addtocartbtn" onClick={() => handleAddToCart(inputvalue)}>Add to cart</button>

                                    {
                                        ProductData?.categories ? <Nav.Link className="mt-4">Category: {ProductData?.categories[0].name}</Nav.Link> : ''
                                    }
                                </div>
                            </Col>

                        </Row> : ''}



                    </Container>

                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <Container>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Row>
                                <Col md={2} className='g-5 '>
                                    <Nav variant="outline-primary"
                                        className="flex-column g-5">
                                        <Nav.Item>


                                            <Nav.Link className="tab1" eventKey="first">Description
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">Reviews

                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col >
                                <Col md={2} className='g-5'>

                                    <Tab.Pane eventKey="first">

                                        <FaAngleRight />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">

                                        <FaAngleRight />
                                    </Tab.Pane>


                                </Col>

                                <Col md={7} className='g-5'>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">


                                            <Card.Title>Description</Card.Title>
                                            <div>
                                                <Card.Text dangerouslySetInnerHTML={{ __html: ProductData.description }}></Card.Text>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">


                                            <Card.Title>Reviews</Card.Title>
                                            <Card.Text>There are no review yet</Card.Text>
                                        </Tab.Pane>
                                    </Tab.Content>

                                </Col>
                            </Row>
                        </Tab.Container>
                    </Container>

                </Card.Body>
            </Card>





        </div>
    )
}
export default ProductDetails




