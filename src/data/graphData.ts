export type NodeCategory = 'skill' | 'experience' | 'education' | 'project';

export interface GraphNode {
  id: string;
  label: string;
  category: NodeCategory;
  color: string;
  size: number;
  x: number;
  y: number;
  z: number;
  detail: NodeDetail;
}

export interface NodeDetail {
  title: string;
  subtitle?: string;
  period?: string;
  location?: string;
  bullets?: string[];
  tags?: string[];
  links?: { label: string; url: string }[];
  images?: string[];
}

export interface GraphEdge {
  from: string;
  to: string;
  weight: number; // 0-1, affects line thickness
}

export const COLORS = {
  skill: '#00d4ff',
  experience: '#7c3aed',
  education: '#06ffa5',
  project: '#f59e0b',
};

export const nodes: GraphNode[] = [
  // ── Skills ──────────────────────────────────────────────
  {
    id: 'typescript',
    label: 'TypeScript',
    category: 'skill',
    color: COLORS.skill,
    size: 1.1,
    x: -3.5, y: 1.5, z: 2.0,
    detail: {
      title: 'TypeScript',
      subtitle: 'Front-End & Full-Stack',
      tags: ['TypeScript', 'JavaScript', 'ReactJS', 'HTML', 'CSS'],
      bullets: [
        'Production TypeScript at John Hancock across MODCO financial app',
        'Built QA testing pool UI in ReactJS at Salary.com',
        'End-to-end type-safe APIs with .NET backends',
      ],
    },
  },
  {
    id: 'python',
    label: 'Python',
    category: 'skill',
    color: COLORS.skill,
    size: 1.0,
    x: -4.0, y: -0.5, z: -1.8,
    detail: {
      title: 'Python',
      subtitle: 'Back-End & AI',
      tags: ['Python', 'FastAPI', 'ML'],
      bullets: [
        'FastAPI backend for Signal Research Platform (personal project)',
        'ML coursework: AI Engineering & AI/ML at UPenn',
        'Data pipelines and automation scripting',
      ],
    },
  },
  {
    id: 'csharp',
    label: 'C#  /  .NET',
    category: 'skill',
    color: COLORS.skill,
    size: 1.1,
    x: -2.0, y: -2.5, z: 1.2,
    detail: {
      title: 'C# / .NET',
      subtitle: 'Back-End Engineering',
      tags: ['C#', '.NET', 'ASP.NET'],
      bullets: [
        'Customer-facing chatbot for Manulife homepage using C# + Microsoft Agents SDK',
        'MODCO financial app enhancements with C# and Azure',
        'Bot Framework migration to agentic architecture',
      ],
    },
  },
  {
    id: 'azure',
    label: 'Azure',
    category: 'skill',
    color: COLORS.skill,
    size: 1.0,
    x: 0.5, y: -3.5, z: -2.2,
    detail: {
      title: 'Microsoft Azure',
      subtitle: 'Cloud & Infrastructure',
      tags: ['Azure', 'GCP', 'Cloud', 'Terraform'],
      bullets: [
        'Production virtual assistant deployments across John Hancock & Manulife globally',
        'Azure-hosted chatbot and agentic AI pipelines',
        'Certified: Introduction to Terraform on Azure',
        'Power Automate flows for report automation',
      ],
    },
  },
  {
    id: 'sql',
    label: 'SQL',
    category: 'skill',
    color: COLORS.skill,
    size: 0.95,
    x: 2.5, y: -3.0, z: 1.8,
    detail: {
      title: 'SQL & Data',
      subtitle: 'Data Engineering',
      tags: ['SQL', 'SSMS', 'Power BI', 'Data Pipelines'],
      bullets: [
        'Designed SQL data transformation pipelines for MODCO financial reporting',
        'Power BI dashboards surfacing financial insights for stakeholders',
        'Aggregation pipelines and analytics workflows at John Hancock',
      ],
    },
  },
  {
    id: 'ai',
    label: 'Agentic AI',
    category: 'skill',
    color: COLORS.skill,
    size: 1.2,
    x: 3.5, y: -1.0, z: -1.5,
    detail: {
      title: 'Agentic AI',
      subtitle: 'AI / Conversational Systems',
      tags: ['Agentic AI', 'Microsoft Agents SDK', 'LLMs', 'Conversational AI'],
      bullets: [
        'Led migration from Microsoft Bot Framework to Microsoft Agents SDK — enabling full agentic architectures',
        'Owns end-to-end production virtual assistant deployments (John Hancock & Manulife)',
        'MS in AI Engineering at UPenn (beginning Aug 2026)',
        'Coursework: AI Engineering, AI and Machine Learning',
      ],
    },
  },
  {
    id: 'react',
    label: 'React',
    category: 'skill',
    color: COLORS.skill,
    size: 1.0,
    x: 4.0, y: 1.5, z: 2.5,
    detail: {
      title: 'React',
      subtitle: 'Front-End',
      tags: ['ReactJS', 'Vite', 'Framer Motion', 'Tailwind'],
      bullets: [
        'Rebuilt QA testing pool UI in ReactJS at Salary.com',
        'Designed marketing popup from concept to production',
        'Signal Research Platform frontend (React + Vite + Tailwind)',
      ],
    },
  },
  {
    id: 'git',
    label: 'Git & DevOps',
    category: 'skill',
    color: COLORS.skill,
    size: 0.9,
    x: 3.5, y: 3.2, z: -0.8,
    detail: {
      title: 'Git & DevOps',
      subtitle: 'Engineering Practices',
      tags: ['Git', 'TeamCity', 'New Relic', 'JIRA', 'CI/CD'],
      bullets: [
        'Spearheaded adoption of standardized Git workflows at John Hancock',
        'Improved release reliability and code review quality team-wide',
        'Production monitoring with New Relic; CI with TeamCity',
      ],
    },
  },

  // ── Experience ──────────────────────────────────────────
  {
    id: 'john-hancock',
    label: 'John Hancock',
    category: 'experience',
    color: COLORS.experience,
    size: 1.4,
    x: 0, y: 0, z: 0,
    detail: {
      title: 'Full-Stack Software Engineer',
      subtitle: 'John Hancock · Cognitive AI & Finance Teams',
      period: 'June 2024 – Present',
      location: 'Boston, MA',
      tags: ['C#', 'TypeScript', 'Azure', 'SQL', 'Agentic AI', 'Power BI'],
      bullets: [
        'Own end-to-end production deployments for globally distributed virtual assistants across John Hancock and Manulife',
        'Led migration of all chatbots from Microsoft Bot Framework to Microsoft Agents SDK, enabling agentic AI architectures',
        'Spearheaded adoption of standardized Git workflows, improving release reliability and developer efficiency',
        'Building new customer-facing chatbot for Manulife homepage using Azure, C#, and Microsoft Agents SDK',
        'Engineered enhancements to MODCO (Modified Coinsurance) app using TypeScript, SQL, Azure, and C#',
        'Designed SQL data pipelines and Power BI dashboards for financial insights',
        'Built Power Automate flow to fully automate MODCO report generation, eliminating manual effort',
        'Developed matching algorithm for Manulife Women in Tech mentorship program',
      ],
    },
  },
  {
    id: 'salary-com',
    label: 'Salary.com',
    category: 'experience',
    color: COLORS.experience,
    size: 1.1,
    x: -1.5, y: 3.2, z: 1.6,
    detail: {
      title: 'Software Engineering Intern',
      subtitle: 'Salary.com',
      period: 'May 2023 – December 2023',
      location: 'Boston, MA',
      tags: ['ReactJS', 'TypeScript', 'UI/UX', 'Web APIs'],
      bullets: [
        'Rebuilt QA testing pool UI in ReactJS with integrated web APIs',
        'Designed and implemented a marketing popup from concept to production using UI/UX principles',
        'Contributed across the full stack: front-end, web APIs, and internal IT systems',
      ],
    },
  },
  {
    id: 'bu-spark',
    label: 'BU Spark!',
    category: 'experience',
    color: COLORS.experience,
    size: 1.0,
    x: 1.5, y: 3.5, z: -2.0,
    detail: {
      title: 'Software Project Management Intern',
      subtitle: 'BU Spark!',
      period: 'September 2023 – May 2024',
      location: 'Boston, MA',
      tags: ['Project Management', 'Leadership', 'Agile'],
      bullets: [
        'Managed portfolio of client software projects, aligning student teams with partner expectations',
        'Guided team to "Best Project" both semesters',
        '"Computerized Mapping of Visual Fields" project selected for Neuroscience of the Everyday World Conference 2024',
        'Awarded Spark\'s "Firestarter" award for outstanding contributions',
      ],
    },
  },

  // ── Education ────────────────────────────────────────────
  {
    id: 'upenn',
    label: 'UPenn',
    category: 'education',
    color: COLORS.education,
    size: 1.1,
    x: -3.0, y: -3.5, z: -1.0,
    detail: {
      title: 'Master of Science in Engineering: Artificial Intelligence',
      subtitle: 'University of Pennsylvania',
      period: 'Aug 2026 - Present',
      location: 'Remote',
      tags: ['AI Engineering', 'Machine Learning', 'Graduate'],
      bullets: [
        'Specialization in AI Engineering and applied machine learning',
        'Building on professional experience in agentic AI systems',
      ],
    },
  },
  {
    id: 'bu',
    label: 'Boston University',
    category: 'education',
    color: COLORS.education,
    size: 1.1,
    x: -4.5, y: 2.5, z: -2.5,
    detail: {
      title: 'Bachelor of Arts in Computer Science',
      subtitle: 'Boston University',
      period: 'Aug 2020 – May 2024',
      location: 'Boston, MA',
      tags: ['GPA: 3.67', "Dean's List", 'CS'],
      bullets: [
        'GPA: 3.67 · Dean\'s List (4 semesters)',
        'Coursework: AI & ML, Algorithms, Data Structures, Databases, Software Engineering, Probability in Computing',
      ],
    },
  },

  // ── Project ───────────────────────────────────────────────
  {
    id: 'signal-platform',
    label: 'Signal Platform',
    category: 'project',
    color: COLORS.project,
    size: 1.2,
    x: 4.5, y: -3.0, z: 2.2,
    detail: {
      title: 'Signal Research Platform',
      subtitle: 'Full-Stack · Quant Finance Tool',
      tags: ['Python', 'FastAPI', 'React', 'Vite', 'Tailwind', 'TypeScript'],
      bullets: [
        'Full-stack app for quantitative researchers to create, iterate on, and manage trading signals',
        'FastAPI Python backend with role-based permissions (researcher / manager / exec)',
        'React + Vite + Tailwind frontend with signal lineage tree visualization',
        'Features: Signal Feed, Golden Library, metrics charts, fork lineage, cross-team sharing',
        'Permission model: Private → Team → Shared → Golden enforced server-side',
      ],
      links: [
        { label: 'GitHub', url: 'https://github.com/DerekRoberts32' },
      ],
      images: ['/signal-list.png', '/signal-detail-metrics.png', '/signal-detail-overview.png'],
    },
  },
];

export const edges: GraphEdge[] = [
  // TypeScript → jobs
  { from: 'typescript', to: 'john-hancock', weight: 0.9 },
  { from: 'typescript', to: 'salary-com', weight: 0.8 },
  { from: 'typescript', to: 'signal-platform', weight: 0.7 },
  // Python → project + education
  { from: 'python', to: 'signal-platform', weight: 0.9 },
  { from: 'python', to: 'upenn', weight: 0.6 },
  // C# → JH
  { from: 'csharp', to: 'john-hancock', weight: 1.0 },
  // Azure → JH
  { from: 'azure', to: 'john-hancock', weight: 0.9 },
  // SQL → JH
  { from: 'sql', to: 'john-hancock', weight: 0.85 },
  // AI → JH + UPenn
  { from: 'ai', to: 'john-hancock', weight: 1.0 },
  { from: 'ai', to: 'upenn', weight: 0.8 },
  // React → Salary + Signal
  { from: 'react', to: 'salary-com', weight: 0.9 },
  { from: 'react', to: 'signal-platform', weight: 0.8 },
  // Git → JH
  { from: 'git', to: 'john-hancock', weight: 0.7 },
  { from: 'git', to: 'bu-spark', weight: 0.5 },
  // Education → JH
  { from: 'bu', to: 'john-hancock', weight: 0.5 },
  { from: 'bu', to: 'salary-com', weight: 0.5 },
  { from: 'bu', to: 'bu-spark', weight: 0.6 },
  // JH internal
  { from: 'john-hancock', to: 'salary-com', weight: 0.3 },
  { from: 'john-hancock', to: 'bu-spark', weight: 0.3 },
];
