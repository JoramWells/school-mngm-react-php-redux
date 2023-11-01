import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Select from 'react-select'
import { fetchCourse } from '../_features/courseSlice'
import { addPerformance } from '../_features/performanceSlice'
import NavbarComponent from '../components/Navbar'
import Selector from '../components/Selector'
import SideNavBar from "../components/Sidebar"
const containerStyles = {
    backgroundColor: '#fff',
    padding: '10px',
    borderRadius: '5px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    // height: '450px'
}

const AddStudentPerformance = () => {
    const [description, setDescription] = useState('')


    const navigate = useNavigate('')

    const [selectedOption, setSelectedOption] = useState(
        {value:'English', label:'English'}
    );

    const [searchParams] = useSearchParams()
    const studentID = searchParams.get('id')

    const [selectedStudent, setSelectedStudent] = useState(
        {value:'', label:''}
    );

    const handleRegister = () => {
        const formData = new FormData();
        formData.append('studentID', selectedStudent.value)
        // formData.append('studentName', selectedStudent.label)
        formData.append('courseName', selectedOption.value)
        formData.append('description', description)
        formData.append('createdAt', moment(new Date()).format('YYYY-MM-DD HH:mm:ss'))
       dispatch(addPerformance(formData) )
        // navigate('/student-performance')
    }

    const { data } = useSelector(state => state.courses)



    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCourse())
    }, [dispatch])

    const options = data.map(item => {
        return { value: item.courseName, label: item.courseName }
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
                            {/* select student name */}
                            <Form.Group className='mb-2 mt-2'>
                                <Form.Label>Select Student Name</Form.Label>
                                <Selector
                                selectedStudent={selectedStudent}
                                setSelectedStudent={setSelectedStudent}
                                />
                            </Form.Group>

                            {/* select course name */}
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
                               Add
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