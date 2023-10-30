import { Button, Col, Container, Form, Image, ListGroup, Row } from 'react-bootstrap'
import logo from '../imgs/logo.jpeg'


const footerContainer = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '30px',
    padding: '20px 40px',
    backgroundColor: '#291749',
    color: '#fff',
    width: "100%"
}

const footerLogo = {
    flex: '0.5',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px'
}

const logoImg = {
    marginLeft: '30px',
    height: '150px',
    width: "200px",
    objectFit: "contain",
    borderRadius:"15px"
}

const footerColumn = {
    flex: '3',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    paddingTop: '20px',
    paddingLeft: '70px',
    color: "white",
    textDecoration: "none",
    marginBottom: "10px"
}

const Footer = () => {
    return (
        <div>
            {/* Footer code */}
<div  style={footerContainer}>
    
            <Container >
                {/* Column 1: Logo */}
                <Row className='flex justify-space-between align-items-center'>
                    <Col xs={12} md={6} lg={3} style={{
                    }}>
                        <Image src={logo} alt="Logo" style={logoImg} fluid />

                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <div style={footerColumn}>
                            <ListGroup style={{
                                backgroundColor:"transparent",
                                color:"white"
                            }}>
                            <ListGroup.Item style={{
                                backgroundColor:"transparent",
                                color:"white",
                                border:"none"
                            }}> Home</ListGroup.Item>
                            <ListGroup.Item
                            style={{
                                backgroundColor:"transparent",
                                color:"white",
                                border:"none"
                            }}
                            >About</ListGroup.Item>
                            <ListGroup.Item
                            style={{
                                backgroundColor:"transparent",
                                color:"white",
                                border:"none"
                            }}
                            >Contact Us</ListGroup.Item>
                            <ListGroup.Item
                            style={{
                                backgroundColor:"transparent",
                                color:"white",
                                border:"none"
                            }}
                            >Privacy</ListGroup.Item>
                            <ListGroup.Item
                            style={{
                                backgroundColor:"transparent",
                                color:"white",
                                border:"none"
                            }}
                            >Sign Up</ListGroup.Item>

                        </ListGroup>
                        </div>
                    </Col>

                    <Col xs={12} md={6} lg={3}>
                        <div style={footerColumn}>
                            <ListGroup style={{
                                backgroundColor:"transparent",
                                color:"white"
                            }}>
                            <ListGroup.Item style={{
                                backgroundColor:"transparent",
                                color:"white",
                                border:"none"
                            }}> Accesibility Information</ListGroup.Item>
                            <ListGroup.Item
                            style={{
                                backgroundColor:"transparent",
                                color:"white",
                                border:"none"
                            }}
                            >Copyrignt notice</ListGroup.Item>
                            <ListGroup.Item
                            style={{
                                backgroundColor:"transparent",
                                color:"white",
                                border:"none"
                            }}
                            >T &amp; Cs</ListGroup.Item>
                            <ListGroup.Item
                            style={{
                                backgroundColor:"transparent",
                                color:"white",
                                border:"none"
                            }}
                            >Privacy</ListGroup.Item>
                            <ListGroup.Item
                            style={{
                                backgroundColor:"transparent",
                                color:"white",
                                border:"none"
                            }}
                            >Report Issues</ListGroup.Item>

                        </ListGroup>
                        </div>
                    </Col>
                    <Col md={6} lg={3}>
                    <div style={footerColumn}>
                    <p>Get Your Newsletter</p>
                    <div className="newsletter-container">
                        <Form.Control type='email' size='md' placeholder='Enter email address'
                    />
                        <Button className='mt-4'>Subscribe</Button>
                    </div>
                    <div className="social-icons">
                        <a href="#" className="fa fa-facebook" />
                        <a href="#" className="fa fa-twitter" />
                        <a href="#" className="fa fa-linkedin" />
                        <a href="#" className="fa fa-instagram" />
                    </div>
                </div>   
         
                    </Col>
                </Row>

            </Container>
</div>

            <div className="fixed-footer">
                @ 2023 SKILLIFY, INC
            </div>
        </div>
    )
}

export default Footer