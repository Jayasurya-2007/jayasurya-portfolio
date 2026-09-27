import React, { useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
  Code2,
  Database,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  Server,
  Sparkles,
  X
} from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const skills = [
  { name: "Java", icon: Code2 },
  { name: "Python", icon: Code2 },
  { name: "HTML", icon: Code2 },
  { name: "CSS", icon: Code2 },
  { name: "JavaScript", icon: Code2 },
  { name: "React", icon: Code2 },
  { name: "Node.js", icon: Server },
  { name: "MongoDB", icon: Database },
  { name: "SQL", icon: Database },
  { name: "Git", icon: Code2 },
  { name: "AI / ML", icon: BrainCircuit }
];

const projects = [
  {
    title: "AI Resume Analyzer",
    description:
      "An AI-focused web application concept that helps students review resumes and identify areas that can be improved."
  },
  {
    title: "Student Management System",
    description:
      "A web application concept for organizing student information and supporting common student management operations."
  },
  {
    title: "IoT Smart Home",
    description:
      "An IoT-based home automation concept that connects sensors and devices to support smart control and monitoring."
  },
  {
    title: "Drowning Detection",
    description:
      "An AI and IoT project concept focused on detecting possible drowning situations and supporting faster rescue response."
  }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setSending(true);
    setStatus("");

    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to send message.");
      }

      event.currentTarget.reset();
      setStatus("Message sent successfully.");
    } catch (error) {
      setStatus(
        error.message ||
          "Could not send the message. Check that the backend is running."
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="site">
      <header className="navbar">
        <a className="brand" href="#home" onClick={closeMenu}>
          JAYASURYA<span>.</span>
        </a>

        <button
          className="menu-button"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {["Home", "About", "Skills", "Projects", "Education", "Contact"].map(
            (item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>
                {item}
              </a>
            )
          )}
        </nav>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy reveal">
            <div className="eyebrow">
              <Sparkles size={16} />
              CSE Engineer • Full Stack • AI
            </div>

            <h1>
              Hi, I'm <span>Jayasurya S</span>
            </h1>

            <h2>Full Stack Developer & AI Engineer</h2>

            <p className="hero-text">
              I build modern web applications and explore intelligent AI
              solutions with a strong curiosity for science and technology.
            </p>

            <div className="hero-actions">
              <a className="button primary" href="#projects">
                View Projects <ArrowDown size={18} />
              </a>
              <a className="button secondary" href="/resume.pdf" download>
                Download Resume
              </a>
            </div>

            <div className="socials">
              <a
                href="https://github.com/Jayasorya-2007"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/jayasurya-s-b50302343"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a href="mailto:JAYASURYA934469@GMAIL.COM" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="hero-photo reveal">
            <div className="photo-ring">
              <img
                src="/profile.jpg"
                alt="Jayasurya S"
              />
            </div>
            <div className="photo-card">
              <strong>2028</strong>
              <span>B.E. CSE</span>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-heading">
            <p className="section-label">ABOUT ME</p>
            <h2>Building with curiosity.</h2>
          </div>

          <div className="about-grid">
            <div className="about-text">
              <p>
                I am a Computer Science and Engineering student who enjoys
                building AI and web applications. My interest in science and
                technology has been a constant source of curiosity since
                childhood.
              </p>
              <p>
                I am developing my skills across full-stack development,
                programming, databases, and AI/ML while working toward
                building useful real-world software.
              </p>
            </div>

            <div className="about-facts">
              <div className="fact">
                <Code2 />
                <div>
                  <strong>Full Stack</strong>
                  <span>React + Node.js</span>
                </div>
              </div>
              <div className="fact">
                <BrainCircuit />
                <div>
                  <strong>AI / ML</strong>
                  <span>Learning & building</span>
                </div>
              </div>
              <div className="fact">
                <Sparkles />
                <div>
                  <strong>Curiosity</strong>
                  <span>Science & technology</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section muted-section">
          <div className="section-heading">
            <p className="section-label">SKILLS</p>
            <h2>Tools I work with.</h2>
          </div>

          <div className="skills-grid">
            {skills.map(({ name, icon: Icon }) => (
              <div className="skill-card" key={name}>
                <Icon size={23} />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-heading">
            <p className="section-label">PROJECTS</p>
            <h2>Things I'm building.</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-number">0{index + 1}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section muted-section">
          <div className="section-heading">
            <p className="section-label">EDUCATION</p>
            <h2>My academic journey.</h2>
          </div>

          <div className="education-card">
            <div className="education-icon">
              <GraduationCap size={30} />
            </div>
            <div>
              <p className="education-year">EXPECTED GRADUATION • 2028</p>
              <h3>Panimalar Engineering College</h3>
              <p>B.E. Computer Science and Engineering</p>
              <span>Chennai, Tamil Nadu, India</span>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="section-heading">
            <p className="section-label">CONTACT</p>
            <h2>Let's build something.</h2>
            <p>
              Have a project idea or want to connect? Send me a message.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-info">
              <a href="mailto:JAYASURYA934469@GMAIL.COM">
                <Mail />
                <span>JAYASURYA934469@GMAIL.COM</span>
                <ArrowUpRight size={18} />
              </a>
              <a
                href="https://github.com/Jayasorya-2007"
                target="_blank"
                rel="noreferrer"
              >
                <Github />
                <span>GitHub</span>
                <ArrowUpRight size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/jayasurya-s-b50302343"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin />
                <span>LinkedIn</span>
                <ArrowUpRight size={18} />
              </a>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <input name="name" placeholder="Your name" required />
              <input name="email" type="email" placeholder="Your email" required />
              <textarea
                name="message"
                placeholder="Your message"
                rows="6"
                required
              />
              <button className="button primary" disabled={sending}>
                {sending ? "Sending..." : "Send Message"}
              </button>

              {status && (
                <p className="form-status">
                  {status.includes("successfully") && <CheckCircle2 size={18} />}
                  {status}
                </p>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Jayasurya S. All Rights Reserved.</p>
        <p>Built with React & Node.js</p>
      </footer>
    </div>
  );
}

export default App;