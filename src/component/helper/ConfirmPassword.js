import React, { useState } from 'react';
import { Button, Form, Modal, Stack } from 'react-bootstrap';

function ConfirmPassword() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <>
      <Modal  size="sm-down" centered={true} show={show} onHide={handleClose}>
        <div className="login-modal">
        <Modal.Header closeButton>
          <Stack gap={0} className="col-md-5 mx-auto">
            <Modal.Title style={{ margin: "auto"}}>New Password</Modal.Title>
          </Stack>
        </Modal.Header>
        <p className="text-center">Please enter your new password</p>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                placeholder="New Password"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                placeholder="Confirm password"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Button variant="success" style={{width:"-webkit-fill-available"}}>Next</Button>
            </Form.Group>
          </Form>
        </Modal.Body>
        </div>
      </Modal>
    </>
  );
}

export default ConfirmPassword;