import './account.scss';
import React, { useState } from 'react'
import { Col, Container, Row, Form, Stack, Nav } from 'react-bootstrap';
import Address from './Address';
import OrderHistory from './OrderHistory';
import Favourites from './Favourites';

function AccountPage(props) {
    const [activeTab, setActiveTab] = useState(props.acticeTab || 1);

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
        // <Container>
            <div style={{ padding: "3%" }} className=''>
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
                            <div className='navbar' style={{marginTop : "10%",paddingRight:"30%"}}>
                                
                            <Nav.Link style = {{color:"black" ,  fontWeight:"600"}} onClick={() => { setActiveTab(1) }}><Stack direction="horizontal" style={{filter: `${activeTab === 1 ? "saturate(10)" : "invert(25%)"}`}} className="col-md-3 mx-auto" gap={2}><img style={{width:"17px"}} src="orders.svg" alt='Orders' />Orders</Stack></Nav.Link>
                            <Nav.Link style = {{color:"black"  , fontWeight:"600"}} onClick={() => { setActiveTab(2) }}><Stack direction="horizontal" style={{filter: `${activeTab === 2 ? "hue-rotate(360deg)" : "invert(25%)"}`}} className="col-md-3 mx-auto" gap={2}><img style={{width:"17px"}} src="favourite.svg" alt='Favourite' />Favourites</Stack></Nav.Link>
                            <Nav.Link style = {{color:"black"  , fontWeight:"600"}} onClick={() => { setActiveTab(3) }}><Stack direction="horizontal" style={{filter: `${activeTab === 3 ? "hue-rotate(180deg)" : "invert(25%)"}`}} className="col-md-3 mx-auto" gap={2}><img style={{width:"17px"}} src="address.svg" alt='address' />Address</Stack></Nav.Link>
                        </div>
                        </Nav>
                    </Col>
                    {tabHandle(activeTab)}
                </Row></div>
        //  </Container>
    )
}

export default AccountPage;