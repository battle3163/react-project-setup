import './account.scss';
import React, { useState } from 'react'
import { Card, Col, Container, Row, Form, Stack, Figure } from 'react-bootstrap';

function Address() {


    const addressesArr = [
        { id: 1, type: "home", address: "23, GR Apartments, JP Nagar, Banglore-560061, India" },
        { id: 2, type: "work", address: "MR Tower, Sarajpur Road, Banglore-567541, India" },
        { id: 3, type: "work", address: "31, Sharan Circle, Zundal-Tragad, Ahmedabad-486456, India" }
    ]

    const [addresses, setAddresses] = useState(addressesArr);
    const deleteAddress = (id) => {
        var tempArray = addresses.filter(function (value, index, arr) {
            return index !== id;
        });
        setAddresses(tempArray)
    }

    return (
                <Col sm={9}>
                    <h2>Manage Address</h2>
                    <Row>
                        {
                            addresses.map((item, idx) => {
                                return (
                                    <Col className='address-col' key={idx} sm={5}>
                                        <Card className='address-card'>
                                            <Card.Body>
                                                <Row>
                                                    <Col sm={2}>
                                                        <Card.Img className='' variant="right" alt='item' src={item.type + ".svg"} />
                                                    </Col>
                                                    <Col sm={10}>
                                                        <Form.Text muted><h6>{item.type}</h6></Form.Text>
                                                        <p className='address'>{item.address}</p>
                                                        <Stack direction="horizontal" gap={3}>
                                                            <Stack className='img-container' direction="horizontal" gap={2} onClick={() => { console.log("Not implement Yet") }}>
                                                                <Figure.Image width={15} height={15} alt="edit" src="edit.svg" />
                                                                <span className='span-image'>Edit</span>
                                                            </Stack>
                                                            <Stack className='img-container' direction="horizontal" gap={2} onClick={() => { deleteAddress(idx) }}>
                                                                <Figure.Image width={15} height={15} alt="delete" src="delete.svg" />
                                                                <span className='span-image'>Delete</span>
                                                            </Stack>
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

export default Address;