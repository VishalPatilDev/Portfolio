import { SectionLabel } from "./About";

const projects = [
  {
    title: "LearnSphere",
    subtitle: "Full Stack E-Learning Platform",
    github: "https://github.com/VishalPatilDev/LearnSphere_DacProj",
    stack: ["Java", "Spring Boot", "Spring Security", "JWT", "React.js", "MySQL", "Docker", "Postman"],
    highlights: [
      "Designed and developed a full-stack web application using Spring Boot and React.js.",
      "Built 20+ RESTful APIs for user management, course management, quizzes, and certificate generation.",
      "Implemented JWT-based authentication and role-based authorization supporting 2 user roles (Admin and User).",
      "Secured 15+ API endpoints using Spring Security and JWT token validation.",
      "Integrated MySQL for persistent storage and containerized the application using Docker.",
      "Designed 8+ database entities using JPA/Hibernate following layered architecture principles.",
      "Tested APIs using Postman with proper exception handling and input validation.",
    ],
    color: "#3b82f6",
  },
  {
    title: "Smart Inventory Management",
    subtitle: "Full Stack Enterprise System",
    github: "https://github.com/VishalPatilDev/Full_Stack_Projects/tree/main/smart_inventory_management",
    stack: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "JPA/Hibernate",
      "React.js (Vite)",
      "MySQL",
      "Recharts",
      "Postman",
    ],
    highlights: [
      "Built a production-grade inventory management system with Spring Boot backend and React.js (Vite) frontend, covering the complete procurement-to-sales lifecycle across multiple warehouses.",
      "Designed 12+ JPA entities including Product, Category, Supplier, Warehouse, Inventory, PurchaseOrder, SalesOrder, and StockTransaction with proper cascade rules and optimistic locking using @Version to prevent overselling.",
      "Implemented JWT-based authentication and role-based authorization (ADMIN / STAFF) using Spring Security with @PreAuthorize protection across 35+ REST API endpoints.",
      "Applied @Transactional to purchase and sales workflows using a validate-all-first approach, ensuring atomic stock updates with automatic rollback and descriptive 422 error responses on failures.",
      "Built a comprehensive stock transaction audit trail supporting PURCHASE, SALE, DAMAGE, RETURN, TRANSFER_IN/OUT, and ADJUSTMENT operations with filtering by product, warehouse, type, and date range.",
      "Developed a business intelligence module featuring inventory valuation reports, warehouse-wise revenue analysis, date-range sales and purchase reports, top-selling products, and low-stock alerts with CRITICAL and LOW priority levels.",
      "Created a React.js frontend with 12 pages including a live dashboard powered by Recharts, JWT-aware Axios interceptors, protected routes, role-based UI rendering, and reusable components such as Modal, Table, Badge, and StatCard.",
    ],
    color: "#8b5cf6",
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "6rem 2rem" }}>
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        <SectionLabel>Projects</SectionLabel>

        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  return (
    <div style={{
      background: "#0d1526", border: "1px solid rgba(59,130,246,0.15)",
      borderRadius: "14px", overflow: "hidden",
      transition: "border-color 0.2s, box-shadow 0.2s",
    }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = `${project.color}55`;
        e.currentTarget.style.boxShadow = `0 0 30px ${project.color}10`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = "rgba(59,130,246,0.15)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Top accent bar */}
      <div style={{ height: "3px", background: project.color }} />

      <div style={{ padding: "1.75rem" }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem", flexWrap: "wrap", gap: "0.75rem" }}>
          <div>
            <span style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem",
              color: project.color, letterSpacing: "0.1em", textTransform: "uppercase",
            }}>Project {String(index + 1).padStart(2, "0")}</span>
            <h3 style={{
              fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
              fontSize: "1.25rem", color: "#f8fafc", margin: "0.2rem 0 0.1rem",
            }}>{project.title}</h3>
            <p style={{ color: "#64748b", fontSize: "0.82rem", fontFamily: "'Inter', sans-serif", margin: 0 }}>
              {project.subtitle}
            </p>
          </div>
          <a href={project.github} target="_blank" rel="noreferrer" style={{
            color: project.color, textDecoration: "none",
            border: `1px solid ${project.color}44`,
            padding: "0.4rem 0.9rem", borderRadius: "7px",
            fontSize: "0.78rem", fontFamily: "'Inter', sans-serif", fontWeight: 500,
            display: "flex", alignItems: "center", gap: "0.4rem",
            transition: "background 0.2s",
          }}
            onMouseEnter={e => e.currentTarget.style.background = `${project.color}18`}
            onMouseLeave={e => e.currentTarget.style.background = "transparent"}
          >
            ↗ GitHub
          </a>
        </div>

        {/* Tech stack */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.25rem" }}>
          {project.stack.map(tech => (
            <span key={tech} style={{
              background: `${project.color}12`, color: "#93c5fd",
              border: `1px solid ${project.color}28`,
              padding: "0.2rem 0.6rem", borderRadius: "4px",
              fontSize: "0.72rem", fontFamily: "'JetBrains Mono', monospace",
            }}>{tech}</span>
          ))}
        </div>

        {/* Highlights */}
        <ul style={{ margin: 0, paddingLeft: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {project.highlights.map((h, i) => (
            <li key={i} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
              <span style={{ color: project.color, fontSize: "0.7rem", marginTop: "0.35rem", flexShrink: 0 }}>▶</span>
              <span style={{ color: "#94a3b8", fontSize: "0.85rem", fontFamily: "'Inter', sans-serif", lineHeight: 1.6 }}>{h}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}