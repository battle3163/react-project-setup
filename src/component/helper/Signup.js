import React, { useState } from 'react';
import { Button, Form, Modal, Stack } from 'react-bootstrap';

function Signup() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <>
      <Modal  size="md" centered={true} show={show} onHide={handleClose}>
        <div className="login-modal">
        <Modal.Header closeButton>
          <Stack gap={0} className="col-md-5 mx-auto">
            <Modal.Title style={{ margin: "auto"}}>Sign Up</Modal.Title>
          </Stack>
        </Modal.Header>
        <p className="text-center">Add your details to Sign up</p>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                placeholder="Email address"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Mobile No."
              /></Form.Group>
              <Form.Group className="mb-3">
              <Form.Control
                as="textarea" rows={3}
                placeholder="Address"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Confirm password"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Button variant="success" style={{width:"-webkit-fill-available"}}>Login</Button>
            </Form.Group>

          </Form>
          <Modal.Footer>
            <p style={{ margin: "auto"}}>Already have an account? <a href="/login"><span style={{ color: "#4ECB71" }}>Login</span></a></p>
          </Modal.Footer>
        </Modal.Body>
        </div>
      </Modal>
    </>
  );
}

export default Signup;