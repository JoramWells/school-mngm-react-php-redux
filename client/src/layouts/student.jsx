import { useEffect, useState } from "react"
import { Col, Container, Form, Row, Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { fetchUsers } from "../_features/userSlice"
import NavbarComponent from "../components/Navbar"
import SideNavBar from "../components/Sidebar"


const Coordinator = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const [searchQuery, setSearchQuery] = useState('')

    const { loading, data, error } = useSelector(state => state.user)
    const [datam, setDatam] = useState(data)



    const filteredData = (str) => {
        const results = data.filter(item =>
            item.userName.toLowerCase().includes(str.toLowerCase()))
            setDatam(results)

    }

    useEffect(() => {
        dispatch(fetchUsers())
        // setDatam(data)
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
                                <Form.Control
                                type='text' 
                                placeholder="Search student name"
                                // value={searchQuery}
                                onChange={e=>filteredData(e.target.value)}
                                />

                            </Form.Group>
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
                                {loading ? (<div>loading...</div>) ? error : (<div>error</div>) : datam.map(program => (
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

export default Coordinator