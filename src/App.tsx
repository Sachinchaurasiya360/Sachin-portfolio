import { Analytics } from "@vercel/analytics/react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Expertise from "./components/Expertise";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Impact from "./components/Impact";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Work from "./components/Work";
import Writing from "./components/Writing";

export default function App() {
  return (
    <>
      <a href="#work" className="skip-link">
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <Work />
        <Projects />
        <Impact />
        <Experience />
        <Expertise />
        <Writing />
        <About />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </>
  );
}
