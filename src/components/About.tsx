import Section from "./Section";
import Reveal from "./Reveal";
import { about } from "../content";

const About = () => (
  <Section id="about" label="About">
    <Reveal className="about-body">
      {about.map((para, i) => (
        <p key={i}>{para}</p>
      ))}
    </Reveal>
  </Section>
);

export default About;
