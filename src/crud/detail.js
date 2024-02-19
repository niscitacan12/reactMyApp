import React, { useState, useEffect } from 'react';
import { Card, Col, Container, Row, Button} from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';

function Detail() {
  const { id_dataSiswa } = useParams();
  const [postData, setPostData] = useState({});
  const history = useHistory();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`http://localhost:3030/dataSiswa/${id_dataSiswa}`);
        const { namaDepan, namaBelakang, nis, kelas, jenisKelamin, tanggalLahir, alamat, img } = response.data;
        setPostData({
          namaDepan: namaDepan || '',
          namaBelakang: namaBelakang || '',
          nis: nis || '',
          kelas: kelas || '',
          jenisKelamin: jenisKelamin || '',
          tanggalLahir: tanggalLahir || '',
          alamat: alamat || '',
          img: img || ''
        });
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id_dataSiswa]);

  const handleBack = () => {  
    history.push('/dataSiswa');
  };

  return (
    <Container>
      <Card className="mb-4" style={{ width: '80%', margin: 'auto' }}>
        <Card.Body>
          {Object.keys(postData).length > 0 ? (
            <>
              <div className="text-center">
                <img
                  src={postData.img}
                  style={{
                    maxWidth: '50%',
                    marginBottom: '15px',
                    borderRadius: '50%' 
                  }}
                  alt="Student"
                />
              </div>
              <Row className="mb-3">
                <Col md={6}>
                  <FloatingLabel controlId="floatingTextarea1" label="Nama Depan">
                    <Form.Control
                      type="text"
                      name="namaDepan"
                      value={postData.namaDepan}
                      autoComplete="off"
                    />
                  </FloatingLabel>
                </Col>
                <Col md={6}>
                  <FloatingLabel controlId="floatingTextarea1" label="Nama Belakang">
                    <Form.Control
                      type="text"
                      name="namaBelakang"
                      value={postData.namaBelakang}
                      autoComplete="off"
                    />
                  </FloatingLabel>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={6}>
                  <FloatingLabel controlId="floatingTextarea2" label="NIS">
                    <Form.Control
                      type="text"
                      name="nis"
                      value={postData.nis}
                      autoComplete="off"
                    />
                  </FloatingLabel>
                </Col>
                <Col md={6}>
                  <FloatingLabel controlId="floatingTextarea2" label="Kelas">
                    <Form.Control
                      type="text"
                      name="kelas"
                      value={postData.kelas}
                      autoComplete="off"
                    />
                  </FloatingLabel>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={6}>
                  <FloatingLabel controlId="floatingTextarea2" label="Jenis Kelamin">
                    <Form.Control
                      type="text"
                      name="jenisKelamin"
                      value={postData.jenisKelamin}
                      autoComplete="off"
                    />
                  </FloatingLabel>
                </Col>
                <Col md={6}>
                  <FloatingLabel controlId="floatingTextarea2" label="Tanggal Lahir">
                    <Form.Control
                      type="text"
                      name="tanggalLahir"
                      value={postData.tanggalLahir}
                      autoComplete="off"
                    />
                  </FloatingLabel>
                </Col>
              </Row>

              <FloatingLabel controlId="floatingTextarea2" label="Alamat" className="mb-3">
                <Form.Control
                  as="textarea"
                  name="alamat"
                  value={postData.alamat}
                  autoComplete="off"
                  style={{ height: '100px' }}
                />
              </FloatingLabel>
              <Button variant="secondary" onClick={handleBack}>
                <FontAwesomeIcon icon={faArrowAltCircleLeft} />
              </Button>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Detail;