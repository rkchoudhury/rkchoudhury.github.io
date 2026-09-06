import { useCallback, useState } from "react";
import { About, Contact, Experience, Footer, Header, HeroSection, Projects, Skills } from "./components";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const goTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }, [setMenuOpen]);

  return (
    <div className="app">
      {/* Header Section */}
      <div className="noise" />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} goTo={goTo} />

      {/* Content Section */}
      <main>
        <HeroSection goTo={goTo} />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;