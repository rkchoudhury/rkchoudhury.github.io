import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Download, Menu, X, ChevronDown } from "lucide-react";
import { About, Contact, Experience, Footer, Projects, Skills } from "./components";
import { profile, experience, projects, skills } from "./configs";

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

        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;