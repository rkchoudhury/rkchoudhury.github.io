import { useCallback, useState } from "react";
import {
  About,
  Contact,
  Education,
  Experience,
  Footer,
  Header,
  HeroSection,
  Projects,
  ScrollBar,
  Skills,
} from "./components";

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
      <ScrollBar />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} goTo={goTo} />

      {/* Content Section */}
      <main>
        <HeroSection goTo={goTo} />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;