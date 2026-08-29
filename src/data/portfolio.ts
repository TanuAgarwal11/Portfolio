export const profile = {
  name: 'Tanu Agarwal',
  role: 'Full-Stack Software Engineer',
  tagline: 'I build modern, scalable web applications with React, Node.js, Express.js and MongoDB.',
  location: 'Noida, Uttar Pradesh, India',
  availability: 'Open to new opportunities',
  email: 'agarwaltanu564@gmail.com',
  phone: '7302270321',
  resumeUrl: '/resume.pdf',
  social: {
    github: 'https://github.com/TanuAgarwal11',
    linkedin: 'https://www.linkedin.com/in/tanuagarwal11/',
    email: 'mailto:agarwaltanu564@gmail.com',
  },
}

export const about = {
  paragraphs: [
    "I'm a full-stack software engineer with a strong foundation in React.js, JavaScript, Node.js, Express.js, and MongoDB. I enjoy building responsive, user-friendly web applications and developing secure RESTful APIs.",
    "I work across the stack — from creating reusable React components and responsive interfaces to designing backend APIs, JWT-based authentication, authorization middleware, and MongoDB-backed applications.",
    "Alongside development, I've solved 350+ Data Structures and Algorithms problems on LeetCode, strengthening my problem-solving and algorithmic thinking. I'm currently pursuing an MCA at Jaypee Institute of Information Technology, Noida.",
  ],
  focus:
    'Currently focused on full-stack web development, React.js, Node.js, REST APIs, MongoDB, authentication, and scalable web applications.',
  stats: [
    { label: 'DSA problems solved', value: '350+' },
    { label: 'BCA CGPA', value: '9.57' },
    { label: 'Frontend', value: '10+' },
    { label: 'Backend', value: '10+' },
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
    skills: ['C++', 'JavaScript', 'Python'],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    fileLabel: 'frontend.ts',
    skills: ['React.js', 'HTML5', 'CSS3', 'Bootstrap', 'Vite'],
  },
  {
    id: 'backend',
    label: 'Backend',
    fileLabel: 'backend.ts',
    skills: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT'],
  },
  {
    id: 'databases',
    label: 'Databases',
    fileLabel: 'databases.ts',
    skills: ['MongoDB', 'Mongoose', 'SQL'],
  },
  {
    id: 'tools',
    label: 'Tools',
    fileLabel: 'tools.ts',
    skills: ['Git', 'GitHub', 'VS Code', 'Thunder Client'],
  },
  {
    id: 'concepts',
    label: 'Concepts',
    fileLabel: 'concepts.ts',
    skills: [
      'Data Structures & Algorithms',
      'OOP',
      'DBMS',
      'Authentication & Authorization',
      'Responsive Web Design',
    ],
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
    id: 'exp-1',
    company: 'Pinnacle Labs',
    role: 'Web Development Intern',
    duration: '2025',
    description:
      'Completed a one-month web development internship focused on building responsive and user-friendly web interfaces using HTML, CSS, and JavaScript. Built an interactive Calculator application with dynamic user interactions and JavaScript-based calculations. Designed and developed a responsive personal Portfolio Website showcasing projects, skills, and professional information. Improved usability by implementing responsive layouts and interactive UI components across different screen sizes.',
    tech: ['HTML', 'CSS', 'JavaScript'],
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
    id: 'proj-lendora',
    name: 'Lendora — Full-Stack Rental Platform',
    description:
      'A full-stack rental platform that enables users to list, borrow, and manage rental products through a secure web application.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    image: 'lendora',
    githubUrl: '',
    demoUrl: '',
    featured: true,
    detail: {
      problem:
        'Users need a simple and secure platform to list, browse, borrow, and manage rental products.',
      solution:
        'Developed a full-stack rental platform with a React.js frontend and Node.js/Express.js backend backed by MongoDB.',
      features: [
        'User authentication and authorization',
        'Product management and rental operations',
        'RESTful APIs for backend functionality',
        'JWT-based authentication with protected routes',
        'Authorization middleware for secure user access',
        'MongoDB persistence using Mongoose',
      ],
      architecture:
        'A React.js frontend communicates with a Node.js/Express.js REST API. JWT authentication protects routes and authorization middleware controls access, while MongoDB with Mongoose provides persistent storage.',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT'],
      challenges:
        'Implementing secure authentication, protected routes, authorization, and reliable frontend-backend communication while maintaining clean separation between application layers.',
      learned:
        'Practical experience building MERN-style applications, REST APIs, JWT authentication, authorization middleware, MongoDB persistence, and client-server communication.',
    },
  },
  {
    id: 'proj-streamify',
    name: 'Streamify — Video Streaming Platform',
    description:
      'A responsive video streaming interface inspired by modern OTT platforms, built with React.js and JavaScript.',
    tech: ['React.js', 'JavaScript', 'HTML', 'CSS'],
    image: 'streamify',
    githubUrl: '',
    demoUrl: '',
    detail: {
      problem:
        'Modern streaming platforms require responsive interfaces that make content discovery and navigation simple and engaging.',
      solution:
        'Developed a responsive video streaming interface inspired by modern OTT platforms using React.js and JavaScript.',
      features: [
        'Reusable React components',
        'Navigation and content sections',
        'Movie/show cards and responsive layouts',
        'Interactive UI features for a smooth streaming-platform experience',
      ],
      architecture:
        'A component-based React.js frontend uses reusable UI components and responsive CSS to structure navigation, content sections, cards, and interactive features.',
      techStack: ['React.js', 'JavaScript', 'HTML', 'CSS'],
      challenges:
        'Creating reusable components and responsive layouts while maintaining a consistent user experience across different screen sizes.',
      learned:
        'Improved React component design, responsive UI development, and frontend application structuring.',
    },
  },
  {
    id: 'proj-portfolio',
    name: 'Personal Portfolio Website',
    description:
      'A responsive personal portfolio website showcasing technical skills, projects, education, and professional experience.',
    tech: ['React.js', 'JavaScript', 'HTML', 'CSS', 'Vite'],
    image: 'portfolio',
    githubUrl: '',
    demoUrl: '',
    detail: {
      problem:
        'A professional portfolio needs to clearly present technical skills, projects, education, and experience through a responsive interface.',
      solution:
        'Built a responsive personal portfolio website using React.js and modern frontend development practices.',
      features: [
        'Responsive personal portfolio',
        'Technical skills and project sections',
        'Education and professional experience sections',
        'Reusable React components',
        'Responsive layouts',
        'Vite-based development workflow',
      ],
      architecture:
        'A React.js frontend uses reusable components and responsive layouts, with Vite configured for a fast and efficient development workflow.',
      techStack: ['React.js', 'JavaScript', 'HTML', 'CSS', 'Vite'],
      challenges:
        'Organizing portfolio information into reusable components while ensuring the website remains responsive and easy to navigate.',
      learned:
        'Strengthened React component development, responsive design, and modern frontend development workflow skills.',
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
    id: 'cert-cpp',
    title: 'Introduction to C++',
    issuer: 'GreatStack',
    date: '11 May 2026',
    description:
      'Certificate of Completion for successfully completing the Introduction to C++ course with demonstrated theoretical and practical understanding.',
    documentUrl: '/certificate/cpp-certificate.pdf',
  },
  {
    id: 'cert-fullstack-react',
    title: 'Full Stack React E-Commerce Project',
    issuer: 'GreatStack',
    date: '27 Aug 2026',
    description:
      'Certificate of completion for successfully completing the Full Stack React E-Commerce Project.',
    documentUrl: '/certificate/Full stack React.png',
  },
  {
    id: 'cert-networking',
    title: 'CCNA: Introduction to Networks',
    issuer: 'Cisco Networking Academy — Galgotias University',
    date: '01 Jun 2025',
    description:
      'Awarded for successfully completing CCNA: Introduction to Networks offered by Galgotias University through the Cisco Networking Academy program.',
    documentUrl: '/certificate/Introduction to networks.jpg',
  },
  {
    id: 'cert-tda',
    title: 'TDA Certificate',
    issuer: 'TDA',
    date: 'N/A',
    description:
      'Certificate associated with the TDA program and the completed coursework.',
    documentUrl: '/certificate/TDA_Certificate.pdf.pdf',
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