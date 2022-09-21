import React, { useState } from 'react';
import { Button, Form, Modal, Stack } from 'react-bootstrap';

function Login() {
  
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <>
      <Modal  backdrop="static" size="sm-down" centered={true} show={show} onHide={handleClose}>
        <div className="login-modal">
        <Modal.Header closeButton>
          <Stack gap={0} className="col-md-5 mx-auto">
            <Modal.Title style={{ margin: "auto"}}>Login</Modal.Title>
          </Stack>
        </Modal.Header>
        <p className="text-center">Add your details to login</p>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                placeholder="Your Email"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                placeholder="Your Password"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Button variant="success" style={{width:"-webkit-fill-available"}}>Login</Button>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Text >Forgot your password?</Form.Text>
            </Form.Group>

          </Form>
          <Modal.Footer>
            <p style={{ margin: "auto"}}>Don't have an account? <a href="/signup"><span style={{ color: "#4ECB71" }}>Sign Up</span></a></p>
          </Modal.Footer>
        </Modal.Body>
        </div>
      </Modal>
    </>
  );
}

export default Login;