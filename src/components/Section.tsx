import { type ReactNode } from "react";

// The editorial block: a small label in the left gutter, content on the right.
// Collapses to a single column on mobile. `wide` lets content (e.g. a gallery)
// use the full column instead of the reading measure.
type Props = {
  id: string;
  label: string;
  wide?: boolean;
  children: ReactNode;
};

const Section = ({ id, label, wide = false, children }: Props) => (
  <section id={id} className="section">
    <div className="wrap section-grid">
      <p className="section-label">{label}</p>
      <div className={`section-body${wide ? " section-body--wide" : ""}`}>
        {children}
      </div>
    </div>
  </section>
);

export default Section;
