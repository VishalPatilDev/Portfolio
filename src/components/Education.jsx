import { SectionLabel } from "./About";

const education = [
  {
    degree: "PG-DAC",
    full: "Post Graduate Diploma in Advanced Computing",
    institution: "IACSD, Akurdi, Pune",
    year: "2025",
    score: "87.38%",
    scoreLabel: "Percentage",
    icon: "🎓",
    color: "#3b82f6",
  },
  {
    degree: "B.E. — Electronics & Telecommunication",
    full: "Bachelor of Engineering",
    institution: "Savitribai Phule Pune University",
    year: "2020 – 2024",
    score: "8.55",
    scoreLabel: "CGPA",
    icon: "🏛️",
    color: "#8b5cf6",
  },
];

export default function Education() {
  return (
    <section id="education" style={{ padding: "6rem 2rem", background: "rgba(13,21,38,0.5)" }}>
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        <SectionLabel>Education</SectionLabel>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {education.map((edu, i) => (
            <div key={i} style={{
              background: "#0a0f1e",
              border: "1px solid rgba(59,130,246,0.15)",
              borderRadius: "12px", padding: "1.75rem",
              display: "flex", gap: "1.5rem", alignItems: "flex-start",
              transition: "border-color 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = `${edu.color}55`}
              onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(59,130,246,0.15)"}
            >
              {/* Icon */}
              <div style={{
                width: 52, height: 52, borderRadius: "10px", flexShrink: 0,
                background: `${edu.color}18`, border: `1px solid ${edu.color}33`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.4rem",
              }}>{edu.icon}</div>

              {/* Content */}
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
                  <div>
                    <h3 style={{
                      fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
                      fontSize: "1.05rem", color: "#f8fafc", margin: "0 0 0.2rem",
                    }}>{edu.degree}</h3>
                    <p style={{
                      fontFamily: "'Inter', sans-serif", fontSize: "0.82rem",
                      color: "#64748b", margin: "0 0 0.5rem",
                    }}>{edu.institution}</p>
                  </div>
                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem",
                    color: "#475569", background: "rgba(71,85,105,0.15)",
                    padding: "0.25rem 0.7rem", borderRadius: "5px", height: "fit-content",
                  }}>{edu.year}</span>
                </div>

                <div style={{
                  display: "inline-flex", alignItems: "center", gap: "0.4rem",
                  background: `${edu.color}15`, border: `1px solid ${edu.color}30`,
                  padding: "0.3rem 0.75rem", borderRadius: "6px",
                }}>
                  <span style={{ color: edu.color, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1rem" }}>
                    {edu.score}
                  </span>
                  <span style={{ color: "#64748b", fontFamily: "'Inter', sans-serif", fontSize: "0.75rem" }}>
                    {edu.scoreLabel}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}