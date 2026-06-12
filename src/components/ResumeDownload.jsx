import { SectionLabel } from "./About";

const resumeHighlights = [
    { label: "Full Stack Projects", value: "2" },
    { label: "REST APIs Built", value: "25+" },
    { label: "Technologies", value: "15+" },
    { label: "Certifications", value: "4" },
];

export default function ResumeDownload() {
    // Generates and downloads a clean text version of the resume
    const handleDownload = () => {
        const resumeContent = `VISHAL PATIL
Java Full Stack Developer
+91 9850363353 | Pune, Maharashtra
vishalpatil.dev2@gmail.com
LinkedIn: linkedin.com/in/vishalpatildev
GitHub: github.com/VishalPatilDev

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PROFESSIONAL SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Java Full Stack Developer with hands-on project experience building secure and scalable web
applications using Spring Boot and React.js. Strong knowledge of REST API development,
JWT-based authentication, role-based authorization, and layered architecture
(Controller–Service–Repository). Proficient in OOP, multithreading, and database design.
Passionate about writing clean, efficient, and maintainable code.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TECHNICAL SKILLS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Languages    : Java, C#, JavaScript, C, C++
Backend      : Spring Boot, REST APIs, Spring Security (JWT), JPA/Hibernate, MVC
Frontend     : React.js, HTML5, CSS3
Databases    : MySQL, MongoDB, SQL, Database Design
DevOps/Tools : Git, GitHub, Docker, Postman, Jenkins, Kubernetes
Concepts     : OOP, Multithreading, DSA, Exception Handling, Agile, SDLC, CI/CD

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EDUCATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PG-DAC (Post Graduate Diploma in Advanced Computing)     2025
IACSD, Akurdi, Pune | Percentage: 87.38%

B.E. in Electronics and Telecommunication                2020–2024
Savitribai Phule Pune University | CGPA: 8.55

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PROJECTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LearnSphere — Full Stack E-Learning Platform
GitHub: https://github.com/VishalPatilDev/LearnSphere_DacProj
Tech: Java, Spring Boot, Spring Security, JWT, React.js, MySQL, Docker, Postman
• Designed and developed a full-stack web application using Spring Boot and React.js.
• Built 20+ RESTful APIs for user management, course management, quizzes, and certificate generation.
• Implemented JWT-based authentication and role-based authorization (Admin and User roles).
• Secured 15+ API endpoints using Spring Security and JWT token validation.
• Integrated MySQL for persistent storage; containerized the application using Docker.
• Designed 8+ database entities using JPA/Hibernate following layered architecture principles.
• Tested APIs using Postman with proper exception handling and input validation.

Warehouse Inventory Tracker — Event-Based System
GitHub: https://github.com/VishalPatilDev/Warehouse-Inventory-Tracker
Tech: Java, Spring Boot, React.js, Collections Framework, Multithreading, REST APIs
• Developed a real-time inventory tracking system using Spring Boot and React.js.
• Managed concurrent operations using synchronized multithreading for thread-safe stock updates.
• Applied Observer Design Pattern to automatically trigger low-stock alerts.
• Built REST APIs for product addition, shipment updates, order processing, and stock monitoring.
• Used Java Collections for efficient in-memory data handling with file-based persistence.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CERTIFICATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• CDAC — PG-DAC (Advanced Computing), 2025
• Full Stack Java Development — Firstbit Solutions, 2024
• C/C++ Programming — PB Tech Solutions, 2023
• Employability Skill Development Program — RPG Foundation (Zensar), July 2023

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ACHIEVEMENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Achieved 87.38% in CDAC PG-DAC; secured 79% in CDAC CCE.
• Built and deployed 2 full-stack apps with 25+ REST APIs.
• Maintained CGPA of 8.55 in B.E. Electronics & Telecommunication.
`;

        const blob = new Blob([resumeContent], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "Vishal_Patil_Resume.txt";
        a.click();
        URL.revokeObjectURL(url);
    };

    return (
        <section id="resume" style={{ padding: "6rem 2rem", background: "rgba(13,21,38,0.5)" }}>
            <div style={{ maxWidth: "960px", margin: "0 auto" }}>
                <SectionLabel>Resume</SectionLabel>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", alignItems: "start" }}>

                    {/* Left: preview card */}
                    <div style={{
                        background: "#0a0f1e", border: "1px solid rgba(59,130,246,0.2)",
                        borderRadius: "14px", overflow: "hidden",
                    }}>
                        {/* Mock resume header */}
                        <div style={{
                            background: "linear-gradient(135deg, #1d4ed8 0%, #1e3a8a 100%)",
                            padding: "1.5rem",
                        }}>
                            <div style={{
                                fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
                                fontSize: "1.3rem", color: "#fff",
                            }}>Vishal Patil</div>
                            <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.8rem", fontFamily: "'Inter', sans-serif", marginTop: "0.2rem" }}>
                                Java Full Stack Developer
                            </div>
                            <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.72rem", fontFamily: "'JetBrains Mono', monospace", marginTop: "0.35rem" }}>
                                Pune, Maharashtra · vishalpatil.dev2@gmail.com
                            </div>
                        </div>

                        {/* Mock lines */}
                        <div style={{ padding: "1.25rem 1.5rem" }}>
                            {["Professional Summary", "Technical Skills", "Education", "Projects", "Certifications"].map((section, i) => (
                                <div key={i} style={{ marginBottom: "1rem" }}>
                                    <div style={{
                                        fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.65rem",
                                        color: "#3b82f6", fontWeight: 700, letterSpacing: "0.1em",
                                        textTransform: "uppercase", marginBottom: "0.4rem",
                                        borderBottom: "1px solid rgba(59,130,246,0.2)", paddingBottom: "0.2rem",
                                    }}>{section}</div>
                                    <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                                        {[...Array(i === 0 ? 2 : i === 2 ? 2 : 3)].map((_, j) => (
                                            <div key={j} style={{
                                                height: "6px", borderRadius: "3px",
                                                background: "rgba(148,163,184,0.12)",
                                                width: `${70 + Math.random() * 25}%`,
                                            }} />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: info + download */}
                    <div>
                        <p style={{
                            fontFamily: "'Inter', sans-serif", color: "#94a3b8",
                            fontSize: "0.9rem", lineHeight: 1.8, marginBottom: "2rem",
                        }}>
                            Download my resume to get a complete overview of my skills, projects,
                            education, and experience as a Java Full Stack Developer.
                        </p>

                        {/* Stats */}
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.85rem", marginBottom: "2rem" }}>
                            {resumeHighlights.map(({ label, value }) => (
                                <div key={label} style={{
                                    background: "#0a0f1e", border: "1px solid rgba(59,130,246,0.15)",
                                    borderRadius: "10px", padding: "1rem",
                                }}>
                                    <div style={{
                                        fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
                                        fontSize: "1.4rem", color: "#3b82f6",
                                    }}>{value}</div>
                                    <div style={{
                                        fontFamily: "'Inter', sans-serif", fontSize: "0.73rem",
                                        color: "#64748b", marginTop: "0.15rem",
                                    }}>{label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Download button */}
                        <a href="src/assets/VishalPatil_Resume.pdf">
                        <button  style={{
                            width: "100%", background: "#3b82f6", color: "#fff",
                            border: "none", padding: "0.9rem 1.5rem", borderRadius: "10px",
                            fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600,
                            fontSize: "0.95rem", cursor: "pointer", transition: "all 0.2s",
                            display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
                        }}
                            onMouseEnter={e => { e.currentTarget.style.background = "#2563eb"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                            onMouseLeave={e => { e.currentTarget.style.background = "#3b82f6"; e.currentTarget.style.transform = "translateY(0)"; }}
                        >
                            ⬇ Download Resume
                        </button>
                        </a>

                        <p style={{
                            fontFamily: "'Inter', sans-serif", fontSize: "0.72rem",
                            color: "#475569", textAlign: "center", marginTop: "0.75rem",
                        }}>
                            Downloads as .txt · Replace with your actual PDF resume link
                        </p>
                    </div>
                </div>
            </div>

            <style>{`
        @media (max-width: 640px) {
          #resume > div > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}