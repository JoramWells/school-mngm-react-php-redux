import axios from "axios"
import { useEffect, useState } from "react"
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import NavbarComponent from "../components/Navbar"
import SideNavBar from "../components/Sidebar"


const StudentPerformance = () => {

    const [programs, setPrograms] = useState([])


    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const getPrograms = async () => {
        const url = 'http://localhost/reportcard/server/students/viewAllStudents.php'

        await axios.get(url).then(res => {
            setLoading(true)
            if (res.data) {
                setPrograms(res.data)
                setLoading(false)
            }

        })
            .catch(err => {
                console.log(err)
                setLoading(false)
                setError(true)
            })
    }

    useEffect(() => {
        getPrograms()
        console.log(programs, 'xcd')
    }, [])

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
            <NavbarComponent />
            <SideNavBar />
            <Container style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }} fluid='sm'>
                <div style={{
                    width: "75%"
                }}>
                    <Row lg={7} style={{
                        marginTop: "5rem",
                    }}>

                        <Col>
                            <Form.Group>
                                <Form.Control type='text' placeholder="Search student name" />

                            </Form.Group>
                        </Col>
                        <Col>
                            <Button variant="secondary">Search</Button>
                        </Col>
                        <Col>
                        <Button variant=""
                        onClick={()=>navigate('/add-student-performance')}
                        > Add New </Button>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Table responsive striped bordered hover style={{
                            borderRadius: '10px'
                        }}>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Student Name</th>
                                    <th>Email address</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loading ? (<div>loading...</div>) ? error : (<div>error</div>) : programs.map(program => (
                                    <tr key={program.id}>

                                        <td>{program.id}</td>
                                        <td>{program.userName}</td>
                                        <td>{program.email}</td>
                                        <td onClick={() => navigate(`/student-detail/${program.id}`)}>action..</td>
                                    </tr>

                                ))}
                            </tbody>
                        </Table>


                    </Row>

                </div>
            </Container>
        </>
    )
}

export default StudentPerformance