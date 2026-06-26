import { profile } from "../content";

const Nav = () => (
  <nav className="nav">
    <div className="wrap nav-inner">
      <a href="#top" className="nav-name">
        {profile.name}
      </a>
      <div className="nav-links">
        <a href="#work">Work</a>
        <a href="#experience" className="nav-hide">
          Experience
        </a>
        <a href="#beyond" className="nav-hide">
          Beyond
        </a>
        <a href="#writing" className="nav-hide">
          Writing
        </a>
        <a href="#contact" className="nav-cta">
          Contact
        </a>
      </div>
    </div>
  </nav>
);

export default Nav;
