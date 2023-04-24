import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import LoadingSpinner from "../LoadingSpinner";
import "./RecievedOrdeData.css";

function RecievedOrdeData() {
  const receivedData = useSelector(
    (state) => state?.CheckOutFormData?.orderRecivedData
  );
  const loading = useSelector((state) => state?.CheckOutFormData?.loading);

  // total of  price
  let Subtotal = 0;
  receivedData?.data.line_items?.forEach((sum) => {
    Subtotal += parseInt(sum.subtotal);
  });
  //   for convert date formate
  const date = new Date(receivedData.data.date_created);
  const formattedDate = date.toLocaleDateString("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <Container>
          <div className="mt-5">
            <h2>Order received</h2>
            <h5 className="mt-2">Thank you. Your order has been received.</h5>
          </div>
          <Row>
            <div className="orderRecivedwrapper mt-5">
              <Col className="g-5">
                <div className="orderRecived">
                  <h6> ORDER NUMBER:</h6>
                  <b>{receivedData.data.id}</b>
                </div>
              </Col>
              <Col>
                <div className="orderRecived">
                  <h6>DATE:</h6>
                  <b>{formattedDate}</b>
                </div>
              </Col>
              <Col>
                <div className="orderRecived">
                  <h6>EMAIL:</h6>
                  <b>{receivedData.data.billing.email}</b>
                </div>
              </Col>
              <Col>
                <div className="orderRecived">
                  <h6>PAYMENT METHOD:</h6>
                  <b>{receivedData.data.payment_method_title}</b>
                </div>
              </Col>
            </div>
          </Row>
          <Row>
            <div className="mt-5">
              <h2>Order details</h2>
            </div>
            <div className="orderdetails">
              <div className="detailstitle">
                <Row>
                  <Col md={6}>
                    <b> Product</b>
                  </Col>
                  <Col md={6}>
                    <b>Total</b>
                  </Col>
                </Row>
              </div>
              {receivedData.data.line_items.map((pdata) => (
                <div className="orderdetailsdata">
                  <Row>
                    <>
                      <Col>
                        <div>
                          <h6>
                            {pdata.name} {""} x {pdata.quantity}
                          </h6>
                        </div>
                      </Col>
                      <Col>
                        <div>
                          <h6>
                            {`$`}
                            {pdata.subtotal}
                          </h6>
                        </div>
                      </Col>
                    </>
                  </Row>
                </div>
              ))}
              <div className="totadata">
                <Row>
                  <Col>
                    <div className="totaltitle">
                      <h6>Subtotal:</h6>
                      <h6>Discount:</h6>
                      <h6>Shipping: </h6>
                      <h6>Payment Method:</h6>
                      <h6>Total:</h6>
                    </div>
                  </Col>
                  <Col>
                    <div className="totalinfo">
                      <h6>
                        {`$`}
                        {Subtotal}
                        {`.00`}
                      </h6>

                      {receivedData.data.coupon_lines.map((cdata) => (
                        <div>
                          <h6>
                            {`-$`}
                            {parseInt(cdata.discount)}
                            {`.00`}
                          </h6>
                        </div>
                      ))}
                      {receivedData.data.shipping_lines.map((sdata) => (
                        <div>
                          <h6>{sdata.method_title}</h6>
                        </div>
                      ))}
                      <div>
                        <h6>{receivedData.data.payment_method_title}</h6>
                      </div>
                      <div>
                        <h6>
                          {`$`}
                          {receivedData.data.total}
                        </h6>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <Row>
                <>
                  <Col md={6}>
                    <div className="mt-5">
                      <h2>Billing address</h2>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="mt-5">
                      <h2>Shipping address</h2>
                    </div>
                  </Col>
                </>
              </Row>
              <Row>
                <Col md={6}>
                  <div className="adress mt-3">
                    <h6>
                      {receivedData.data.billing.first_name}{" "}
                      {receivedData.data.billing.last_name}
                    </h6>
                    <h6>{receivedData.data.billing.address_1}</h6>
                    <h6>
                      {receivedData.data.billing.city}{" "}
                      {receivedData.data.billing.postcode}
                    </h6>
                    <h6>
                      {receivedData.data.billing.state}
                      {" ,  "}
                      {receivedData.data.billing.country}
                    </h6>
                    <h6>{receivedData.data.billing.phone}</h6>
                  </div>
                  <h6 className="email mt-4">
                    {receivedData.data.billing.email}
                  </h6>
                </Col>
                <Col md={6}>
                  <div className="adress mt-3">
                    <h6>
                      {receivedData.data.shipping.first_name}{" "}
                      {receivedData.data.shipping.last_name}
                    </h6>
                    <h6>{receivedData.data.shipping.address_1}</h6>
                    <h6>
                      {receivedData.data.shipping.city}{" "}
                      {receivedData.data.shipping.postcode}
                    </h6>
                    <h6>
                      {receivedData.data.shipping.state}
                      {" ,  "}
                      {receivedData.data.shipping.country}
                    </h6>
                    <h6>{receivedData.data.shipping.phone}</h6>
                  </div>
                </Col>
              </Row>
            </div>
          </Row>
        </Container>
      )}
    </div>
  );
}
export default RecievedOrdeData;
