import "./styles/Activities.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState, useCallback } from "react";

gsap.registerPlugin(ScrollTrigger);

const activities = [
  {
    image: "/sachinActivites/IMG-20250916-WA0026.jpg",
    caption: "Guiding students through the Smart India Hackathon",
  },
  {
    image: "/sachinActivites/IMG-20250923-WA0035.jpg",
    caption: "Speaking on GitHub and the world of open source",
  },
  {
    image: "/sachinActivites/IMG-20250924-WA0134.jpg",
    caption: "Talk on LinkedIn, networking, and personal branding",
  },
  {
    image: "/sachinActivites/IMG_20241213_144432.jpg",
    caption: "At the Smart India Hackathon grand finale",
  },
  {
    image: "/sachinActivites/IMG-20250123-WA0005.jpg",
    caption: "Technical Secretary of the college, 2024–25",
  },
  {
    image: "/sachinActivites/IMG-20250311-WA0030.jpg",
    caption: "First prize at a national-level coding hackathon",
  },
  {
    image: "/sachinActivites/IMG-20240418-WA0023.jpg",
    caption: "TPO Co-Head of the college, 2024–25",
  },
  {
    image: "/sachinActivites/IMG-20241003-WA0027.jpg",
    caption: "Leading a session on web development",
  },
  {
    image: "/sachinActivites/codeautometa.png",
    caption: "Mentoring student teams at a hackathon",
  },
  {
    image: "/sachinActivites/IMG-20240807-WA0001.jpg",
    caption: "Sharing why AI matters and how to use it",
  },
  {
    image: "/sachinActivites/IMG-20240221-WA0013.jpg",
    caption: "Addressing participants at a hackathon",
  },
  {
    image: "/sachinActivites/IMG-20231103-WA0014.jpg",
    caption: "Winning the college-level project competition",
  },
  {
    image: "/sachinActivites/IMG-20251001-WA0040.jpg",
    caption: "Taking charge as TPO Head of the college, 2025–26",
  },
  {
    image: "/sachinActivites/IMG-20260207-WA0031.jpg",
    caption: "Showing class 10 students how to use AI tools for studying",
  },
  {
    image: "/sachinActivites/1679741730233_1679741722993.jpg",
    caption: "A heartfelt thank-you to the trainers who shaped the journey",
  },
  {
    image: "/sachinActivites/Screenshot_2022-10-14-18-15-01-466_com.mxtech.videoplayer.ad.jpg",
    caption: "Talk on blockchain and its real-world applications",
  },
];

const Activities = () => {
  const [lightbox, setLightbox] = useState<{ image: string; caption: string } | null>(null);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [closeLightbox]);

  useEffect(() => {
    if (lightbox) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  useEffect(() => {
    if (window.innerWidth <= 768) return;

    let translateX = 0;

    function setTranslateX() {
      const cards = document.getElementsByClassName("activity-card");
      if (cards.length === 0) return;
      const container = document.querySelector(".activities-container");
      if (!container) return;
      const rectLeft = container.getBoundingClientRect().left;
      const card = cards[0];
      const cardWidth = card.getBoundingClientRect().width;
      const parentWidth = card.parentElement!.getBoundingClientRect().width;
      translateX = cardWidth * cards.length - (rectLeft + parentWidth) + 40;
    }

    setTranslateX();

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".activities-section",
        start: "top top",
        end: `+=${translateX * 0.6}`,
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        id: "activities",
        invalidateOnRefresh: true,
      },
    });

    timeline.to(".activities-track", {
      x: -translateX,
      ease: "none",
    });

    ScrollTrigger.refresh();

    return () => {
      timeline.kill();
      ScrollTrigger.getById("activities")?.kill();
    };
  }, []);

  return (
    <div className="activities-section">
      <div className="activities-container section-container">
        <h2>
          Beyond <span>Code</span>
        </h2>
        <p className="activities-subtitle">
          When I'm not building, I'm leading campus tech communities, mentoring
          hackathon teams, and speaking on open source, AI, and developer growth.
        </p>
        <div className="activities-track">
          {activities.map((activity, index) => (
            <div
              className="activity-card"
              key={index}
              onClick={() => setLightbox(activity)}
              style={{ cursor: "pointer" }}
            >
              <div className="activity-image-wrapper">
                <img
                  src={activity.image}
                  alt={activity.caption}
                  loading="lazy"
                />
              </div>
              <p className="activity-caption">{activity.caption}</p>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            &times;
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.image} alt={lightbox.caption} />
            <p className="lightbox-caption">{lightbox.caption}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Activities;
