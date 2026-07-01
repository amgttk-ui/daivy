export default function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0a0a",
      color: "white",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      padding: "40px"
    }}>
      
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
        DAIVY
      </h1>

      <p style={{ fontSize: "18px", opacity: 0.7 }}>
        Photographer · Traveler · Storyteller
      </p>

      <div style={{ marginTop: "40px", maxWidth: "600px" }}>
        <p style={{ lineHeight: "1.6", opacity: 0.8 }}>
          I capture moments from cities, streets, and journeys around the world.
          Minimal. Emotional. Real.
        </p>
      </div>

      <div style={{ marginTop: "60px", display: "flex", gap: "20px" }}>
        <a href="#" style={{
          padding: "10px 20px",
          border: "1px solid white",
          textDecoration: "none",
          color: "white"
        }}>
          Portfolio
        </a>

        <a href="#" style={{
          padding: "10px 20px",
          background: "white",
          color: "black",
          textDecoration: "none"
        }}>
          Contact
        </a>
      </div>

    </div>
  )
}