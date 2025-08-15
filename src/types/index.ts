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
  createdAt: Date;
}

export interface JobOffer {
  id: string;
  title: string;
  company: string;
  description: string;
  requirements: string[];
  skills: string[];
  location: string;
  remote: boolean;
  salaryRange: {
    min: number;
    max: number;
  };
  type: "full-time" | "part-time" | "contract" | "freelance";
  createdAt: Date;
}

export type Job = JobOffer; // <- Richtig außerhalb exportieren!

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
}

export interface User {
  id: string;
  email: string;
  role: "admin" | "candidate" | "company";
  name: string;
}
