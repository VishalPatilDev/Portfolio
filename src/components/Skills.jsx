import { SectionLabel } from "./About";

const skillGroups = [
  {
    category: "Languages",
    icon: "⌨️",
    skills: ["Java", "JavaScript", "C#", "C", "C++"],
  },
  {
    category: "Backend",
    icon: "⚙️",
    skills: ["Spring Boot", "REST APIs", "Spring Security", "JWT", "JPA/Hibernate", "MVC"],
  },
  {
    category: "Frontend",
    icon: "🖥️",
    skills: ["React.js", "HTML5", "CSS3"],
  },
  {
    category: "Databases",
    icon: "🗄️",
    skills: ["MySQL", "MongoDB", "SQL", "Database Design"],
  },
  {
    category: "DevOps & Tools",
    icon: "🛠️",
    skills: ["Git", "GitHub", "Docker", "Postman", "Jenkins", "Kubernetes"],
  },
  {
    category: "Concepts",
    icon: "💡",
    skills: ["OOP", "Multithreading", "DSA", "Agile", "SDLC", "CI/CD", "Exception Handling"],
  },
];

export default function Skills() {
  return (
    <section id="skills" style={{
      padding: "6rem 2rem",
      background: "rgba(13,21,38,0.5)",
    }}>
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        <SectionLabel>Technical Skills</SectionLabel>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1.25rem",
        }}>
          {skillGroups.map(({ category, icon, skills }) => (
            <div key={category} style={{
              background: "#0a0f1e", border: "1px solid rgba(59,130,246,0.15)",
              borderRadius: "12px", padding: "1.5rem",
              transition: "border-color 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(59,130,246,0.4)"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(59,130,246,0.15)"}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
                <span style={{ fontSize: "1.1rem" }}>{icon}</span>
                <span style={{
                  fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600,
                  fontSize: "0.85rem", color: "#93c5fd", letterSpacing: "0.03em",
                }}>{category}</span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {skills.map(skill => (
                  <span key={skill} style={{
                    background: "rgba(59,130,246,0.08)", color: "#94a3b8",
                    border: "1px solid rgba(59,130,246,0.18)",
                    padding: "0.3rem 0.7rem", borderRadius: "5px",
                    fontSize: "0.78rem", fontFamily: "'JetBrains Mono', monospace",
                    fontWeight: 500,
                  }}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}