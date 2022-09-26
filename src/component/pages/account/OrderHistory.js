import './account.scss';
import React, { useState } from 'react'
import { Card, Col, Container, Row, Form, Stack, Figure } from 'react-bootstrap';

function OrderHistory() {


    const ordersArr = [
        {
            id: 1, orderId: "Order #7654567828", image: "Order-2.svg", name: "ABC Food", category: "Veg Food", orderAt: "Mon, Nov 12, 6:26PM", deliveredOn: "Mon, Nov 12, 6:26PM", foods: [{
                name: "Idly, Vada, Sambar",
                quantity: 1, price: 100
            }, { name: "Paneer curry", quantity: 1, price: 140 }], totalPaid: 240
        },
        {
            id: 1, orderId: "Order #7654567828", image: "slider-foodimage.svg", name: "ABC Food", category: "Veg Food", orderAt: "Mon, Nov 12, 6:26PM", deliveredOn: "Mon, Nov 12, 6:26PM", foods: [{
                name: "Idly, Vada, Sambar",
                quantity: 1, price: 100
            }, { name: "Paneer curry", quantity: 1, price: 140 }], totalPaid: 240
        },
        {
            id: 1, orderId: "Order #7654567828", image: "slider-image.svg", name: "ABC Food", category: "Veg Food", orderAt: "Mon, Nov 12, 6:26PM", deliveredOn: "Mon, Nov 12, 6:26PM", foods: [{
                name: "Idly, Vada, Sambar",
                quantity: 1, price: 100
            }, { name: "Paneer curry", quantity: 1, price: 140 }], totalPaid: 240
        }
    ]

    const [orders, setOrders] = useState(ordersArr);

    return (
        <Col sm={9}>
            <h2>Order History</h2>
            <Row>
                {
                    orders.map((item, idx) => {
                        return (
                            <Col className='order-col' key={idx} sm={9}>
                                <Card className='order-card'>
                                    <Card.Body>
                                        <Row>
                                            <Col sm={2}>
                                                <Card.Img className='' variant="right" alt='item' src={item.image} />
                                            </Col>
                                                    

                                            <Col sm={10}>
                                                <Stack className='order-type' direction="horizontal" gap={10}>
                                                    <h6>{item.name}</h6>
                                                    <p className='order-del ms-auto'>{item.deliveredOn}</p>
                                                </Stack>
                                                <Stack className='order-type' direction="horizontal" gap={2}>
                                                    <Figure.Image width={15} height={15} alt="edit" src="veg-icon.svg" />
                                                    <span className='span-image'>{item.category}</span>
                                                </Stack>
                                                <Stack className='order-date' direction="horizontal" gap={3}>
                                                    <Stack className='img-container' direction="horizontal" gap={2}>
                                                        <Figure.Image width={15} height={15} alt="edit" src="clock.svg" />
                                                        <span className='span-image'>{item.orderId}</span>
                                                    </Stack>
                                                    <Stack className='img-container' direction="horizontal" gap={2}>
                                                        <Figure.Image width={15} height={15} alt="delete" src="calander.svg" />
                                                        <span className='span-image'>{item.orderAt}</span>
                                                    </Stack>
                                                </Stack>
                                                <Stack>
                                                    {item.foods.map((orderItem, idx) => {
                                                        return (
                                                            <p key={idx} className="order-items">{orderItem.name} X {orderItem.quantity} = ₹{orderItem.price}</p>
                                                        )
                                                    })}
                                                </Stack>
                                                <hr className='order-line' />
                                                <Stack>
                                                    <h6>Total Paid: ₹{item.totalPaid}</h6>
                                                </Stack>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>);
                    })}
            </Row>

        </Col>
    )
}

export default OrderHistory;