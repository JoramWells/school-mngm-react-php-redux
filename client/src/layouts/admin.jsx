import React from 'react'
import SideNavBar from '../components/Sidebar'
import NavbarComponent from '../components/Navbar'
import { Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
const Admin = () => {
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
      {/* <NavbarComponent/> */}
      <Container fluid style={{
        padding: "20px",

      }}>
        <Row style={{
          width:"100%",
          display:"flex",
          justifyContent:"center",
          alignItems:"center"
        }}>
          <Col lg={8} className='mt-2 mb-2'>
            <ListGroup>
              <ListGroupItem style={{
                backgroundColor: "#291749",
                color: "white"
              }}>Students</ListGroupItem>
              <ListGroupItem>Manage Students</ListGroupItem>
              <ListGroupItem>Manage Course</ListGroupItem>
              <ListGroupItem>Manage Permissions</ListGroupItem>
              <ListGroupItem>Reports</ListGroupItem>
              <ListGroupItem>Performance</ListGroupItem>
            </ListGroup>
          </Col>

          {/* 2 */}
          <Col lg={8} className='mt-2 mb-2'>
            <ListGroup>
              <ListGroupItem style={{
                backgroundColor: "#291749",
                color: "white"
              }}>Coordinator</ListGroupItem>
              <ListGroupItem>Manage Co-ordinator</ListGroupItem>
              <ListGroupItem>Handle Course</ListGroupItem>
              <ListGroupItem>Manage Permissions</ListGroupItem>
              <ListGroupItem>Assign Students</ListGroupItem>
              <ListGroupItem>Reviews</ListGroupItem>
            </ListGroup>
          </Col>


          {/* 3 */}

          <Col lg={8} className='mt-2 mb-2'>
            <ListGroup>
              <ListGroupItem style={{
                backgroundColor: "#291749",
                color: "white"
              }}>QA-Officer</ListGroupItem>
              <ListGroupItem>Manage QA-Officer</ListGroupItem>
              <ListGroupItem>Assign Course</ListGroupItem>
              <ListGroupItem>Handle Permissions</ListGroupItem>
              <ListGroupItem>Reports</ListGroupItem>
              <ListGroupItem>Performance</ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>


    </div>
  )
}

export default Admin