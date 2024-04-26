import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { MainMenu } from "./componets/MainMenu";
import { MainNavbar } from "./componets/MainNavbar";
import { PelangganShow } from "./componets/show/PelangganShow";
import { KategoriShow } from "./componets/show/KategoriShow";
import { MenuShow } from "./componets/show/MenuShow";
import { AddMenu } from "./componets/add/AddMenu";
import { AddKategori } from "./componets/add/AddKategori";
import { EditMenu } from "./componets/edit/EditMenu";
import { EditKategori } from "./componets/edit/EditKategori";
import { AddPelanggan } from "./componets/add/AddPelanggan";
import { LoginForm } from "./componets/validasi/LoginForm";
import { UserShow } from "./componets/show/UserShow";
import { AddUser } from "./componets/add/AddUser";
import Sidebar1 from "./componets/show/sidebarMenu/sidebar1";
import { MainSide } from "./componets/show/sidebarMenu/MainSide";


function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <MainNavbar />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col lg={2}>
              <MainSide />
          </Col>
          <Col lg={10}>
            <BrowserRouter>
              <Routes>
                {/* menu utama */}
                <Route path='/' element={<MainMenu />} />
                <Route path='/:id' element={<MainMenu />} />

                {/* untuk crud pelanggan */}
                <Route path='/pelanggan' element={<PelangganShow />} />
                <Route path='/registrasi' element={<AddPelanggan />} />

                {/* untuk crud user */}
                <Route path="/user" element={<UserShow />} />
                <Route path="/user/tambah" element={<AddUser />} />

                {/* untuk login */}
                <Route path='/login' element={<LoginForm />} />

                {/* untuk crud kategori */}
                <Route path='/kategori' element={<KategoriShow />} />
                <Route path='/kategori/tambah' element={<AddKategori />} />
                <Route path='/kategori/edit/:id' element={<EditKategori />} />

                {/* untuk crud menu */}
                <Route path='/menu' element={<MenuShow />} />
                <Route path='/menu/tambah' element={<AddMenu />} />
                <Route path='/menu/edit/:id' element={<EditMenu />} />
              </Routes>
            </BrowserRouter>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
