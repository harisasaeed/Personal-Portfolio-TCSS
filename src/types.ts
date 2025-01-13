export interface Skill {
  name: string;
  icon: string;
  level: number;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export interface Profile {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  experience: number;
  projects: number;
  social: {
    github: string;
    linkedin: string;
    email: string;
  };
}