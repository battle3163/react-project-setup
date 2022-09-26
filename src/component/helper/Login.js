import React, { useState } from 'react';
import { Button, Form, Modal, Spinner, Stack } from 'react-bootstrap';
import SignUp from './Signup'
import ResetPassword from './ResetPassword';
import { useUserLoginMutation } from '../../api';
import { useNavigate } from 'react-router-dom';
function Login(props) {
  const isShowProps = props.isShow;
  const [isShow, setIsShow] = useState(isShowProps === true);
  const navigate = useNavigate();
  const [showSignup, setshowSignup] = useState(false)
  const [showReset, setshowReset] = useState(false)
  const [loginDetails,setLoginDetails] = useState({'fcmToken':'fgdygjdeiofjdhdgilurfkdheifv'})
  const [userLogin, isLoading ] = useUserLoginMutation()

  const handleSignUpClose = () => {
    setshowSignup(!showSignup)
  }

  const handleSignUp = () => {
    handleLogin()
    setshowSignup(!showSignup)
  }

  const handleResetClose = () => {
    setshowReset(!showReset)
  }

  const handleReset = () => {
    props.handleLogin()
    setshowReset(!showReset)
  }

  const handleChangeValue = (field, value) => {
    setLoginDetails(loginDetails => ({ ...loginDetails, [field]: value }))
 }

 const handleLogin = (value) => {
  setIsShow(false)
  props.handleLogin(value)
 }
 const HandleLoginUser = async () => {
   try {
    const response = await userLogin(loginDetails).unwrap();
    if(response?.status && response?.token) {
        localStorage.setItem('auth_token',response.token)
        setIsShow(false)
        navigate('/account')
      }
  } catch (error) {
      console.log(error);
  }

}

  return (
    <>
      <Modal backdrop="static" size="sm" centered={true} show={isShow} onHide={handleLogin}>
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
                  value={loginDetails.emailOrPhone}
                  onChange={(e) => { handleChangeValue('emailOrPhone', e.target.value) }} 
                  placeholder="Your Email"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="password"
                  value={loginDetails.password}
                  onChange={(e) => { handleChangeValue('password', e.target.value) }} 
                  placeholder="Your Password"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Button onClick={HandleLoginUser} variant="success" className="action-button w-[100%]">
                    {isLoading.isLoading ? (<Spinner variant="light" size="sm" role="status" aria-hidden="true"animation="border"/>) : "Login" }
                </Button>
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