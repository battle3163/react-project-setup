import React, { useState } from 'react';
import { Button, Form, Modal, Stack } from 'react-bootstrap';

function ResetPassword() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <>
      <Modal  size="sm" centered={true} show={show} onHide={handleClose}>
        <div className="login-modal">
        <Modal.Header closeButton>
          <Stack gap={0} className="col-md-5 mx-auto">
            <Modal.Title style={{ margin: "auto"}}>Reset Password</Modal.Title>
          </Stack>
        </Modal.Header>
        <p className="text-center">Please enter your email to receive a link to create a new password via email</p>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                placeholder="Your Email"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Button variant="success" style={{width:"-webkit-fill-available"}}>Send</Button>
            </Form.Group>
          </Form>
        </Modal.Body>
        </div>
      </Modal>
    </>
  );
}

export default ResetPassword;