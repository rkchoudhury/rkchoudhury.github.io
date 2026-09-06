import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight, Github, Linkedin, Mail, Download, Menu, X,
  Smartphone, Code2, Layers3, Database, TestTube2, ChevronDown
} from "lucide-react";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { profile } from "./configs/profileData";

const experience = [
  {
    company: "EY GDS",
    role: "Senior Software Engineer",
    period: "Oct 2024 — Present",
    location: "Bangalore, India",
    points: [
      "Develop reusable React Native components for scalable and maintainable applications.",
      "Integrate and customize third-party libraries and plugins to improve application performance and user experience.",
      "Collaborate with cross-functional squads for seamless integration and delivery.",
      "Worked on Bangkok Bank Mobile Banking and gained practical exposure to React Native micro-frontends with Re.Pack."
    ]
  },
  {
    company: "Honeywell",
    role: "Mobile Developer 2",
    period: "Oct 2021 — Oct 2024",
    location: "Bangalore, India",
    points: [
      "Developed React Native applications interfacing with Honeywell HMI devices and controllers.",
      "Implemented Bluetooth Low Energy (BLE) communication for real-time controller data.",
      "Refactored 50+ JavaScript files to TypeScript, reducing runtime errors by 40%.",
      "Implemented live polling and BLE-based IO configuration workflows."
    ]
  },
  {
    company: "Tech Mahindra",
    role: "Software Engineer",
    period: "May 2018 — Oct 2021",
    location: "Bangalore, India",
    points: [
      "Started as a Mobile Application Developer building healthcare applications with React Native.",
      "Built responsive UI components across devices and screen sizes.",
      "Worked on MyBSWHealth and BSW Virtual, including maps, chatbot and video-conferencing features.",
      "Redesigned BSW Virtual UI for mobile and tablet compatibility, contributing to a 35% increase in user retention."
    ]
  }
];

const projects = [
  {
    title: "DevTinder",
    type: "Web & Mobile • Full Stack",
    period: "May 2025 — Dec 2025",
    stack: ["React", "Node.js", "MongoDB", "Socket.io"],
    description: "A full-stack platform that helps developers connect, interact and collaborate, with real-time chat and payment integration.",
    github: profile.github
  },
  {
    title: "Netflix Clone",
    type: "Web Application",
    period: "Jan 2024 — Feb 2024",
    stack: ["React", "Redux Toolkit", "Tailwind CSS"],
    description: "A Netflix-inspired React application featuring debounced search, caching, API polling chat and n-level nested comments.",
    github: profile.github
  },
  {
    title: "Food Ordering App",
    type: "Android Application",
    period: "Aug 2023 — Dec 2023",
    stack: ["Kotlin", "Jetpack Compose", "Room DB", "Ktor"],
    description: "An Android food ordering application with search, filtering, navigation and local persistence using Room Database.",
    github: profile.github
  }
];

const skills = [
  { icon: Smartphone, title: "Mobile", items: ["React Native", "Android", "Kotlin", "Java"] },
  { icon: Code2, title: "Frontend", items: ["React JS", "JavaScript", "TypeScript", "React Hooks"] },
  { icon: Layers3, title: "Architecture", items: ["Redux", "Redux Toolkit", "Redux Saga", "Re.Pack", "Tailwind CSS"] },
  { icon: Database, title: "Backend", items: ["Node.js", "Express.js", "MongoDB"] },
  { icon: TestTube2, title: "Testing", items: ["Jest", "React Testing Library"] }
];

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } }
};

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="section">
      <motion.div
        className="container"
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {children}
      </motion.div>
    </section>
  );
}

function App() {
  const [open, setOpen] = useState(false);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <div className="app">
      <div className="noise" />
      <header className="nav-wrap">
        <nav className="nav container">
          <button className="brand" onClick={() => go("home")}>
            <span>RC</span>
            <strong>Rakesh Choudhury</strong>
          </button>

          <div className={`nav-links ${open ? "open" : ""}`}>
            {["about", "experience", "projects", "skills"].map((item) => (
              <button key={item} onClick={() => go(item)}>
                {item}
              </button>
            ))}
            <button className="nav-contact" onClick={() => go("contact")}>Let's talk <ArrowUpRight size={15} /></button>
          </div>

          <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-grid" />
          <div className="orb orb-a" />
          <div className="orb orb-b" />
          <div className="container hero-content">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
              <div className="availability"><span /> Open to interesting engineering conversations</div>
              <p className="hero-kicker">HELLO, I'M RAKESH</p>
              <h1>Building <em>mobile</em> experiences that scale.</h1>
              <p className="hero-copy">
                Senior Software Engineer focused on React Native, modern frontend architecture
                and full-stack product development.
              </p>
              <div className="hero-actions">
                <button className="primary" onClick={() => go("projects")}>Explore my work <ArrowUpRight size={17} /></button>
                <a className="secondary" href="/resume.pdf" download>Download resume <Download size={16} /></a>
              </div>
              <div className="socials">
                <a href={profile.github} target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
                <a href={`mailto:${profile.email}`}><Mail size={18} /> Email</a>
              </div>
            </motion.div>

            <motion.div
              className="code-card"
              initial={{ opacity: 0, scale: .96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: .8, delay: .15 }}
            >
              <div className="code-top"><span /><span /><span /><label>rakesh.ts</label></div>
              <pre><code><span className="muted">const</span> <span className="cyan">engineer</span> = {'{'}
                {`  `}<span className="key">experience</span>: <span className="num">8+</span>,
                {`  `}<span className="key">focus</span>: <span className="str">"React Native"</span>,
                {`  `}<span className="key">frontend</span>: [<span className="str">"React"</span>, <span className="str">"TypeScript"</span>],
                {`  `}<span className="key">backend</span>: [<span className="str">"Node.js"</span>, <span className="str">"MongoDB"</span>],
                {`  `}<span className="key">architecture</span>: <span className="str">"Micro-frontends"</span>,
                {`  `}<span className="key">mindset</span>: <span className="str">"Build. Learn. Improve."</span>
                {'}'};</code></pre>
            </motion.div>
          </div>
          <button className="scroll-cue" onClick={() => go("about")}><ChevronDown size={18} /></button>
        </section>

        <Section id="about" eyebrow="01 / ABOUT" title="Engineering with a product mindset.">
          <div className="about-grid">
            <div>
              <p className="large-copy">
                I’m a software engineer with experience across mobile, frontend and backend
                development. My core strength is turning complex product requirements into
                maintainable, reusable applications.
              </p>
              <p className="body-copy">
                My work spans enterprise mobile applications, healthcare products, industrial
                controller interfaces and full-stack side projects. I enjoy architecture,
                performance, clean code and solving problems that have a measurable impact.
              </p>
            </div>
            <div className="stat-grid">
              <div><strong>8+</strong><span>Years experience</span></div>
              <div><strong>3</strong><span>Major organizations</span></div>
              <div><strong>50+</strong><span>JS files migrated to TS</span></div>
              <div><strong>40%</strong><span>Runtime error reduction</span></div>
            </div>
          </div>
        </Section>

        <Section id="experience" eyebrow="02 / EXPERIENCE" title="Where I've built things.">
          <div className="timeline">
            {experience.map((job, i) => (
              <motion.article
                className="timeline-item"
                key={job.company}
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * .08 }}
              >
                <div className="timeline-marker">{String(i + 1).padStart(2, "0")}</div>
                <div className="timeline-main">
                  <div className="job-head">
                    <div><h3>{job.role}</h3><p>{job.company} · {job.location}</p></div>
                    <time>{job.period}</time>
                  </div>
                  <ul>{job.points.map((point) => <li key={point}>{point}</li>)}</ul>
                </div>
              </motion.article>
            ))}
          </div>
        </Section>

        <Section id="projects" eyebrow="03 / PROJECTS" title="Things I've built.">
          <div className="project-grid">
            {projects.map((project, i) => (
              <motion.article
                className="project-card"
                key={project.title}
                whileHover={{ y: -7 }}
                transition={{ duration: .2 }}
              >
                <div className="project-number">0{i + 1}</div>
                <div className="project-type">{project.type}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">{project.stack.map((s) => <span key={s}>{s}</span>)}</div>
                <div className="project-footer">
                  <span>{project.period}</span>
                  <a href={project.github} target="_blank" rel="noreferrer">Source <ArrowUpRight size={15} /></a>
                </div>
              </motion.article>
            ))}
          </div>
        </Section>

        <Section id="skills" eyebrow="04 / TOOLBOX" title="Technologies I work with.">
          <div className="skills-grid">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div className="skill-card" key={skill.title}>
                  <Icon size={22} />
                  <h3>{skill.title}</h3>
                  <div className="skill-list">{skill.items.map(x => <span key={x}>{x}</span>)}</div>
                </div>
              );
            })}
          </div>
        </Section>

        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;