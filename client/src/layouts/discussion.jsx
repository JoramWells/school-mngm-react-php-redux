import NavbarComponent from '../components/Navbar'
import SideNavBar from '../components/Sidebar'
import '../css/DiscussionF.css'
const Discussion = () => {
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
  <NavbarComponent/>
  <SideNavBar/>
    <div className="container">
      <div className="row">
        <div className="content">
          <div className="discussion-container">
            <div className="discussion-header">
              <select id="discussion-topic">
                <option value="topic1">Discussion Topic 1</option>
                <option value="topic2">Discussion Topic 2</option>
                <option value="topic3">Discussion Topic 3</option>
                <option value="topic4">Discussion Topic 4</option>
              </select>
            </div>
            <div className="message-container">
              <div className="message student">
                Student1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
              <div className="message instructor">
                Instructor a: Nullam ac libero sed arcu vehicula commodo.
              </div>
              <div className="message student">
                Student2: Nullam ac libero sed arcu vehicula commodo.
              </div>
              {/* Add more messages here */}
            </div>
            <div className="input-container">
              <textarea className="message-input" placeholder="Write your message..." defaultValue={""} />
              <button className="send-button"><i className="fa fa-paper-plane" /> Send</button>
            </div>
            <button className="create-topic-button">Create Topic</button>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="footer">
        @ 2023 SKILLIFY, INC
      </div>
    </div>
  </div>
  )
}

export default Discussion