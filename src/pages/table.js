import React, { useState, useEffect } from 'react';
import { Card, CardHeader, Table } from 'react-bootstrap';

const TableComponent = () => {
    const [posts, setPosts] = useState([]);

    const getData = () => {
        var requestOptions = {
            method: "GET",
            methos: "follow",
        };
        fetch("http://localhost:3030/dataSiswa", requestOptions)
            .then((response) => response.json())
            .then((result) => setPosts(result))
            .catch((error) => console.log("error", error));
    };

    useEffect(() => {
        getData();
    }, []);

    const limitedPosts = posts.slice(0, 5);

    return (
        <div>
            <Card className="mb-4" style={{ width: '140%', margin: '0' }}>
                <CardHeader className="bg-primary text-white">
                    Data Siswa
                </CardHeader>
                <Table striped bordered hover responsive="md" style={{ width: '100%', margin: '0' }}>
                    <thead className="thead-dark" style={{ textAlign: "center" }}>
                        <tr>
                            <th>No</th>
                            <th>Nama Siswa</th>
                            <th>Kelas</th>
                        </tr>
                    </thead>
                    <tbody>
                        {limitedPosts.map((post, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{`${post.namaDepan} ${post.namaBelakang}`}</td>
                                <td>{post.kelas}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Card>
        </div>
    );
};

export default TableComponent;