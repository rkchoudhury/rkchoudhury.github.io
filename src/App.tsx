import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { About, Contact, Experience, Footer, HeroSection, Projects, Skills } from "./components";

function App() {
  const [open, setOpen] = useState(false);

  const go = (id: string) => {
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
        <HeroSection goTo={go} />
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