import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import React, { useState } from "react";

import SideNav, {
  NavIcon,
  NavItem,
  NavText
} from "@trendmicro/react-sidenav";


const getFromStorage = () => {
  const data = localStorage.getItem('RCUsers')
  if (data !== null) {
    return JSON.parse(data)
  }
  return []
}

const SidebarNav = () => {
  const [visible, setVisible] = useState(true)

  if (getFromStorage()[0].role === 'Coordinator') {
    return <SideNav
      expanded={visible} style={{
        backgroundColor: "#291749",
        zIndex: "100",
        top: "2.9rem",
        height: "100%",
        position: "fixed"
      }}
    >
      <SideNav.Toggle
        onClick={() => setVisible(!visible)}
      />
      <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
          <NavIcon>
            <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
          </NavIcon>
          <NavText>My Profile</NavText>
        </NavItem>
        <NavItem eventKey="home">
          <NavIcon>
            <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
          </NavIcon>
          <NavText>
            <a href="coordinator">Coordinator</a>
          </NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  }
  else if(getFromStorage()[0].role === 'Student'){
    return <SideNav
    expanded={visible} style={{
      backgroundColor: "#291749",
      zIndex: "100",
      top: "2.9rem",
      height: "100%",
      position: "fixed"
    }}
  >
    <SideNav.Toggle
      onClick={() => setVisible(!visible)}
    />
    <SideNav.Nav defaultSelected="home">
      <NavItem eventKey="home">
        <NavIcon>
          <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
        </NavIcon>
        <NavText>My Profile</NavText>
      </NavItem>
      <NavItem eventKey="home">
        <NavIcon>
          <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
        </NavIcon>
        <NavText>
          <a href="'students">Student</a>
        </NavText>
      </NavItem>
    </SideNav.Nav>
  </SideNav>
  }

  else if(getFromStorage()[0].role === 'Instructor'){
    return <SideNav
    expanded={visible} style={{
      backgroundColor: "#291749",
      zIndex: "100",
      top: "2.9rem",
      height: "100%",
      position: "fixed"
    }}
  >
    <SideNav.Toggle
      onClick={() => setVisible(!visible)}
    />
    <SideNav.Nav defaultSelected="home">
      <NavItem eventKey="home">
        <NavIcon>
          <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
        </NavIcon>
        <NavText>My Profile</NavText>
      </NavItem>
      <NavItem eventKey="home">
        <NavIcon>
          <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
        </NavIcon>
        <NavText>
          <a href="/instructor">Instructor</a>
        </NavText>
      </NavItem>
    </SideNav.Nav>
  </SideNav>
  }

  return (

    <SideNav expanded={visible} style={{
      backgroundColor: "#291749",
      zIndex: "100",
      top: "2.9rem",
      height: "100%",
      position: "fixed"
    }} >
      <SideNav.Toggle
        onClick={() => setVisible(!visible)}
      />
      <SideNav.Nav defaultSelected="home">
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
  )
}

export default SidebarNav

