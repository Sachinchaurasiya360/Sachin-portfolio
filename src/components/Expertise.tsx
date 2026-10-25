import { expertise } from "../content";
import SectionHead from "./SectionHead";

export default function Expertise() {
  return (
    <section id="expertise" className="section">
      <div className="container">
        <SectionHead
          index="05"
          label="Expertise"
          title="Tools I reach for, and why."
          lede="Grouped by the problem they solve. Everything here has been used in something that shipped."
        />
        <dl className="expertise grid">
          {expertise.map((e) => (
            <div key={e.area} className="expertise-item">
              <dt className="mono">{e.area}</dt>
              <dd>
                <p className="expertise-items">{e.items.join(", ")}</p>
                <p className="expertise-note">{e.note}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
