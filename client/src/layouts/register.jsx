import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
// import '../css/login.css'
import moment from 'moment/moment'
import { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import Select from 'react-select'
import { registerUser2 } from '../_features/userSlice'

const containerStyles = {
  backgroundColor: '#fff',
  padding: '10px',
  borderRadius: '5px',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  // height: '450px'
}

const options = [
  { value: 'Admin', label: 'Admin' },
  { value: 'Coordinator', label: 'Coordinator' },
  { value: 'Instructor', label: 'Instructor' },
  { value: 'Student', label: 'Student' },
  { value: 'qa', label: 'qa' },



]

const Register = () => {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [role, setRole] = useState({value:'Admin',lavel:'Admin'})


  const navigate = useNavigate('')
  const dispatch = useDispatch()

  const handleRegister = () => {

    const formData = new FormData();
    formData.append('userName', userName)
    formData.append('email', email)
    formData.append('userPassword', password)
    formData.append('createdAt', moment(new Date()).format('YYYY-MM-DD HH:mm:ss'))
    formData.append('role', role.value)
    dispatch(registerUser2(formData))

    const credentials = {
      userName,
      email,
      password,
      role,
      logged: true
    }
    localStorage.setItem('RCUsers', JSON.stringify(credentials))
    return navigate('/')
  }
  return (
    <>
      {/* 

Project Group: 5

Project Group Members: Vaibhavi Arjunwadkar (1001826818)
                   Sashidhar Boyapati (1002087319)
                   Hema Sai Desai (1002029973)
                   Hemanth Reddy Gillela (1002033611)
                   Smrithi Gujjula (1002073701) 

*/}

      <Navbar />
      <Container fluid style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#291749",
        marginTop: '2rem'
      }}>
        <Row xs lg={12} style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <Col xs={4} lg={4} md={6}>
            <Form style={containerStyles} >

              <div style={{
                textAlign: "center"
              }}>
                <h2 style={{
                  margin: 0
                }}>Sign Up</h2>
                <h4 style={{
                  margin: 0
                }}>Create a New Account!!</h4>
              </div>
              <div style={{
                textAlign: "center",
              }}
                className='text-danger text-center'
              >
                {password !== confirmPassword && 'Passwords Don not Match!!'}
              </div>

              <Form.Group className='mb-2 mt-2'>
                <Form.Label>Username</Form.Label>
                <Form.Control size='md' type='text' placeholder='Enter Name'
                  onChange={e => setUserName(e.target.value)}
                  name='userName'
                  id='userName'
                />
              </Form.Group>
              <Form.Group className='mb-2'>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' size='md' placeholder='Enter email address'
                  onChange={e => setEmail(e.target.value)}
                  name='email'
                  id='email'
                />

              </Form.Group >

              {/* choose role */}
              <Form.Group className='mb-2 mt-2'>
                <Form.Label>Select Role</Form.Label>
                <Select
                  defaultValue={role}
                  onChange={setRole}
                  options={options}
                  name='role'
                  id='role'
                />
              </Form.Group>


              <Form.Group className='mb-2'>
                <Form.Label className='font-bold'>Password</Form.Label>
                <Form.Control size='md' type='password'
                  placeholder='Enter password'
                  onChange={e => setPassword(e.target.value)}
                  name='userPassword'
                  id='userPassword'
                />
              </Form.Group>

              <Form.Group className='mb-2'>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control size='md' type='password' placeholder='Confirm Password'
                  onChange={e => setConfirmPassword(e.target.value)}
                />
              </Form.Group>

              <Button size='md' style={{
                backgroundColor: "#291749",
                border: "none",
                width: "100%",
              }}
                onClick={() => handleRegister()}
                disabled={password !== confirmPassword}
              >
                Sign Up
              </Button>

              <br />
              <div style={{
                textAlign: "center",
                fontSize: "12px",
                marginTop: ".5rem"
              }}>
                By Signing Up you agree to our
                <br />
                Terms and Conditions
              </div>
            </Form>
          </Col>
        </Row>
        {/* Footer code */}

      </Container>
      <div className="fixed-footer">
        @ 2023 SKILLIFY, INC
      </div>
    </>
  )
}

export default Register