import { Analytics } from "@vercel/analytics/react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Experience from "./components/Experience";
import BeyondCode from "./components/BeyondCode";
import Writing from "./components/Writing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => (
  <>
    <Nav />
    <main>
      <Hero />
      <About />
      <Work />
      <Experience />
      <BeyondCode />
      <Writing />
      <Contact />
    </main>
    <Footer />
    <Analytics />
  </>
);

export default App;
