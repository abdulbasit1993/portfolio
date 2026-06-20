import user_image from "./user-image.png";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";

export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
};

export const workData = [
  {
    title: "PakFit",
    description: "Mobile app",
    bgImage: "/pakfit.png",
    fullDescription:
      "PakFit is Pakistan's 1st Fitness App and a Digital Fitness Platform powered by Learn to Burn, founded by Omar Bilal Ahmad who is Pakistan's 1st Fitness Consultant and a certified Fitness Professional from California, USA. PakFit is a one stop solution to all your Health and Fitness related queries.",
    technologies: ["React Native"],
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.grtech.pakfit&hl=en&gl=US",
  },
  {
    title: "Fit From Anywhere",
    description: "Mobile app",
    bgImage: "/fitfromanywhere.png",
    fullDescription:
      "Fit From Anywhere! is a robust mobile platform that removes the hurdle of getting a good workout without equipment or not knowing what exercises to do in general that are efficient & conducive to your goal.",
    technologies: ["React Native"],
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.cameronclarkfitness.getfit.own&hl=en&gl=US",
  },
  {
    title: "Jobgenie",
    description: "Mobile app",
    bgImage: "/jobgenie.png",
    fullDescription:
      "JobGenie is the easiest way for businesses to find dependable labour on demand and for workers to get hired quickly for short-term jobs.",
    technologies: ["React Native"],
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.getweys.jobgenie&hl=en&gl=US",
  },
  {
    title: "Koyal",
    description: "Mobile App",
    bgImage: "/koyal.png",
    fullDescription:
      "Koyal – the Complete Pakistani Cultural Masterpieces at one place!",
    technologies: ["React Native"],
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.mobitising.koyeel&hl=en&gl=US",
  },
  {
    title: "ABNovaMart",
    description: "Web app",
    bgImage: "/abnovamart.png",
    fullDescription:
      "A simple and modern E-commerce online store web app complete with Payment integration and Admin dashboard, created using Next.js, Tailwind and shadcn/ui.",
    technologies: [
      "Next.js",
      "Tailwind",
      "Shadcn/ui",
      "Node.js",
      "MongoDB",
      "Stripe",
    ],
    liveUrl: "https://ab-nova-mart.abnovamart223.workers.dev/",
  },
  {
    title: "ABNovaMart Admin",
    description: "Web app",
    bgImage: "/abnovamart.png",
    fullDescription: "Admin Dashboard for ABNovaMart Web App.",
    technologies: ["React.js", "Node.js", "MongoDB"],
    liveUrl: "https://abnovamart-admin.abnovamart223.workers.dev/",
  },
];

export const serviceData = [
  {
    icon: assets.web_icon,
    title: "Web app",
    description: "Web development is the process of building, programming...",
    fullDescription:
      "I specialize in building modern, scalable web applications using the latest frontend and backend technologies. From responsive single-page applications to full-stack platforms, I deliver solutions that are fast, secure, and user-friendly. My web development process includes thorough planning, clean code architecture, rigorous testing, and performance optimization to ensure your application exceeds expectations.",
    features: [
      "Responsive & mobile-first design",
      "SEO optimization & performance tuning",
      "API integration & backend development",
      "Progressive Web App (PWA) capabilities",
    ],
    link: "",
  },
  {
    icon: assets.mobile_icon,
    title: "Mobile app",
    description:
      "Mobile app development involves creating software for mobile devices...",
    fullDescription:
      "I build cross-platform mobile applications using React Native that run seamlessly on both iOS and Android devices. By leveraging a single codebase, I deliver native-like performance and user experience while reducing development time and cost. Each app is crafted with attention to platform-specific design guidelines, smooth animations, and offline-first capabilities.",
    features: [
      "Cross-platform (iOS & Android)",
      "Native-like performance & animations",
      "Offline-first architecture",
      "Push notifications & deep linking",
    ],
    link: "",
  },
  {
    icon: assets.code_icon,
    title: "Backend & APIs",
    description: "Building robust server-side solutions with RESTful APIs...",
    fullDescription:
      "I design and develop scalable backend systems and APIs that power modern applications. From architecting database schemas and building RESTful endpoints to implementing authentication, caching, and real-time features — I ensure your server-side infrastructure is secure, performant, and built to scale. I work with Node.js, Express, and cloud services to deliver production-ready backends.",
    features: [
      "RESTful API development",
      "Database design (MongoDB, MySQL, PostgreSQL)",
      "Authentication & authorization (JWT, OAuth)",
      "Cloud deployment & CI/CD pipelines",
    ],
    link: "",
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages & Framework",
    description:
      "HTML, CSS, JavaScript, React Js, Next Js, React Native, Node Js, Express Js",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "Bachelor of Science in Computer Science",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description: "Built more than 5 projects",
  },
];

export const toolsData = [
  assets.vscode,
  assets.firebase,
  assets.mongodb,
  assets.figma,
  assets.git,
];
