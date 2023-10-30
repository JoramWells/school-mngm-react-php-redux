import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import NavbarComponent from '../components/Navbar'
import SideNavBar from '../components/Sidebar'

const containerStyles = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    height: '450px',
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}

const ProgramDetail = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [data, setData] = useState([])

    const [courseName, setCourseName] = useState('')
    const [description, setCourseDescription] = useState('')


    const { id } = useParams()
    const url = `http://localhost/reportcard/server/programs/selectProgramID.php?id=${id}`

    const getProgramDetail = async () => {
        setLoading(true)
        await axios.get(url).then(response => {
            console.log(response)
            setData(response.data)
            setCourseName(response.data.courseName)
            setCourseDescription(response.data.description)
            setLoading(false)
        })
            .catch(error => {
                console.log(error)
                setError(true)
            })
    }

    useEffect(() => {
        getProgramDetail()
    }, [])
    return (
        <div>
            <NavbarComponent />
            <SideNavBar />
            <Container
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: '100vh'
                }}
            >
                {loading ? (<div>loading...</div>) ?
                    error :
                    (<div>error</div>) :
                    (<Row style={containerStyles}>
                        <Col xs={4} lg={4} md={6}>
                            <Form.Group className='mb-2 mt-2'>
                                <Form.Label>Course Name</Form.Label>
                                <Form.Control size='md'
                                    type='text' placeholder='Enter Name'
                                    onChange={e => setCourseName(e.target.value)}
                                    name='userName'
                                    id='userName'
                                    value={courseName}
                                />
                            </Form.Group>
                            <Form.Group className='mb-2'>
                                <Form.Label>Course Description</Form.Label>
                                <Form.Control type='email' size='md' placeholder='Enter email address'
                                    onChange={e => setCourseDescription(e.target.value)}
                                    name='email'
                                    id='email'
                                    value={description}
                                />

                            </Form.Group >
                            <Row>
                                <Col lg={6}>
                                    <Button variant='success' >Edit</Button>
                                </Col>
                                <Col lg={6}>
                                    <Button variant='danger'>Delete</Button>
                                </Col>
                            </Row>

                        </Col>

                    </Row>)}
            </Container>
        </div>
    )
}

export default ProgramDetail