import { profile } from "../content";

const year = new Date().getFullYear();

const Footer = () => (
  <footer className="footer">
    <div className="wrap footer-inner">
      <span>
        © {year} {profile.name}
      </span>
      <span>{profile.location}</span>
    </div>
  </footer>
);

export default Footer;
