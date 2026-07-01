export default function Home() {
  return (
    <main style={{
      background: "#050505",
      color: "#ffffff",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      padding: "40px",
      fontFamily: "system-ui, -apple-system, sans-serif"
    }}>

      {/* Brand */}
      <div style={{ letterSpacing: "6px", opacity: 0.6 }}>
        DAIVY
      </div>

      {/* Main Title */}
      <h1 style={{
        fontSize: "64px",
        margin: "20px 0",
        fontWeight: 600
      }}>
        Visual Stories
      </h1>

      {/* Subtitle */}
      <p style={{
        maxWidth: "600px",
        opacity: 0.7,
        lineHeight: 1.8,
        fontSize: "18px"
      }}>
        Photographer · Traveler · Story Collector  
        <br />
        Capturing moments from streets, cities, and quiet places around the world.
      </p>

      {/* Divider */}
      <div style={{
        width: "60px",
        height: "1px",
        background: "#444",
        margin: "40px 0"
      }} />

      {/* Menu */}
      <div style={{
        display: "flex",
        gap: "30px",
        fontSize: "14px",
        opacity: 0.8
      }}>
        <span style={{ cursor: "pointer" }}>Portfolio</span>
        <span style={{ cursor: "pointer" }}>Travel</span>
        <span style={{ cursor: "pointer" }}>About</span>
        <span style={{ cursor: "pointer" }}>Contact</span>
      </div>

      {/* Footer */}
      <div style={{
        position: "absolute",
        bottom: "30px",
        fontSize: "12px",
        opacity: 0.4
      }}>
        © 2026 DAIVY. All rights reserved.
      </div>

    </main>
  );
}