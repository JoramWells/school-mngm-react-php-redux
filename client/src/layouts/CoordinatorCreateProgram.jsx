import moment from 'moment'
import React, { useState } from 'react'
import { Button, Col, Container, Form, Row, ToastContainer } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addCourse } from '../_features/courseSlice'
import NavbarComponent from '../components/Navbar'
import SideNavBar from "../components/Sidebar"

const containerStyles = {
    backgroundColor: '#fff',
    padding: '10px',
    borderRadius: '5px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    // height: '450px'
}

const CoordinatorCreateProgram = () => {
    const [courseName, setCourseName] = useState('')
    const [description, setDescription] = useState('')


    const dispatch = useDispatch()

    const handleRegister =  () => {
        const formData = new FormData();
        formData.append('courseName', courseName)
        formData.append('description', description)
        formData.append('createdAt', moment(new Date()).format('YYYY-MM-DD HH:mm:ss'))
        dispatch(addCourse(
            formData
        ))
    }



    return (
        <>
            <NavbarComponent />
            <SideNavBar />
            <Container fluid style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
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

                            <Form.Group className='mb-2 mt-2'>
                                <Form.Label>Course Name</Form.Label>
                                <Form.Control size='md' type='text' placeholder='Enter Name'
                                    onChange={e => setCourseName(e.target.value)}
                                    name='userName'
                                    id='userName'
                                />
                            </Form.Group>
                            <Form.Group className='mb-2'>
                                <Form.Label>Description</Form.Label>
                                <Form.Control type='description' as='textarea' size='md' placeholder='Enter description'
                                    onChange={e => setDescription(e.target.value)}
                                    name='description'
                                    id='description'
                                />

                            </Form.Group >


                            <Button size='md' style={{
                                backgroundColor: "#291749",
                                border: "none",
                                width: "100%",
                            }}
                                onClick={() => handleRegister()}
                            >
                                Sign Up
                            </Button>
                        </Form>
                    </Col>
                </Row>
                {/* Footer code */}
                <ToastContainer/>

            </Container>
        </>
    )
}

export default CoordinatorCreateProgram