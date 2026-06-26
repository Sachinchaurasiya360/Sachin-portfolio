import "./styles/Career.css";
import { config } from "../config";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Career = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading reveal
      gsap.fromTo(
        ".career-section h2",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: ".career-section", start: "top 75%" },
        }
      );

      // The spine "draws" itself as you scroll through the timeline
      gsap.fromTo(
        ".career-line-progress",
        { height: "0%" },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: ".career-timeline",
            start: "top 65%",
            end: "bottom 75%",
            scrub: 0.6,
          },
        }
      );

      // Each item: slide its card in + light up the node when the spine reaches it
      const items = gsap.utils.toArray<HTMLElement>(".career-item");
      items.forEach((item) => {
        const content = item.querySelector(".career-content");
        if (content) {
          gsap.fromTo(
            content,
            { opacity: 0, x: 40 },
            {
              opacity: 1,
              x: 0,
              duration: 0.7,
              ease: "power3.out",
              scrollTrigger: {
                trigger: item,
                start: "top 80%",
                toggleActions: "play none none none",
              },
            }
          );
        }
        ScrollTrigger.create({
          trigger: item,
          start: "top 62%",
          onEnter: () => item.classList.add("is-active"),
          onLeaveBack: () => item.classList.remove("is-active"),
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="career-section section-container" ref={sectionRef}>
      <div className="career-container">
        <h2>
          Career <span>&</span> Experience
        </h2>

        <div className="career-timeline">
          <div className="career-line">
            <div className="career-line-progress"></div>
          </div>

          {config.experiences.map((exp, index) => (
            <div key={index} className="career-item">
              <div className="career-node">
                <span className="career-node-dot"></span>
              </div>

              <div className="career-content">
                <div className="career-period-badge">{exp.period}</div>

                <div className="career-card">
                  <div className="career-card-glow"></div>
                  <div className="career-card-top">
                    <div className="career-card-role">
                      <h3>{exp.position}</h3>
                      <span className="career-company">{exp.company}</span>
                    </div>
                    <span className="career-location">{exp.location}</span>
                  </div>

                  <p className="career-desc">{exp.description}</p>

                  <div className="career-tech-tags">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="career-tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
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
