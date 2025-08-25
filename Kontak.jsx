export default function Kontak() {
  return (
    <div style={{ padding: "20px", lineHeight: 1.6 }}>
      <h1>Kontak Desa Sukamaju</h1>
      <p><strong>Kantor Desa Sukamaju</strong></p>
      <p>Jl. Raya Sukamaju No. 123, Kecamatan Contoh</p>
      <p>Telp: (021) 123456</p>
      <p>Email: desa.sukamaju@example.com</p>
      <h2>Lokasi di Peta</h2>
      <iframe
        title="Peta Desa"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126768.09892710972!2d106.6894315!3d-6.2297288"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
}