import "./styles/Activities.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState, useCallback } from "react";

gsap.registerPlugin(ScrollTrigger);

const activities = [
  {
    image: "/sachinActivites/IMG-20250916-WA0026.jpg",
    caption: "Guiding students for the Smart India Hackathon",
  },
  {
    image: "/sachinActivites/IMG-20250923-WA0035.jpg",
    caption: "Talk on the github universe and open-source contributions",
  },
  {
    image: "/sachinActivites/IMG-20250924-WA0134.jpg",
    caption: "Giving a talk on the linkeldn universe and personal branding",
  },
  {
    image: "/sachinActivites/IMG_20241213_144432.jpg",
    caption: "In the smart india hackathon grand finale ",
  },
  {
    image: "/sachinActivites/IMG-20250123-WA0005.jpg",
    caption: "Served as the Technical secretary for the college for the year 202-25",
  },
  {
    image: "/sachinActivites/IMG-20250311-WA0030.jpg",
    caption: "Winning the first prize at a national level coding hackathon",
  },
  {
    image: "/sachinActivites/IMG-20240418-WA0023.jpg",
    caption: "Served as the TPO Co-Head for the college for the year 2024-25",
  },
  {
    image: "/sachinActivites/IMG-20241003-WA0027.jpg",
    caption: "Giving a talk on the Web development",
  },
  {
    image: "/sachinActivites/codeautometa.png",
    caption: "Mentoring student at a Hackathon ",
  },
  {
    image: "/sachinActivites/IMG-20240807-WA0001.jpg",
    caption: "Explaining the importance of AI",
  },
  {
    image: "/sachinActivites/IMG-20240221-WA0013.jpg",
    caption: "Giving a talk on the Hackathon",
  },
  {
    image: "/sachinActivites/IMG-20231103-WA0014.jpg",
    caption: "After winning the College level project competition",
  },
  {
    image: "/sachinActivites/IMG-20251001-WA0040.jpg",
    caption: "Taking Charge as the TPO-Head for the college for the year 2025-26",
  },
  {
    image: "/sachinActivites/IMG-20260207-WA0031.jpg",
    caption: "Giving a talk to class 10 students how to use AI tools for their studies",
  },
  {
    image: "/sachinActivites/1679741730233_1679741722993.jpg",
    caption: "Giving a thanksgiving to trainers",
  },
  {
    image: "/sachinActivites/Screenshot_2022-10-14-18-15-01-466_com.mxtech.videoplayer.ad.jpg",
    caption: "Giving a talk on the Blockchain universe and its applications",
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
          Leading clubs, organizing events, giving talks & mentoring teams
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
