const stats = [
    { label: "Projects Built", value: "2+" },
    { label: "REST APIs Built", value: "25+" },
    { label: "PG-DAC Score", value: "87.38%" },
    { label: "B.E. CGPA", value: "8.55" },
];
import profileImg from "../assets/Vishal_Photo.png";

export default function About() {
    return (
        <section id="about" style={{
            padding: "6rem 2rem", maxWidth: "960px", margin: "0 auto",
        }}>
            <SectionLabel>About Me</SectionLabel>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>

                {/* Left: avatar + contact */}
                <div>
                    {/* Avatar placeholder */}
                    <div style={{
                        width: 400, height: 400, borderRadius: "50%",
                        background: "linear-gradient(135deg, #1d4ed8, #3b82f6)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: "2.5rem", fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 700, color: "#fff", marginBottom: "1.5rem",
                        overflow: "hidden",
                        border: "3px solid rgba(59,130,246,0.3)",

                    }}>
                        <img style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                        }} src={profileImg} alt="Profile" />
                    </div>
                    <hr />

                    <h2 style={{
                        fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
                        fontSize: "1.8rem", color: "#f8fafc", margin: "0 0 0.25rem",
                    }}>Vishal Patil</h2>
                    <p style={{
                        color: "#3b82f6", fontWeight: 500, fontSize: "0.9rem", margin: "0 0 1.5rem",
                        fontFamily: "'Inter', sans-serif"
                    }}>
                        Java Full Stack Developer
                    </p>

                    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                        {[
                            { icon: "📍", label: "Pune, Maharashtra" },
                            { icon: "📞", label: "+91 9850363353" },
                            { icon: "✉️", label: "vishalpatil.dev2@gmail.com" },
                        ].map(({ icon, label }) => (
                            <div key={label} style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                                <span>{icon}</span>
                                <span style={{ color: "#94a3b8", fontSize: "0.85rem", fontFamily: "'Inter', sans-serif" }}>{label}</span>
                            </div>
                        ))}
                    </div>

                    {/* Social links */}
                    <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.5rem", flexWrap: "wrap" }}>
                        {[
                            { label: "LinkedIn", url: "https://www.linkedin.com/in/vishalpatildevloper/" },
                            { label: "GitHub", url: "https://github.com/VishalPatilDev" },
                        ].map(({ label, url }) => (
                            <a key={label} href={url} target="_blank" rel="noreferrer" style={{
                                color: "#3b82f6", textDecoration: "none",
                                border: "1px solid rgba(59,130,246,0.3)",
                                padding: "0.4rem 0.9rem", borderRadius: "6px",
                                fontSize: "0.8rem", fontFamily: "'Inter', sans-serif", fontWeight: 500,
                                transition: "all 0.2s",
                            }}
                                onMouseEnter={e => e.target.style.background = "rgba(59,130,246,0.1)"}
                                onMouseLeave={e => e.target.style.background = "transparent"}
                            >{label}</a>
                        ))}
                    </div>
                </div>

                {/* Right: bio + stats */}
                <div>
                    <p style={{
                        color: "#94a3b8", lineHeight: 1.8, fontSize: "0.92rem",
                        fontFamily: "'Inter', sans-serif", margin: "0 0 2rem",
                    }}>
                        Java Full Stack Developer with hands-on experience building secure and scalable
                        web applications using <span style={{ color: "#93c5fd" }}>Spring Boot</span> and{" "}
                        <span style={{ color: "#93c5fd" }}>React.js</span>. Strong foundation in REST API
                        development, JWT-based authentication, role-based authorization, and layered architecture.
                        Passionate about writing clean, efficient, and maintainable code.
                    </p>

                    {/* Stats grid */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                        {stats.map(({ label, value }) => (
                            <div key={label} style={{
                                background: "#0d1526", border: "1px solid rgba(59,130,246,0.15)",
                                borderRadius: "10px", padding: "1rem",
                            }}>
                                <div style={{
                                    fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
                                    fontSize: "1.6rem", color: "#3b82f6",
                                }}>{value}</div>
                                <div style={{
                                    fontFamily: "'Inter', sans-serif", fontSize: "0.75rem",
                                    color: "#64748b", marginTop: "0.2rem",
                                }}>{label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
        @media (max-width: 640px) {
          #about > div > div { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
        </section>
    );
}

export function SectionLabel({ children }) {
    return (
        <div style={{ marginBottom: "2.5rem" }}>
            <span style={{
                fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem",
                color: "#3b82f6", letterSpacing: "0.15em", textTransform: "uppercase",
            }}>// </span>
            <h2 style={{
                display: "inline", fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#f8fafc",
                margin: 0,
            }}>{children}</h2>
            <div style={{
                width: "40px", height: "3px", background: "#3b82f6",
                borderRadius: "2px", marginTop: "0.5rem",
            }} />
        </div>
    );
}