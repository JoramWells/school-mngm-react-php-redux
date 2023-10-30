import axios from 'axios'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Select from 'react-select'
import { fetchUsers } from '../_features/userSlice'
import NavbarComponent from '../components/Navbar'
import SideNavBar from "../components/Sidebar"
const containerStyles = {
    backgroundColor: '#fff',
    padding: '10px',
    borderRadius: '5px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    // height: '450px'
}

const AddStudentPerformance = () => {
    const [courseName, setCourseName] = useState('')
    const [description, setDescription] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [programs, setPrograms] = useState('')


    const navigate = useNavigate('')

    const students = useSelector((state)=>state.user.data)
    const status = useSelector((state)=>state.user.status)


    const getPrograms = async () => {
        const url = 'http://localhost/reportcard/server/programs/getprogram.php'

        await axios.get(url).then(res => {
            setLoading(true)
            if (res.data) {
                setLoading(false)
                return(
                    setPrograms(res.data)
                )
            }
        })
            .catch(err => {
                console.log(err)
                setLoading(false)
                setError(true)
            })
    }

    const handleRegister = async () => {

        const url = 'http://localhost/reportcard/server/students/createStudentPerformance.php'
        const formData = new FormData();
        formData.append('courseName', courseName)
        formData.append('description', description)
        formData.append('createdAt', moment(new Date()).format('YYYY-MM-DD HH:mm:ss'))
        await axios.post(url, formData).then(response => {
            console.log(response)

        }).catch(err => alert(err.message))
        //   const credentials = {
        //     courseName,
        //     description,
        //   }
        //   localStorage.setItem('RCUsers', JSON.stringify(credentials))
        //   return navigate('/')
    }
    const [selectedOption, setSelectedOption] = useState(null);



const dispatch = useDispatch()
      useEffect(()=>{
        getPrograms();
        if(status === 'idle'){
            dispatch(fetchUsers())
        }
      },[dispatch, status])

      const options = students.map(student=>{
        return{value:student.userName, label:student.userName}
      })




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
                                <Form.Label>Select Course Name</Form.Label>
                                <Select
                                defaultValue={selectedOption}
                                onChange={setSelectedOption}
                                options={options}
                                />
                            </Form.Group>
                            <Form.Group className='mb-2'>
                                <Form.Label>Marks</Form.Label>
                                <Form.Control type='description' as='textarea' size='md' placeholder='Enter marks'
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

            </Container>
        </>
    )
}

export default AddStudentPerformance