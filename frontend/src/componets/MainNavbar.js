import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import Logo from '../assets/gambar/download.png'
// import { useNavigate } from 'react-router-dom';

export const MainNavbar = () => {
  
  // const navigate = useNavigate();

  const removeFromLocalStorage = (key) => {
    localStorage.removeItem(key);
  };

  const getLogout = async () => {
    // navigate('/login'); // Redirect to login page
  }

  return (
    <div>
      <Navbar className="bg-body-tertiary shadow-sm">
        <Container>
          <Navbar.Brand href='/'>
            <img
              alt=""
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Restoran OK
          </Navbar.Brand>
          <Nav className="text-end">
            <Nav.Link href="/registrasi">Registrasi</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href='/logout'>Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
