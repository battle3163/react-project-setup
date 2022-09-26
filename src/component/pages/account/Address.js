import './account.scss';
import React, { useState, useEffect } from 'react'
import { Card, Col, Row, Form, Stack, Figure, Modal, Button, Spinner } from 'react-bootstrap';
import { useGetAddressesMutation, useUpdateAddressMutation } from "../../../api"

function Address() {

    const [addresses, setAddresses] = useState([]);
    const [address, setAddress] = useState({});
    const [activeEditModal, setEditModal] = useState(false);
    const [getAddresses, isAddressLoading ] = useGetAddressesMutation();
    const [updateAddress, isUpdateAddLoading ] = useUpdateAddressMutation()

    useEffect(() => {
        getAddressesApi()
    }, [])

    const getAddressesApi = async () => {
        const response = await getAddresses();
        if (response.data && response.data.status === 200) {
            setAddresses(response.data.data);
        }
    }

    // const getAddressApi = async (id) => {
    //     const response = useGetAddressQuery(id);
    //     if (response.data && response.data.status === 200) {
    //         setAddress(response.data.data);
    //     }
    // }


    const deleteAddress = (id) => {
        var tempArray = addresses.filter(function (value, index, arr) {
            return index !== id;
        });
        setAddresses(tempArray)
    }

    const handleEditAddressModal = (state) => {
        setEditModal(state)
    }

    const editAddress = (address) => {
        setEditModal(true);
        setAddress(address);
    }

    const handleChangeAddress = (field, value) => {
        setAddress(address => ({ ...address, [field]: value }))
    }

    const updateUserAddress = async () => {
        try {
            console.log(address);
            const response = await updateAddress(address);
            console.log(response);
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <><Col sm={8}>
            <h2>Manage Address</h2>
            { !isAddressLoading.isLoading ?
            <Row>
                {
                    addresses.map((item, idx) => {
                        return (
                            <Col className='address-col' key={idx} sm={6}>
                                <Card className='address-card'>
                                    <Card.Body>
                                        <Row>
                                            <Col sm={3}>
                                                <Card.Img className='' variant="right" alt='item' src={item.type + ".svg"} onError={({ currentTarget }) => { currentTarget.onerror = null; currentTarget.src = "home.svg"; }} />
                                            </Col>
                                            <Col sm={9}>
                                                <Form.Text muted><h6>{item.type}</h6></Form.Text>
                                                <p className='address'>{item.address}</p>
                                                <Stack direction="horizontal" gap={3}>
                                                    <Stack className='img-container' direction="horizontal" gap={2} onClick={() => { editAddress(item) }}>
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
            </Row> : <Spinner animation="border" />}
        </Col>
            <Modal backdrop="static" size="md" centered={true} show={activeEditModal} onHide={handleEditAddressModal}>
                <div className="login-modal">
                    <Modal.Header closeButton>
                        <Stack gap={0} className="col-md-5 mx-auto">
                            <Modal.Title style={{ margin: "auto" }}>Edit Address</Modal.Title>
                        </Stack>
                    </Modal.Header>
                    <p className="text-center">Add your address details</p>
                    <Modal.Body>
                        <Form>
                            <Row className='mb-3'>
                                <Col>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Address Name</Form.Label>
                                        <Form.Control value={address.addressName} onChange={(e) => { handleChangeAddress('addressName', e.target.value) }} type='text' />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>House No</Form.Label>
                                        <Form.Control value={address.houseNo} onChange={(e) => { handleChangeAddress('houseNo', e.target.value) }} type='text' />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className='mb-3'>
                                <Col>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Apartment Name</Form.Label>
                                        <Form.Control value={address.apartmentName} onChange={(e) => { handleChangeAddress('apartmentName', e.target.value) }} type='text' />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Landmark</Form.Label>
                                        <Form.Control value={address.landmark} onChange={(e) => { handleChangeAddress('landmark', e.target.value) }} type='text' />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group className="mb-3">
                                <Form.Select value={address.type} onChange={(e) => { handleChangeAddress('type', e.target.value) }}>
                                    <option disabled>Type</option>
                                    <option value="home">Home</option>
                                    <option value="work">Work</option>
                                    <option value="other">Other</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Complete Address</Form.Label>
                                <Form.Control as="textarea" value={address.address} onChange={(e) => { handleChangeAddress('address', e.target.value) }} rows={2} />
                            </Form.Group>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Button variant="outline-secondary" onClick={() => { handleEditAddressModal(false) }} className="action-button w-[100%]">Cancel</Button>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Button onClick={updateUserAddress} variant="outline-success" isLoading={isUpdateAddLoading.isLoading} className="action-button w-[100%]">Save</Button>
                                    </Form.Group>
                                </Col>
                            </Row>

                        </Form>
                    </Modal.Body>
                </div>
            </Modal>
        </>
    )
}

export default Address;