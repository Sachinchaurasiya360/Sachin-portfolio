import Section from "./Section";
import Reveal from "./Reveal";
import { ArrowUpRight, GitHub, Calendar } from "./icons";
import { links } from "../content";

const Contact = () => (
  <Section id="contact" label="Contact">
    <Reveal className="contact">
      <h2>Let’s build something.</h2>
      <p className="contact-lede">
        I take on freelance work: full-stack products, backend systems, and
        AI features that need to actually hold up in production. If that’s what
        you’re after, the fastest way to reach me is email.
      </p>

      <a className="contact-email" href={`mailto:${links.email}`}>
        {links.email}
      </a>

      <div className="contact-actions">
        <a href={links.call} target="_blank" rel="noopener noreferrer">
          <Calendar /> Book a 30-min call
        </a>
        <a href={links.github} target="_blank" rel="noopener noreferrer">
          <GitHub /> GitHub
        </a>
        <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn <ArrowUpRight />
        </a>
        <a href={links.twitter} target="_blank" rel="noopener noreferrer">
          Twitter <ArrowUpRight />
        </a>
      </div>
    </Reveal>
  </Section>
);

export default Contact;
