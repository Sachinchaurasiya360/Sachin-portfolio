// All site content lives here. Plain data, no framework coupling.

export const profile = {
  name: "Sachin Chaurasiya",
  role: "Software Engineer",
  location: "India",
  // Hero one-liner — raw, builder-first.
  headline: "I build full-stack products: the frontend, the systems that run them, and the AI inside them.",
  available: true,
  email: "mrsachinchaurasiya@gmail.com",
};

export const links = {
  email: "mrsachinchaurasiya@gmail.com",
  github: "https://github.com/sachinchaurasiya360",
  linkedin: "https://www.linkedin.com/in/sachinchaurasiya/",
  twitter: "https://x.com/sachindev69",
  call: "https://calendly.com/mrsachinchaurasiya/30min",
  writing: "https://medium.com/@mrsachinchaurasiya",
};

// A few honest paragraphs. No corporate gloss.
export const about: string[] = [
  "I spend most of my time building. Web apps, APIs, the backend systems that hold them up, and lately the LLM pipelines that sit inside them. I care about software that ships and gets used, not software that demos well once.",
  "Most of what I know came from doing it badly first: indexing queries I should have indexed sooner, moving services onto gRPC, rewriting request paths that were quietly costing seconds. The interesting work usually starts when something breaks.",
  "Outside the editor I lead campus tech communities as Technical Secretary and TPO Head, mentor teams through the Smart India Hackathon, and speak on open source and AI. I win the occasional hackathon and lose more, which is where most of the learning happens.",
];

export type Project = {
  index: string;
  title: string;
  category: string;
  // What it is and why it exists, in an engineer's voice.
  summary: string;
  tech: string[];
  live?: string;
  github?: string;
};

export const projects: Project[] = [
  {
    index: "01",
    title: "InternHack",
    category: "Full-stack · AI SaaS",
    summary:
      "A career platform that connects students with opportunities by folding hackathon management, recruitment, and skill-building into one place. Students get a job board with AI-driven recommendations, ATS resume scoring, mock interviews, 3,300+ DSA problems, and structured roadmaps. Recruiters get job posting, multi-round hiring workflows, and AI-assisted candidate screening, all running through Gemini behind a typed Express and Prisma API on Postgres.",
    tech: ["React", "TypeScript", "Vite", "Express", "Prisma", "PostgreSQL", "Gemini API"],
    live: "https://internhack.xyz",
    github: "https://github.com/sachinchaurasiya360/internhack",
  },
  {
    index: "02",
    title: "PaperNova",
    category: "Learning · Research to code",
    summary:
      "PaperNova turns research papers into something you can actually build. It takes a paper, breaks the method down, and walks you from the math to working code, with visualizations that show what each part is doing as you implement it. It exists because reading a paper and reproducing it are very different skills, and most people stall in the gap between them.",
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
    live: "https://papernova.online",
  },
  {
    index: "03",
    title: "CloudForge",
    category: "Full-stack · DevOps",
    summary:
      "A browser-based IDE that builds and deploys websites instantly inside an isolated WebContainer: the Lovable idea, but yours to own. Under the UI it is a systems problem. Each user gets a sandboxed runtime from a container orchestration pipeline on Docker and Kubernetes, with Redis for job queues and session state and multi-tenant boundaries that keep one user’s build from touching another’s.",
    tech: ["TypeScript", "React", "Express", "Redis", "Docker", "Kubernetes", "AWS", "WebContainers"],
    live: "https://cloudforge-ebon.vercel.app/",
    github: "https://github.com/Sachinchaurasiya360/CloudForge",
  },
  {
    index: "04",
    title: "Automator",
    category: "Full-stack · Automation",
    summary:
      "A workflow automation platform: event-driven pipelines built from a visual drag-and-drop canvas, connecting third-party services to automate the boring parts of a business. Think n8n, stripped down to what people actually reach for. Workflow state lives in Postgres, the API is end-to-end type-safe over tRPC, and webhook triggers, scheduling, and execution queues handle both real-time and async runs, with Sentry across it all.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "tRPC", "Sentry"],
    live: "https://automator-three.vercel.app/",
    github: "https://github.com/Sachinchaurasiya360/Automator",
  },
  {
    index: "05",
    title: "CourseFlow",
    category: "Full-stack · EdTech",
    summary:
      "A course-selling platform for students, instructors, and admins: role-based auth, payments, content delivery, progress tracking, and analytics dashboards. The differentiator is live teaching. Instead of mesh peer-to-peer, it uses an SFU so a single instructor can reach many students at low latency, on a Node and MongoDB backend with TanStack and Zustand holding the client together.",
    tech: ["React", "Node.js", "TypeScript", "MongoDB", "WebRTC", "TanStack", "Zustand"],
    live: "https://course-flow-bice.vercel.app/",
    github: "https://github.com/Sachinchaurasiya360/CourseFlow",
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  tech: string[];
};

export const experience: Experience[] = [
  {
    role: "Full-Stack & GenAI Developer",
    company: "Vizuara AI Labs",
      period: "Jan 2026 – May 2026",
    location: "Pune, India",
    description:
      "Built a no-code, drag-and-drop ML pipeline builder and the scalable FastAPI backend behind it (authentication, orchestration, and data processing) while tuning services for low latency. Fine-tuned open-source LLMs on domain datasets to improve answer quality and personalisation.",
    tech: ["FastAPI", "Python", "LLMs", "GenAI"],
  },
  {
    role: "Full-Stack Intern",
    company: "Aaradhay Tech",
    period: "Jun 2024 – Aug 2024",
    location: "Mumbai, India",
    description:
      "Improved platform performance by 35% by refactoring backend services, moving inter-service communication to gRPC, and restructuring MongoDB queries with proper indexing. Rebuilt the event creation, team formation, and submission pipelines on Express for nearly 30% faster interactions.",
    tech: ["Node.js", "Express", "MongoDB", "gRPC", "TypeScript"],
  },
];

export type Activity = {
  image: string;
  caption: string;
};

// Real moments, not stock. The first four are the ones worth leading with:
// a national win, two leadership roles, and a talk. The rest sit behind "show more".
export const activities: Activity[] = [
  {
    image: "/sachinActivites/IMG-20250311-WA0030.jpg",
    caption: "First prize at a national-level coding hackathon",
  },
  {
    image: "/sachinActivites/IMG-20251001-WA0040.jpg",
    caption: "Taking charge as TPO Head of the college, 2025–26",
  },
  {
    image: "/sachinActivites/IMG-20250923-WA0035.jpg",
    caption: "Speaking on GitHub and the world of open source",
  },
  {
    image: "/sachinActivites/IMG-20250916-WA0026.jpg",
    caption: "Guiding students through the Smart India Hackathon",
  },
  {
    image: "/sachinActivites/IMG-20250123-WA0005.jpg",
    caption: "Technical Secretary of the college, 2024–25",
  },
  {
    image: "/sachinActivites/IMG-20240418-WA0023.jpg",
    caption: "TPO Co-Head of the college, 2024–25",
  },
  {
    image: "/sachinActivites/IMG_20241213_144432.jpg",
    caption: "At the Smart India Hackathon grand finale",
  },
  {
    image: "/sachinActivites/IMG-20250924-WA0134.jpg",
    caption: "Talk on LinkedIn, networking, and personal branding",
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
    image: "/sachinActivites/IMG-20260207-WA0031.jpg",
    caption: "Showing class 10 students how to use AI tools for studying",
  },
  {
    image: "/sachinActivites/Screenshot_2022-10-14-18-15-01-466_com.mxtech.videoplayer.ad.jpg",
    caption: "Talk on blockchain and its real-world applications",
  },
];

export type Article = {
  title: string;
  tag: string;
  url: string;
};

export const writing: Article[] = [
  {
    title: "Redis Deep Dive Series: Part 0, The Foundation You Need Before Going Deep",
    tag: "Redis",
    url: "https://medium.com/@mrsachinchaurasiya/redis-deep-dive-series-part-0-the-foundation-you-need-before-going-deep-dafb0439b128",
  },
  {
    title: "Memory in AI Systems: Deep Dive, Part 0",
    tag: "AI Memory",
    url: "https://medium.com/@mrsachinchaurasiya/memory-in-ai-systems-deep-dive-part-0-64d093cd85f0",
  },
  {
    title: "Understanding WebRTC: Real-Time Communication for the Modern Web",
    tag: "WebRTC",
    url: "https://medium.com/@mrsachinchaurasiya",
  },
  {
    title: "From Monolith to Microservices: A Practical Migration Guide",
    tag: "Architecture",
    url: "https://medium.com/@mrsachinchaurasiya",
  },
];
