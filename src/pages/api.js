import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';

function Api() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getAll = () => {
            axios
                .get(`http://fakestoreapi.com/users`)
                .then((res) => {
                    setUsers(res.data);
                })
                .catch((error) => {
                    alert("Terjadi kesalahan: " + error);
                })
        };
        getAll();
    }, []);

    return (
        <div style={{ padding: "50px" }}>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th style={{ width: "20px" }}>No</th>
                        <th>Username</th>
                        <th>Nama</th>
                        <th>Email</th>
                        <th>Kota</th>
                        <th>Kode Pos</th>
                        <th>No. Telepon</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{user.username}</td>
                            <td>{user.name.firstname} {user.name.lastname}</td>
                            <td>{user.email}</td>
                            <td>{user.address.city}</td>
                            <td>{user.address.zipcode}</td>
                            <td>{user.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default Api;