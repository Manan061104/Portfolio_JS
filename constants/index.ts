// Constants file - All application data is stored here
// React icons import for navigation
import { RxHome, RxPerson, RxDashboard, RxClipboard } from "react-icons/rx";

// Skills data - Array containing all programming skills
export const SkillData = [
  {
    name: "Html 5",
    Image: "/html.png",
    width: 80,
    height: 80,
  },
  {
    name: "Css",
    Image: "/css.png",
    width: 80,
    height: 80,
  },
  {
    name: "JavaScript",
    Image: "/js.png",
    width: 65,
    height: 65,
  },
  {
    name: "Tailwind Css",
    Image: "/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    name: "React",
    Image: "/react.png",
    width: 80,
    height: 80,
  },
  {
    name: "Redux",
    Image: "/redux.png",
    width: 80,
    height: 80,
  },

  {
    name: "TypeScript",
    Image: "/ts.png",
    width: 80,
    height: 80,
  },
  {
    name: "Next js 13",
    Image: "/next.png",
    width: 80,
    height: 80,
  },
  {
    name: "Java",
    Image: "/java.webp",
    width: 90,
    height: 90,
  },
  {
    name: "Python",
    Image: "/python.png",
    width: 150,
    height: 150,
  },
  {
    name: "Node js",
    Image: "/node-js.png",
    width: 80,
    height: 80,
  },
  {
    name: "Mongo db",
    Image: "/mongodb.png",
    width: 40,
    height: 40,
  },
  
  {
    name: "Pandas",
    Image: "/pandas.png",
    width: 150,
    height: 150,
  },
  
  {
    name: "NumPy",
    Image: "/NumPy.png",
    width: 150,
    height: 150,
  },
  
  {
    name: "Matplotlib",
    Image: "/matplotlib.png",
    width: 150,
    height: 150,
  },
];

// Social Media Links - Social media profiles data
export const Socials = [
  {
    name: "Instagram", // Instagram name
    src: "/instagram.svg", // Instagram icon path
    url: "https://www.instagram.com/manann_pathak/", // Instagram profile link
  },
  {
    name: "LinkedIn", // LinkedIn name
    src: "/linkedin.svg", // LinkedIn icon path
    url: "https://www.linkedin.com/in/mananpathak01/", // LinkedIn profile link
  },
  {
    name: "GitHub", // GitHub name
    src: "/github.svg", // GitHub icon path
    url: "https://github.com/Manan061104", // GitHub profile link
  },
];
// Projects data - Information about all projects
export const Projects = [
  {
    title: "Blog Project", // Project name
    text: "A modern blogging platform with user authentication, rich text editor, comment system, and responsive design.", // Project description
    src: "/Blog.JPG", // Project image path
    codeLink: "https://github.com/Manan061104/Blog_Pro", // GitHub repository link
    liveLink: "https://blogpro-kohl.vercel.app/", // Live website link
  },
  {
    title: "Portfolio Website", // Project name
    text: "A futuristic JARVIS-inspired portfolio website built with Next.js, TypeScript, and advanced CSS animations. Features holographic effects, glowing interfaces, and Iron Man-themed design elements.", // Project description
    src: "/Port.JPG", // Project image path
    codeLink: "https://github.com/Manan061104/Portfolio_JS.git", // GitHub repository link
    liveLink: "https://portfolio-js-ruddy.vercel.app/", // Live website link
  },
];

export const NavLinks = [
  {
    name: "/",
    icon: RxHome,
    link: "/",
  },
  {
    name: "/my-skills",
    icon: RxPerson,
    link: "/my-skills",
  },
  {
    name: "/my-projects",
    icon: RxDashboard,
    link: "/my-projects",
  },
  {
    name: "/contact-me",
    icon: RxClipboard,
    link: "/contact-me",
  },
];