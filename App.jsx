import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Profil from "./pages/Profil";
import Layanan from "./pages/Layanan";
import Berita from "./pages/Berita";
import APBDes from "./pages/APBDes";
import Kontak from "./pages/Kontak";

function App() {
  const navStyle = { padding: "10px", background: "#2e7d32", color: "white", display: "flex", gap: "14px", alignItems: "center" };
  const linkStyle = { color: "white", textDecoration: "none" };
  return (
    <Router>
      <nav style={navStyle}>
        <strong>Desa Sukamaju</strong>
        <Link to="/" style={linkStyle}>Beranda</Link>
        <Link to="/profil" style={linkStyle}>Profil</Link>
        <Link to="/layanan" style={linkStyle}>Layanan</Link>
        <Link to="/berita" style={linkStyle}>Berita</Link>
        <Link to="/apbdes" style={linkStyle}>APBDes</Link>
        <Link to="/kontak" style={linkStyle}>Kontak</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h1 style={{ padding: "20px" }}>Selamat Datang di Website Desa Sukamaju</h1>} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/layanan" element={<Layanan />} />
        <Route path="/berita" element={<Berita />} />
        <Route path="/apbdes" element={<APBDes />} />
        <Route path="/kontak" element={<Kontak />} />
      </Routes>
      <footer style={{ padding: "20px", background: "#f5f5f5", marginTop: "40px", textAlign: "center" }}>
        © {new Date().getFullYear()} Pemerintah Desa Sukamaju
      </footer>
    </Router>
  );
}

export default App;