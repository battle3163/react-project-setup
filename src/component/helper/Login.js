import React, { useState } from 'react';
import { Button, Form, Modal, Stack } from 'react-bootstrap';
import SignUp from './Signup'
import ResetPassword from './ResetPassword';
function Login(props) {
  const [showSignup, setshowSignup] = useState(false)
  const [showReset, setshowReset] = useState(false)

  const handleSignUpClose = () => {
    setshowSignup(!showSignup)
  }

  const handleSignUp = () => {
    props.handleLogin()
    setshowSignup(!showSignup)
  }

  const handleResetClose = () => {
    setshowReset(!showReset)
  }

  const handleReset = () => {
    props.handleLogin()
    setshowReset(!showReset)
  }

  return (
    <>
      <Modal backdrop="static" size="sm" centered={true} show={props.isShow} onHide={props.handleLogin}>
        <div className="login-modal">
          <Modal.Header closeButton>
            <Stack gap={0} className="col-md-5 mx-auto">
              <Modal.Title style={{ margin: "auto" }}>Login</Modal.Title>
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
                <Button variant="success" style={{ width: "-webkit-fill-available" }}>Login</Button>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Text ><a onClick={handleReset}  href='javascript:void(0)'>Forgot your password?</a></Form.Text>
              </Form.Group>

            </Form>
            <Modal.Footer>
              <p style={{ margin: "auto" }}>Don't have an account? <a onClick={handleSignUp} href='javascript:void(0)'><span style={{ color: "#4ECB71" }}>Sign Up</span></a></p>
            </Modal.Footer>
          </Modal.Body>
        </div>
      </Modal>
      <ResetPassword isShow={showReset} handleReset={handleReset} handleResetClose={handleResetClose} />
      <SignUp isShow={showSignup} handleSignUp={handleSignUp} handleSignUpClose={handleSignUpClose} />
    </>
  );
}

export default Login;