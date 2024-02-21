import React, { useState } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faSave } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

function TambahData() {
  const [namaDepan, setNamaDepan] = useState("");
  const [namaBelakang, setNamaBelakang] = useState("");
  const [nis, setNis] = useState("");
  const [kelas, setKelas] = useState("");
  const [jenisKelamin, setJenisKelamin] = useState("");
  const [tanggalLahir, setTanggalLahir] = useState("");
  const [alamat, setAlamat] = useState("");
  const [img, setImg] = useState("");
  const history = useHistory();

  const addData = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3030/dataSiswa", {
        namaDepan: namaDepan,
        namaBelakang: namaBelakang,
        nis: nis,
        kelas: kelas,
        jenisKelamin: jenisKelamin,
        tanggalLahir: tanggalLahir,
        alamat: alamat,
        img: img,
      });

      Swal.fire({
        icon: 'success',
        title: 'Sukses!',
        text: 'Anda berhasil menambahkan data siswa.',
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
    <Container>
      <Card className="mb-4" style={{ width: '80%', margin: 'auto' }}>
        <Card.Body>
          <>
            <Row className="mb-3">
              <Col md={6}>
                <FloatingLabel controlId="floatingNamaDepan" label="Nama Depan">
                  <Form.Control
                    type="text"
                    name="nama"
                    value={namaDepan}
                    autoComplete="off"
                    onChange={(e) => setNamaDepan(e.target.value)}
                  />
                </FloatingLabel>
              </Col>
              <Col md={6}>   
                <FloatingLabel controlId="floatingNamaBelakang" label="Nama Belakang">
                  <Form.Control
                    type="text"
                    name="namaBelakang"
                    value={namaBelakang}
                    autoComplete="off"
                    onChange={(e) => setNamaBelakang(e.target.value)}
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>
                <FloatingLabel controlId="floatingNIS" label="NIS">
                  <Form.Control
                    type="text"
                    name="nis"
                    value={nis}
                    autoComplete="off"
                    onChange={(e) => setNis(e.target.value)}
                  />
                </FloatingLabel>
              </Col>
              <Col md={6}> 
                <FloatingLabel controlId="floatingKelas" label="Kelas">
                  <Form.Control
                    type="text"
                    name="kelas"
                    value={kelas}
                    autoComplete="off"
                    onChange={(e) => setKelas(e.target.value)}
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>
                <FloatingLabel controlId="floatingJenisKelamin" label="Jenis Kelamin">
                  <Form.Control
                    type="text"
                    name="jenisKelamin"
                    value={jenisKelamin}
                    autoComplete="off"
                    onChange={(e) => setJenisKelamin(e.target.value)}
                  />
                </FloatingLabel>
              </Col>
              <Col md={6}> 
                <FloatingLabel controlId="floatingTanggalLahir" label="Tanggal Lahir">
                  <Form.Control
                    type="text"
                    name="tanggalLahir"
                    value={tanggalLahir}
                    autoComplete="off"
                    onChange={(e) => setTanggalLahir(e.target.value)}
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <FloatingLabel controlId="formFile" label="Gambar" className="mb-3">
              <Form.Control 
                type="file" 
                name="img"
                utoComplete="off"
                onChange={(e) => setImg(e.target.value)}
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingAlamat" label="Alamat" className="mb-3">
              <Form.Control
                as="textarea"
                name="alamat"
                value={alamat}
                autoComplete="off"
                onChange={(e) => setAlamat(e.target.value)}
                style={{ height: '100px' }}
              />
            </FloatingLabel>
            <Row className="mb-3">
              <Col>
                <Button variant="secondary" onClick={handleBack}>
                  <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                </Button>
              </Col>
              <Col className="text-end">
                <Button variant="primary" onClick={addData}>
                  <FontAwesomeIcon icon={faSave} />
                </Button>
              </Col>
            </Row>
          </>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default TambahData;