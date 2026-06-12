import { useState } from "react";
import { SectionLabel } from "./About";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState(null); // null | "sending" | "sent"

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    //   const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setStatus("sending");
    //     // Simulate send — wire up to EmailJS / Formspree / your backend
    //     setTimeout(() => setStatus("sent"), 1500);
    //   };
    const handleSubmit = async (e) => {
        e.preventDefault();

        setStatus("sending");

        try {
            await emailjs.send(
                "service_kd58ho6", // your Service ID
                "template_3101rkb", // your Template ID
                {
                    from_name: form.name,
                    from_email: form.email,
                    message: form.message,
                },
                "vJdYji8l8mAzMCNMG" // your Public Key
            );

            setStatus("sent");

            setForm({
                name: "",
                email: "",
                message: "",
            });
        } catch (error) {
            console.error("EmailJS Error:", error);
            alert("Failed to send message.");
            setStatus(null);
        }
    };

    return (
        <section id="contact" style={{ padding: "6rem 2rem" }}>
            <div style={{ maxWidth: "960px", margin: "0 auto" }}>
                <SectionLabel>Get In Touch</SectionLabel>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>

                    {/* Left: info */}
                    <div>
                        <p style={{
                            fontFamily: "'Inter', sans-serif", color: "#94a3b8",
                            fontSize: "0.92rem", lineHeight: 1.8, marginBottom: "2rem",
                        }}>
                            I'm currently open to new opportunities. Whether you have a question,
                            a project idea, or just want to say hi — my inbox is always open!
                        </p>

                        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                            {[
                                { icon: "✉️", label: "Email", value: "vishalpatil.dev2@gmail.com", href: "mailto:vishalpatil.dev2@gmail.com" },
                                { icon: "📍", label: "Location", value: "Pune, Maharashtra", href: null },
                                { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/vishalpatildev", href: "https://www.linkedin.com/in/vishalpatildev" },
                                { icon: "🐙", label: "GitHub", value: "github.com/VishalPatilDev", href: "https://github.com/VishalPatilDev" },
                            ].map(({ icon, label, value, href }) => (
                                <div key={label} style={{
                                    display: "flex", gap: "1rem", alignItems: "center",
                                    background: "#0d1526", border: "1px solid rgba(59,130,246,0.12)",
                                    borderRadius: "10px", padding: "0.9rem 1.1rem",
                                }}>
                                    <span style={{ fontSize: "1.1rem" }}>{icon}</span>
                                    <div>
                                        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", color: "#475569", marginBottom: "0.1rem" }}>{label}</div>
                                        {href
                                            ? <a href={href} target="_blank" rel="noreferrer" style={{ color: "#93c5fd", textDecoration: "none", fontSize: "0.82rem", fontFamily: "'Inter', sans-serif" }}>{value}</a>
                                            : <span style={{ color: "#94a3b8", fontSize: "0.82rem", fontFamily: "'Inter', sans-serif" }}>{value}</span>
                                        }
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: form */}
                    <div>
                        {status === "sent" ? (
                            <div style={{
                                background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.3)",
                                borderRadius: "12px", padding: "2rem", textAlign: "center",
                            }}>
                                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>✅</div>
                                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#4ade80", margin: "0 0 0.5rem" }}>Message Sent!</h3>
                                <p style={{ color: "#94a3b8", fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", margin: 0 }}>
                                    Thanks for reaching out. I'll get back to you soon.
                                </p>
                                <button onClick={() => { setStatus(null); setForm({ name: "", email: "", message: "" }); }} style={{
                                    marginTop: "1.25rem", background: "none", border: "1px solid rgba(34,197,94,0.3)",
                                    color: "#4ade80", padding: "0.5rem 1.2rem", borderRadius: "7px",
                                    cursor: "pointer", fontFamily: "'Inter', sans-serif", fontSize: "0.82rem",
                                }}>Send Another</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                                {[
                                    { name: "name", label: "Your Name", type: "text", placeholder: "John Doe" },
                                    { name: "email", label: "Email Address", type: "email", placeholder: "john@example.com" },
                                ].map(({ name, label, type, placeholder }) => (
                                    <div key={name}>
                                        <label style={{ display: "block", fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", color: "#64748b", marginBottom: "0.4rem" }}>{label}</label>
                                        <input
                                            type={type} name={name} value={form[name]}
                                            onChange={handleChange} placeholder={placeholder} required
                                            style={{
                                                width: "100%", background: "#0d1526",
                                                border: "1px solid rgba(59,130,246,0.2)", borderRadius: "8px",
                                                padding: "0.7rem 0.9rem", color: "#f8fafc",
                                                fontFamily: "'Inter', sans-serif", fontSize: "0.88rem",
                                                outline: "none", boxSizing: "border-box", transition: "border-color 0.2s",
                                            }}
                                            onFocus={e => e.target.style.borderColor = "rgba(59,130,246,0.6)"}
                                            onBlur={e => e.target.style.borderColor = "rgba(59,130,246,0.2)"}
                                        />
                                    </div>
                                ))}

                                <div>
                                    <label style={{ display: "block", fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", color: "#64748b", marginBottom: "0.4rem" }}>Message</label>
                                    <textarea
                                        name="message" value={form.message} onChange={handleChange}
                                        placeholder="Tell me about your project or opportunity..."
                                        required rows={5}
                                        style={{
                                            width: "100%", background: "#0d1526",
                                            border: "1px solid rgba(59,130,246,0.2)", borderRadius: "8px",
                                            padding: "0.7rem 0.9rem", color: "#f8fafc",
                                            fontFamily: "'Inter', sans-serif", fontSize: "0.88rem",
                                            outline: "none", resize: "vertical", boxSizing: "border-box",
                                            transition: "border-color 0.2s",
                                        }}
                                        onFocus={e => e.target.style.borderColor = "rgba(59,130,246,0.6)"}
                                        onBlur={e => e.target.style.borderColor = "rgba(59,130,246,0.2)"}
                                    />
                                </div>

                                <button type="submit" disabled={status === "sending"} style={{
                                    background: status === "sending" ? "#1d4ed8" : "#3b82f6",
                                    color: "#fff", border: "none", padding: "0.85rem",
                                    borderRadius: "8px", fontFamily: "'Space Grotesk', sans-serif",
                                    fontWeight: 600, fontSize: "0.9rem", cursor: status === "sending" ? "not-allowed" : "pointer",
                                    transition: "all 0.2s",
                                }}
                                    onMouseEnter={e => { if (status !== "sending") e.target.style.background = "#2563eb"; }}
                                    onMouseLeave={e => { if (status !== "sending") e.target.style.background = "#3b82f6"; }}
                                >
                                    {status === "sending" ? "Sending..." : "Send Message →"}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>

            <style>{`
        @media (max-width: 640px) {
          #contact > div > div { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
        </section>
    );
}