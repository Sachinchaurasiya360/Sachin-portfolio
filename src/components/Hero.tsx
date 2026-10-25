import { hero, profile } from "../content";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container">
        <p className="hero-meta">
          <span className="status" aria-hidden="true" />
          <span>{profile.city}, India</span>
          <span className="sep" aria-hidden="true">/</span>
          <span>Open to freelance work</span>
        </p>

        <div className="grid hero-grid">
          <div className="hero-main">
            <h1>{hero.headline}</h1>
            <p className="hero-intro">{hero.intro}</p>
            <div className="hero-actions">
              <a href="#work" className="button button-primary">
                View selected work
              </a>
              <a href="#contact" className="button button-quiet">
                Get in touch <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <dl className="hero-focus">
            {hero.focus.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
