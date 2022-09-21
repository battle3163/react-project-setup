import './account.scss';
import React, { useState } from 'react'
import { Card, Col, Container, Row, Form, Stack, Nav, Figure } from 'react-bootstrap';
import Address from './Address';
import OrderHistory from './OrderHistory';
import Favourites from './Favourites';

function AccountPage() {

    const [activeTab, setActiveTab] = useState(1);


    const tabHandle = (tab) => {
        switch (tab) {
            case 1:
                return <OrderHistory />;
            case 2:
                return <Favourites />;
            case 3:
                return <Address />;
            default:
                return null;
        }
    }

    return (
        <Container>
            <div style={{ paddingTop: "5%" }} className=''>
                <Row>
                    <Col sm={3}>
                        <Nav defaultActiveKey="/home"  className="flex-column">
                            <Stack gap={0} style={{ textAlign: "center" }} className="col-md-10 mx-auto">
                                <img src="/Ellipse.png" alt="profile" width={100} style={{ margin: "auto", borderRadius: "30%" }} ></img>
                                <h5>Deepak Kumar</h5>
                                <Form.Text muted>+91 9876543234</Form.Text>
                                <Form.Text muted>deepak@gmail.com</Form.Text>
                            </Stack>
                            <Stack direction="horizontal" style={{marginTop:"2%"}} className="col-md-3 mx-auto" gap={2}>
                                <div style={{ width:"15px" }}><img src="edit.svg" alt='edit' /></div>
                                    <span style={{ color: "#D27C2C" }}> Edit</span>
                            </Stack>
                            <div style={{marginTop : "10%"}}>
                            <Nav.Link style = {{color:"black" , padding:"5% 0" , fontWeight:"600"}} onClick={() => { setActiveTab(1) }}><Stack direction="horizontal" className="col-md-3 mx-auto" gap={2}><img style={{width:"15px"}} src="orders.svg" alt='Orders' />Orders</Stack></Nav.Link>
                            <Nav.Link style = {{color:"black"  , padding:"3% 0" ,  fontWeight:"600"}} onClick={() => { setActiveTab(2) }}><Stack direction="horizontal" className="col-md-3 mx-auto" gap={2}><img style={{width:"15px"}} src="favourite.svg" alt='Favourite' />Favourites</Stack></Nav.Link>
                            <Nav.Link style = {{color:"black"  , padding:"3% 0" ,  fontWeight:"600"}} onClick={() => { setActiveTab(3) }}><Stack direction="horizontal" className="col-md-3 mx-auto" gap={2}><img style={{width:"15px"}} src="address.svg" alt='address' />Address</Stack></Nav.Link>
                        </div>
                        </Nav>
                    </Col>
                    {tabHandle(activeTab)}
                </Row></div>
        </Container>
    )
}

export default AccountPage;