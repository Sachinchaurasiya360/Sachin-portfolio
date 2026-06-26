import { profile, links } from "../content";

const Hero = () => (
  <header id="top" className="hero">
    <div className="wrap">
      {profile.available && (
        <p className="hero-status">
          <span className="status-dot" aria-hidden="true" />
          Available for work
        </p>
      )}
      <h1>
        {profile.name}
        <span className="role">{profile.role}</span>
      </h1>
      <p className="hero-lede">{profile.headline}</p>
      <div className="hero-meta">
        <span>{profile.location}</span>
        <a href={`mailto:${links.email}`}>{links.email}</a>
        <a href={links.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </div>
  </header>
);

export default Hero;
