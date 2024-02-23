import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardHeader, Table, Button, Pagination } from 'react-bootstrap';
import axios from 'axios'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faInfo, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

const DataSiswa = () => {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState(''); 
    
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const history = useHistory();const currentPosts = posts
    .filter((post) => {
      const fullName = `${post.namaDepan} ${post.namaBelakang}`.toLowerCase();
      return fullName.includes(searchTerm.toLowerCase());
    })
    .slice(indexOfFirstPost, indexOfLastPost);
    
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
        const email = localStorage.getItem("email");
        if (!email) {
            history.push('/login');
        } else {
            getData(); 
        }
    }, [history]);

    const deleteDataSiswa = (id) => {
        Swal.fire({
            title: 'Apa kamu yakin?',
            text: 'Anda tidak akan dapat mengembalikannya!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                axios
                    .delete(`http://localhost:3030/dataSiswa/${id}`)
                    .then(() => {
                        window.location.reload();
                    })
                    .catch((error) => {
                        console.error("error deleting:", error);
                    });
            }
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

    const searchHandler = (event) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1);
    };

    return (
        <div>
            <div className="d-flex justify-content-end mb-3">
                <input
                    type="text"
                    placeholder="Cari..."
                    value={searchTerm}
                    onChange={searchHandler}
                    style={{ marginRight: '8px', padding: '4px' }}
                />
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <Card className="mb-4" style={{ width: '100%', margin: '0' }}>
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
                        <Pagination className="ms-auto">
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
        </div>
    );
};

export default DataSiswa;