import React, { useState } from 'react'
import { Button, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import NavbarComponent from '../components/Navbar'
import SideNavBar from '../components/Sidebar'
const StudentAccount = () => {
    const navigate = useNavigate()

    const getFromStorage = () => {
        const data = localStorage.getItem('RCUsers')
        if (data !== null) {
            return JSON.parse(data)
        }
        return []
    }

    const [user, setUser] = useState(getFromStorage())

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
            <div style={{
                zIndex: "-50"
            }}>
                <NavbarComponent />
            </div>
            <Container fluid style={{
                padding: "20px",

            }}>

                <Row
                    style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "5rem"
                    }}
                >
                    {getFromStorage().length && getFromStorage()[0].role ==='Student'&&

                        <Col lg={4}>
                            <Button onClick={() => navigate({
                                pathname: '/student-performance',
                                search: '?from=student'
                            })}>
                                My Performance
                            </Button>
                        </Col>
                    }

                </Row>
                <Row style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Col lg={4} className='m-2' style={{
                        height: "250px",
                        borderRadius: "10px",
                        padding: "10px",
                        color: "white",
                        position: "relative"

                    }}>
                        <ListGroup>
                            <ListGroupItem style={{
                                backgroundColor: "#291749",
                                color: "white",
                                textAlign: "center",
                                textTransform: "uppercase"
                            }}>Student Profile</ListGroupItem>
                            <ListGroupItem>Name: {user[0].userName}</ListGroupItem>
                            <ListGroupItem>Email: {user[0].email}</ListGroupItem>
                            <ListGroupItem>Phone Number: +1(888)888-8888</ListGroupItem>
                            <ListGroupItem>Address: 7015Nedderman Dr.Arlington, TX 76019</ListGroupItem>
                            <ListGroupItem>DOB: 09/12/1998</ListGroupItem>
                            <ListGroupItem>Admission Year: 2023</ListGroupItem>
                        </ListGroup>
                    </Col>

                </Row>
            </Container>


        </div>
    )
}

export default StudentAccount