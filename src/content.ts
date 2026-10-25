// All site copy and data. Components only render what is here.

export const profile = {
  name: "Sachin Chaurasiya",
  role: "Software Engineer",
  company: "Nucleo",
  city: "Bengaluru",
  timezone: "Asia/Kolkata",
  availability: "Open to select freelance and collaboration work",
  email: "mrsachinchaurasiya@gmail.com",
};

export const links = {
  email: "mailto:mrsachinchaurasiya@gmail.com",
  github: "https://github.com/sachinchaurasiya360",
  linkedin: "https://www.linkedin.com/in/sachinchaurasiya/",
  twitter: "https://x.com/sachindev69",
  call: "https://calendly.com/mrsachinchaurasiya/30min",
  writing: "https://medium.com/@mrsachinchaurasiya",
};

export const nav = [
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "writing", label: "Writing" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export const hero = {
  headline: "Software engineer building products, the systems under them, and the AI inside them.",
  intro:
    "Full-stack engineer working in TypeScript and Python, across product, backend systems, and AI.",
  focus: [
    { label: "Now", value: "Software Engineer at Nucleo" },
    { label: "Building", value: "InternHack" },
    { label: "Stack", value: "TypeScript, Python, PostgreSQL" },
  ],
};

export type CaseStudy = {
  id: string;
  index: string;
  name: string;
  kind: string;
  year: string;
  lede: string;
  problem: string;
  built: string[];
  outcome: string;
  stack: string[];
  live?: string;
  code?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "internhack",
    index: "01",
    name: "InternHack",
    kind: "Product · Full-stack · AI",
    year: "2025 — now",
    lede: "A career platform that gives students one place to find work, prepare for it, and get hired.",
    problem:
      "Students juggle a dozen tools to land a first role: job boards, resume checkers, interview prep, DSA practice, roadmaps. None of them talk to each other, and most are paywalled.",
    built: [
      "Designed and shipped the product end to end, from data model to the last UI state.",
      "Built an AI job agent and ATS resume scoring on Gemini behind a typed Express and Prisma API.",
      "Shipped mock interviews, 3,300+ DSA problems, career roadmaps, and an open-source programs directory.",
      "Owned SEO and growth: structured data, sitemaps, and programmatic job and roadmap pages.",
    ],
    outcome:
      "Grew to 1K+ daily active students, with recruiters running multi-round hiring workflows on the same platform.",
    stack: ["React", "TypeScript", "Express", "Prisma", "PostgreSQL", "Gemini API"],
    live: "https://internhack.xyz",
    code: "https://github.com/sachinchaurasiya360/internhack",
  },
  {
    id: "papernova",
    index: "02",
    name: "PaperNova",
    kind: "AI · Retrieval-Augmented Generation",
    year: "2025",
    lede: "A research assistant that reads papers with you and answers from the source, not from memory.",
    problem:
      "LLMs answer questions about papers confidently and wrongly. Readers need answers grounded in the actual text, with a way to check where each claim came from.",
    built: [
      "Built the ingestion pipeline: PDF parsing, section-aware chunking, and embeddings.",
      "Implemented vector search with re-ranking so retrieval favours methods and results over boilerplate.",
      "Every answer carries citations back to the page and section it was drawn from.",
      "Added guided walkthroughs that take a reader from the paper's math to working code.",
    ],
    outcome:
      "Answers stay inside the paper. When retrieval finds nothing relevant, the assistant says so instead of inventing a reply.",
    stack: ["Next.js", "TypeScript", "Python", "Embeddings", "Vector search", "PostgreSQL"],
    live: "https://papernova.online",
  },
  {
    id: "cloudforge",
    index: "03",
    name: "CloudForge",
    kind: "Developer tools · Infrastructure",
    year: "2024",
    lede: "A browser-based development environment that builds and deploys sites from a single tab.",
    problem:
      "Spinning up an isolated environment per user is easy to demo and hard to run. Builds must not leak between tenants, and idle sandboxes cannot keep burning compute.",
    built: [
      "Ran the editor and dev server in WebContainers so most work never touches the backend.",
      "Built a container orchestration pipeline on Docker and Kubernetes for builds and deploys.",
      "Used Redis for job queues and session state, with per-tenant namespaces as isolation boundaries.",
      "Deployed the control plane on AWS with sandboxes reclaimed after inactivity.",
    ],
    outcome:
      "Each user gets a sandboxed runtime in seconds, and one user's build can never reach another's.",
    stack: ["TypeScript", "React", "Docker", "Kubernetes", "Redis", "AWS", "WebContainers"],
    live: "https://cloudforge-ebon.vercel.app/",
    code: "https://github.com/Sachinchaurasiya360/CloudForge",
  },
];

export const launchVideo = {
  id: "UbBKtf4t7HI",
  title: "InternHack product launch",
};

export type SideProject = {
  name: string;
  summary: string;
  stack: string[];
  live?: string;
  code?: string;
};

export const sideProjects: SideProject[] = [
  {
    name: "Automator",
    summary:
      "Workflow automation with a visual canvas: webhook triggers, schedules, and execution queues, type-safe end to end over tRPC.",
    stack: ["Next.js", "tRPC", "PostgreSQL", "Sentry"],
    live: "https://automator-three.vercel.app/",
    code: "https://github.com/Sachinchaurasiya360/Automator",
  },
  {
    name: "CourseFlow",
    summary:
      "A course platform with live classes over a WebRTC SFU, so one instructor can teach many students at low latency.",
    stack: ["React", "Node.js", "MongoDB", "WebRTC", "TanStack"],
    live: "https://course-flow-bice.vercel.app/",
    code: "https://github.com/Sachinchaurasiya360/CourseFlow",
  },
];

// Only numbers that say something. Each one has a source and a reason.
export const impact = [
  {
    value: "35%",
    label: "Faster platform",
    context: "Refactored backend services, moved inter-service calls to gRPC, and re-indexed MongoDB queries.",
    source: "Aaradhay Tech",
  },
  {
    value: "~30%",
    label: "Faster core flows",
    context: "Rebuilt event creation, team formation, and submission pipelines on Express.",
    source: "Aaradhay Tech",
  },
  {
    value: "1K+",
    label: "Daily active students",
    context: "Organic growth from SEO, programmatic pages, and word of mouth across campuses.",
    source: "InternHack",
  },
  {
    value: "7+",
    label: "Hackathon wins",
    context: "Including first prize at a national-level hackathon. Mentor for Smart India Hackathon teams.",
    source: "2023 — 2026",
  },
];

export type Role = {
  company: string;
  role: string;
  period: string;
  location: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  stack: string[];
};

export const experience: Role[] = [
  {
    company: "Nucleo",
    role: "Software Engineer",
    period: "Sep 2026 — Present",
    location: "Bengaluru",
    current: true,
    summary:
      "FinTech platform for private-market investments, fundraising, and governance.",
    highlights: [
      "Building APIs and workflows for investor onboarding, due diligence, and document management.",
      "Working on high-value payment flows, where correctness and auditability come before speed.",
      "Contributing to SOC 2 compliance across security, data integrity, and backend architecture.",
    ],
    stack: ["TypeScript", "Next.js", "Node.js", "GraphQL", "PostgreSQL"],
  },
  {
    company: "Vizuara AI Labs",
    role: "Full-Stack & GenAI Developer",
    period: "Jan 2026 — May 2026",
    location: "Pune",
    summary: "AI education and tooling for people learning machine learning.",
    highlights: [
      "Built a no-code, drag-and-drop ML pipeline builder used to teach model training visually.",
      "Wrote the FastAPI backend behind it: auth, pipeline orchestration, and data processing, tuned for low latency.",
      "Fine-tuned open-source LLMs on domain datasets to improve answer quality and personalisation.",
    ],
    stack: ["Python", "FastAPI", "React", "LLMs"],
  },
  {
    company: "Aaradhay Tech",
    role: "Full-Stack Intern",
    period: "Jun 2025 — Nov 2025",
    location: "Mumbai",
    summary: "Hackathon and event management platform.",
    highlights: [
      "Improved platform performance by 35% by refactoring services, adopting gRPC, and indexing MongoDB queries.",
      "Rebuilt event creation, team formation, and submission pipelines for roughly 30% faster interactions.",
    ],
    stack: ["Node.js", "Express", "MongoDB", "gRPC", "TypeScript"],
  },
];

export const expertise = [
  {
    area: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "SQL"],
    note: "TypeScript for products and services, Python for data and AI work.",
  },
  {
    area: "Frontend",
    items: ["React", "Next.js", "TanStack Query", "Zustand", "Vite"],
    note: "Interfaces that stay fast and predictable as state grows.",
  },
  {
    area: "Backend",
    items: ["Node.js", "Express", "FastAPI", "GraphQL", "tRPC", "gRPC"],
    note: "Typed APIs, service boundaries, and request paths I have profiled.",
  },
  {
    area: "Data",
    items: ["PostgreSQL", "Prisma", "MongoDB", "Redis", "Vector databases"],
    note: "Schema design, indexing, queues, and caching.",
  },
  {
    area: "Infrastructure",
    items: ["Docker", "Kubernetes", "AWS", "CI/CD", "Sentry"],
    note: "Containerised workloads, multi-tenant isolation, and observability.",
  },
  {
    area: "AI",
    items: ["RAG", "Embeddings", "LLM fine-tuning", "Gemini API", "Agents"],
    note: "Retrieval pipelines and AI features that cite their sources.",
  },
];

export type Article = {
  title: string;
  topic: string;
  url: string;
};

export const writing: Article[] = [
  {
    title: "Redis Deep Dive, Part 0: The foundation you need before going deep",
    topic: "Redis",
    url: "https://medium.com/@mrsachinchaurasiya/redis-deep-dive-series-part-0-the-foundation-you-need-before-going-deep-dafb0439b128",
  },
  {
    title: "Memory in AI Systems: Deep Dive, Part 0",
    topic: "AI systems",
    url: "https://medium.com/@mrsachinchaurasiya/memory-in-ai-systems-deep-dive-part-0-64d093cd85f0",
  },
  {
    title: "Understanding WebRTC: Real-time communication for the modern web",
    topic: "WebRTC",
    url: "https://medium.com/@mrsachinchaurasiya",
  },
  {
    title: "From monolith to microservices: A practical migration guide",
    topic: "Architecture",
    url: "https://medium.com/@mrsachinchaurasiya",
  },
];

export const about = {
  photo: "/sachinActivites/sachinpic.png",
  paragraphs: [
    "I spend most of my time building: web apps, the APIs and services that hold them up, and lately the retrieval pipelines that sit inside them. I care about software that ships and keeps working, not software that demos well once.",
    "Most of what I know came from doing it badly first. Queries I should have indexed sooner, services I moved onto gRPC, request paths that were quietly costing seconds. The interesting work usually starts when something breaks.",
  ],
  community: [
    { role: "TPO Head", detail: "College training and placement office", period: "2025 — 26" },
    { role: "Technical Secretary", detail: "College technical council", period: "2024 — 25" },
    { role: "Mentor", detail: "Smart India Hackathon teams", period: "2024 — now" },
    { role: "Speaker", detail: "Open source, AI, and web development", period: "2022 — now" },
  ],
  // The first three are shown by default; the rest sit behind "Show more".
  moments: [
    { image: "/sachinActivites/IMG-20250311-WA0030.jpg", caption: "First prize, national-level hackathon" },
    { image: "/sachinActivites/IMG-20250923-WA0035.jpg", caption: "Talk on GitHub and open source" },
    { image: "/sachinActivites/IMG_20241213_144432.jpg", caption: "Smart India Hackathon grand finale" },
    { image: "/sachinActivites/IMG-20251001-WA0040.jpg", caption: "Taking charge as TPO Head, 2025–26" },
    { image: "/sachinActivites/IMG-20250916-WA0026.jpg", caption: "Guiding students through the Smart India Hackathon" },
    { image: "/sachinActivites/IMG-20250123-WA0005.jpg", caption: "Technical Secretary of the college, 2024–25" },
    { image: "/sachinActivites/IMG-20240418-WA0023.jpg", caption: "TPO Co-Head of the college, 2024–25" },
    { image: "/sachinActivites/IMG-20250924-WA0134.jpg", caption: "Talk on LinkedIn, networking, and personal branding" },
    { image: "/sachinActivites/IMG-20241003-WA0027.jpg", caption: "Leading a session on web development" },
    { image: "/sachinActivites/codeautometa.png", caption: "Mentoring student teams at a hackathon" },
    { image: "/sachinActivites/IMG-20240807-WA0001.jpg", caption: "Sharing why AI matters and how to use it" },
    { image: "/sachinActivites/IMG-20240221-WA0013.jpg", caption: "Addressing participants at a hackathon" },
    { image: "/sachinActivites/IMG-20231103-WA0014.jpg", caption: "Winning the college-level project competition" },
    { image: "/sachinActivites/IMG-20260207-WA0031.jpg", caption: "Showing class 10 students how to use AI tools for studying" },
    {
      image: "/sachinActivites/Screenshot_2022-10-14-18-15-01-466_com.mxtech.videoplayer.ad.jpg",
      caption: "Talk on blockchain and its real-world applications",
    },
  ],
};
