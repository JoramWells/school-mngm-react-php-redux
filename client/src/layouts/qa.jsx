import React from 'react'
import SideNavBar from '../components/Sidebar'
import NavbarComponent from '../components/Navbar'
import { Button, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
const QAOfficer = () => {
    return (
        <div>
            {/* 

Project Group: 5

Project Group Members: Vaibhavi Arjunwadkar (1001826818)
                   Sashidhar Boyapati (1002087319)
                   Hema Sai Desai (1002029973)
                   Hemanth Reddy Gillela (1002033611)
                   Smrithi Gujjula (1002073701) 

*/}
            <SideNavBar />
            <NavbarComponent/>
            <Container fluid='sm' style={{
                padding: "20px",

            }}>

                <Row style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop:"4rem"
                }}>
                    <Col lg={4}>
                        <Button size='lg' style={{
                            backgroundColor: "#291749",
                            outline:"none",
                            border:"0",
                            width:"100%"

                        }}>Curriculumn Evaluation</Button>
                    </Col>

                    {/* 2 */}
                    <Col lg={4}>
                        <Button size='lg' style={{
                            backgroundColor: "#291749",
                            outline:"none",
                            border:"0",
                            width:"100%"

                        }}>Assesment Tools</Button>
                    </Col>


                </Row>
                <Row className='mt-5' style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Col lg={4}>
                        <Button size='lg' style={{
                            backgroundColor: "#291749",
                            outline:"none",
                            border:"0",
                            width:"100%"

                        }}>Performance Assesment</Button>
                    </Col>

                    {/* 2 */}
                    <Col lg={4}>
                        <Button size='lg' style={{
                            backgroundColor: "#291749",
                            outline:"none",
                            border:"0",
                            width:"100%"

                        }}>Program Evaluation Reviews</Button>
                    </Col>


                </Row>
                <Row className='mt-5' style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Col lg={4}>
                        <Button size='lg' style={{
                            backgroundColor: "#291749",
                            outline:"none",
                            border:"0",
                            width:"100%"

                        }}>Employment Initiatives</Button>
                    </Col>

                    {/* 2 */}
                    <Col lg={4}>
                        <Button size= 'lg' style={{
                            backgroundColor: "#291749",
                            outline:"none",
                            border:"0",
                            width:"100%"

                        }}>Quality Standard Compliance</Button>
                    </Col>


                </Row>

                <Row className='mt-5' style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Col lg={4}>
                        <Button size='lg' style={{
                            backgroundColor: "#291749",
                            outline:"none",
                            border:"0",
                            width:"100%"

                        }}>Reporting</Button>
                    </Col>

                    {/* 2 */}
                    <Col lg={4}>
                        <Button size='lg' style={{
                            backgroundColor: "#291749",
                            outline:"none",
                            border:"0",
                            width:"100%"

                        }}>Student Support and Feedback</Button>
                    </Col>


                </Row>

                <Row className='mt-5' style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Col lg={4}>
                        <Button size='lg' style={{
                            backgroundColor: "#291749",
                            outline:"none",
                            border:"0",
                            width:"100%"

                        }}>Accreditation</Button>
                    </Col>

                    {/* 2 */}
                    <Col lg={4}>
                        <Button size='lg' style={{
                            backgroundColor: "#291749",
                            outline:"none",
                            border:"0",
                            width:"100%"

                        }}>Faculty Development</Button>
                    </Col>


                </Row>
            </Container>


        </div>
    )
}

export default QAOfficer