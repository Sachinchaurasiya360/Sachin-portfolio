import Section from "./Section";
import Reveal from "./Reveal";
import { experience } from "../content";

const Experience = () => (
  <Section id="experience" label="Experience">
    <div className="exp-list">
      {experience.map((e) => (
        <Reveal as="article" className="exp" key={e.company}>
          <p className="exp-period">{e.period}</p>
          <div className="exp-head">
            <h3>{e.role}</h3>
            <span className="exp-company">{e.company}</span>
            <span className="exp-location">{e.location}</span>
          </div>
          <p>{e.description}</p>
        </Reveal>
      ))}
    </div>
  </Section>
);

export default Experience;
