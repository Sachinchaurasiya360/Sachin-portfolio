import { useState } from "react";
import { about } from "../content";
import SectionHead from "./SectionHead";

const INITIAL_MOMENTS = 3;

export default function About() {
  const [showAll, setShowAll] = useState(false);
  const moments = showAll ? about.moments : about.moments.slice(0, INITIAL_MOMENTS);
  const hidden = about.moments.length - INITIAL_MOMENTS;

  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHead index="07" label="About" title="The person behind the commits." />

        <div className="about grid">
          <figure className="about-photo">
            <img src={about.photo} alt="Sachin Chaurasiya" loading="lazy" width={480} height={600} />
          </figure>

          <div className="about-text">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}

            <h3 className="mono about-subhead">Outside the editor</h3>
            <ul className="community">
              {about.community.map((c) => (
                <li key={c.role}>
                  <span className="community-role">{c.role}</span>
                  <span className="community-detail">{c.detail}</span>
                  <span className="mono">{c.period}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ul id="moments" className="moments grid">
          {moments.map((m) => (
            <li key={m.image}>
              <figure>
                <img src={m.image} alt={m.caption} loading="lazy" />
                <figcaption>{m.caption}</figcaption>
              </figure>
            </li>
          ))}
        </ul>

        {hidden > 0 && (
          <p className="moments-toggle">
            <button
              type="button"
              className="button button-outline"
              aria-expanded={showAll}
              aria-controls="moments"
              onClick={() => setShowAll((s) => !s)}
            >
              {showAll ? "Show fewer" : `Show more (${hidden})`}
            </button>
          </p>
        )}
      </div>
    </section>
  );
}
