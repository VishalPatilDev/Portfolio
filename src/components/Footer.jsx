export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const year = new Date().getFullYear();

  return (
    <footer style={{
      borderTop: "1px solid rgba(59,130,246,0.12)",
      padding: "2rem",
      background: "#0a0f1e",
    }}>
      <div style={{
        maxWidth: "960px", margin: "0 auto",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        flexWrap: "wrap", gap: "1rem",
      }}>
        <div>
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
            fontSize: "1rem", color: "#3b82f6",
          }}>VP<span style={{ color: "#f8fafc" }}>.</span></span>
          <p style={{
            fontFamily: "'Inter', sans-serif", fontSize: "0.75rem",
            color: "#475569", margin: "0.25rem 0 0",
          }}>
            © {year} Vishal Patil · Java Full Stack Developer
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
          {[
            { label: "LinkedIn", href: "https://www.linkedin.com/in/vishalpatildev" },
            { label: "GitHub", href: "https://github.com/VishalPatilDev" },
            { label: "Email", href: "mailto:vishalpatil.dev2@gmail.com" },
          ].map(({ label, href }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" style={{
              color: "#64748b", textDecoration: "none",
              fontFamily: "'Inter', sans-serif", fontSize: "0.78rem",
              transition: "color 0.2s",
            }}
              onMouseEnter={e => e.target.style.color = "#3b82f6"}
              onMouseLeave={e => e.target.style.color = "#64748b"}
            >{label}</a>
          ))}
          <button onClick={scrollToTop} style={{
            background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.25)",
            color: "#3b82f6", width: "32px", height: "32px", borderRadius: "7px",
            cursor: "pointer", fontSize: "0.85rem", display: "flex",
            alignItems: "center", justifyContent: "center", transition: "all 0.2s",
          }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(59,130,246,0.2)"}
            onMouseLeave={e => e.currentTarget.style.background = "rgba(59,130,246,0.1)"}
            title="Back to top"
          >↑</button>
        </div>
      </div>
    </footer>
  );
}