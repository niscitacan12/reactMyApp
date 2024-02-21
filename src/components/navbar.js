import React, { useState } from 'react';
import { Container, Navbar, Nav, NavDropdown, Image } from 'react-bootstrap';
import { LayoutDashboard, Database } from "lucide-react";

import profileImage from '../assets/img/Image.jpeg';

function NavbarComponent() {

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
              <NavDropdown.Item disabled>niscita@gmail.com</NavDropdown.Item>
              <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;