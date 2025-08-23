// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reactnativeLogo from './assets/tech_logo/reactjs.png'; // Using React logo for React Native
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import medusajs from './assets/tech_logo/medusa.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import kotlinLogo from './assets/tech_logo/kotlin.png'; // You'll need to add this logo
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import fiverrLogo from './assets/tech_logo/fiverr.png';
import flutterflowLogo from './assets/tech_logo/flutterflow.png'; // You'll need to add this logo

// Experience Section Logo's
import kakushinLogo from './assets/company_logo/kakushin.png';

// Education Section Logo's
import vuLogo from './assets/education_logo/vu_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import matricLogo from './assets/education_logo/gla_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'React Native', logo: reactnativeLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Medusa JS', logo: medusajs },
      { name: 'PostgreSQL', logo: postgreLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'TypeScript', logo: typescriptLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'Kotlin', logo: kotlinLogo },
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Figma', logo: figmaLogo },
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'FlutterFlow', logo: flutterflowLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: fiverrLogo,
      role: "Full-Stack Medusajs Developer",
      company: "Fiverr",
      date: "OCT 2022 - Present",
      desc: " I worked on more than 20+ Medusa.js projects on the Fiverr freelance platform. I customized both the backend and frontend of these websites based on client requirements. Additionally, I can integrate any Next.js template into Medusa.js and customize its backend according to specific needs. Feel free to reach out to me!",
      skills: [
        "Next Js",
        "Medusa JS",
        "Node JS",
        "TypeScript",
        "Tailwind CSS",
        "React JS",
        "PostgreSQL"
      ],
    },
    {
      id: 1,
      img: kakushinLogo,
      role: "Fullstack Engineer",
      company: "Kakushin",
      date: "July 2023 - Present",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as Nextjs, React, ReactNative, Angular, TypeScript and Node.js. I collaborated with cross-functional teams to deliver high-quality solutions that meet client requirements. I also worked on the backend using technologies like Express.js, MongoDB, and PostgreSQL. My contributions have resulted in improved user experience and enhanced website functionality. I am excited to continue contributing to the development of innovative projects as a Fullstack Engineer at Kakushin.HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "NextJS",
        "ReactJS",
        "JavaScript",
        "ReactNative",
        "Angular",
        "TypeScript",
        "NodeJS",
        "Express.js",
        "MongoDB",
        "PostgreSQL",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    }
  ];
  
  export const education = [
    {
      id: 0,
      img: vuLogo,
      school: "Virtual University of Pakistan",
      date: "Sept 2023 - Present",
      grade: "2.31 CGPA",
      desc: "The BS CS program at the Virtual University of Pakistan is a four-year undergraduate degree focusing on computer science. It offers a comprehensive curriculum covering subjects such as programming, data structures, algorithms, networking, software engineering, and more. The program is delivered through an online learning platform, providing flexibility for students to study at your own pace. Assessments and exams are conducted to evaluate understanding, and graduates can pursue careers in various fields including software development, web development, cybersecurity, and research.",
      degree: "Bachelor of Computer Science - BScs (Computer Science)",
    },
    {
      id: 1,
      img: bsaLogo,
      school: "Post Graduate College, Fateh Pur Layyah",
      date: "Sept 2020 - Aug 2022",
      grade: "84.6%",
      desc: "I completed my class 12 education from Government Post Graduate College, Fateh Pur Layyah, under the DG Khan board, where I studied Physics, Chemistry, and Mathematics (PCM).",
      degree: "Faculty of Science - FSC",
    },
    {
      id: 2,
      img: matricLogo, // Using existing logo as placeholder
      school: "Government High School Pakki Shah Mardan",
      date: "2018 - 2020",
      grade: "981/1100",
      desc: "I completed my Matric (Science) education from Government High School Pakki Shah Mardan under the Sargodha Board. This foundational education in science subjects laid the groundwork for my future studies in computer science and technology.",
      degree: "Matriculation (Science)",
    }
  ];
  
  export const projects = [
    {
      id: 0,
      title: "StudyBlocks Learnmix",
      description:
        "This platform is an education marketplace that utilizes a Meduajs backend and a Next.js frontend. Creators serve as vendors, designing educational products for sale. They earn commissions each time a customer makes a purchase. The platform aims to provide a seamless and user-friendly experience for both creators and customers.",
      image: githubdetLogo,
      tags: ["Medusa JS", "Next.js", "Next.js", "JavaScript", "React JS", "PostgreSQL"],
      webapp: "https://studyblock.up.railway.app",
    },
    {
      id: 1,
      title: "Sookup Marketplace",
      description:
        "This marketplace is built with Mercurjs and Next.js. It is a marketplace for selling products, with creators serving as vendors and customers buying products. it has admin dashboard to manage vendors and customers. The platform aims to provide a seamless and user-friendly experience for sellers, customers, and administrators.",
      image: csprepLogo,
      tags: ["Medusa JS", "Next.js", "PostgreSQL", "Mercurjs", "TypeScript", "TailwindCSS"],
      webapp: "https://sookup-frontend-production.up.railway.app",
    },
    {
      id: 2,
      title: "Riddl3 – a tricky riddles game",
      description:
        "A React-Native based App that provides a collection of tricky riddles for users to solve. The intuitive design and smooth experience make it a go-to app for puzzle enthusiasts.",
      image: movierecLogo,
      tags: ["ReactNative", "Expo", "Firebase"],
      webapp: "https://play.google.com/store/apps/details?id=com.kakushin.riddl3",
    },
    {
      id: 3,
      title: "MySizer",
      description:
        "A comprehensive clothing size recommendation system designed to help users find their perfect fit. Built with Next.js and Medusa.js, it offers a seamless shopping experience by providing personalized size suggestions based on user inputs and preferences.",
      image: npmLogo,
      tags: ["Next.js", "Medusa.js", "E-commerce", "Personalization"],
      webapp: "https://mysizer.app/",
    },
    {
      id: 4,
      title: "MySizer Chrome Extension",
      description:
        "A Chrome extension that provides users with quick access to the MySizer clothing size recommendation system. It allows users to find their perfect fit without leaving their current browsing context.",
      image: taskremLogo,
      tags: ["JavaScript", "Chrome Extension", "Reactjs"],
      webapp: "https://chromewebstore.google.com/detail/mysizer-size-calculator-f/hmjncaebpnndembgoklkhgebhpdebmhd",
    },
    {
      id: 5,
      title: "Procast App",
      description:
        "A productivity app designed to help users manage their time effectively. It features task scheduling, reminders, and a user-friendly interface to enhance focus and productivity.",
      image: webverLogo,
      tags: ["ReactNative", "Firebase", "UI/UX", "Productivity"],
      webapp: "https://procast.space/",
    },
    {
      id: 6,
      title: "L3arn Platform",
      description:
        "Interactive learning management system designed to provide a seamless educational experience. Built with React JS, Firebase cloud functions, Redux, PostgreSQL. it offers features like course creation, user management, and payment integration.",
      image: cmLogo,
      tags: ["React JS", "Firebase", "Cloud Functions","Payment Integration"],
      webapp: "https://l3arn.org/",
    },
    {
      id: 7,
      title: "Read My Palm App",
      description:
        "An engaging palm reading app that provides users with insights based on their palm lines. Built with expo ReactNative, it offers a user-friendly interface and an interactive experience for users interested in palmistry.",
      image: imagesearchLogo,
      tags: ["ReactNative", "Expo", "Palmistry", "Firebase"],
      webapp: "https://play.google.com/store/apps/details?id=com.kakushin.readmypalm",
    },
    {
      id: 8,
      title: "Read My Cup App",
      description:
        "An interactive tea leaf reading app that provides users with insights based on their tea leaf patterns. Built with expo ReactNative, it offers a user-friendly interface and an engaging experience for users interested in tea leaf reading.",
      image: removebgLogo,
      tags: ["ReactNative", "Expo", "Tea Leaf Reading", "Firebase"],
      webapp: "https://play.google.com/store/apps/details?id=com.kakushin.coffee",
    },
  ];  