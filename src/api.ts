import { Profile, Project, Skill } from './types';

const API_DELAY = 1000; // Simulate network delay

const profile: Profile = {
  name: "Harisa Saeed",
  role: "Frontend-Developer",
  bio: "I'm a passionate Full Stack Developer with expertise in building modern web applications. With a strong foundation in both front-end and back-end development, I create seamless digital experiences that solve real-world problems.",
  avatar: "profile.jpg",
  experience: 2,
  projects: 10,
  social: {
    github: "https://github.com/harisasaeed",
    linkedin: "https://www.linkedin.com/in/harisa-saeed-2217642b5/",
    email: "harsasaeed753@gmail.com"
  }
};

const skills: Skill[] = [
  { name: "React", icon: "react", level: 60 },
  { name: "TypeScript", icon: "typescript", level: 85 },
  { name: "Node.js", icon: "nodejs", level: 80 },
  { name: "Nextjs", icon: "nextjs", level: 75 },
  { name: "TailwindCSS", icon: "tailwind", level: 65 },
  { name: "Html", icon: "html", level: 65 },
 
];

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured online shopping platform built with React and Stripe",
    image: "project1.png",
    tags: ["Tailwindcss", "TypeScript", "NextJS"],
    link: "https://milestone03-e-commerce-website-five.vercel.app/"
  },
  {
    id: 2,
    title: "Dynamic Blog",
    description: "A collaborative task management tool with real-time updates",
    image: "project2.png",
    tags: ["Nextjs", "Node.js", "Nextjs"],
    link: "https://milestone-3-blog-website-bay.vercel.app/"
  }
];

export async function fetchProfile(): Promise<Profile> {
  await new Promise(resolve => setTimeout(resolve, API_DELAY));
  return profile;
}

export async function fetchSkills(): Promise<Skill[]> {
  await new Promise(resolve => setTimeout(resolve, API_DELAY));
  return skills;
}

export async function fetchProjects(): Promise<Project[]> {
  await new Promise(resolve => setTimeout(resolve, API_DELAY));
  return projects;
}