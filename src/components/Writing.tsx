import { links, writing } from "../content";
import SectionHead from "./SectionHead";

export default function Writing() {
  return (
    <section id="writing" className="section">
      <div className="container">
        <SectionHead
          index="06"
          label="Writing"
          title="Notes from going deep."
          lede="Long-form explanations of systems I wanted to understand properly."
        />
        <ul className="rows">
          {writing.map((a) => (
            <li key={a.title}>
              <a href={a.url} target="_blank" rel="noopener noreferrer" className="row article-row grid">
                <span className="row-meta mono">{a.topic}</span>
                <span className="article-title">{a.title}</span>
                <span className="article-go mono" aria-hidden="true">
                  Read ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
        <p className="section-foot">
          <a href={links.writing} target="_blank" rel="noopener noreferrer" className="link">
            All writing on Medium <span aria-hidden="true">↗</span>
          </a>
        </p>
      </div>
    </section>
  );
}
