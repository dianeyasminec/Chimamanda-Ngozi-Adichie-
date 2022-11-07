import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




export default function Navigation() {
  return (
    
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Chimamanda Ngozie Adichie</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link href="/">Home</Nav.Link> */}
            <Nav.Link href="/books">Bio</Nav.Link>
            {/* <Nav.Link href="/favoritesSongs">Favorites Song</Nav.Link> */}
          </Nav>
          <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <p className='lead'> Biography</p>
          </Navbar.Text>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    
  )
}
