import { MdArrowOutward } from "react-icons/md";
import "./styles/Contact.css";
import { config } from "../config";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  useEffect(() => {
    const contactTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".contact-section",
        start: "top 80%",
        end: "bottom center",
        toggleActions: "play none none none",
      },
    });

    contactTimeline.fromTo(
      ".contact-heading",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );

    contactTimeline.fromTo(
      ".contact-email",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
      "-=0.4"
    );

    contactTimeline.fromTo(
      ".contact-social-link",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power3.out" },
      "-=0.3"
    );

    contactTimeline.fromTo(
      ".contact-bottom",
      { opacity: 0 },
      { opacity: 1, duration: 0.6, ease: "power3.out" },
      "-=0.2"
    );

    return () => {
      contactTimeline.kill();
    };
  }, []);

  return (
    <footer className="contact-section section-container" id="contact">
      <div className="contact-container">
        <div className="contact-top-line"></div>

        <h3 className="contact-heading">Let's Connect</h3>

        <a
          href={`mailto:${config.contact.email}`}
          className="contact-email"
          data-cursor="disable"
        >
          {config.contact.email}
        </a>

        <div className="contact-socials">
          <a
            href={config.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="disable"
            className="contact-social-link"
          >
            Github <MdArrowOutward />
          </a>
          <a
            href={config.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="disable"
            className="contact-social-link"
          >
            Linkedin <MdArrowOutward />
          </a>
          <a
            href={config.contact.twitter}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="disable"
            className="contact-social-link"
          >
            Twitter <MdArrowOutward />
          </a>
        </div>

        <div className="contact-divider"></div>

        <div className="contact-bottom">
          <span>&copy; {new Date().getFullYear()} {config.developer.fullName}</span>
          <span>{config.social.location}</span>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
