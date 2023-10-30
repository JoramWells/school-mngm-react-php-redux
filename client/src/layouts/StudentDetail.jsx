import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import NavbarComponent from '../components/Navbar'
import SideNavBar from '../components/Sidebar'

const containerStyles = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    height: '450px',
    width: "45%",

}

const StudentDetail = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [role, setRole] = useState([])

    const [courseName, setCourseName] = useState('')
    const [description, setCourseDescription] = useState('')


    const { id } = useParams()
    const url = `http://localhost/reportcard/server/students/selectStudentByID.php?id=${id}`
    const navigate = useNavigate()

    const getProgramDetail = async () => {
        setLoading(true)
        await axios.get(url).then(response => {
            console.log(response)
            setRole(response.data.role)
            setCourseName(response.data.userName)
            setCourseDescription(response.data.email)
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
                    (<div style={containerStyles}>
                        <h3 className='text-center'>Student Profile</h3>
                        <Button
                        style={{
                            display:'block',
                            margin:'auto'
                        }}
                        variant='link'
                        onClick={()=>navigate(`/student-performance/${id}`)}
                        > View Performance</Button>
                        <Row style={{
                            width:"100%"
                        }}>
                            <Col xs={4} lg={12} md={8}>
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
                                    <Form.Control type='text' size='md' placeholder='Enter Course'
                                        onChange={e => setCourseDescription(e.target.value)}
                                        name='desc'
                                        id='desc'
                                        value={description}
                                    />

                                </Form.Group >
                                <Form.Group className='mb-2'>
                                    <Form.Label>Role</Form.Label>
                                    <Form.Control type='text' size='md' placeholder='Enter role'
                                        onChange={e => setRole(e.target.value)}
                                        name='text'
                                        id='text'
                                        value={role}
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

                        </Row>
                    </div>)}
            </Container>
        </div>
    )
}

export default StudentDetail