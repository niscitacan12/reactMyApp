import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import 'tailwindcss/tailwind.css';
import NavbarComponent from './components/navbar';
import Dashboard from './pages/dashboard';
import { Container, Row, Col } from 'react-bootstrap';
import DataSiswa from './pages/dataSiswa'; 
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Detail from './crud/detail';
import Table from './pages/table';
import PieChart from './components/pieChart';
import Tambah from './crud/tambah';
import Edit from './crud/edit';
import Profile from './pages/profile';

function App() {
  return (
    <div className="App"> 
      <NavbarComponent />
      <Container className="mt-4">
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/dataSiswa" component={DataSiswa} exact />
            <Route path="/detail_siswa/:id_dataSiswa" component={Detail} exact />
            <Route path="/tambah_siswa" component={Tambah} exact />
            <Route path="/edit_siswa/:id_dataSiswa" component={Edit} exact />
            <Route path="/Profile" component={Profile} exact />
          </Switch>
        </BrowserRouter>
      </Container>
    </div>
  );
}

// Komponen untuk halaman utama
const Home = () => {
  return (
    <main>
      <Dashboard />
      <div className="my-4"> 
        <Row>
          <Col md={6} className="mb-4">
            <Table />
          </Col>
          <Col md={6}>
            <PieChart />
          </Col>
        </Row>
      </div>
    </main>
  );
};

export default App;