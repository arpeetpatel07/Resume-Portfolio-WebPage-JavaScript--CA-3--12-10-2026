/**
 * data.js — Central Data Store for Arpeet Patel's Portfolio
 * All resume content is stored as structured JavaScript objects/arrays.
 * This makes it easy to update and demonstrates array/object usage for viva.
 *
 * CA3 Mini Project | Arpeet Patel | PRN: 24070521218
 * Symbiosis Institute of Technology, Nagpur
 */

// ─────────────────────────────────────────────
// PERSONAL INFORMATION
// ─────────────────────────────────────────────
const personalInfo = {
  name: "Arpeet Patel",
  prn: "24070521218",
  degree: "B.Tech in Computer Science and Engineering",
  specialization: "Artificial Intelligence and Machine Learning",
  institution: "Symbiosis Institute of Technology, Nagpur",
  university: "Symbiosis International University",
  location: "Nagpur, Maharashtra, India",
  email: "arpeetpatel192006@gmail.com",
  github: "https://github.com/arpeetpatel07",
  linkedin: "https://www.linkedin.com/in/arpeet-patel-249822320",
  headline: "Computer Science Student | AI & ML Enthusiast | Aspiring Software Developer",
  tagline: "Transforming Ideas into Intelligent Digital Experiences.",
  profilePhoto: "assets/images/profile.jpg",
  resumeFile: "assets/resume/Arpeet_Patel_Resume.pdf",
  typingTexts: [
    "Computer Science Student",
    "AI & ML Enthusiast",
    "Aspiring Software Developer",
    "Technology Explorer",
    "Problem Solver"
  ]
};

// ─────────────────────────────────────────────
// PROFESSIONAL SUMMARY
// ─────────────────────────────────────────────
const professionalSummary = `Computer Science undergraduate specializing in Artificial Intelligence 
and Machine Learning at Symbiosis Institute of Technology, Nagpur. Passionate about applying AI, 
predictive analytics, cloud computing, and web technologies to solve real-world challenges. 
Experienced in responsive web development, project-based ML research, and collaborative student 
activities. A curious learner committed to building impactful, innovative digital solutions.`;

// ─────────────────────────────────────────────
// ABOUT ME HIGHLIGHTS
// ─────────────────────────────────────────────
const aboutHighlights = [
  {
    icon: "🧠",
    title: "Problem Solver",
    description: "Passionate about breaking down complex problems into elegant, efficient solutions."
  },
  {
    icon: "🤖",
    title: "AI & ML Explorer",
    description: "Actively researching and building projects in AI, ML, and predictive analytics."
  },
  {
    icon: "🌐",
    title: "Web Developer",
    description: "Hands-on experience in full-stack web development from an industry internship."
  },
  {
    icon: "📜",
    title: "Patent Holder",
    description: "Co-inventor of a filed patent on AI-powered retail forecasting (DemandVision)."
  },
  {
    icon: "📚",
    title: "Continuous Learner",
    description: "Holds multiple certifications from Red Hat, Infosys, Deloitte, and Hertie School."
  },
  {
    icon: "🤝",
    title: "Team Player",
    description: "Active in IEEE, Community Outreach, and Competitive Education clubs at SIT."
  }
];

// ─────────────────────────────────────────────
// EDUCATION
// ─────────────────────────────────────────────
const education = [
  {
    id: 1,
    level: "Undergraduate",
    institution: "Symbiosis Institute of Technology, Nagpur",
    university: "Symbiosis International University",
    degree: "B.Tech – Computer Science and Engineering",
    specialization: "AI & Machine Learning",
    duration: "Aug 2024 – Jul 2028",
    status: "Ongoing",
    icon: "🎓",
    details: [
      "Specialization in Artificial Intelligence and Machine Learning",
      "Active member of IEEE Student Chapter",
      "Involved in project-based learning (PBL) with real-world impact",
      "Filed a patent on AI-powered retail demand forecasting"
    ]
  },
  {
    id: 2,
    level: "Higher Secondary (HSC)",
    institution: "Centre Point School, Nagpur",
    degree: "HSC – Science Stream",
    duration: "Jun 2022 – Jun 2024",
    status: "Completed",
    icon: "🏫",
    details: [
      "Science stream with focus on Physics, Chemistry, and Mathematics",
      "Completed in 2024"
    ]
  },
  {
    id: 3,
    level: "Secondary (SSC)",
    institution: "Centre Point School, Nagpur",
    degree: "SSC",
    duration: "Jun 2010 – Apr 2022",
    status: "Completed",
    icon: "🏫",
    details: [
      "Completed schooling at Centre Point School, Nagpur",
      "Strong foundation in Mathematics and Sciences"
    ]
  }
];

// ─────────────────────────────────────────────
// TECHNICAL SKILLS
// ─────────────────────────────────────────────
const skills = {
  "Programming Languages": [
    { name: "Python", icon: "🐍" },
    { name: "JavaScript", icon: "⚡" },
    { name: "HTML5", icon: "🌐" },
    { name: "CSS3", icon: "🎨" },
    { name: "PHP", icon: "🔧" },
    { name: "SQL", icon: "🗄️" }
  ],
  "AI & Machine Learning": [
    { name: "Machine Learning", icon: "🤖" },
    { name: "Predictive Analytics", icon: "📊" },
    { name: "Prompt Engineering", icon: "✨" },
    { name: "LLM Engineering", icon: "🧠" },
    { name: "Agentic AI", icon: "🕹️" },
    { name: "RAG Systems", icon: "📚" }
  ],
  "Web Development": [
    { name: "Responsive Design", icon: "📱" },
    { name: "Bootstrap", icon: "🅱️" },
    { name: "Node.js", icon: "🟢" },
    { name: "MySQL", icon: "🐬" },
    { name: "Form Validation", icon: "✅" },
    { name: "REST APIs", icon: "🔗" }
  ],
  "Cloud & Infrastructure": [
    { name: "Cloud Inference", icon: "☁️" },
    { name: "Red Hat Linux", icon: "🎩" },
    { name: "Ansible Automation", icon: "⚙️" },
    { name: "Network Automation", icon: "🌐" }
  ],
  "Data & Tools": [
    { name: "Data Structures & Algorithms", icon: "🏗️" },
    { name: "Data Science", icon: "📈" },
    { name: "Database Integration", icon: "🗃️" },
    { name: "Blockchain", icon: "⛓️" }
  ],
  "Soft Skills": [
    { name: "Event Planning", icon: "📅" },
    { name: "Teamwork & Collaboration", icon: "🤝" },
    { name: "Problem Solving", icon: "🔍" },
    { name: "Communication", icon: "💬" }
  ]
};

// ─────────────────────────────────────────────
// PROJECTS
// ─────────────────────────────────────────────
const projects = [
  {
    id: 1,
    title: "DemandVision",
    subtitle: "AI-Powered Smart Retail Forecasting Framework",
    category: ["ai-ml", "academic"],
    thumbnail: "assets/projects/demandvision.jpg",
    description: "A forecasting-focused AI framework for inventory and supply-chain optimization in India's retail sector. Uses machine learning models to predict demand, reducing overstock and stockout scenarios.",
    problem: "Retail businesses in India face significant inventory losses due to inaccurate demand prediction, leading to overstock, stockout, and supply-chain inefficiencies.",
    technologies: ["Python", "Machine Learning", "Predictive Analytics", "Data Science", "Supply Chain Optimization"],
    features: [
      "AI-powered demand forecasting engine",
      "Inventory optimization recommendations",
      "Supply chain visibility dashboard",
      "Adaptive ML model retraining",
      "Retail-specific data preprocessing pipeline"
    ],
    contributions: "Designed the forecasting framework architecture, developed the ML pipeline, and co-authored the patent application.",
    status: "In Development",
    patent: "System and Method for AI-Powered Retail Forecasting to Optimize Inventory and Supply Chain Operations using DemandVision Framework",
    github: "https://github.com/arpeetpatel07",
    demo: null
  },
  {
    id: 2,
    title: "ML-Based Adaptive Cloud Inference Scheduler",
    subtitle: "Real-Time AQI Forecasting",
    category: ["ai-ml", "academic"],
    thumbnail: "assets/projects/aqi-forecasting.jpg",
    description: "A real-time Air Quality Index (AQI) forecasting system using adaptive ML scheduling on cloud infrastructure. Designed volatility-monitoring and adaptive scheduler logic for efficient cloud inference.",
    problem: "Air quality prediction requires real-time data processing with low latency. Traditional static cloud deployments waste resources during off-peak periods.",
    technologies: ["Python", "Machine Learning", "Cloud Computing", "Real-Time Processing", "AQI Data", "Adaptive Scheduling"],
    features: [
      "Real-time AQI forecasting pipeline",
      "Volatility-aware adaptive cloud scheduler",
      "Resource-efficient inference scheduling",
      "Environmental data integration",
      "Performance monitoring dashboard"
    ],
    contributions: "Designed and implemented the volatility-monitoring module and adaptive scheduler logic for cloud inference.",
    status: "In Development",
    patent: null,
    github: "https://github.com/arpeetpatel07",
    demo: null
  },
  {
    id: 3,
    title: "Blockchain-Powered Donation Tracker",
    subtitle: "Transparency for Charitable Foundations",
    category: ["web", "academic"],
    thumbnail: "assets/projects/blockchain-tracker.jpg",
    description: "A transparent donation tracking system leveraging blockchain technology to ensure accountability and immutability of charitable transactions. Designed to restore and build trust between donors and organizations.",
    problem: "Charitable organizations often struggle with donor trust due to a lack of transparency in fund utilization. Traditional tracking systems are centralized and opaque.",
    technologies: ["Blockchain", "Smart Contracts", "Web Development", "Database", "Cryptography"],
    features: [
      "Immutable donation ledger on blockchain",
      "Real-time fund tracking and verification",
      "Donor-facing transparency dashboard",
      "Smart contract-based fund release",
      "QR-code donation receipt system"
    ],
    contributions: "Conceptualized the project, designed the system architecture, and developed the frontend transparency dashboard.",
    status: "In Development",
    patent: null,
    github: "https://github.com/arpeetpatel07",
    demo: null
  },
  {
    id: 4,
    title: "JSK Corporation Corporate Website",
    subtitle: "Internship Project — JSK Corporation Pvt. Ltd.",
    category: ["web", "internship"],
    thumbnail: null,
    description: "Designed and deployed a complete, responsive corporate website for JSK Corporation Pvt. Ltd. during a one-month professional web development internship. The site features multiple pages including Home, About, Services, Products, Projects, and Contact.",
    problem: "The company required a modern, professional web presence with a functional inquiry system and cross-browser compatibility.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "PHP", "Node.js", "MySQL"],
    features: [
      "Multi-page responsive corporate website",
      "Inquiry and contact forms with server-side validation",
      "MySQL database integration for form submissions",
      "Cross-browser optimized UI",
      "Frontend-backend integration"
    ],
    contributions: "End-to-end development: wireframing, UI design, frontend development, backend integration, testing, and deployment.",
    status: "Completed & Deployed",
    patent: null,
    github: null,
    demo: null
  }
];

// ─────────────────────────────────────────────
// INTERNSHIP EXPERIENCE
// ─────────────────────────────────────────────
const internships = [
  {
    id: 1,
    title: "Web Development Intern",
    company: "JSK Corporation Pvt. Ltd.",
    location: "Nagpur, Maharashtra",
    duration: "20 May 2026 – 20 June 2026",
    type: "Industry Internship",
    responsibilities: [
      "Designed and deployed a responsive multi-page corporate website (Home, About, Services, Products, Projects, Contact).",
      "Developed inquiry and contact forms with input validation and MySQL database integration.",
      "Worked hands-on with HTML5, CSS3, JavaScript, Bootstrap, PHP/Node.js, and MySQL.",
      "Participated in wireframing, frontend/backend integration, cross-browser testing, optimization, and deployment."
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "PHP", "Node.js", "MySQL"]
  }
];

// ─────────────────────────────────────────────
// CERTIFICATIONS
// ─────────────────────────────────────────────
const certifications = [
  {
    id: 1,
    name: "Python Programming with Red Hat",
    code: "AD141 – RHA, v9.0",
    issuer: "Red Hat",
    category: "programming",
    icon: "🎩",
    color: "#EE0000"
  },
  {
    id: 2,
    name: "Red Hat System Administration I",
    code: "RH124 – RHA, v10",
    issuer: "Red Hat",
    category: "cloud",
    icon: "🎩",
    color: "#EE0000"
  },
  {
    id: 3,
    name: "Network Automation with Red Hat Ansible",
    code: "DO457 – RHA, v2.3",
    issuer: "Red Hat",
    category: "cloud",
    icon: "⚙️",
    color: "#EE0000"
  },
  {
    id: 4,
    name: "Data Science 3 Certification",
    code: "Data Science",
    issuer: "Hertie School",
    category: "data-science",
    icon: "📊",
    color: "#1D3461"
  },
  {
    id: 5,
    name: "Data Structures and Algorithms using Python",
    code: "DSA",
    issuer: "Infosys Springboard",
    category: "programming",
    icon: "🏗️",
    color: "#007CC3"
  },
  {
    id: 6,
    name: "LLM Engineering, RAG & AI Agents Masterclass",
    code: "LLM / GenAI",
    issuer: "Infosys Springboard",
    category: "ai-ml",
    icon: "🤖",
    color: "#007CC3"
  },
  {
    id: 7,
    name: "Mastering Agentic AI: From Prompt to Protocols to Production",
    code: "Agentic AI",
    issuer: "Infosys Springboard",
    category: "ai-ml",
    icon: "🧠",
    color: "#007CC3"
  },
  {
    id: 8,
    name: "IAYP — Gold Level",
    code: "International Award",
    issuer: "The Duke of Edinburgh's International Award (IAYP)",
    category: "achievement",
    icon: "🥇",
    color: "#FFD700"
  },
  {
    id: 9,
    name: "IAYP — Silver Level",
    code: "International Award",
    issuer: "The Duke of Edinburgh's International Award (IAYP)",
    category: "achievement",
    icon: "🥈",
    color: "#C0C0C0"
  },
  {
    id: 10,
    name: "IAYP — Bronze Level",
    code: "International Award",
    issuer: "The Duke of Edinburgh's International Award (IAYP)",
    category: "achievement",
    icon: "🥉",
    color: "#CD7F32"
  },
  {
    id: 11,
    name: "Cyber Job Simulation",
    code: "Cybersecurity",
    issuer: "Deloitte Australia",
    category: "cybersecurity",
    icon: "🔐",
    color: "#86BC25"
  },
  {
    id: 12,
    name: "Technology Job Simulation",
    code: "Technology",
    issuer: "Deloitte Australia",
    category: "technology",
    icon: "💻",
    color: "#86BC25"
  },
  {
    id: 13,
    name: "AI Tools Workshop",
    code: "AI Tools",
    issuer: "Workshop",
    category: "ai-ml",
    icon: "🛠️",
    color: "#7C3AED"
  }
];

// ─────────────────────────────────────────────
// ACHIEVEMENTS
// ─────────────────────────────────────────────
const achievements = [
  {
    id: 1,
    title: "Patent Filed — DemandVision Framework",
    organization: "Indian Patent Office",
    date: "2024–2025",
    description: "Co-inventor of a filed patent titled 'System and Method for AI-Powered Retail Forecasting to Optimize Inventory and Supply Chain Operations using DemandVision Framework'. Represents original research in applied AI.",
    icon: "📜",
    type: "patent"
  },
  {
    id: 2,
    title: "IAYP — Gold, Silver & Bronze Award Recipient",
    organization: "The Duke of Edinburgh's International Award",
    date: "2022–2024",
    description: "Achieved all three levels (Bronze, Silver, and Gold) of the prestigious International Award for Young People (IAYP), recognizing excellence in physical activity, skill development, voluntary service, and adventure.",
    icon: "🏆",
    type: "award"
  },
  {
    id: 3,
    title: "Industry Internship at JSK Corporation Pvt. Ltd.",
    organization: "JSK Corporation Pvt. Ltd., Nagpur",
    date: "May – June 2026",
    description: "Successfully completed a one-month professional web development internship, delivering a fully functional corporate website with backend integration.",
    icon: "💼",
    type: "internship"
  },
  {
    id: 4,
    title: "Multiple Red Hat Certifications",
    organization: "Red Hat",
    date: "2024–2025",
    description: "Earned three professional certifications from Red Hat, including Python Programming (AD141), System Administration I (RH124), and Network Automation with Ansible (DO457).",
    icon: "🎩",
    type: "certification"
  },
  {
    id: 5,
    title: "Deloitte Australia Job Simulations",
    organization: "Deloitte Australia (Forage)",
    date: "2024–2025",
    description: "Completed both Cyber and Technology job simulations from Deloitte Australia, gaining exposure to real-world consulting, cybersecurity analysis, and tech problem-solving.",
    icon: "🔐",
    type: "certification"
  }
];

// ─────────────────────────────────────────────
// CONTRIBUTIONS & ACTIVITIES
// ─────────────────────────────────────────────
const contributions = [
  {
    id: 1,
    title: "Active Member — IEEE Student Chapter",
    organization: "IEEE, SIT Nagpur",
    role: "Active Member",
    type: "club",
    icon: "⚡",
    description: "Participating in IEEE events, technical workshops, and networking sessions to stay updated with cutting-edge engineering and technology developments."
  },
  {
    id: 2,
    title: "Active Member — Community Outreach Club",
    organization: "Symbiosis Institute of Technology, Nagpur",
    role: "Active Member",
    type: "club",
    icon: "🌱",
    description: "Contributing to community service initiatives and social outreach programs organized by the club to create a positive impact beyond academics."
  },
  {
    id: 3,
    title: "Active Member — Competitive & Higher Education Club",
    organization: "Symbiosis Institute of Technology, Nagpur",
    role: "Active Member",
    type: "club",
    icon: "🏆",
    description: "Participating in competitive programming challenges, exam preparation groups, and events aimed at higher education and professional excellence."
  },
  {
    id: 4,
    title: "AI Tools Workshop",
    organization: "Workshop",
    role: "Participant",
    type: "workshop",
    icon: "🛠️",
    description: "Attended a hands-on AI Tools Workshop, gaining practical exposure to modern AI productivity tools, prompt engineering techniques, and real-world AI applications."
  },
  {
    id: 5,
    title: "Project-Based Learning (PBL) Team Contributor",
    organization: "Symbiosis Institute of Technology, Nagpur",
    role: "Team Member & Contributor",
    type: "academic",
    icon: "📐",
    description: "Actively contributed to three major PBL projects (DemandVision, AQI Forecasting, Blockchain Donation Tracker) as part of the curriculum-integrated Project-Based Learning framework."
  }
];

// ─────────────────────────────────────────────
// LANGUAGES
// ─────────────────────────────────────────────
const languages = [
  { name: "English", proficiency: "Professional Working", level: 85 },
  { name: "Hindi", proficiency: "Limited Working", level: 60 },
  { name: "Marathi", proficiency: "Native / Bilingual", level: 100 },
  { name: "Gujarati", proficiency: "Native / Bilingual", level: 100 },
  { name: "French", proficiency: "Elementary", level: 20 },
  { name: "German", proficiency: "Elementary", level: 20 },
  { name: "Hebrew", proficiency: "Elementary", level: 15 }
];

// ─────────────────────────────────────────────
// CAREER INTERESTS & GOALS
// ─────────────────────────────────────────────
const careerInfo = {
  objective: `Seeking opportunities to apply my skills in Artificial Intelligence, Machine Learning, 
and Web Development to real-world challenges. I aim to contribute meaningfully to innovative tech teams, 
continue growing as a developer and researcher, and ultimately build solutions that create lasting, 
positive impact in areas such as retail analytics, environmental monitoring, and digital transparency.`,
  interests: [
    "Artificial Intelligence & Machine Learning",
    "Predictive Analytics & Demand Forecasting",
    "Cloud Computing & Inference Systems",
    "Full-Stack Web Development",
    "Blockchain & Decentralized Systems",
    "Prompt Engineering & LLM Applications",
    "Cybersecurity"
  ],
  goals: [
    "Secure a meaningful AI/ML or software development internship in my 2nd year",
    "Publish research papers on demand forecasting and cloud ML systems",
    "Get the DemandVision patent granted and develop it into a startup",
    "Contribute to open-source AI projects on GitHub",
    "Graduate with distinction and pursue post-graduate studies in AI"
  ]
};

// Export all data for use in other modules
// (Since we're not using ES6 modules with bundlers, data is accessible globally)
