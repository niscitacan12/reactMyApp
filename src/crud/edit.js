import React, { useState, useEffect } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faSave } from '@fortawesome/free-solid-svg-icons';

function Edit() {
  const { id_dataSiswa } = useParams();
  const [posts, setPosts] = useState({});
  const history = useHistory();
  const { id } = useParams();
  const [namaDepan, setNamaDepan] = useState("");
  const [namaBelakang, setNamaBelakang] = useState("");
  const [nis, setNis] = useState("");
  const [kelas, setKelas] = useState("");
  const [jenisKelamin, setJenisKelamin] = useState("");
  const [tanggalLahir, setTanggalLahir] = useState("");
  const [alamat, setAlamat] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`http://localhost:3030/dataSiswa/${id_dataSiswa}`);
        const { namaDepan, namaBelakang, nis, kelas, jenisKelamin, tanggalLahir, alamat } = response.data;
        setPosts(response.data);
        setNamaDepan(namaDepan || '');
        setNamaBelakang(namaBelakang || '');
        setNis(nis || '');
        setKelas(kelas || '');
        setJenisKelamin(jenisKelamin || '');
        setTanggalLahir(tanggalLahir || '');
        setAlamat(alamat || '');
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update the state based on the input name
    switch (name) {
      case 'namaDepan':
        setNamaDepan(value);
        break;
      case 'namaBelakang':
        setNamaBelakang(value);
        break;
      case 'nis':
        setNis(value);
        break;
      case 'kelas':
        setKelas(value);
        break;
      case 'jenisKelamin':
        setJenisKelamin(value);
        break;
      case 'tanggalLahir':
        setTanggalLahir(value);
        break;
      case 'alamat':
        setAlamat(value);
        break;
      default:
        break;
    }
  };

  const edit = async (e) => {
    e.preventDefault();
  
    try {
      await axios.put(`http://localhost:3030/dataSiswa/${id_dataSiswa}`, {
        namaDepan,
        namaBelakang,
        nis,
        kelas,
        jenisKelamin,
        tanggalLahir,
        alamat,
      });
  
      history.push('/dataSiswa'); 
    } catch (error) {
      console.log(error);
    }
  };

  const handleBack = () => {  
    history.push('/dataSiswa');
  };

  return (
    <Card className="mb-4" style={{ width: '75%', margin: 'auto' }}>
    <Card.Body>
      {Object.keys(posts).length > 0 ? (
        <>
          <Row className="mb-3">
            <Col md={6}>
              <FloatingLabel controlId="floatingTextarea1" label="Nama Depan">
                <Form.Control
                  type="text"
                  name="namaDepan"
                  value={namaDepan}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </FloatingLabel>
            </Col>
            <Col md={6}>
              <FloatingLabel controlId="floatingTextarea2" label="Nama Belakang">
                <Form.Control
                  type="text"
                  name="namaBelakang"
                  value={namaBelakang}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={6}>
              <FloatingLabel controlId="floatingTextarea3" label="NIS">
                <Form.Control
                  type="text"
                  name="nis"
                  value={nis}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </FloatingLabel>
            </Col>
            <Col md={6}>
              <FloatingLabel controlId="floatingTextarea4" label="Kelas">
                <Form.Control
                  type="text"
                  name="kelas"
                  value={kelas}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={6}>
              <FloatingLabel controlId="floatingTextarea5" label="Jenis Kelamin">
                <Form.Control
                  type="text"
                  name="jenisKelamin"
                  value={jenisKelamin}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </FloatingLabel>
            </Col>
            <Col md={6}>
              <FloatingLabel controlId="floatingTextarea6" label="Tanggal Lahir">
                <Form.Control
                  type="text"
                  name="tanggalLahir"
                  value={tanggalLahir}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <FloatingLabel controlId="floatingTextarea7" label="Alamat">
                <Form.Control
                  as="textarea"
                  name="alamat"
                  value={alamat}
                  onChange={handleChange}
                  autoComplete="off"
                  style={{ height: '100px' }}
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col> 
              <Button variant="secondary" onClick={handleBack}>
                <FontAwesomeIcon icon={faArrowAltCircleLeft} />
              </Button>
            </Col>
            <Col className="text-end">
              <Button variant="primary" onClick={edit}>
                <FontAwesomeIcon icon={faSave} />
              </Button>
            </Col>
          </Row>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </Card.Body>
  </Card>
  );
}

export default Edit;