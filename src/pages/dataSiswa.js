import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardHeader, Table, Button, Pagination, PaginationItem } from 'react-bootstrap';
import axios from 'axios'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faInfo, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';

const DataSiswa = () => {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10); 
    const history = useHistory();

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const getData = () => {
        var requestOptions = {
            method: "GET",
            mode: "cors",
        };
        fetch("http://localhost:3030/dataSiswa", requestOptions)
            .then((response) => response.json())
            .then((result) => setPosts(result))
            .catch((error) => console.log("error", error));
    };

    useEffect(() => {
        getData();
    }, []);

    const deleteDataSiswa = async (id) => {
        axios
          .delete(`http://localhost:3030/dataSiswa/${id}`)
          .then(() => {
            window.location.reload();
          })
          .catch((error) => {
            console.error("error deleting:", error);
          });
      };
    
    // button edit
    const handleEditClick = (id) => {
        history.push(`/edit_siswa/${id}`);
    };

    // button detail
    const handleTab = (id) => {
        window.location.href = `/detail_siswa/${id}`;
    };

    // button tambah
    const handleTambahClick = () => {
        history.push('/tambah_siswa');
    };


    return (
        <div className="d-flex justify-content-center align-items-center">
            <Card style={{ width: '80%', minWidth: '500px' }}>
                <CardHeader className="text-dark mb-2 d-flex flex-column align-items-center bg-primary" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                <span className="me-auto">Data Siswa</span>
                <div className="ms-auto">
                    <Button
                    variant="success"
                    style={{
                        backgroundColor: "#28a745",
                        border: "none",
                        color: "white",
                    }}
                    onClick={handleTambahClick}
                    >
                    <FontAwesomeIcon icon={faPlus} /> 
                    </Button>
                </div>
                </CardHeader>
                <CardBody>
                    <Table striped bordered hover responsive="md" style={{ width: '100%' }}>
                        <thead className="thead-dark" style={{ textAlign: "center" }}>
                            <tr>
                                <th>No</th>
                                <th>Nama Siswa</th>
                                <th>Kelas</th>
                                <th>Jenis Kelamin</th>
                                <th>Tanggal Lahir</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentPosts.map((post, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{`${post.namaDepan} ${post.namaBelakang}`}</td>
                                    <td>{post.kelas}</td>
                                    <td>{post.jenisKelamin}</td>
                                    <td>{post.tanggalLahir}</td>
                                    <td>
                                        <div className="d-flex justify-content-center align-items-center" style={{ gap: '8px' }}>
                                            <Button
                                                variant="info"
                                                style={{
                                                    backgroundColor: "#5bc0de",
                                                    border: "none",
                                                    color: "white", 
                                                    marginRight: "8px", 
                                                }}
                                                onClick={() => handleTab(post.id)}
                                            >
                                                <FontAwesomeIcon icon={faInfo} />
                                            </Button>
                                            <Button
                                                variant="primary"
                                                style={{
                                                    backgroundColor: "#007BFF",
                                                    border: "none",
                                                    color: "white",
                                                }}
                                                onClick={() => handleEditClick(post.id)}
                                            >
                                                <FontAwesomeIcon icon={faEdit} />
                                            </Button>
                                            <Button
                                                variant="danger"
                                                style={{
                                                    backgroundColor: "#FC3C3C",
                                                    border: "none",
                                                    color: "white",
                                                }}
                                                onClick={() => deleteDataSiswa(post.id)}
                                            >
                                                <FontAwesomeIcon icon={faTrash} />
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <Pagination className="justify-content-center">
                        {Array.from({ length: Math.ceil(posts.length / postsPerPage) }).map((_, index) => (
                            <Pagination.Item
                                key={index}
                                active={index + 1 === currentPage}
                                onClick={() => paginate(index + 1)}
                            >
                                {index + 1}
                            </Pagination.Item>
                        ))}
                    </Pagination>
                </CardBody>
            </Card>
        </div>
    );
};

export default DataSiswa;