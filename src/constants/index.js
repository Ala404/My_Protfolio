import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  vuejs,
  html,
  css,
  django,
  tailwind,
  pinia,
  git,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  hoskadev,
  internship,
  quizzyDashboard,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Vuejs Developer",
    icon: mobile,
  },
  {
    title: "Django Developer",
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
    name: "Vue JS",
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
    name: "Django",
    icon: django,
  },
  {
    name: "git",
    icon: git,
  },

];

const experiences = [
  {
    title: "Django Developer",
    company_name: "",
    icon: null,
    iconBg: "#383E56",
    date: "October 2022 - December 2022",
    points: [
      " Developing an Absence Management Website using Django . As a team of 10 people, me and my university colleagues have developed a website that groups Teachers and Students together to manage their absences and their courses.",
    ],
  },
  {
    title: "Vuejs Developer",
    company_name: "",
    icon: null,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - Mar 2023",
    points: [
      "Developing an Internship Management Website using Vuejs . As a My Tird Year undergraduate project, me and my university colleague have developed a website that helps students to find and apply for internships.",
    ],
  },
  {
    title: "Vuejs Developer (Internship)",
    company_name: "Hoskadev",
    icon: hoskadev,
    iconBg: "#383E56",
    date: "Aug 2023 - Now",
    points: [
      "Developing and maintaining web applications using Vuejs and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Smail Khelil",
    designation: "CFO",
    company: "Acme Co",
    image:
      "https://scontent.fogx1-2.fna.fbcdn.net/v/t39.30808-1/276124414_500758021605482_2915968568691686496_n.jpg?stp=c1.3.318.318a_dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=5740b7&_nc_ohc=WJtNoUVYiI4AX_eGD0D&_nc_ht=scontent.fogx1-2.fna&oh=00_AfBcUFYjf8GtVixJQk8C_TuTrkbd79xg1p4se-quVYpplA&oe=65938506",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Zeggai Abdullah",
    designation: "COO",
    company: "DEF Corp",
    image:
      "https://scontent.fogx1-2.fna.fbcdn.net/v/t1.6435-9/187099528_199351202024886_2513046693755105174_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=be3454&_nc_ohc=5HbL8G3V5AMAX883tw1&_nc_ht=scontent.fogx1-2.fna&oh=00_AfD_Gh3wd7sYZU-QDatEdsWuiu0oz4zb66Xq50AW6BPi2Q&oe=65B6521E",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Sadjed Nemli",
    designation: "CTO",
    company: "456 Enterprises",
    image:
      "https://scontent.fogx1-1.fna.fbcdn.net/v/t39.30808-6/371103595_681736927156964_1599699604266341163_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=FD2Q-D-l_5cAX8_PQ7W&_nc_ht=scontent.fogx1-1.fna&oh=00_AfDBmukx3WZtkOx7AMJdxJo8mAMjKIEFK4UKLjhMCNUPwQ&oe=659345D7",
  },
];

const projects = [
  {
    name: "Absence Management Backend",
    description:
      "Developing an Absence Management Backend using Django . I have developed a backend that groups Teachers and Students together to manage their absences and their courses.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "Django Rest Framework",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
    ],
    image: null,
    source_code_link:
      "https://github.com/Ala404/Backend_Project_University_Absence_Managment.git",
  },
  {
    name: "Internship Management Website",
    description:
      "Vuejs Web application that helps students to find and apply for internships.",
    tags: [
      {
        name: "vuejs",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: internship,
    source_code_link: "https://github.com/Ala404/InternshipManagment.git",
  },
  {
    name: "Quizzy App",
    description:
      "Quizzy App is a web application that allows users to  play quizzes.",
    tags: [
      {
        name: "vuejs",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "blue-text-gradient",
      },
      {
        name: "vuex",
        color: "green-text-gradient",
      },
      {
        name: "django rest framework",
        color: "pink-text-gradient",
      },
    ],
    image: quizzyDashboard,
    source_code_link: "https://github.com/Ala404/QuizzyFront.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
