import { Button, Col, Container, Form, Row } from "react-bootstrap"
import NavbarComponent from "../components/Navbar"
import SideNavBar from "../components/Sidebar"
import '../css/Chat.css'



const Chat = () => {
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
      <div style={{
        width: "50%"
      }}>
        <NavbarComponent />
      </div>
      <SideNavBar />
      <div style={{
        position: "relative"
      }}>
        <Container fluid style={{
          position: "absolute",
          // bottom:"10px",
          right: "0"
        }}>
          <Row lg={4} md={4} className="content p-0" style={{
            padding: "0"
          }}>
            <Col>
              <div className="chat-container">
                <div className="chat-header">
                  <h2>Chat with Us</h2>
                  <button className="close-button"><i className="fa fa-times" /></button>
                </div>
                <div className="message-container">
                  <div className="message admin">
                    Admin: Hello! How can I assist you today?
                  </div>
                  <div className="message student">
                    Student: Hi, I have a question about the assignment.
                  </div>
                  <div className="message admin">
                    Admin: Sure, what's your question?
                  </div>
                  <div className="message student">
                    Student: I'm having trouble with question #3. Can you help me understand it?
                  </div>
                </div>
                <div className="input-container">
                  <Form>
                    <Form.Control rows={3} cols={50} as='textarea' placeholder="Write message here" />
                    <Button className="mt-2">SEND</Button>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        {/* <div className="row">
        <div className="footer">
          @ 2023 SKILLIFY, INC
        </div>
      </div> */}
      </div>
    </>
  )
}

export default Chat