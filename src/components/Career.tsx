import "./styles/Career.css";
import { config } from "../config";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Career = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".career-section",
        start: "top 75%",
        end: "bottom center",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      ".career-section h2",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }
    );

    tl.fromTo(
      ".career-card",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: "power3.out" },
      "-=0.3"
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Career <span>&</span> Experience
        </h2>

        <div className="career-list">
          {config.experiences.map((exp, index) => (
            <div key={index} className="career-card">
              <div className="career-card-left">
                <span className="career-period">{exp.period}</span>
                <span className="career-location">{exp.location}</span>
              </div>

              <div className="career-card-accent"></div>

              <div className="career-card-right">
                <div className="career-card-header">
                  <h3>{exp.position}</h3>
                  <span className="career-company">{exp.company}</span>
                </div>

                <ul className="career-responsibilities">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <div className="career-tech-tags">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="career-tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
