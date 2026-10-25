import { impact } from "../content";
import SectionHead from "./SectionHead";

export default function Impact() {
  return (
    <section id="impact" className="section section-tinted">
      <div className="container">
        <SectionHead
          index="03"
          label="Impact"
          title="What changed because of the work."
          lede="A few outcomes I can point to, and how they happened."
        />
        <dl className="impact grid">
          {impact.map((m) => (
            <div key={m.label} className="impact-item">
              <dt>
                <span className="impact-value">{m.value}</span>
                <span className="impact-label">{m.label}</span>
              </dt>
              <dd>
                <p>{m.context}</p>
                <p className="mono">{m.source}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
