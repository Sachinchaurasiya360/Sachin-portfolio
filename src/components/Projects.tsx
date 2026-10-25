import { links, sideProjects } from "../content";
import SectionHead from "./SectionHead";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHead
          index="02"
          label="Projects"
          title="Smaller builds, specific problems."
          lede="Projects where I wanted to understand one hard thing properly: workflow execution, or real-time video at scale."
        />

        <ul className="rows">
          {sideProjects.map((p) => (
            <li key={p.name} className="row project-row grid">
              <h3 className="row-title">{p.name}</h3>
              <p className="row-body">{p.summary}</p>
              <p className="row-meta mono">{p.stack.join(" / ")}</p>
              <p className="row-links">
                {p.live && (
                  <a href={p.live} target="_blank" rel="noopener noreferrer" className="link">
                    Live <span aria-hidden="true">↗</span>
                  </a>
                )}
                {p.code && (
                  <a href={p.code} target="_blank" rel="noopener noreferrer" className="link link-quiet">
                    Source <span aria-hidden="true">↗</span>
                  </a>
                )}
              </p>
            </li>
          ))}
          <li className="row project-row grid">
            <h3 className="row-title">More on GitHub</h3>
            <p className="row-body">Experiments, tooling, and open-source contributions.</p>
            <p className="row-meta mono">github.com/sachinchaurasiya360</p>
            <p className="row-links">
              <a href={links.github} target="_blank" rel="noopener noreferrer" className="link">
                Browse <span aria-hidden="true">↗</span>
              </a>
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
