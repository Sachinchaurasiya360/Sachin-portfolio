import { useState } from "react";
import { launchVideo } from "../content";

// Loads the YouTube player only after a click, so the page stays light.
export function LaunchVideo() {
  const [playing, setPlaying] = useState(false);
  const [thumb, setThumb] = useState(`https://i.ytimg.com/vi/${launchVideo.id}/maxresdefault.jpg`);

  if (playing) {
    return (
      <div className="video">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${launchVideo.id}?autoplay=1&rel=0&modestbranding=1`}
          title={launchVideo.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button type="button" className="video video-facade" onClick={() => setPlaying(true)}>
      <img
        src={thumb}
        alt=""
        loading="lazy"
        onError={() => setThumb(`https://i.ytimg.com/vi/${launchVideo.id}/hqdefault.jpg`)}
      />
      <span className="video-label">
        <span className="video-play" aria-hidden="true" />
        Watch the product launch
      </span>
    </button>
  );
}

const modules = [
  { name: "Job discovery", note: "Aggregated listings, filtered by fit" },
  { name: "AI job agent", note: "Finds and ranks roles for each student", key: true },
  { name: "Resume tools", note: "Builder and ATS scoring" },
  { name: "Mock interviews", note: "Role-specific, with feedback" },
  { name: "DSA practice", note: "3,300+ problems" },
  { name: "Career roadmaps", note: "Structured paths by role" },
  { name: "Open-source programs", note: "GSoC, LFX, and more" },
  { name: "Learning resources", note: "Curated, free" },
];

export function InternHackModules() {
  return (
    <ol className="modules" aria-label="InternHack product surface">
      {modules.map((m, i) => (
        <li key={m.name} className={m.key ? "is-key" : undefined}>
          <span className="mono">{String(i + 1).padStart(2, "0")}</span>
          <span className="modules-name">{m.name}</span>
          <span className="modules-note">{m.note}</span>
        </li>
      ))}
    </ol>
  );
}

const ragSteps = [
  { name: "Parse", note: "PDF into sections, figures, references" },
  { name: "Chunk", note: "Section-aware, overlapping windows" },
  { name: "Embed", note: "Dense vector per chunk" },
  { name: "Retrieve", note: "Top-k similarity, then re-rank" },
  { name: "Answer", note: "Grounded generation with citations", key: true },
];

export function RagPipeline() {
  return (
    <figure className="diagram">
      <figcaption className="diagram-caption mono">Retrieval pipeline</figcaption>
      <ol className="pipeline">
        {ragSteps.map((s, i) => (
          <li key={s.name} className={s.key ? "is-key" : undefined}>
            <span className="mono">{String(i + 1).padStart(2, "0")}</span>
            <strong>{s.name}</strong>
            <span>{s.note}</span>
          </li>
        ))}
      </ol>
      <div className="transcript">
        <p className="mono">Example query</p>
        <p>
          <span className="transcript-who mono">Q</span>
          How does the model handle long-range dependencies?
        </p>
        <p>
          <span className="transcript-who mono">A</span>
          It replaces recurrence with multi-head self-attention, so every position attends to every other in
          one step <cite>§3.2, p.4</cite>. Positional encodings restore word order <cite>§3.5, p.6</cite>.
        </p>
      </div>
    </figure>
  );
}

const layers = [
  {
    name: "Browser",
    nodes: [{ name: "Editor" }, { name: "WebContainer runtime", key: true }, { name: "Live preview" }],
    link: "build and deploy jobs",
  },
  {
    name: "Control plane · AWS",
    nodes: [{ name: "API · Express" }, { name: "Queue · Redis" }, { name: "Orchestrator" }],
    link: "schedules isolated pods",
  },
  {
    name: "Runtime · Kubernetes",
    nodes: [{ name: "ns / tenant-a" }, { name: "ns / tenant-b" }, { name: "ns / tenant-c" }],
  },
];

export function ForgeArchitecture() {
  return (
    <figure className="diagram">
      <figcaption className="diagram-caption mono">System architecture</figcaption>
      <div className="layers">
        {layers.map((layer) => (
          <div key={layer.name} className="layer">
            <p className="layer-name mono">{layer.name}</p>
            <ul className="layer-nodes">
              {layer.nodes.map((n) => (
                <li key={n.name} className={"key" in n && n.key ? "is-key" : undefined}>
                  {n.name}
                </li>
              ))}
            </ul>
            {layer.link && (
              <p className="layer-link mono">
                <span aria-hidden="true">↓</span> {layer.link}
              </p>
            )}
          </div>
        ))}
      </div>
    </figure>
  );
}
