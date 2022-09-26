import React, { useState } from 'react'
import { Card, Col, Container, Row, Form, Stack, Figure, Image } from 'react-bootstrap';
import './track-order.scss';

function TrackOrder() {

    const orderDetails = [
        {
            id: 1, order_id: "#123456789", name: "Testy foods", created_at: "04:19 PM", total_item: 3, "total_price": 627,
            order_details: {
                from: {
                    store_name: "ABC foods",
                    store_add: "3rd Cross, JP Nagar, Banglore, India 3rd Cross, JP Nagar, Banglore, India 3rd Cross, JP Nagar, Banglore, India"
                },
                to: {
                    deliver_to: "ABC foods",
                    deliver_add: "101, Jayanagar, 9th block Banglore, India"
                },
                order_items: [{
                    name: "Veg spring roll",
                    qua: 6,
                    price: 125
                }, {
                    name: "spring roll",
                    qua: 3,
                    price: 250
                }, {
                    name: "roll Veg spring",
                    qua: 4,
                    price: 400
                }],
                total_bill: 4300
            }
        }
    ]

    const [orders, setOrders] = useState(orderDetails);

    return (
        <Container style={{ margin: "5% 0 0 3%" }} >
            {
                orders.map((item, idx) => {
                    return (<Stack gap={1}>
                        <h2>Track order</h2>
                        <Row>
                            <Col className='order-col' key={"idx"} xs={10}>
                                <Row style={{ marginBottom: "5%" }}>
                                    <Card>
                                        <Card.Body>
                                            <Stack direction="horizontal" gap={3}>
                                                <Card.Text muted>Order {item.order_id}</Card.Text>
                                                <p className='ms-auto'>
                                                    <Stack className='img-container' style={{ color: "#D27C2C" }} direction="horizontal" gap={2}>
                                                        <Image width={17} height={17} about alt="help" src="help.svg" />
                                                        <span>Help</span>
                                                    </Stack>
                                                </p>
                                            </Stack>
                                            <h5>{item.name}</h5>
                                            <Stack className='img-container' style={{ color: "#8E8E93" }} direction="horizontal" gap={2}>
                                                <Image width={17} height={17} about alt="help" src="clock.svg" />
                                                <span>{item.created_at} | {item.total_item} items | ₹{item.total_price}</span>
                                            </Stack>
                                        </Card.Body>
                                    </Card>
                                </Row>
                                <Row style={{ marginBottom: "5%" }}>
                                    <Card>
                                        <Card.Body>
                                            <Stack style={{ marginBottom: "2%" }}>
                                                <h4>Order Details</h4>
                                            </Stack>
                                            <Container>
                                                <Row>
                                                    <Col>
                                                        <Row style={{ marginBottom: "5%" }}>
                                                            <Stack>
                                                                <h6>From</h6>
                                                                <Stack direction="horizontal"><img style={{ width: "20px", marginRight: "2%" }} src="orders.svg" alt='Orders' /> {item.order_details.from.store_name}</Stack>
                                                                <Form.Text>{item.order_details.from.store_add}</Form.Text>
                                                            </Stack>
                                                        </Row>
                                                        <Row style={{ marginBottom: "5%" }}>
                                                            <Stack>
                                                                <h6>Deliver to</h6>
                                                                <Stack direction="horizontal"><img style={{ width: "20px", marginRight: "2%" }} src="map-location.svg" alt='map-location' /> {item.order_details.to.deliver_to}</Stack>
                                                                <Form.Text>{item.order_details.to.deliver_add}</Form.Text>
                                                            </Stack>
                                                        </Row>
                                                    </Col>
                                                    <Col>
                                                        <Stack gap={2}>
                                                            <Stack className='img-container' direction="horizontal" gap={2}>
                                                                <Image width={15} height={15} alt="delete" src="calendar-black.svg" />
                                                                <span className='span-image'>{item.order_details.order_items.length} Items</span>
                                                            </Stack>
                                                            <Stack gap={0}>
                                                                {
                                                                    item.order_details.order_items.map((item, index) => {
                                                                        return (<Stack direction="horizontal" gap={10}>
                                                                            <Stack className='order-type' direction="horizontal" gap={2}>
                                                                                <Image width={17} height={17} alt="edit" src="veg-icon.svg" />
                                                                                <Card.Text style={{ color: "#8E8E93" }}>{item.name} x {item.qua}</Card.Text>
                                                                            </Stack>
                                                                            <Card.Text style={{ color: "#8E8E93" }} className='ms-auto'>₹{item.price}</Card.Text>
                                                                        </Stack>)
                                                                    })
                                                                }</Stack>
                                                        </Stack>
                                                        <hr />
                                                        <Stack direction="horizontal" gap={10}>
                                                            <Card.Text style={{ color: "#8E8E93" }}><h5>Total Bill</h5>
                                                                <span style={{ color: "#007AFF" }}>Paid via credit/debit card</span></Card.Text>
                                                            <p className='ms-auto'>
                                                                <Stack style={{ margin: "inherit" }} direction="horizontal">
                                                                    <Card.Text style={{ color: "#8E8E93" }}><h5>₹{item.order_details.total_bill}</h5></Card.Text>
                                                                </Stack>
                                                            </p>
                                                        </Stack>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Card.Body>
                                    </Card>
                                </Row>
                                <Row>
                                    <Card>
                                        <Row>
                                            <Col>
                                                <Stack style={{ alignItems: "center", margin: "5% 0 0 0" }} className='img-container' gap={2}>
                                                    <Image width={30} height={30} alt="delete" src="calender-pink.svg" />
                                                    <h6 style={{ marginBottom: "0" }}>Order Received</h6>
                                                    <p style={{ color: "#D99BFF" }}>Now</p>
                                                </Stack>
                                            </Col>
                                            <Col>
                                                <Stack style={{ alignItems: "center", margin: "5% 0 0 0" }} className='img-container' gap={2}>
                                                    <Image width={30} height={30} alt="delete" src="tick-green.svg" />
                                                    <h6 style={{ marginBottom: "0" }}>Order Confirmed</h6>
                                                    <p style={{ color: "#4ECB71" }}>Next</p>
                                                </Stack>
                                            </Col>
                                            <Col>
                                                <Stack style={{ alignItems: "center", margin: "5% 0 0 0" }} className='img-container' gap={2}>
                                                    <Image width={30} height={30} alt="delete" src="order-pickup.svg" />
                                                    <h6 style={{ marginBottom: "0" }}>Order Picked up</h6>
                                                    <p style={{ color: "#FF7518" }}>Later (ET : 30min)</p>
                                                </Stack>
                                            </Col>
                                        </Row>
                                    </Card>
                                </Row>
                            </Col>
                        </Row>
                    </Stack>)
                })}
        </Container>
    )
}

export default TrackOrder;