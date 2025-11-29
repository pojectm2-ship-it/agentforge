export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "#000000",
        minHeight: "100vh",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
        AGENTFORGE
      </h1>

      <p style={{ fontSize: "1.2rem", color: "#aaa", maxWidth: "600px", textAlign: "center" }}>
        La tua piattaforma AI completamente personalizzata, costruita oggi da zero.
      </p>

      <button
        style={{
          marginTop: "2rem",
          padding: "1rem 2rem",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#ffffff",
          color: "#000",
          cursor: "pointer",
          fontSize: "1rem",
          fontWeight: "bold",
        }}
      >
        Inizia Ora
      </button>
    </div>
  );
}
