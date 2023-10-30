import React from "react";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

import SideNav, {
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";

class SideNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true
    };
  }


  render() {
    return (
      <SideNav expanded={this.state.isVisible} style={{
        backgroundColor:"#291749",
        zIndex:"100",
        top:"2.9rem",
        height:"100%",
        position:"fixed"
      }} >
        <SideNav.Toggle
          onClick={() => {
            this.setState({ isVisible: !this.state.isVisible });
          }}
        />
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="home">
            <NavIcon>
              <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>Home</NavText>
          </NavItem>

          <NavItem eventKey="account">
            <NavIcon>
              <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>
                <a href="/student-account">Account</a>
            </NavText>
          </NavItem>

          <NavItem eventKey="students">
            <NavIcon>
              <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>
            <a href="/student">Students</a>
                
            </NavText>
          </NavItem>

          <NavItem eventKey="instructor">
            <NavIcon>
              <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>
            <a href="/instructor">Instructor</a>
                
            </NavText>
          </NavItem>

          <NavItem eventKey="coordinator">
            <NavIcon>
              <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>
            <a href="/coordinator">Coordinator</a>
              
            </NavText>
          </NavItem>

          <NavItem eventKey="coordinator">
            <NavIcon>
              <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>
            <a href="/chat">Chat with us</a>
              
            </NavText>
          </NavItem>
          
          <NavItem eventKey="qaofficer">
            <NavIcon>
              <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>
            <a href="/qa-officer">QA-Officer</a>
                
            </NavText>
          </NavItem>

          <NavItem eventKey="reports">
            <NavIcon>
              <i
                className="fa fa-fw fa-line-chart"
                style={{ fontSize: "1.75em" }}
              />
            </NavIcon>
            <NavText>Reports</NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    );
  }
}

export default SideNavBar;
