import { useState } from "react";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: "rgba(10,15,30,0.85)", backdropFilter: "blur(12px)",
      borderBottom: "1px solid rgba(59,130,246,0.15)",
      padding: "0 2rem", display: "flex", alignItems: "center",
      justifyContent: "space-between", height: "60px",
    }}>
      <span style={{
        fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
        fontSize: "1.2rem", color: "#3b82f6", letterSpacing: "0.02em",
        cursor: "pointer"
      }} onClick={() => scrollTo("home")}>
        VP<span style={{ color: "#f8fafc" }}>.</span>
      </span>

      {/* Desktop links */}
      <div style={{ display: "flex", gap: "0.25rem" }} className="desktop-nav">
        {navLinks.map(({ id, label }) => (
          <button key={id} onClick={() => scrollTo(id)} style={{
            background: "none", border: "none", cursor: "pointer",
            padding: "0.35rem 0.75rem", borderRadius: "6px",
            fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", fontWeight: 500,
            color: activeSection === id ? "#3b82f6" : "#94a3b8",
            background: activeSection === id ? "rgba(59,130,246,0.1)" : "transparent",
            transition: "all 0.2s",
          }}>
            {label}
          </button>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button onClick={() => setMenuOpen(!menuOpen)} style={{
        display: "none", background: "none", border: "none",
        cursor: "pointer", color: "#94a3b8", fontSize: "1.4rem",
      }} className="hamburger">☰</button>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: "fixed", top: "60px", left: 0, right: 0,
          background: "#0d1526", borderBottom: "1px solid rgba(59,130,246,0.2)",
          padding: "1rem",
        }}>
          {navLinks.map(({ id, label }) => (
            <button key={id} onClick={() => scrollTo(id)} style={{
              display: "block", width: "100%", textAlign: "left",
              background: "none", border: "none", cursor: "pointer",
              padding: "0.75rem 1rem", borderRadius: "6px",
              fontFamily: "'Inter', sans-serif", fontSize: "0.95rem",
              color: activeSection === id ? "#3b82f6" : "#94a3b8",
            }}>{label}</button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  );
}