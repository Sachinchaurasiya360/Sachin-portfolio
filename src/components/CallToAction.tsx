import { config } from "../config";
import "./styles/CallToAction.css";

const services = [
  "Web App Development",
  "AI Agents & Chatbots",
  "Workflow Automation",
  "API & Backend Systems",
];

const CallToAction = () => {
  return (
    <section className="cta-section">
      <h2 className="cta-heading">Available for Freelance</h2>
      <p className="cta-subtext">
        Looking for a developer to build your next product? I help startups and
        businesses ship fast with clean, scalable code.
      </p>
      <div className="cta-services">
        {services.map((service, i) => (
          <span key={i} className="cta-service-tag">{service}</span>
        ))}
      </div>
      <div className="cta-buttons">
        <a
          href={`mailto:${config.contact.email}?subject=Freelance%20Inquiry`}
          className="cta-btn cta-btn-hire"
          data-cursor="disable"
        >
          Hire Me →
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
