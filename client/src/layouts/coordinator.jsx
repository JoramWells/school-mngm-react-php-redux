import { useEffect, useState } from "react"
import { Button, Col, Container, Row, Table } from "react-bootstrap"
// import { AiOutlineEllipsis } from 'react-icons/fa'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { fetchCourse } from "../_features/courseSlice"
import NavbarComponent from "../components/Navbar"
import SideNavBar from "../components/Sidebar"



const Coordinator = () => {

    const [programs, setPrograms] = useState([])

    const listData = [
        {
            id: 1,
            text: 'Create Program',
            link: '/create-program'
        },
        {
            id: 3,
            text: 'Performance',
            link: '/create-program'

        },
        {
            id: 4,
            text: 'Enquiries',
            link: '/create-program'

        }
    ]

    const navigate = useNavigate();


    const dispatch = useDispatch()


    const {loading, data, error} = useSelector(state=>state.courses)

    useEffect(() => {
        dispatch(fetchCourse())

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
                        {listData.map(item => (
                            <Col key={item.id}>
                                <Button
                                    style={{
                                        backgroundColor: "#291749",
                                        border: "0"
                                    }}
                                    onClick={() => navigate(item.link)}
                                >{item.text}</Button>
                            </Col>
                        ))}

                    </Row>
                    <Row className="mt-4">
                        <Table responsive striped bordered hover style={{
                            borderRadius:'10px'
                        }}>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Course Name</th>
                                    <th>Description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loading ? (<div>loading...</div>) ? error : (<div>error</div>) : data.map(program => (
                                    <tr key={program.id}>

                                        <td>{program.id}</td>
                                        <td>{program.courseName}</td>
                                        <td>{program.description}</td>
                                        <td onClick={()=>navigate(`/program-detail/${program.id}`)}>
                                            action
                                        </td>
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