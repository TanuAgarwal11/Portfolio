export const profile = {
  name: 'Khushi Agarwal',
  role: 'Full-Stack Software Engineer',
  tagline: 'I build real-time, scalable web applications with Angular, React, Node.js and AWS.',
  location: 'Noida, Uttar Pradesh, India',
  availability: 'Open to new opportunities',
  email: 'khushiagarwal7821@gmail.com',
  phone: '8193820321',
  resumeUrl: '/resume.pdf',
  social: {
    github: 'https://github.com/Khushiagrwal', // update with your actual GitHub URL
    linkedin: 'https://www.linkedin.com/in/khushi-agarwal-b819a0220/', // update with your actual LinkedIn URL
    email: 'mailto:khushiagarwal7821@gmail.com',
  },
}

export const about = {
  paragraphs: [
    "I'm a full-stack software engineer with hands-on experience building large-scale Angular applications and real-time, Node.js-powered backends. Over the past year at S&P Global, I've worked on serverless data feed monitoring systems that process thousands of daily feeds, and led a major Angular v8 to v16 migration across 20+ modules and 100+ components.",
    "I enjoy working across the stack — from crafting responsive, performant UIs in Angular and React, to designing APIs and real-time systems with Node.js, Express, and Socket.IO. I'm equally comfortable diving into AWS services like Lambda, EventBridge, SNS, and CloudWatch to automate and monitor production workflows.",
    "Alongside my professional work, I've built several personal projects exploring real-time collaboration, algorithm visualization, and full-stack marketplace platforms, and I've solved 400+ Data Structures & Algorithms problems on LeetCode to keep my problem-solving sharp.",
  ],
  focus: 'Currently focused on real-time systems, cloud automation, and scalable frontend architecture.',
  stats: [
    { label: 'DSA problems solved', value: '400+' },
    { label: 'Modules migrated (Angular v8→v16)', value: '20+' },
    { label: 'Daily feeds monitored', value: '1,000+' },
    { label: 'Manual effort reduced', value: '80%' },
  ],
}

export type SkillCategory = {
  id: string
  label: string
  fileLabel: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    label: 'Languages',
    fileLabel: 'languages.ts',
    skills: ['Java', 'Python', 'JavaScript', 'TypeScript'],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    fileLabel: 'frontend.ts',
    skills: ['Angular (v8–v16)', 'React.js', 'RxJS', 'HTML5', 'CSS3', 'Bootstrap', 'Material-UI', 'Tailwind CSS'],
  },
  {
    id: 'backend',
    label: 'Backend & Real-Time',
    fileLabel: 'backend.ts',
    skills: ['Node.js', 'Express.js', 'RESTful APIs', 'Socket.IO', 'WebSockets', 'JWT', 'Mongoose'],
  },
  {
    id: 'cloud',
    label: 'Databases & Cloud',
    fileLabel: 'infra.ts',
    skills: ['SQL', 'MongoDB', 'AWS Lambda', 'EventBridge', 'SNS', 'CloudWatch', 'Secrets Manager', 'Vercel', 'Render'],
  },
  {
    id: 'tools',
    label: 'Tools & Practices',
    fileLabel: 'tools.ts',
    skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'System Design Fundamentals', 'Debugging', 'Performance Optimization'],
  },
]

export type ExperienceEntry = {
  id: string
  company: string
  role: string
  duration: string
  description: string
  tech: string[]
}

export const experience: ExperienceEntry[] = [
  {
    id: 'exp-2',
    company: 'S&P Global',
    role: 'Software Engineer Apprentice',
    duration: 'June 2025 — June 2026',
    description:
      'Migrated a large-scale Angular application from v8 to v16 across 20+ modules and 100+ components, resolving breaking changes in routing, RxJS, HttpClient, and third-party libraries. Upgraded RxJS v6 to v7 and refactored 50+ observable patterns with takeUntil lifecycle management to eliminate subscription-related memory leaks. Resolved 200+ TypeScript strict-mode errors and modernized project configuration for Angular 16 compatibility. Designed and maintained a serverless data feed monitoring & alerting system processing 1,000+ daily/intraday feeds from 2,000+ data sources, automating workflows with AWS Lambda, EventBridge, and SNS to reduce manual effort by 80%.',
    tech: ['Angular', 'RxJS', 'TypeScript', 'AWS Lambda', 'EventBridge', 'SNS', 'CloudWatch'],
  },
  {
    id: 'exp-1',
    company: 'GLA University (Jovac)',
    role: 'Backend Development Training — SQL & MongoDB',
    duration: 'June 2023 — Aug 2023',
    description:
      'Completed backend development training focused on SQL and MongoDB, covering database design, queries, data management, and security fundamentals. Earned a Gold Medal for excellence in the program.',
    tech: ['SQL', 'MongoDB', 'Database Design', 'Security Fundamentals'],
  },
]

export type ProjectDetail = {
  problem: string
  solution: string
  features: string[]
  architecture: string
  techStack: string[]
  challenges: string
  learned: string
}

export type Project = {
  id: string
  name: string
  description: string
  tech: string[]
  image: string
  githubUrl: string
  demoUrl: string
  featured?: boolean
  detail: ProjectDetail
}

export const projects: Project[] = [
  {
    id: 'proj-whiteboard',
    name: 'Real-Time Collaborative Whiteboard',
    description:
      'A full-stack real-time collaborative whiteboard enabling multiple users to draw, edit, and manage shared boards simultaneously via an interactive canvas.',
    tech: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO'],
    image: 'whiteboard',
    githubUrl: 'https://github.com/khushiagarwal7821/ai-collaboration',
    demoUrl: 'https://ai-collaboration-64aq.vercel.app',
    featured: true,
    detail: {
      problem:
        'Teams needed a lightweight way to draw, sketch, and collaborate live on a shared canvas without juggling heavier, bloated whiteboard tools.',
      solution:
        'A full-stack whiteboard app with pen, eraser, shapes, lines, and text tools, where every stroke syncs instantly across all connected participants.',
      features: [
        'Interactive canvas with pen, eraser, shapes, lines, and text',
        'Real-time multi-user sync via Socket.IO and board-specific rooms',
        'JWT-based authentication with role-based access (owner/collaborator)',
        'Token-based secure invitation and sharing system',
      ],
      architecture:
        'An Angular frontend renders the canvas and connects to a Node.js/Express backend over REST for auth and board management, with Socket.IO handling real-time drawing events broadcast to room-specific participants. MongoDB stores boards, users, and permissions.',
      techStack: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'JWT'],
      challenges:
        'Keeping drawing sync low-latency and consistent across many concurrent users required careful room-based event scoping in Socket.IO to avoid unnecessary broadcast overhead.',
      learned:
        'Practical experience designing real-time systems, structuring WebSocket rooms, and implementing secure, role-based sharing flows end to end.',
    },
  },
  {
    id: 'proj-algovisualizer',
    name: 'Algo-Visualizer',
    description:
      'An interactive algorithm visualization platform for exploring sorting algorithms step-by-step with dynamic animations and games that reinforce time-complexity concepts.',
    tech: ['React.js', 'Material-UI', 'Tailwind CSS'],
    image: 'algovisualizer',
    githubUrl: 'https://github.com/khushiagarwal7821/algovisualizer',
    demoUrl: 'https://algovisualizer-beta.vercel.app',
    detail: {
      problem:
        'Sorting algorithms and time-complexity concepts are hard to internalize from static explanations alone, especially for students first learning DSA.',
      solution:
        'An interactive platform that animates sorting algorithms step by step and pairs them with small games that reinforce time-complexity intuition.',
      features: [
        'Step-by-step animated visualizations of sorting algorithms',
        'Interactive games reinforcing time-complexity concepts',
        'Responsive, reusable component structure',
        'Fast client-side routing and builds via Vite',
      ],
      architecture:
        'A React application structured into reusable, responsive components, using React Router for navigation and Vite for fast builds, deployed on Vercel.',
      techStack: ['React.js', 'Material-UI', 'Tailwind CSS', 'React Router', 'Vite'],
      challenges:
        'Designing animations that stayed accurate to each algorithm\'s actual step order while remaining smooth and easy to follow took several rounds of refinement.',
      learned:
        'Stronger intuition for breaking down algorithms into visualizable steps, and experience building component-driven, responsive UIs from scratch.',
    },
  },
  {
    id: 'proj-rentfashion',
    name: 'RentFashion',
    description:
      'A dual-portal rental platform with separate buyer and seller workflows for product management, rental, purchase, and commenting.',
    tech: ['Node.js', 'Express.js', 'Passport.js', 'EJS', 'MongoDB'],
    image: 'rentfashion',
    githubUrl: 'https://github.com/khushiagarwal7821/rentfashion',
    demoUrl: '',
    detail: {
      problem:
        'Fashion rental marketplaces need distinct, secure workflows for buyers and sellers — from listing and browsing products to renting, purchasing, and reviewing them.',
      solution:
        'A full-stack rental platform with separate buyer and seller portals, secure authentication, and persistent MongoDB-backed storage for products, carts, and comments.',
      features: [
        'Separate buyer and seller portals with distinct workflows',
        'Product management, rental, and purchase flows',
        'Cart and commenting system',
        'Secure authentication and authorization with Passport.js',
      ],
      architecture:
        'A Node.js/Express server renders dynamic views with EJS, uses Passport.js for authentication/authorization, and persists product, user, and order data in MongoDB.',
      techStack: ['Node.js', 'Express.js', 'Passport.js', 'EJS', 'MongoDB'],
      challenges:
        'Cleanly separating buyer and seller permissions and views within a single EJS-rendered app required careful route and middleware organization.',
      learned:
        'Deeper understanding of server-rendered app architecture, authentication flows, and structuring a two-sided marketplace from the ground up.',
    },
  },
]

export type Certificate = {
  id: string
  title: string
  issuer: string
  date: string
  description: string
  documentUrl?: string
}

export const certificates: Certificate[] = [
  {
    id: 'cert-sql-mongodb',
    title: 'Backend Development using SQL & MongoDB with Security Assurance',
    issuer: 'GLA University, Mathura (Dept. of Computer Engineering & Applications)',
    date: 'June 2023 — Aug 2023',
    description:
      'Job-Oriented Value-Added Course (Internship JOVAC) covering database design, queries, data management, and security fundamentals. Completed as a Gold Medalist.',
    documentUrl: '/certificate/sql-mongodb.pdf',
  },
  {
    id: 'cert-she-codes',
    title: 'She Codes ~22',
    issuer: 'IEEE WIE GLAU x CODEBUSTERS, GLA University',
    date: 'March 2022',
    description:
      'Certificate of Participation for the "She Codes~22" event organized by IEEEWIEGLAU x CODEBUSTERS student affinity group, Department of Computer Engineering and Applications, GLA University.',
    documentUrl: '/certificate/She_codes_certidicate.pdf',
  },
  {
    id: 'cert-java-basic',
    title: 'Java (Basic)',
    issuer: 'HackerRank',
    date: 'Feb 2023',
    description:
      'Certificate of Accomplishment for passing the HackerRank skill certification test in Java (Basic).',
    documentUrl: '/certificate/java_basic%20certificate.pdf',
  },
]

export const contact = {
  heading: "Let's build something",
  subheading:
    "I'm currently open to new roles and interesting opportunities. The fastest way to reach me is email — I read everything.",
}

export const nav = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
]