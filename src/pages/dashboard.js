import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import { faFemale, faMale, faGraduationCap, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Dashboard() {
  return (
    <div>
      <Row xs={1} md={2} lg={4} className="g-4">
        <Col>
          <Card className="h-100" style={{ backgroundColor: 'rgb(255, 99, 132)', color: 'white' }}>
            <Card.Header>Perempuan</Card.Header>
            <Card.Body>
              <Card.Title>
                <FontAwesomeIcon icon={faFemale} className="mr-2" />
              </Card.Title>
              <Card.Text>
                Jumlah Siswa Perempuan
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100" style={{ backgroundColor: 'rgb(54, 162, 235)', color: 'white' }}>
            <Card.Header>Laki-Laki</Card.Header>
            <Card.Body>
              <Card.Title>
                <FontAwesomeIcon icon={faMale} className="mr-2" /> 
              </Card.Title>
              <Card.Text>
                Jumlah Siswa Laki-Laki
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100" style={{ backgroundColor: 'rgb(255, 205, 86)', color: 'white' }}>
            <Card.Header>Kelas</Card.Header>
            <Card.Body>
              <Card.Title>
                <FontAwesomeIcon icon={faGraduationCap} className="mr-2" /> 
              </Card.Title>
              <Card.Text>
                Jumlah Kelas
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100" style={{ backgroundColor:  'rgb(201, 203, 207)', color: 'white' }}>
            <Card.Header>Siswa</Card.Header>
            <Card.Body>
              <Card.Title>
                <FontAwesomeIcon icon={faUsers} className="mr-2" /> 
              </Card.Title>
              <Card.Text>
                Jumlah Siswa
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;