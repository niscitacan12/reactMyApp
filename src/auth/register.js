import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

function Register() {
    const [namaDepan, setNamaDepan] = useState("");
    const [namaBelakang, setNamaBelakang] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const addData = async (e) => {
        e.preventDefault();
    
        // Validasi input
        if (!namaDepan || !namaBelakang || !email || !password) {
          Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Silakan lengkapi semua bidang sebelum registrasi.',
          });
          return;
        }
    
        try {
          await axios.post("http://localhost:3030/users", {
            namaDepan: namaDepan,
            namaBelakang: namaBelakang,
            email: email,
            password: password,
          });
    
          Swal.fire({
            icon: 'success',
            title: 'Sukses!',
            text: 'Anda berhasil melakukan registasi.',
          });
    
          history.push('/login');
        } catch (error) {
          console.log(error);
        }
    };

    const [isChecked, setChecked] = useState(false);
    const [passwordType, setPasswordType] = useState('password');

    const handleCheckboxChange = () => {
        setChecked(!isChecked);
        setPasswordType(isChecked ? 'password' : 'text');
    };

  return (
    <Card className="mx-auto mt-5" style={{ width: '500px' }}>
        <Card.Body>
            <Card.Title className="text-center">
                <FontAwesomeIcon icon={faUserCircle} 
                    size="4x" 
                    style={{ color: 'rgba(54, 162, 235, 0.8)' }} 
                    className="mr-2 rounded-circle" />
            </Card.Title>
            <Form>
                <Form.Group className="mb-3 rounded" controlId="formNamaDepan">
                    <Form.Label>Nama Depan</Form.Label>
                    <InputGroup>
                        <InputGroup.Text>
                            <FontAwesomeIcon icon={faUser} />
                        </InputGroup.Text>
                        <Form.Control 
                            type="text" 
                            placeholder="" 
                            autoComplete="off" 
                            onChange={(e) => setNamaDepan(e.target.value)}
                        />
                    </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3 rounded" controlId="formNamaBelakang">
                    <Form.Label>Nama Belakang</Form.Label>
                    <InputGroup>
                        <InputGroup.Text>
                            <FontAwesomeIcon icon={faUser} />
                        </InputGroup.Text>
                        <Form.Control 
                            type="text" 
                            placeholder="" 
                            autoComplete="off" 
                            onChange={(e) => setNamaBelakang(e.target.value)}
                        />
                    </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3 rounded" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <InputGroup>
                        <InputGroup.Text>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </InputGroup.Text>
                        <Form.Control 
                            type="email" 
                            placeholder="" 
                            autoComplete="off" 
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3 rounded" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <InputGroup>
                        <InputGroup.Text>
                            <FontAwesomeIcon icon={faLock} />
                        </InputGroup.Text>
                        <Form.Control
                            type={passwordType}
                            placeholder=""
                            autoComplete="off"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </InputGroup>
                </Form.Group>

                <div className="mb-3">
                    <Form.Check
                        type="checkbox"
                        label="Show Password"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                </div>

                <div className="d-flex justify-content-end">
                    <Button 
                        variant="primary" 
                        type="submit" 
                        onClick={addData}
                        style={{ backgroundColor: 'rgb(54, 162, 235)' }}>
                        SignUp
                    </Button>
                </div>
                <div className="mt-3 text-center">
                    <p className="mb-1" style={{
                        display: 'inline-block', marginRight: '5px' 
                    }}>Sudah mempunyai akun?</p>
                    <Link to="/login" style={{ 
                        color: 'rgb(54, 162, 235)', textDecoration: 'underline', display: 'inline-block' 
                    }}>Login</Link>
                </div>
            </Form>
        </Card.Body>
    </Card>
  )
}

export default Register