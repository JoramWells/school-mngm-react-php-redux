import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row, Toast, ToastContainer } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { deleteUser, editUser, fetchUsers } from '../_features/userSlice'
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

const PerformanceDetail = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [role, setRole] = useState([])

    const [userName, setuserName] = useState('')
    const [email, setEmail] = useState('')
    const [showA, setShowA] = useState(false);

    const toggleShowA = () => setShowA(!showA);

    const handleRegister = () => {

        const formData = new FormData();
        formData.append('id', id)
        formData.append('userName', userName)
        formData.append('email', email)
        // formData.append('createdAt', moment(new Date()).format('YYYY-MM-DD HH:mm:ss'))
        formData.append('role', role.value)
        dispatch(editUser(formData))
    
        const credentials = {
          userName,
          email,
          role,
          logged: true
        }
        localStorage.setItem('RCUsers', JSON.stringify(credentials))
        // return navigate('/')
      }


    const { id } = useParams()
    const url = `http://localhost/reportcard/server/students/selectStudentByID.php?id=${id}`
    const navigate = useNavigate()
    const dispatch = useDispatch()

    console.log(dispatch(fetchUsers()),'uuty')

    const getProgramDetail = async () => {
        setLoading(true)
        await axios.get(url).then(response => {
            console.log(response)
            setRole(response.data.role)
            setuserName(response.data.userName)
            setEmail(response.data.email)
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
                                display: 'block',
                                margin: 'auto'
                            }}
                            variant='link'
                            onClick={() => navigate(`/student-performance-detail/${id}`)}
                        > View Performance</Button>
                        <Row style={{
                            width: "100%"
                        }}>
                            <Col xs={4} lg={12} md={8}>
                                <Form.Group className='mb-2 mt-2'>
                                    <Form.Label>User Name</Form.Label>
                                    <Form.Control size='md'
                                        type='text' placeholder='Enter Name'
                                        onChange={e => setuserName(e.target.value)}
                                        name='userName'
                                        id='userName'
                                        value={userName}
                                    />
                                </Form.Group>
                                <Form.Group className='mb-2'>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type='text' size='md' placeholder='Enter Course'
                                        onChange={e => setEmail(e.target.value)}
                                        name='desc'
                                        id='desc'
                                        value={email}
                                    />

                                </Form.Group >

                                {/* address */}
                                <Form.Group className='mb-2'>
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control type='text' size='md' placeholder='Enter Address'
                                        // onChange={e => setEmail(e.target.value)}
                                        name='desc'
                                        id='desc'
                                        // value={email}
                                    />

                                </Form.Group >

                                {/*Phone No  */}
                                <Form.Group className='mb-2'>
                                    <Form.Label>Phone No.</Form.Label>
                                    <Form.Control type='text' size='md' placeholder='Enter Phone No'
                                        // onChange={e => setEmail(e.target.value)}
                                        name='desc'
                                        id='desc'
                                        // value={email}
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
                                        <Button variant='success'
                                        onClick={()=>{
                                            dispatch(handleRegister())
                                        }}
                                        >Edit</Button>
                                    </Col>
                                    <Col lg={6}>
                                        <Button variant='danger'
                                            onClick={() => {
                                                dispatch(
                                                    deleteUser(id)
                                                )
                                                toggleShowA()

                                            }}
                                        >Delete</Button>
                                    </Col>
                                </Row>

                            </Col>

                        </Row>
                    </div>)}
                <ToastContainer
                    className='p-3'
                    position='top-end'
                >
                    <Toast show={showA} onClose={toggleShowA}>

                        <Toast.Header>
                            <img
                                src="holder.js/20x20?text=%20"
                                className="rounded me-2"
                                alt=""
                            />
                            <strong className="me-auto">Deleted</strong>
                        </Toast.Header>
                        <Toast.Body>Successfully Deleted User</Toast.Body>
                    </Toast>
                </ToastContainer>
            </Container>
        </div>
    )
}

export default PerformanceDetail