import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  mockxpert,
  jobit,
  tripguide,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Video Editor",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const projects = [
  {
    name: "MockXpert AI interview",
    description:
      "Web-based platform that generates AI-driven mock interview questions, enabling users to practice, review, and enhance their answers in an interactive environment.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: mockxpert,
    source_code_link: "https://github.com/AbhayRao2k/AI-mock-interviews.git",
    live_demo_link: "https://mockxpert-ai-interviews.vercel.app/",
  },
  {
    name: "Job Hunter App",
    description:
      "Web application that allows users to search and apply for jobs, post new openings, view estimated salary ranges, and find opportunities based on their location.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "expressjs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/AbhayRao2k/Job-Portal-App-MERN.git",
    live_demo_link: "https://job-hunter-app-pro.vercel.app/",
  },
  {
    name: "Reeltime Max",
    description:
      "Mobile application built with React Native that lets users browse and search movies, view detailed information, and watch trailers in an intuitive and responsive interface.",
    tags: [
      {
        name: "reactnative",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link:
      "https://github.com/AbhayRao2k/Movie-App-React-Native.git",
    live_demo_link: "https://github.com/AbhayRao2k/Movie-App-React-Native.git",
  },
];

export { services, technologies, projects };
