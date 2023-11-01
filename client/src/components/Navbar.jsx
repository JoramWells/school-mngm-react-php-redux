import { useEffect, useState } from 'react'
import { Dropdown, Image, Nav, Navbar } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import logo from '../imgs/logo.jpeg'
const NavbarComponent = () => {

  const navigate = useNavigate()

  const getFromStorage = () => {
    const data = localStorage.getItem('RCUsers')
    if(data !== null){
      return JSON.parse(data)
    }
    return []
  }

  const [user, setUser]= useState([])
  const logout = () => {
    const data = getFromStorage()
    data.logged = false
    localStorage.setItem('RCUsers', JSON.stringify(data))
    setUser([])
  }

  useEffect(()=>{
    setUser(getFromStorage())
    // console.log(user,'yuy')

  },[])

  return (

    <Navbar bg="light" expand="lg" fixed="top" style={{
      padding:"10px"
    }} >
      <Navbar.Brand href="/" className='flex align-items-center' style={{
        flexDirection:"row",
        display:"flex",
        alignItems:"center"
      }}>
        <Image fluid src={logo} alt={logo} style={{
          width:"30px",
          height:"30px",
          objectFit:"cover"
        }}/>
        <div className='text-secondary ml-2' style={{
          marginLeft:"10px",
          textTransform:"uppercase",
          fontWeight:"bold"
        }}>
        Skillify
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"  />
      <Navbar.Collapse id="basic-navbar-nav" >
        <Nav className="ml-auto justify-content-end" style={{width:'100%'}}>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about-us">About Us</Nav.Link>
          <Nav.Link href="/contact-us">Contact</Nav.Link>
{user.length > 0 ? <div style={{
            color:"black"
          }}>
            {/* {user.userName} */}
            <Dropdown>
              <Dropdown.Toggle variant='secondary' id='a/c'>
                Account
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>
                  {user[0].userName}
                </Dropdown.Item>
                <Dropdown.Item onClick={()=>navigate('/student-account')}>
                  Profile
                </Dropdown.Item>
                <Dropdown.Item onClick={logout}>
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>:
         <>
           <Nav.Link href="/register">Register</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
         </> 
          }


        </Nav>
      </Navbar.Collapse>
    </Navbar>

  )
}

export default NavbarComponent