import React from 'react'
import SideNavBar from '../components/Sidebar'
import NavbarComponent from '../components/Navbar'
import { Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
const Instructor = () => {
  return (
    <div>
      {/* 

Project Group: 5

Project Group Members: Vaibhavi Arjunwadkar (1001826818)
                   Sashidhar Boyapati (1002087319)
                   Hema Sai Desai (1002029973)
                   Hemanth Reddy Gillela (1002033611)
                   Smrithi Gujjula (1002073701) 

*/}
      <SideNavBar />
      <NavbarComponent/>
      <Container fluid='sm' style={{
        padding: "20px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"

      }}>
        <Row style={{
          width:"100%",
          display:"flex",
          justifyContent:"center",
          alignItems:"center"
        }}>
          <Col lg={8} className='mt-5 mb-2'>
            <ListGroup>
              <ListGroupItem style={{
                backgroundColor: "#291749",
                color: "white"
              }}>Exam Analysis</ListGroupItem>
              <ListGroupItem>Exam 1</ListGroupItem>
              <ListGroupItem>Exam 2</ListGroupItem>
              <ListGroupItem>Exam 3</ListGroupItem>
              <ListGroupItem>Exam 4</ListGroupItem>

            </ListGroup>
          </Col>

          {/* 2 */}
          <Col lg={8} className='mt-2 mb-2'>
            <ListGroup>
              <ListGroupItem style={{
                backgroundColor: "#291749",
                color: "white"
              }}>Student Reports</ListGroupItem>
              <ListGroupItem>Student 1</ListGroupItem>
              <ListGroupItem>Student 2</ListGroupItem>
              <ListGroupItem>Student 3</ListGroupItem>
              <ListGroupItem>Student 4</ListGroupItem>
            </ListGroup>
          </Col>


          {/* 3 */}

          <Col lg={8} className='mt-2 mb-2'>
            <ListGroup>
              <ListGroupItem style={{
                backgroundColor: "#291749",
                color: "white"
              }}>Courses</ListGroupItem>
              <ListGroupItem>Courses 1</ListGroupItem>
              <ListGroupItem>Courses 2</ListGroupItem>
              <ListGroupItem>Courses 3</ListGroupItem>
              <ListGroupItem>Courses 4</ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>


    </div>
  )
}

export default Instructor