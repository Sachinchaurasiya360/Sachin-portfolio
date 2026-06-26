import { useState } from "react";
import Section from "./Section";
import Reveal from "./Reveal";
import { ArrowUpRight, GitHub } from "./icons";
import { projects, type Project } from "../content";

const INITIAL_COUNT = 3;

const ProjectItem = ({ p }: { p: Project }) => (
  <Reveal as="article" className="project">
    <span className="project-index">{p.index}</span>
    <div>
      <div className="project-head">
        <h3>{p.title}</h3>
        <span className="project-category">{p.category}</span>
      </div>

      <p className="project-summary">{p.summary}</p>

      <div className="tech-row">
        {p.tech.map((t) => (
          <span className="tech-tag" key={t}>
            {t}
          </span>
        ))}
      </div>

      <div className="project-links">
        {p.live && (
          <a href={p.live} target="_blank" rel="noopener noreferrer">
            Live <ArrowUpRight />
          </a>
        )}
        {p.github && (
          <a href={p.github} target="_blank" rel="noopener noreferrer">
            <GitHub /> Source
          </a>
        )}
      </div>
    </div>
  </Reveal>
);

const Work = () => {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? projects : projects.slice(0, INITIAL_COUNT);
  const hidden = projects.length - INITIAL_COUNT;

  return (
    <Section id="work" label="Selected Work">
      <div className="project-list">
        {visible.map((p) => (
          <ProjectItem key={p.title} p={p} />
        ))}
      </div>

      {!expanded && hidden > 0 && (
        <button
          type="button"
          className="show-more"
          onClick={() => setExpanded(true)}
        >
          Show  more {hidden === 1 ? "project" : "projects"}
        </button>
      )}
    </Section>
  );
};

export default Work;
