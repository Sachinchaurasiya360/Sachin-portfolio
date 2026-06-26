import { useState } from "react";
import Section from "./Section";
import Reveal from "./Reveal";
import { activities } from "../content";

const INITIAL_COUNT = 6;

const BeyondCode = () => {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? activities : activities.slice(0, INITIAL_COUNT);
  const hidden = activities.length - INITIAL_COUNT;

  return (
    <Section id="beyond" label="Beyond Code" wide>
      <p className="beyond-lede">
        When I’m not building, I’m leading campus tech communities, mentoring
        hackathon teams, and speaking on open source, AI, and developer growth.
      </p>

      <div className="gallery">
        {visible.map((a) => (
          <Reveal as="figure" className="gallery-item" key={a.image}>
            <div className="gallery-frame">
              <img src={a.image} alt={a.caption} loading="lazy" decoding="async" />
            </div>
            <figcaption>{a.caption}</figcaption>
          </Reveal>
        ))}
      </div>

      {!expanded && hidden > 0 && (
        <button
          type="button"
          className="show-more"
          onClick={() => setExpanded(true)}
        >
          Show  more
        </button>
      )}
    </Section>
  );
};

export default BeyondCode;
