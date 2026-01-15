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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  github,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  tripguide,
  jobit,
  threejs,

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
    title: "React JS Developer",
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

  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap 5",
    icon: docker,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "github",
    icon: github,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
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
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "E-Commerce Platform",
    description:
      "I developed a full-stack e-commerce platform using React, Redux, Node.js, Express.js, and MongoDB, with secure JWT authentication, role-based access control, cookies, bcrypt, and protected routes. The platform features product and category management, search and filter, add-to-cart, wishlist, order processing, and payment workflow. I built a fully responsive UI using Tailwind CSS and ShadCN UI, with optimized global state management and RESTful APIs for efficient client–server communication.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js",
        color: "purple-text-gradient",
      },
      {
        name: "Express.js",
        color: "blues-text-gradient",
      },
      {
        name: "redux",
        color: "blue-text-gradient",
      },
      {
        name: "redux toolkit",
        color: "purple-text-gradient",
      },
      {
        name: "JWT",
        color: "blue-text-gradient",
      },
      {
        name: "bcrypt",
        color: "green-text-gradient",
      },
      {
        name: "cookies",
        color: "orange-text-gradient",
      },


    ],
    image: tripguide,
    source_code_link: "https://github.com/Vishnu20041224/vishnu-ecommerce/tree/main",
    project_link: "https://vishnu-ecommerce-frontend.onrender.com/",
  },
  {
    name: "Gym Management System",
    description:
      "I developed a full-stack Gym Management Web Application using React.js, Node.js, Express.js, and MongoDB, styled with Tailwind CSS. The application includes secure user authentication with JWT and cookies, an admin dashboard for managing users, trainers, and schedules, and user profile management. It features trainer listing, session scheduling, and a contact system integrated with Nodemailer for email notifications. This project demonstrates my ability to build scalable MERN applications with secure authentication, RESTful APIs, and a responsive, modern user interface.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "purple-text-gradient",
      },
      {
        name: "Express.js",
        color: "blues-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "JWT",
        color: "blue-text-gradient",
      },
      {
        name: "bcrypt",
        color: "green-text-gradient",
      },
      {
        name: "cookies",
        color: "orange-text-gradient",
      },

    ],
    image: jobit,

    source_code_link: "https://github.com/Vishnu20041224/Gym",
    project_link: "https://vishnu-gym.vercel.app/",

  },
  // {
  //   name: "GeminiAI",
  //   description:
  //   "Built an  Gemini’s using React.js intelligent chat experience. Implemented real-time conversation flow, dynamic UI components, and responsive design for smooth user interaction and modern visual appeal.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Bootstrap 5",
  //       color: "purple-text-gradient",
  //     },
  //   ],
  //   image: tripguide2,
  //   source_code_link: "https://github.com/Vishnu20041224/GeminiAI",
  //   project_link: "https://gemini-ai-lac-two.vercel.app/",

  // },
  {
    name: "E-Commerce",
    description:
      "Developed a responsive and dynamic E-Commerce web application using React.js and Bootstrap 5, featuring product category browsing, advanced search, filtering, and sorting functionality. Implemented Add to Cart and Wishlist features with localStorage for persistent user data across sessions. Designed custom color themes and an intuitive UI to enhance user experience and personalization. The project focuses on efficient state management, reusable components, and a smooth, user-friendly shopping flow.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      // {
      //   name: "mongodb",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "tailwind",
      //   color: "pink-text-gradient",
      // },
      {
        name: "Bootstrap 5",
        color: "purple-text-gradient",
      },

    ],
    image: carrent,
    source_code_link: "https://github.com/Vishnu20041224/Ecommerce",
    project_link: "https://vsecommerce.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };