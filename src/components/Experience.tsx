import { experience } from "../content";
import SectionHead from "./SectionHead";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHead
          index="04"
          label="Experience"
          title="Where I have worked."
          lede="Product teams where I owned features from the database to the interface."
        />

        <ol className="timeline">
          {experience.map((r) => (
            <li key={r.company} className="role grid">
              <div className="role-when">
                <p className="mono">{r.period}</p>
                <p className="mono role-where">{r.location}</p>
                {r.current && <p className="role-now mono">Current</p>}
              </div>
              <div className="role-body">
                <h3>
                  {r.company}
                  <span className="role-title">{r.role}</span>
                </h3>
                <p className="role-summary">{r.summary}</p>
                <ul className="ticks">
                  {r.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                <p className="stack mono">{r.stack.join(" / ")}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
