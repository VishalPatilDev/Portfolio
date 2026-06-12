import { useState, useEffect } from "react";

const lines = [
  { prefix: "$ ", text: "WHO AM I", delay: 400 },
  { prefix: "> ", text: "Vishal Patil — Java Full Stack Developer", delay: 900, accent: true },
  { prefix: "$ ", text: "SKILL SET", delay: 1600 },
  { prefix: "> ", text: "Spring Boot · React.js · REST APIs · Docker · MySQL", delay: 2100 },
  { prefix: "$ ", text: "STATUS -- JOB", delay: 2900 },
  { prefix: "> ", text: "Open to opportunities ✓", delay: 3400, green: true },
];

function TypingLine({ prefix, text, accent, green, startDelay }) {
  const [displayed, setDisplayed] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const show = setTimeout(() => setVisible(true), startDelay);
    const type = setTimeout(() => {
      let i = 0;
      const iv = setInterval(() => {
        setDisplayed(text.slice(0, ++i));
        if (i >= text.length) clearInterval(iv);
      }, 28);
      return () => clearInterval(iv);
    }, startDelay + 50);
    return () => { clearTimeout(show); clearTimeout(type); };
  }, [text, startDelay]);

  if (!visible) return null;

  return (
    <div style={{
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: "clamp(0.78rem, 1.8vw, 0.95rem)",
      lineHeight: "2",
      color: accent ? "#93c5fd" : green ? "#4ade80" : "#94a3b8",
    }}>
      <span style={{ color: "#3b82f6", opacity: 0.7 }}>{prefix}</span>
      {displayed}
      {displayed.length < text.length && (
        <span style={{ animation: "blink 1s step-end infinite", color: "#3b82f6" }}>█</span>
      )}
    </div>
  );
}

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      padding: "80px 2rem 2rem",
      background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(59,130,246,0.08) 0%, transparent 70%)",
    }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", width: "100%" }}>
        {/* <a
        href="src/assets/VishalPatil_Resume.pdf"
        download
        className="btn"
      >
        Download Resume
      </a> */}

        {/* Terminal window */}
        <div style={{
          background: "#0d1526", border: "1px solid rgba(59,130,246,0.2)",
          borderRadius: "12px", overflow: "hidden", marginBottom: "2.5rem",
          boxShadow: "0 0 60px rgba(59,130,246,0.08)",
        }}>
          {/* Title bar */}
          <div style={{
            background: "#111827", padding: "0.6rem 1rem",
            display: "flex", alignItems: "center", gap: "0.5rem",
            borderBottom: "1px solid rgba(59,130,246,0.1)",
          }}>
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ef4444", display: "inline-block" }} />
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#f59e0b", display: "inline-block" }} />
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
            <span style={{ marginLeft: "0.75rem", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem", color: "#475569" }}>
              vishal@portfolio ~ 
            </span>
          </div>

          {/* Terminal body */}
          <div style={{ padding: "1.5rem 1.75rem", minHeight: "200px" }}>
            {lines.map((line, i) => (
              <TypingLine key={i} {...line} startDelay={line.delay} />
            ))}
          </div>
        </div>

        {/* CTA buttons */}
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <button onClick={() => scrollTo("projects")} style={{
            background: "#3b82f6", color: "#fff", border: "none",
            padding: "0.75rem 1.75rem", borderRadius: "8px",
            fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.9rem",
            cursor: "pointer", transition: "all 0.2s",
          }}
            onMouseEnter={e => e.target.style.background = "#2563eb"}
            onMouseLeave={e => e.target.style.background = "#3b82f6"}
          >
            View Projects →
          </button>
          <button onClick={() => scrollTo("contact")} style={{
            background: "transparent", color: "#3b82f6",
            border: "1px solid rgba(59,130,246,0.4)",
            padding: "0.75rem 1.75rem", borderRadius: "8px",
            fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.9rem",
            cursor: "pointer", transition: "all 0.2s",
          }}
            onMouseEnter={e => { e.target.style.background = "rgba(59,130,246,0.08)"; }}
            onMouseLeave={e => { e.target.style.background = "transparent"; }}
          >
            Get in Touch
          </button>
        </div>

        {/* Scroll indicator */}
        <div style={{ marginTop: "3rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <div style={{ width: "30px", height: "1px", background: "rgba(148,163,184,0.3)" }} />
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "#475569", letterSpacing: "0.1em" }}>
            SCROLL TO EXPLORE
          </span>
        </div>
      </div>

      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1 } 50% { opacity: 0 } }
      `}</style>
    </section>
  );
}