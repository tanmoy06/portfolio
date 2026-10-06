import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import GitHubSection from "./components/GitHubSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
    document.body.classList.remove("light");
  }, []);

  return (
    <div className="min-h-screen bg-cosmic text-zinc-100 relative selection:bg-cyan-500/25 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
