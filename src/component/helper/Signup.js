import React, { useState } from 'react';
import { Button, Form, Modal, Spinner, Stack } from 'react-bootstrap';
import { useUserSignUpMutation } from '../../api';
import { useNavigate } from 'react-router-dom';

function Signup(props) {
  console.log(props);
  const isShowProps = props.isShow;
  console.log(isShowProps);
  const [isShow, setIsShow] = useState(isShowProps === true);
  const [signupDetails,setSignupDetails] = useState({})
  const [userSignUp, isLoading ] = useUserSignUpMutation()
  const navigate = useNavigate();

  const HandleSignupUser = async () => {
    try {
     const response = await userSignUp(signupDetails);
     console.log(response)
     if(response?.status && response?.token) {
          setIsShow(false)
         navigate('/account')
       }
   } catch (error) {
       console.log(error);
   }
   
   const handleChangeValue = (field, value) => {
    setSignupDetails(signupDetails => ({ ...signupDetails, [field]: value }))
 }
 const handleSignUp = (value) => {
  setIsShow(false)
  props.handleSignUpClose(value)
 }
  return (
    <>
      <Modal  size="sm-md" centered={true} show={true} onHide={handleSignUp}>
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
                value={signupDetails.fullName}
                  onChange={(e) => { handleChangeValue('fullName', e.target.value) }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                placeholder="Email address"
                value={signupDetails.email}
                  onChange={(e) => { handleChangeValue('email', e.target.value) }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Mobile No."
                value={signupDetails.phoneNumber}
                  onChange={(e) => { handleChangeValue('phoneNumber', e.target.value) }}
              /></Form.Group>      
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Password"
              />
            </Form.Group>
            {/* <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Confirm password"
              /> 
            </Form.Group>*/}
            <Form.Group className="mb-3">
              <Button  onClick={HandleSignupUser} variant="success" style={{width:"-webkit-fill-available"}}>
              {isLoading.isLoading ? (<Spinner variant="light" size="sm" role="status" aria-hidden="true"animation="border"/>) : "Sign-up" }</Button>
            </Form.Group>

          </Form>
          <Modal.Footer>
            <p style={{ margin: "auto"}}> Already have an account? <a onClick={props.handleSignUp} href='javascript:void(0)'><span style={{ color: "#4ECB71" }}>Login</span></a></p>
          </Modal.Footer>
        </Modal.Body>
        </div>
      </Modal>
    </>
  );
}
}
export default Signup;