import Section from "./Section";
import Reveal from "./Reveal";
import { ArrowUpRight } from "./icons";
import { writing, links } from "../content";

const Writing = () => (
  <Section id="writing" label="Writing">
    <Reveal>
      <div className="writing-list">
        {writing.map((a) => (
          <a
            key={a.title}
            href={a.url}
            target="_blank"
            rel="noopener noreferrer"
            className="writing-item"
          >
            <span className="writing-tag">{a.tag}</span>
            <h3>{a.title}</h3>
            <span className="writing-arrow">
              <ArrowUpRight />
            </span>
          </a>
        ))}
      </div>
      <a
        href={links.writing}
        target="_blank"
        rel="noopener noreferrer"
        className="writing-more"
      >
        More on Medium →
      </a>
    </Reveal>
  </Section>
);

export default Writing;
