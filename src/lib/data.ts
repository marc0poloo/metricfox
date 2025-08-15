import { Job, Company } from "@/types";

// Job Categories
export const jobCategories = [
  "Frontend Entwicklung",
  "Backend Entwicklung",
  "Full Stack Entwicklung",
  "DevOps & Infrastructure",
  "Data Science & Analytics",
  "Mobile Entwicklung",
  "QA & Testing",
  "Product Management",
  "UI/UX Design",
  "Cybersecurity",
  "Cloud Architecture",
  "Machine Learning"
];

// Experience Levels
export const experienceLevels = [
  "Junior (0-2 Jahre)",
  "Mid-Level (2-5 Jahre)",
  "Senior (5-8 Jahre)",
  "Lead (8+ Jahre)",
  "Principal/Architect (10+ Jahre)"
];

// Job Types
export const jobTypes = [
  "Vollzeit",
  "Teilzeit",
  "Freiberuflich",
  "Praktikum",
  "Remote",
  "Hybrid"
];

// Mock Jobs Data
export const mockJobs: Job[] = [
  {
    id: "1",
    title: "Senior React Developer",
    company: {
      id: "1",
      name: "TechFlow GmbH",
      logo: "/images/companies/techflow.png",
      industry: "Software Development",
      size: "51-200",
      founded: 2018,
      description: "Innovative Software-Lösungen für moderne Unternehmen"
    },
    description: "Wir suchen einen erfahrenen React Developer für unser dynamisches Team. Sie werden verantwortlich für die Entwicklung von Benutzeroberflächen-Komponenten sein.",
    requirements: [
      "5+ Jahre React Erfahrung",
      "Starke TypeScript Kenntnisse",
      "Erfahrung mit Next.js",
      "Kenntnisse in State Management (Redux/Zustand)",
      "Vertrautheit mit Testing Frameworks"
    ],
    responsibilities: [
      "Entwicklung von React-Komponenten",
      "Code Reviews und Mentoring",
      "Architektur-Entscheidungen",
      "Performance-Optimierung"
    ],
    skills: ["React", "TypeScript", "Next.js", "Redux", "Jest"],
    location: "Berlin",
    salaryMin: 70000,
    salaryMax: 90000,
    currency: "EUR",
    type: "Vollzeit",
    experienceLevel: "Senior (5-8 Jahre)",
    category: "Frontend Entwicklung",
    remote: true,
    benefits: [
      "Flexible Arbeitszeiten",
      "Home Office möglich",
      "Weiterbildungsbudget",
      "Moderne Hardware"
    ],
    postedAt: new Date("2024-01-15"),
    applicationDeadline: new Date("2024-03-15"),
    isActive: true,
    featured: true,
    views: 245,
    applications: 12
  },
  {
    id: "2", 
    title: "DevOps Engineer",
    company: {
      id: "2",
      name: "CloudTech Solutions",
      logo: "/images/companies/cloudtech.png",
      industry: "Cloud Services",
      size: "201-500",
      founded: 2015,
      description: "Führender Cloud-Infrastruktur Anbieter in Deutschland"
    },
    description: "Werden Sie Teil unseres Infrastructure-Teams und helfen Sie beim Aufbau skalierbarer Cloud-Lösungen.",
    requirements: [
      "3+ Jahre DevOps Erfahrung",
      "Starke AWS/Azure Kenntnisse",
      "Erfahrung mit Docker und Kubernetes",
      "CI/CD Pipeline Expertise",
      "Infrastructure as Code (Terraform)"
    ],
    responsibilities: [
      "Cloud-Infrastruktur verwalten",
      "CI/CD Pipelines entwickeln",
      "Monitoring und Alerting",
      "Sicherheitsrichtlinien umsetzen"
    ],
    skills: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins"],
    location: "München",
    salaryMin: 65000,
    salaryMax: 85000,
    currency: "EUR",
    type: "Vollzeit",
    experienceLevel: "Mid-Level (2-5 Jahre)",
    category: "DevOps & Infrastructure",
    remote: false,
    benefits: [
      "Betriebliche Altersvorsorge",
      "Gesundheitsvorsorge",
      "Teamevents",
      "Parkplatz"
    ],
    postedAt: new Date("2024-01-20"),
    applicationDeadline: new Date("2024-03-20"),
    isActive: true,
    featured: false,
    views: 189,
    applications: 8
  },
  {
    id: "3",
    title: "Full Stack Developer",
    company: {
      id: "3", 
      name: "StartupXYZ",
      logo: "/images/companies/startupxyz.png",
      industry: "E-Commerce",
      size: "11-50",
      founded: 2021,
      description: "Innovative E-Commerce Platform für die Zukunft des Handels"
    },
    description: "Wir sind ein schnell wachsendes Startup auf der Suche nach einem vielseitigen Full-Stack Developer.",
    requirements: [
      "3+ Jahre Full-Stack Entwicklung",
      "Erfahrung mit Node.js und React",
      "Datenbank Design und Optimierung",
      "RESTful API Entwicklung",
      "Agile Entwicklungserfahrung"
    ],
    responsibilities: [
      "Frontend und Backend entwickeln",
      "APIs designen und implementieren",
      "Datenbank-Architektur",
      "Code-Qualität sicherstellen"
    ],
    skills: ["React", "Node.js", "PostgreSQL", "Express", "MongoDB"],
    location: "Hamburg",
    salaryMin: 55000,
    salaryMax: 75000,
    currency: "EUR",
    type: "Vollzeit",
    experienceLevel: "Mid-Level (2-5 Jahre)",
    category: "Full Stack Entwicklung",
    remote: true,
    benefits: [
      "Equity Participation",
      "Flexible Arbeitszeiten",
      "Remote Work",
      "Learning Budget"
    ],
    postedAt: new Date("2024-01-25"),
    applicationDeadline: new Date("2024-03-25"),
    isActive: true,
    featured: true,
    views: 167,
    applications: 15
  }
];

// Mock Companies Data
export const mockCompanies: Company[] = [
  {
    id: "1",
    name: "TechFlow GmbH",
    logo: "/images/companies/techflow.png",
    industry: "Software Development",
    size: "51-200",
    founded: 2018,
    description: "Innovative Software-Lösungen für moderne Unternehmen",
    website: "https://techflow.de",
    locations: ["Berlin", "Hamburg"],
    employees: 125,
    benefits: [
      "Flexible Arbeitszeiten",
      "Home Office",
      "Weiterbildungsbudget",
      "Betriebliche Altersvorsorge"
    ],
    culture: "Wir fördern Innovation, Kreativität und Work-Life-Balance in einem dynamischen Umfeld.",
    openPositions: 5,
    isVerified: true,
    createdAt: new Date("2023-01-15"),
    updatedAt: new Date("2024-01-15")
  },
  {
    id: "2",
    name: "CloudTech Solutions",
    logo: "/images/companies/cloudtech.png", 
    industry: "Cloud Services",
    size: "201-500",
    founded: 2015,
    description: "Führender Cloud-Infrastruktur Anbieter in Deutschland",
    website: "https://cloudtech-solutions.de",
    locations: ["München", "Frankfurt"],
    employees: 350,
    benefits: [
      "Betriebliche Altersvorsorge",
      "Gesundheitsvorsorge",
      "Teamevents",
      "Moderne Büros"
    ],
    culture: "Expertise, Qualität und Kundenorientierung stehen bei uns im Mittelpunkt.",
    openPositions: 8,
    isVerified: true,
    createdAt: new Date("2023-05-10"),
    updatedAt: new Date("2024-01-20")
  }
];


export const skillsList = [
"React",
"Vue.js",
"Angular",
"TypeScript",
"JavaScript",
"Node.js",
"Python",
"Java",
"C#",
"PHP",
"AWS",
"Azure",
"Docker",
"Kubernetes",
"Jenkins",
"PostgreSQL",
"MongoDB",
"MySQL",
"Redis",
"GraphQL",
"REST API",
"Microservices",
"DevOps",
"CI/CD",
"Terraform",
"Ansible"];


export const locations = [
  "Berlin",
  "München", 
  "Hamburg",
  "Frankfurt",
  "Köln",
  "Stuttgart",
  "Düsseldorf",
  "Leipzig",
  "Dresden",
  "Remote",
  "Deutschlandweit"
];