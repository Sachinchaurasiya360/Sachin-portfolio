import type { ReactNode } from "react";
import { caseStudies, type CaseStudy } from "../content";
import SectionHead from "./SectionHead";
import { ForgeArchitecture, InternHackModules, LaunchVideo, RagPipeline } from "./Visuals";

function CaseHead({ c }: { c: CaseStudy }) {
  return (
    <header className="case-head">
      <p className="case-meta mono">
        <span className="case-index">{c.index}</span>
        <span>{c.kind}</span>
        <span>{c.year}</span>
      </p>
      <h3>{c.name}</h3>
      <p className="case-lede">{c.lede}</p>
    </header>
  );
}

function CaseLinks({ c }: { c: CaseStudy }) {
  return (
    <p className="case-links">
      {c.live && (
        <a href={c.live} target="_blank" rel="noopener noreferrer" className="link">
          Visit {c.name} <span aria-hidden="true">↗</span>
        </a>
      )}
      {c.code && (
        <a href={c.code} target="_blank" rel="noopener noreferrer" className="link link-quiet">
          Source <span aria-hidden="true">↗</span>
        </a>
      )}
    </p>
  );
}

function Detail({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="detail">
      <h4 className="mono">{title}</h4>
      {children}
    </div>
  );
}

function CaseDetails({ c }: { c: CaseStudy }) {
  return (
    <>
      <Detail title="Problem">
        <p>{c.problem}</p>
      </Detail>
      <Detail title="What I built">
        <ul className="ticks">
          {c.built.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </Detail>
      <Detail title="Result">
        <p>{c.outcome}</p>
        <p className="stack mono">{c.stack.join(" / ")}</p>
        <CaseLinks c={c} />
      </Detail>
    </>
  );
}

const [internhack, papernova, cloudforge] = caseStudies;

export default function Work() {
  return (
    <section id="work" className="section">
      <div className="container">
        <SectionHead
          index="01"
          label="Selected work"
          title="Three products, built end to end."
          lede="Each one started with a real problem and ended up teaching me something about systems. Here is what they do and what I built."
        />

        {/* Wide composition: launch film and product surface side by side. */}
        <article className="case case-wide">
          <CaseHead c={internhack} />
          <div className="case-figure grid">
            <div className="case-video">
              <LaunchVideo />
            </div>
            <div className="case-aside">
              <InternHackModules />
            </div>
          </div>
          <div className="case-details grid">
            <CaseDetails c={internhack} />
          </div>
        </article>

        {/* Split compositions, mirrored so the page does not repeat itself. */}
        <article className="case case-split">
          <div className="case-text">
            <CaseHead c={papernova} />
            <CaseDetails c={papernova} />
          </div>
          <div className="case-visual">
            <RagPipeline />
          </div>
        </article>

        <article className="case case-split case-split-reverse">
          <div className="case-text">
            <CaseHead c={cloudforge} />
            <CaseDetails c={cloudforge} />
          </div>
          <div className="case-visual">
            <ForgeArchitecture />
          </div>
        </article>
      </div>
    </section>
  );
}
