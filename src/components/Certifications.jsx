import { SectionLabel } from "./About";

const certs = [
  {
    title: "PG-DAC — Advanced Computing",
    issuer: "CDAC",
    year: "2025",
    icon: "🏅",
    color: "#3b82f6",
  },
  {
    title: "Full Stack Java Development",
    issuer: "Firstbit Solutions",
    year: "2024",
    icon: "☕",
    color: "#f59e0b",
  },
  {
    title: "C/C++ Programming",
    issuer: "PB Tech Solutions",
    year: "2023",
    icon: "🧩",
    color: "#8b5cf6",
  },
  {
    title: "Employability Skill Development Program",
    issuer: "RPG Foundation (Zensar)",
    year: "July 2023",
    icon: "💼",
    color: "#22c55e",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" style={{ padding: "6rem 2rem" }}>
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        <SectionLabel>Certifications</SectionLabel>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "1.1rem",
        }}>
          {certs.map((cert, i) => (
            <div key={i} style={{
              background: "#0d1526",
              border: "1px solid rgba(59,130,246,0.15)",
              borderRadius: "12px", padding: "1.4rem",
              transition: "border-color 0.2s, transform 0.2s",
              cursor: "default",
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = `${cert.color}55`;
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "rgba(59,130,246,0.15)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={{ fontSize: "1.75rem", marginBottom: "0.85rem" }}>{cert.icon}</div>

              <h3 style={{
                fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600,
                fontSize: "0.9rem", color: "#f8fafc",
                margin: "0 0 0.35rem", lineHeight: 1.4,
              }}>{cert.title}</h3>

              <p style={{
                fontFamily: "'Inter', sans-serif", fontSize: "0.78rem",
                color: "#64748b", margin: "0 0 0.85rem",
              }}>{cert.issuer}</p>

              <span style={{
                fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem",
                color: cert.color, background: `${cert.color}15`,
                border: `1px solid ${cert.color}30`,
                padding: "0.2rem 0.55rem", borderRadius: "4px",
              }}>{cert.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}