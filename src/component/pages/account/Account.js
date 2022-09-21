import React, { useState } from 'react'
import { Card, Col, Container, Row, Form, Stack, Nav } from 'react-bootstrap';

function AccountPage() {
    const addressesArr = [
        { id : 1,type:"home" , address : "23, GR Apartments, JP Nagar, Banglore-560061, India"},
        { id : 2, type:"work" , address : "MR Tower, Sarajpur Road, Banglore, India"},
        { id : 3,type:"work" , address : "31, Sharan Circle, Zundal-Tragad, Ahmedabad-486456, India"},
        { id : 1,type:"home" , address : "23, GR Apartments, JP Nagar, Banglore-560061, India"},
        { id : 2, type:"work" , address : "MR Tower, Sarajpur Road, Banglore, India"},
        { id : 3,type:"work" , address : "31, Sharan Circle, Zundal-Tragad, Ahmedabad-486456, India"}
    ]
    
    const [addresses, setAddresses] = useState(addressesArr);
    const deleteAddress = (id) => {
        var tempArray = addresses.filter(function(value, index, arr){ 
            return index !== id;
        });
        setAddresses(tempArray)
    }

    return (
        <Container>
            <Row>
                <Col sm={2}>
                    <Stack gap={0} className="col-md-10 mx-auto">
                        <img src="/Ellipse.png" width={80} style={{borderRadius:"30%"}} alt='dummy' ></img>
                        <h5>Deepak Kumar</h5>
                        <Form.Text muted>+91 9876543234</Form.Text>
                        <Form.Text muted>deepak@gmail.com</Form.Text>
                    </Stack>
                    <Stack direction="horizontal" className="col-md-5 mx-auto" gap={4}>
                        <div style={{ margin: "0 -10% 0 0" }}><img src="edit.svg" alt='dummy' /></div>
                        <div style={{ color: "#D27C2C" }}> Edit</div>
                    </Stack>

                    <Nav defaultActiveKey="/home" className="flex-column">
                        <Nav.Link href="/home">Link</Nav.Link>
                        <Nav.Link eventKey="link-1">Link</Nav.Link>
                        <Nav.Link eventKey="link-2">Link</Nav.Link>
                        <Nav.Link eventKey="disabled" disabled>
                            Disabled
                        </Nav.Link>
                    </Nav>
                </Col>

                <Col sm={10}>
                    <h2>Manage Address</h2>
                    <Row>
                        {
                        addresses.map((item, idx)  => {
                            return(
                            <Col sm={5} style={{marginBottom:"3%"}}>
                            <Card>
                                <Card.Body>
                                    <Row>
                                        <Col sm={3}><img width={22} style={{ marginLeft: "10%" }} src={item.type+".svg"} alt='dummy' /></Col>
                                        <Col sm={9}>
                                            <Form.Text muted><h6>{item.type}</h6></Form.Text>
                                            <p style={{ fontWeight: "450" }}>{item.address}</p>
                                            <Stack direction="horizontal" gap={4}>
                                                <Stack direction="horizontal" gap={3}>
                                                    <div style={{ margin: "0 -10% 0 0" }}><img src="edit.svg" alt='dummy' /></div>
                                                    <div style={{ color: "#D27C2C" }}> Edit</div>
                                                </Stack>
                                                <Stack direction="horizontal" gap={3}>
                                                    <div style={{ margin: "0 -10% 0 0" }}><img src="delete.svg" alt='dummy' /></div>
                                                    <div onClick={() => {deleteAddress(idx)}} style={{ color: "#D27C2C" , cursor:"pointer" }}> Delete</div>
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
            </Row>
        </Container>
    )
}

export default AccountPage;