import { useEffect } from "react"
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams, useSearchParams } from "react-router-dom"
import { fetchPerformance } from "../_features/performanceSlice"
import NavbarComponent from "../components/Navbar"
import SideNavBar from "../components/Sidebar"


const StudentPerformance = () => {
    const {id} = useParams()
    const navigate = useNavigate();
    const [searchParams] = useSearchParams()
    const from = searchParams.get('from')
    
    const { loading ,data, error } = useSelector(state => state.performance)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPerformance())
    }, [dispatch])

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
{!from &&                         <Col>
                        <Button variant=""
                        onClick={()=>navigate({pathname:'/add-student-performance',
                        search:`?id=${id}`
                    })}
                        > Add New </Button>
                        </Col>}
                    </Row>
                    <Row className="mt-4">
                        <Table responsive striped bordered hover style={{
                            borderRadius: '10px'
                        }}>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Student Name</th>
                                    <th>Course Name</th>
                                    <th>Marks</th>
                                    <th>Date</th>
                                    <th>Action</th>

                                </tr>
                            </thead>
                            <tbody>
                                {loading ? (<div>loading...</div>) ? error : (<div>error</div>) : data.map(program => (
                                    <tr key={program.id}>

                                        <td>{program.id}</td>
                                        <td>{program.studentName}</td>
                                        <td>{program.courseName}</td>
                                        <td>{program.marks}</td>
                                        <td>{program.createdAt}</td>
                                        <td onClick={() => navigate(`/student-performance-detail/${program.studentID}`)}>action..</td>
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