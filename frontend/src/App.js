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
import { UserMenu } from "./componets/UserMenu";

function App() {
  // const isRoot = window.location.pathname === '/'

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <MainNavbar />
          </Col>
        </Row>

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
            <Route path='/logout' element={<LoginForm />} />
            <Route path='/userMenu' element={<UserMenu />} />

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
      </Container>
    </div>
  );
}

export default App;
