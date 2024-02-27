import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { InputGroup } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios'; 
import Swal from 'sweetalert2';

function Login() {
    const [isChecked, setChecked] = useState(false);
    const [passwordType, setPasswordType] = useState('password');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const login = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.get("http://localhost:3030/users");
            const admin = response.data.find(
                (x) => x.email === email && x.password === password
            );
            if (admin && admin.email === email && admin.password === password) {
                localStorage.setItem("email", admin.email);
                localStorage.setItem("id", admin.id);
                history.push("/");
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
                Swal.fire({
                    icon: 'success',
                    title: 'Sukses!',
                    text: 'Anda berhasil login.',
                });
            } else {
                console.log("Username atau password tidak valid");
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleCheckboxChange = () => {
        setChecked(!isChecked);
        setPasswordType(isChecked ? 'password' : 'text');
    };

    return (
        <Card className="mx-auto mt-5" style={{ width: '100%', maxWidth: '500px' }}>
            <Card.Body>
                <Card.Title className="text-center">
                    <FontAwesomeIcon
                        icon={faUserCircle}
                        size="4x"
                        style={{ color: 'rgba(54, 162, 235, 0.8)' }}
                        className="mr-2 rounded-circle"
                    />
                </Card.Title>
                <Form onSubmit={login} methos="POST">
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
                                value={email}
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
                                value={password}
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
                            style={{ backgroundColor: 'rgb(54, 162, 235)' }}
                        >
                            Login
                        </Button>
                    </div>
                    <div className="mt-3 text-center">
                        <p className="mb-1" style={{
                            display: 'inline-block', marginRight: '5px'
                        }}>Tidak punya akun?</p>
                        <Link to="/register" style={{
                            color: 'rgb(54, 162, 235)', textDecoration: 'underline', display: 'inline-block'
                        }}>Register</Link>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default Login;