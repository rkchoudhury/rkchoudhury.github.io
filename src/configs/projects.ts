import { profile } from "./profile";

export const projects = [
  {
    title: "DevTinder",
    type: "Web & Mobile • Full Stack",
    period: "May 2025 — Dec 2025",
    stack: ["React", "Node.js", "MongoDB", "Socket.io"],
    description:
      "A full-stack platform that helps developers connect, interact and collaborate, with real-time chat and payment integration.",
    github: profile.github,
  },
  {
    title: "Netflix Clone",
    type: "Web Application",
    period: "Jan 2024 — Feb 2024",
    stack: ["React", "Redux Toolkit", "Tailwind CSS"],
    description:
      "A Netflix-inspired React application featuring debounced search, caching, API polling chat and n-level nested comments.",
    github: profile.github,
  },
  {
    title: "Food Ordering App",
    type: "Android Application",
    period: "Aug 2023 — Dec 2023",
    stack: ["Kotlin", "Jetpack Compose", "Room DB", "Ktor"],
    description:
      "An Android food ordering application with search, filtering, navigation and local persistence using Room Database.",
    github: profile.github,
  },
];
