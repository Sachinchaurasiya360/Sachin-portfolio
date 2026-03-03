import { Link } from "react-router-dom";
import { config } from "../config";
import { MdArrowOutward } from "react-icons/md";
import "./MyWorks.css";

const MyWorks = () => {
  return (
    <div className="myworks-page">
      <div className="myworks-nav">
        <Link to="/" className="myworks-back" data-cursor="disable">
          &larr; Home
        </Link>
      </div>

      <div className="myworks-hero">
        <h1>
          All <span>Works</span>
        </h1>
        <p>Projects I've built from the ground up</p>
      </div>

      <div className="myworks-list">
        {config.projects.map((project, index) => (
          <div className="myworks-item" key={project.id}>
            <div className="myworks-item-header">
              <span className="myworks-number">0{index + 1}</span>
              <span className="myworks-category">{project.category}</span>
            </div>

            <div className="myworks-item-body">
              <div className="myworks-item-visual">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="myworks-item-info">
                <h2>{project.title}</h2>
                <p className="myworks-desc">{project.description}</p>
                <div className="myworks-tech">
                  {project.technologies.split(", ").map((tech, i) => (
                    <span key={i} className="myworks-tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="myworks-item-line"></div>
          </div>
        ))}
      </div>

      <div className="myworks-footer">
        <a
          href={`mailto:${config.contact.email}`}
          className="myworks-cta"
          data-cursor="disable"
        >
          Let's work together <MdArrowOutward />
        </a>
      </div>
    </div>
  );
};

export default MyWorks;
