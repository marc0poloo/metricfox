// User Management
export interface User {
  id: string;
  email: string;
  role: "admin" | "candidate" | "company";
  name: string;
  phone?: string;
  location?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Candidate Types
export interface Education {
  id: string;
  degree: string;
  institution: string;
  field: string;
  startDate: Date;
  endDate?: Date;
  grade?: string;
}

export interface WorkExperience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: Date;
  endDate?: Date;
  description: string;
  technologies: string[];
}

export interface Candidate {
  id: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  skills: string[];
  experience: string;
  salaryExpectation: {
    min: number;
    max: number;
  };
  cvUrl?: string;
  profileImage?: string;
  education: Education[];
  workExperience: WorkExperience[];
  languages: string[];
  certifications: string[];
  availability: Date;
  preferredLocations: string[];
  remoteWork: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Company Types
export interface Company {
  id: string;
  name: string;
  logo?: string;
  industry: string;
  size: string;
  founded: number;
  description: string;
  website?: string;
  locations: string[];
  employees: number;
  benefits: string[];
  culture: string;
  openPositions: number;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Job Types
export interface Job {
  id: string;
  title: string;
  company: Company;
  description: string;
  requirements: string[];
  responsibilities: string[];
  skills: string[];
  location: string;
  salaryMin: number;
  salaryMax: number;
  currency: string;
  type: string;
  experienceLevel: string;
  category: string;
  remote: boolean;
  benefits: string[];
  postedAt: string;
  applicationDeadline: Date;
  isActive: boolean;
  featured: boolean;
  views: number;
  applications: number;
}

// Legacy type for backward compatibility
export interface JobOffer {
  id: string;
  title: string;
  company: Company;
  description: string;
  requirements: string[];
  responsibilities: string[];
  skills: string[];
  location: string;
  salaryMin: number;
  salaryMax: number;
  currency: string;
  type: string;
  experienceLevel: string;
  category: string;
  remote: boolean;
  benefits: string[];
  postedAt: string;
  applicationDeadline: Date;
  isActive: boolean;
  featured: boolean;
  views: number;
  applications: number;
}

// Application Types
export interface JobApplication {
  id: string;
  jobId: string;
  candidateId: string;
  status: "pending" | "reviewing" | "interview" | "offer" | "rejected" | "accepted";
  appliedAt: Date;
  coverLetter?: string;
  notes?: string;
  updatedAt: Date;
}

// Notification Types
export interface Notification {
  id: string;
  userId: string;
  type: "job_match" | "application_update" | "interview_invite" | "system";
  title: string;
  message: string;
  read: boolean;
  createdAt: Date;
  actionUrl?: string;
}

// Message Types
export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  subject: string;
  content: string;
  read: boolean;
  sentAt: Date;
  attachments?: string[];
}

// Search and Filter Types
export interface SearchFilters {
  query?: string;
  category?: string;
  location?: string;
  experienceLevel?: string;
  jobType?: string;
  salaryMin?: number;
  salaryMax?: number;
  remote?: boolean;
  company?: string;
}

// API Response Types
export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
  timestamp: Date;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
  message: string;
  success: boolean;
}

// Team Member (for About page)
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  specialties: string[];
}
