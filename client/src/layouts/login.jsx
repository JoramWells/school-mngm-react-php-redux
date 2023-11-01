import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
// import '../css/login.css'
import { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../_features/userSlice'


const containerStyles = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '5px',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  height: '450px'
}

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState("")
  const [err, setErr] = useState("")

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { data } = useSelector(state => state.user)

  const handleLogin = () => {
    const formData = new FormData()
    formData.append('email', email)
    formData.append('password', password)

    dispatch(
      loginUser(formData)
    )

  }

  useEffect(() => {
    if (data.length > 0) {
      let inputValues = data
      // inputValues['logged']=true
      localStorage.setItem('RCUsers', JSON.stringify(inputValues))
      navigate('/')

    }
  }, [data, navigate])



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
        backgroundColor: "#291749"
      }}>
        <Row xs lg={12} style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <Col xs={4} lg={4} md={6}>
            <Form style={containerStyles} >

              <form action="#" method="post" style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%"
              }}>
                <div style={{
                  width: "100%"
                }}>
                  <div style={{
                    textAlign: "center"
                  }}>
                    <h2>Login</h2>
                    <h4>Welcome back..!</h4>
                    <div className='text-danger text-center'>
                      {err}
                    </div>
                  </div>
                  <Form.Group className='mb-4'>
                    <Form.Control type='email'
                      size='md' placeholder='Enter email address'
                      name='email'
                      id='email'
                      onChange={(e) => setEmail(e.target.value)}
                    />

                  </Form.Group >
                  <Form.Group className='mb-4'>
                    <Form.Control size='md'
                      name='password'
                      id='password'
                      type='password' placeholder='Enter password'
                      onChange={e => setPassword(e.target.value)}
                    />
                  </Form.Group>

                  <Button size='lg' style={{
                    backgroundColor: "#291749",
                    border: "none",
                    width: "100%",
                  }}
                    className='mb-5'
                    onClick={() => handleLogin()}
                  >
                    Login
                  </Button>
                  <div className="forgot-password" style={{
                    textAlign: "center",
                    textDecoration: "none"
                  }}>
                    <Link to={'/forgort-password'}>Forgot my Password</Link>
                  </div>
                </div>

              </form>
              <br />

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

export default Login