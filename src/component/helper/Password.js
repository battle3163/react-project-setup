import React, { useState } from 'react';
import { Button, Form, Modal, Stack } from 'react-bootstrap';

function Password() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <>
      <Modal  size="sm-down" centered={true} show={show} onHide={handleClose}>
        <div className="login-modal">
        <Modal.Header closeButton>
          <Stack gap={0} className="col-md-5 mx-auto">
            <Modal.Title style={{ margin: "auto"}}>We have sent an OTP to your mobile</Modal.Title>
          </Stack>
        </Modal.Header>
        <p className="text-center">Please check your mobile number 90333****5 to continue to reset your password</p>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="OTP"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Button variant="success" style={{width:"-webkit-fill-available"}}>Next</Button>
            </Form.Group>
          </Form>
          <Modal.Footer>
            <p style={{ margin: "auto"}}>Don't receive? <a href="/signup"><span style={{ color: "#4ECB71" }}>Click Here</span></a></p>
          </Modal.Footer>
        </Modal.Body>
        </div>
      </Modal>
    </>
  );
}

export default Password;