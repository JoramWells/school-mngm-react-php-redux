import Navbar from '../components/Navbar'
// import '../css/login.css'
import { Button, Container, Form, Row, Col } from 'react-bootstrap'


const containerStyles = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '5px',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
}

const Contact = () => {
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

 

                  <div style={{
                    textAlign: "center"
                  }}>
                    <h3>Contact Us.</h3>
                    <p style={{
                      fontSize:"11px"
                    }}>Let us know your questions, suggestions and concerns
                      by filling out the contact form below.</p>
                  </div>
                  <Form.Group className='mb-4'>
                    <Form.Control type='text' size='md' placeholder='Enter name' />

                  </Form.Group >
                  <Form.Group className='mb-4'>
                    <Form.Control type='email' size='md' placeholder='Enter email address' />

                  </Form.Group >

                  <Form.Group className='mb-4'>
                    <Form.Control size='md' type='number' placeholder='Enter phone number' />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>

                  <Button size='md' style={{
                    backgroundColor: "#291749",
                    border: "none",
                    width: "100%",
                  }}
                    className='mb-5'
                  >
                    Login
                  </Button>



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

export default Contact