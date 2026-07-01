import { useState } from "react";

export default function Home() {
  const images = [
    "/1.jpg",
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg"
  ];

  return (
    <main style={{
      background: "#050505",
      color: "white",
      minHeight: "100vh",
      padding: "60px"
    }}>

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <h1 style={{ fontSize: "48px" }}>DAIVY</h1>
        <p style={{ opacity: 0.6 }}>Photography Portfolio</p>
      </div>

      {/* Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px"
      }}>
        {images.map((img, i) => (
          <div key={i} style={{
            overflow: "hidden",
            borderRadius: "12px",
            cursor: "pointer"
          }}>
            <img
              src={img}
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                transition: "0.3s"
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
              onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
            />
          </div>
        ))}
      </div>

    </main>
  );
}