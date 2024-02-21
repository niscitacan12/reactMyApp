import React, { useRef, useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Col, Container, Image, Row } from 'react-bootstrap';

import profileImage from '../assets/img/Image.jpeg';

function Profile() {
  return (
    <Card className="my-2" style={{ maxWidth: '800px', margin: 'auto' }}>
      <Card.Body>
        <Container>
          <Row className="align-items-center">
            <h2>Profile Us</h2>
            <Col xs={12} md={6} className="text-center mb-3 mb-md-0">
              <Image src={profileImage} thumbnail style={{ width: '350%', height: 'auto' }} />
            </Col>
            <Col xs={12} md={6} className="mb-3 mb-md-0 mx-auto text-center">
              <FloatingLabel 
                controlId="floatingName" 
                label="Name" 
                className="mb-3">
                <Form.Control 
                  type="text" 
                  placeholder="" 
                  defaultValue="Niscita" 
                  readOnly 
                />
              </FloatingLabel>
              <FloatingLabel 
                controlId="floatingEmail" 
                label="Email" 
                className="mb-3">
                <Form.Control 
                  type="email" 
                  placeholder="" 
                  defaultValue="niscita@gmail.com" 
                  readOnly 
                />
              </FloatingLabel>
              <FloatingLabel 
                controlId="floatingNoTelp" 
                label="No.Telp" 
                className="mb-3">
                <Form.Control 
                  type="text" 
                  placeholder="" 
                  defaultValue="089525763194" 
                  readOnly 
                />
              </FloatingLabel>
              <FloatingLabel 
                controlId="floatingAlamat" 
                label="Alamat" 
                className="mb-3">
                <Form.Control
                  as="textarea"
                  placeholder=""
                  defaultValue="Kalitengah Mranggen, Demak, Jawa Tengah, RT01/01"
                  readOnly
                  style={{ minHeight: '100px' }}
                />
              </FloatingLabel>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}

export default Profile;