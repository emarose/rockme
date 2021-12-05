import React from 'react'
import logo from './logo.png'
import './Menu.css'
import { Container, NavLink, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <>
    <Container fluid className="navContainer">
     <Navbar className="nav" collapseOnSelect expand="lg" fixed="top" variant="dark">
      <Container>
        <div className="Navbar-img">
         <Link to="/"><img src={logo} alt="logo"/></Link>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="#features">Features</Nav.Link>
            <Nav.Link as={Link} to="/demo" active >Demo</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
         
          <Nav>
            <Nav.Link href="#login">Login</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Sign up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
      </Container>
    </>
  )
}

export default Menu
