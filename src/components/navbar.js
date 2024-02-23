import React from 'react';
import { Container, Navbar, Nav, NavDropdown, Image } from 'react-bootstrap';
import { LayoutDashboard, Database } from "lucide-react";
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';


import profileImage from '../assets/img/Image.jpeg';

function NavbarComponent() {
  const history = useHistory();

  const logout = () => {
    Swal.fire({
        title: 'Apa anda yakin?',
        text: 'Anda akan logout!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, log me out!'
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.clear();
            window.location.href = "/login";
        }
    });
};

  return (
    <Navbar expand="lg" className="bg-primary">
      <Navbar.Brand className="d-flex align-items-center">
        <div className="pb-1 justify-between items-center">
          <img
            src="https://img.logoipsum.com/221.svg"
            className="w-12 h-auto"
            alt=""
          />
        </div>
      </Navbar.Brand>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className="d-flex align-items-center text-white">
              <LayoutDashboard size={20} className="me-1" />
              Dashboard
            </Nav.Link>
            <Nav.Link href="/dataSiswa" className="d-flex align-items-center text-white">
              <Database size={20} className="me-1" />
              Data Siswa
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <NavDropdown
              title={
                <Image src={profileImage} roundedCircle
                  style={{
                    width: '30px',
                    height: '30px',
                    objectFit: 'cover'
                  }}
                />
              }
              id="basic-nav-dropdown"
              className="text-white"
              align="end"
            >
              <NavDropdown.Item disabled>
                niscita@gmail.com
              </NavDropdown.Item>
              <NavDropdown.Item href="/profile">
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item onClick={logout}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;