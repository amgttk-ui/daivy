import { useState } from "react";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

export default function Home() {
  const { lang } = useLanguage();
  console.log("CURRENT LANG:", lang);
  const t = translations[lang];

  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "/1.jpg",
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg"
  ];

  return (
    <main style={{ background: "#050505", color: "white", minHeight: "100vh" }}>

      {/* LANGUAGE SWITCHER */}
      <LanguageSwitcher />

      {/* NAVBAR */}
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 60px",
        borderBottom: "1px solid #111",
        position: "sticky",
        top: 0,
        background: "#050505",
        zIndex: 10
      }}>
        <div style={{ fontWeight: "bold", letterSpacing: "3px" }}>
          DAIVY
        </div>

        <nav style={{ display: "flex", gap: "30px", fontSize: "14px", opacity: 0.8 }}>
          <a href="/" style={{ color: "white", textDecoration: "none" }}>
            {t.nav_home}
          </a>
          <a href="/portfolio" style={{ color: "white", textDecoration: "none" }}>
            {t.nav_portfolio}
          </a>
          <a href="/travel" style={{ color: "white", textDecoration: "none" }}>
            {t.nav_travel}
          </a>
          <a href="/about" style={{ color: "white", textDecoration: "none" }}>
            {t.nav_about}
          </a>
          <a href="/contact" style={{ color: "white", textDecoration: "none" }}>
            {t.nav_contact}
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section style={{
        textAlign: "center",
        padding: "100px 20px 60px"
      }}>
        <h1 style={{ fontSize: "64px", marginBottom: "20px" }}>
          {t.title}
        </h1>

        <p style={{ opacity: 0.6, maxWidth: "600px", margin: "0 auto", lineHeight: 1.6 }}>
          {t.subtitle}
        </p>
      </section>

      {/* GALLERY */}
      <section style={{
        padding: "0 60px 80px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "20px"
      }}>
        {images.map((img, i) => (
          <div key={i} style={{ borderRadius: "12px", overflow: "hidden" }}>
            <img
              src={img}
              onClick={() => setSelectedImage(img)}
              style={{
                width: "100%",
                height: "320px",
                objectFit: "cover",
                cursor: "pointer",
                transition: "0.3s"
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
              onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
            />
          </div>
        ))}
      </section>

      {/* FOOTER */}
      <footer style={{
        textAlign: "center",
        padding: "40px",
        borderTop: "1px solid #111",
        opacity: 0.5,
        fontSize: "12px"
      }}>
        © 2026 DAIVY — Photography Portfolio
      </footer>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.92)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "zoom-out",
            zIndex: 999
          }}
        >
          <img
            src={selectedImage}
            style={{ maxWidth: "90%", maxHeight: "90%", borderRadius: "10px" }}
          />
        </div>
      )}

    </main>
  );
}