export type SkillGroup = {
  title: string;
  items: string[];
};

export type Metric = {
  value: string;
  label: string;
  accent: "cyan" | "emerald" | "amber";
};

export type Project = {
  name: string;
  period: string;
  company: string;
  stack: string[];
  summary: string;
  outcomes: string[];
  accent: "cyan" | "emerald" | "amber";
};

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  projects: {
    name: string;
    period?: string;
    stack: string[];
    bullets: string[];
  }[];
};

export const profile = {
  name: "Taimoor Ali Khan",
  role: "Senior React.js / Next.js Developer",
  location: "Rawalpindi, Pakistan",
  email: "taimoor36372@gmail.com",
  phone: "+92-303-8773193",
  linkedIn: "https://www.linkedin.com/in/taimoor-khan92/",
  cvPath: "/taimoor-ali-khan-cv.pdf",
  summary:
    "Dedicated front-end and full-stack software engineer with 5+ years of experience shipping scalable, high-performance web and mobile applications. Strong in React.js, Next.js, TypeScript, Redux, React Native, SEO, performance, maps, dashboards, and API-driven product interfaces.",
  headline:
    "I build fast, measurable product experiences across real estate, civic platforms, AI tooling, dashboards, and mobile workflows.",
};

export const metrics: Metric[] = [
  { value: "5+", label: "years building web and mobile products", accent: "cyan" },
  { value: "50%", label: "manual design effort reduced in AI floor planning", accent: "emerald" },
  { value: "60%", label: "server cost reduction through FCM notifications", accent: "amber" },
  { value: "45%", label: "page load speed improvement with Next.js optimization", accent: "cyan" },
  { value: "40%", label: "task completion improvement with progress tracking", accent: "emerald" },
];

export const skills: SkillGroup[] = [
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "Redux", "Redux Toolkit", "Redux Toolkit Query", "React Query"],
  },
  {
    title: "Mobile",
    items: ["React Native", "TypeScript", "Mobile state management", "API integration"],
  },
  {
    title: "UI Systems",
    items: ["Tailwind CSS", "Material UI", "Bootstrap", "React Bootstrap", "Chakra UI", "CSS3", "HTML5"],
  },
  {
    title: "Backend & APIs",
    items: ["Laravel", "RESTful APIs", "Firebase Cloud Messaging", "JWT authentication"],
  },
  {
    title: "Data & Maps",
    items: ["PostgreSQL", "MySQL", "Google Maps React", "Leaflet", "ApexCharts"],
  },
  {
    title: "Tools & Quality",
    items: ["Git", "GitHub", "JIRA", "Postman", "Figma", "VS Code", "PageSpeed Insights", "META SEO Inspector"],
  },
];

export const projects: Project[] = [
  {
    name: "In House Gen AI",
    period: "Jan 2025 - Present",
    company: "Graana.com",
    stack: ["Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS", "Figma", "Python backend"],
    summary:
      "AI-assisted home planning interface that renders dynamic floor plans and keeps users oriented through guided steps.",
    outcomes: [
      "Implemented JWT authentication with protected route access.",
      "Merged frontend with AI backend to cut manual design effort by 50%.",
      "Built a multi-step progress tracker that improved task completion by 40%.",
      "Shipped an instant budget calculator with pie chart breakdowns.",
    ],
    accent: "cyan",
  },
  {
    name: "WorksApp Web",
    period: "Aug 2024 - Dec 2024",
    company: "Graana.com",
    stack: ["React.js", "Laravel", "Inertia.js", "Firebase", "Postman", "Figma"],
    summary:
      "Real estate operations web app with reliable notifications and tighter Laravel plus React integration.",
    outcomes: [
      "Replaced polling with Firebase Cloud Messaging.",
      "Reduced server costs by roughly 60% while improving real-time delivery.",
      "Unified API and frontend layers for a more stable developer workflow.",
    ],
    accent: "emerald",
  },
  {
    name: "WorksApp Mobile",
    period: "Apr 2024 - Jul 2024",
    company: "Graana.com",
    stack: ["React Native", "TypeScript", "Redux Toolkit", "RTK Query", "Jira", "Postman"],
    summary:
      "Property lead and deal management app built in a 3-member team within a 4-month timeline.",
    outcomes: [
      "Engineered 6+ client journey modules across personal, financial, inventory, and booking flows.",
      "Optimized state and API layers with RTK Query.",
      "Reduced unnecessary re-renders and cut crash rate by 25%.",
    ],
    accent: "amber",
  },
  {
    name: "CDA Website",
    period: "Oct 2023 - Mar 2024",
    company: "Graana.com",
    stack: ["React.js", "Redux", "Leaflet", "Google Maps React", "Chakra UI", "JIRA", "Figma"],
    summary:
      "Public civic website with interactive city development project discovery, accessibility, and SEO improvements.",
    outcomes: [
      "Visualized 100+ city development projects on interactive maps.",
      "Launched Google Custom Search API-powered global search.",
      "Improved content discovery speed by 35% and added accessibility controls.",
    ],
    accent: "cyan",
  },
  {
    name: "Graana.com Marketplace",
    period: "Mar 2023 - Sep 2023",
    company: "Graana.com",
    stack: ["Next.js", "Redux Toolkit", "Material UI", "JIRA", "Postman"],
    summary:
      "Real estate marketplace improvements focused on maps, listings, search filters, property details, and performance.",
    outcomes: [
      "Built an interactive property map for 1,000+ listings and nearby facilities.",
      "Refined search and detail pages, contributing to 20% longer sessions.",
      "Applied SSR and image optimization for a 45% page load speed improvement.",
    ],
    accent: "emerald",
  },
  {
    name: "JobTask Admin Panel",
    period: "Jun 2019 - Jun 2020",
    company: "Code Systematic",
    stack: ["React.js", "ApexCharts", "Figma", "VS Code", "Postman"],
    summary:
      "Operational admin panel for booking management, dashboard analytics, users, providers, jobs, and notifications.",
    outcomes: [
      "Shipped 8+ ApexCharts dashboards across sales, earnings, and job statistics.",
      "Built modular UI components that reduced development time by 30%.",
      "Enabled managers to oversee 1,000+ service bookings efficiently.",
    ],
    accent: "amber",
  },
];

export const experience: Experience[] = [
  {
    role: "Senior ReactJS Developer / Front-End Developer",
    company: "Graana.com",
    location: "Islamabad, Pakistan",
    period: "Sep 2021 - Present",
    projects: [
      {
        name: "In House Gen AI",
        period: "Jan 2025 - Present",
        stack: ["Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS", "Figma", "Python backend"],
        bullets: [
          "Implemented secure JWT login and protected routes.",
          "Integrated AI backend responses to dynamically render floor plans.",
          "Built progress tracking, custom prompts, and real-time budget visualization.",
        ],
      },
      {
        name: "WorksApp Web",
        period: "Aug 2024 - Dec 2024",
        stack: ["React.js", "Laravel", "Inertia.js", "Firebase", "Postman", "Figma"],
        bullets: [
          "Replaced polling notifications with Firebase Cloud Messaging.",
          "Improved platform stability by aligning API and frontend layers.",
        ],
      },
      {
        name: "WorksApp Mobile",
        period: "Apr 2024 - Jul 2024",
        stack: ["React Native", "TypeScript", "Redux Toolkit", "RTK Query"],
        bullets: [
          "Delivered client journey modules for property lead and deal workflows.",
          "Reduced re-renders and crash rate through RTK Query API architecture.",
        ],
      },
      {
        name: "CDA Website",
        period: "Oct 2023 - Mar 2024",
        stack: ["React.js", "Redux", "Leaflet", "Google Maps React", "Chakra UI"],
        bullets: [
          "Built interactive maps for 100+ city development projects.",
          "Added global search, accessibility controls, sitemap, and SEO improvements.",
        ],
      },
      {
        name: "Graana.com Real Estate Marketplace",
        period: "Mar 2023 - Sep 2023",
        stack: ["Next.js", "Redux Toolkit", "Material UI"],
        bullets: [
          "Engineered property maps, search filters, and detail page improvements.",
          "Improved page load speed using SSR and Next.js image optimization.",
        ],
      },
      {
        name: "ARMS - Lead & Property Finance Management",
        period: "Oct 2021 - Feb 2023",
        stack: ["React.js", "Redux", "REST APIs", "Postman"],
        bullets: [
          "Delivered CRM modules for clients, leads, deals, inventory, and property management.",
          "Created lead tracking states for visibility across 200+ agents.",
        ],
      },
    ],
  },
  {
    role: "React.js Developer / Software Engineer",
    company: "Creative Tech Solutions",
    location: "Islamabad, Pakistan",
    period: "Jul 2020 - Sep 2021",
    projects: [
      {
        name: "Hashtag Systems",
        stack: ["Next.js", "Bootstrap", "PageSpeed Insights", "META SEO Inspector"],
        bullets: [
          "Directed migration from React.js to Next.js.",
          "Improved PageSpeed score from roughly 50 to 80-90%.",
          "Applied sitemaps, metadata, structured data, and Core Web Vitals fixes.",
        ],
      },
    ],
  },
  {
    role: "Front-End Developer / Web Designer",
    company: "Code Systematic",
    location: "Islamabad, Pakistan",
    period: "Jun 2019 - Jun 2020",
    projects: [
      {
        name: "JobTask Admin Panel",
        stack: ["React.js", "ApexCharts", "Figma", "VS Code", "Postman"],
        bullets: [
          "Designed and shipped dashboards for sales, earnings, and job statistics.",
          "Built reusable UI modules for users, service providers, jobs, and notifications.",
        ],
      },
    ],
  },
];

export const education = {
  degree: "Bachelor of Science in Software Engineering",
  institution: "International Islamic University",
  location: "Islamabad, Pakistan",
  period: "2014 - 2018",
  gpa: "3.0",
};

export const languages = ["English (Professional)", "Urdu (Native)", "Pashto (Native)"];

export const references = [
  {
    name: "Ahsan Khan",
    company: "Graana.com",
    email: "ahsandev.creative@gmail.com",
    phone: "0321-5798470",
  },
  {
    name: "Sajad Hussain",
    company: "Code Systematic",
    email: "hello@codesystematic.com",
    phone: "0337-9209927",
  },
  {
    name: "Wilayat Shah",
    company: "Graana.com",
    email: "wilayats@gmail.com",
    phone: "03159322282",
  },
];
