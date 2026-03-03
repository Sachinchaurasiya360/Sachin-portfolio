import { MdArrowOutward } from "react-icons/md";
import "./styles/Writing.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const articles = [
  {
    title: "Redis Deep Dive Series: Part 0 — The Foundation You Need Before Going Deep",
    url: "https://medium.com/@mrsachinchaurasiya/redis-deep-dive-series-part-0-the-foundation-you-need-before-going-deep-dafb0439b128",
    tag: "Redis",
  },
  {
    title: "Building Scalable Backend Systems with Node.js and Docker",
    url: "https://medium.com/@mrsachinchaurasiya",
    tag: "Backend",
  },
  {
    title: "Understanding WebRTC: Real-Time Communication for the Modern Web",
    url: "https://medium.com/@mrsachinchaurasiya",
    tag: "WebRTC",
  },
  {
    title: "From Monolith to Microservices: A Practical Migration Guide",
    url: "https://medium.com/@mrsachinchaurasiya",
    tag: "Architecture",
  },
];

const Writing = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".writing-section",
        start: "top 80%",
        end: "bottom center",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      ".writing-section h2",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }
    );

    tl.fromTo(
      ".writing-article",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.12, ease: "power3.out" },
      "-=0.3"
    );

    tl.fromTo(
      ".writing-more",
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power3.out" },
      "-=0.2"
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="writing-section section-container">
      <h2>
        My <span>Writing</span>
      </h2>

      <div className="writing-list">
        {articles.map((article, index) => (
          <a
            key={index}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="writing-article"
            data-cursor="disable"
          >
            <div className="writing-article-left">
              <span className="writing-tag">{article.tag}</span>
              <h3>{article.title}</h3>
            </div>
            <MdArrowOutward className="writing-arrow" />
          </a>
        ))}
      </div>

      <a
        href="https://medium.com/@mrsachinchaurasiya"
        target="_blank"
        rel="noopener noreferrer"
        className="writing-more"
        data-cursor="disable"
      >
        Read more on Medium →
      </a>
    </div>
  );
};

export default Writing;
