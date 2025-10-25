import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  vuejs,
  html,
  css,
  django,
  nestjs,
  tailwind,
  pinia,
  git,
  docker,
  primevue,
  quasar,
  prisma,
  mysql,
  postgresql,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  hoskadev,
  sorino,
  internship,
  quizzyDashboard,
  hodnaImmo,
  sendDz,
  sadineMuebles,
  github,
  linkedin,
  twitter,
  email,
  insta,
  fb,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Fullstack Developer",
    icon: web,
  },
  {
    title: "Vue.js Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
    name: "Vue.js",
    icon: vuejs,
  },
  {
    name: "Pinia",
    icon: pinia,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "PrimeVue",
    icon: primevue,
  },
  {
    name: "Quasar",
    icon: quasar,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "NestJS",
    icon: nestjs,
  },
  {
    name: "Prisma",
    icon: prisma,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Fullstack Developer",
    company_name: "Sorino",
    icon: sorino,
    iconBg: "#383E56",
    date: "August 2024 - Present",
    points: [
      "Developing full-stack applications using Vue.js, PrimeVue, and Tailwind CSS for frontend",
      "Implementing backend services including user role management using Prisma and NestJS",
      "Building RESTful APIs and performing CRUD operations",
      "Managing application state using Pinia state management",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Hoskadev",
    icon: hoskadev,
    iconBg: "#E6DEDD",
    date: "August 2023 - February 2024",
    points: [
      "Developed SaaS web applications using Vue.js and Tailwind CSS frameworks",
      "Implemented responsive design and internationalization for 3 languages using i18n",
      "Integrated REST APIs and performed CRUD operations",
      "Managed application state using Pinia state management library",
    ],
  },
  {
    title: "Vue.js Developer (University Project)",
    company_name: "Academic Project",
    icon: null,
    iconBg: "#383E56",
    date: "February 2023 - March 2023",
    points: [
      "Developed an Internship Management Website using Vue.js as a third-year undergraduate project",
      "Created a platform helping students find and apply for internships",
      "Collaborated with university colleagues to deliver a complete web application",
    ],
  },
];

const projects = [
  {
    name: "Hodna Immo",
    description:
      "A SaaS real estate Algerian platform similar to AirBnB where users can browse, review, search for properties, and contact real estate holders. Built with Vue.js, Tailwind CSS, and Pinia.",
    tags: [
      {
        name: "Vue.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Pinia",
        color: "pink-text-gradient",
      },
      {
        name: "REST API",
        color: "blue-text-gradient",
      },
    ],
    image: hodnaImmo,
    source_code_link: "",
  },
  {
    name: "SendDz",
    description:
      "A SaaS delivery platform connecting drivers with sellers online. Implemented seller dashboard with API integration using Vue.js and Quasar framework.",
    tags: [
      {
        name: "Vue.js",
        color: "blue-text-gradient",
      },
      {
        name: "Quasar",
        color: "green-text-gradient",
      },
      {
        name: "REST API",
        color: "pink-text-gradient",
      },
      {
        name: "Pinia",
        color: "blue-text-gradient",
      },
    ],
    image: sendDz,
    source_code_link: "https://send-dz.com/",
  },
  {
    name: "Sadine Muebles",
    description:
      "Full-stack furniture management website. Contributed to backend services with NestJS including QR code integration and role-based endpoints, and frontend development for invoices and payments pages.",
    tags: [
      {
        name: "Vue.js",
        color: "blue-text-gradient",
      },
      {
        name: "NestJS",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "blue-text-gradient",
      },
    ],
    image: sadineMuebles,
    source_code_link: "https://sadinemuebles.com/",
  },
  {
    name: "STT Model for Algerian Darija",
    description:
      "Fine-tuned a Transformers-based Speech-To-Text model for Algerian Darija on 6 hours of audio samples, achieving 43 WER (Word Error Rate) as results.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Transformers",
        color: "green-text-gradient",
      },
      {
        name: "Wav2Vec2",
        color: "pink-text-gradient",
      },
      {
        name: "Librosa",
        color: "blue-text-gradient",
      },
    ],
    image: "",
    source_code_link: "",
  },
  {
    name: "Quizzy App",
    description:
      "A comprehensive web application that allows users to play and create quizzes. Full-stack application with Vue.js frontend and Django REST Framework backend.",
    tags: [
      {
        name: "Vue.js",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "REST API",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "blue-text-gradient",
      },
    ],
    image: quizzyDashboard,
    source_code_link: "https://github.com/Ala404/QuizzyFront.git",
  },
];

const contactLinks = [
  {
    name: "github",
    link: "https://github.com/Ala404",
    icon: github,
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/ala-eddine-kezzouz-546a19218/",
    icon: linkedin,
  },
  {
    name: "twitter",
    link: "https://twitter.com/AlaDinKez404",
    icon: twitter,
  },
  {
    name: "instagram",
    link: "https://www.instagram.com/the_scar_404/",
    icon: insta,
  },
  {
    name: "facebook",
    link: "https://www.facebook.com/alaeddine.kazzouz.3",
    icon: fb,
  },
];

export { services, technologies, experiences, projects, contactLinks };
