import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Hamza Aslikh",
  initials: "DV",
  url: "https://dub.sh/dillion",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Fullstack developer with a passion for creating visually stunning and user-friendly web applications.",
  summary:
    "I am a Software Developer specializing in web development and digital marketing. Based in Agadir, Morocco, I am passionate about transforming complex problems into simple, aesthetic, and intuitive solutions. My goal is to convey your message and identity in the most creative and impactful way possible, ensuring that each project faithfully reflects your values while captivating your target audience.",
  avatarUrl: "/avatar1.png",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "Tailwind CSS",
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Vercel",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog", navbar: false },
  ],
  contact: {
    email: "hello@hamzaaslikh.com",
    tel: "+212 6 05 36 98 70",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/OclaZ",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/hamza-aslikh/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/0claz",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:hello@hamzaaslikh.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Universal Visa",
      href: "https://universalvisa.org",
      badges: ["Full time"],
      location: "Agadir, Morocco",
      title: "Digital Marketing Manager and Back Office Manager",
      logoUrl: "/atomic.png",
      start: "September 2023",
      end: "Mars 2024",
      description: `
    As a Digital Marketing Manager, I developed and executed online strategies 
    to enhance brand visibility, managed social media campaigns, optimized 
    websites for SEO, and analyzed performance metrics to drive growth. 
    As a Back Office Manager, I led a team of 6, streamlined administrative 
    processes, coordinated operations, and ensured efficient task execution 
    to support business goals.
      `,
    },
    {
      company: "AscensorJob",
      badges: ["Full time"],
      href: "https://www.linkedin.com/company/ascensorjob/posts/?feedView=all",
      location: "Agadir, Morocco",
      title: "Wordpress Developer",
      logoUrl: "/asensorjob.jpg",
      start: "December 2023",
      end: "Mars 2024",
      description:
        "I built a custom wordpress theme to be used on the website of the company. I also built a custom plugin to be used on the website of the company.",
    },
  ],
  education: [
    {
      school: "Houmane El-Fatwaki High School",
      href: "https://g.co/kgs/B4hSFKA",
      degree: "High School Diploma in Mathematics B French option",
      logoUrl: "/houmane.jpg",
      start: "2018",
      end: "2019",
    },
    {
      school: "Ibn Zohr University",
      href: "https://www.uiz.ac.ma/",
      degree:
        "1st Year of Bachelor's Degree of Mathematics and Computer Science",
      logoUrl: "/ibnzohr.jpg",
      start: "2019",
      end: "2020",
    },
    {
      school: "Free Institute of Computer and Business Studies (ILEIC,AGADIR)",
      href: "https://ileic.com/",
      degree: "Specialized Technician in Software Development",
      logoUrl:
        "https://impro.usercontent.one/appid/oneComWsb/domain/ileic.com/media/ileic.com/onewebmedia/logo.png?etag=%22c759-5a412d4e%22&sourceContentType=image%2Fpng&ignoreAspectRatio&resize=382%2B260",
      start: "2021",
      end: "2023",
    },
    {
      school: "Ibn Zohr University",
      href: "https://www.uiz.ac.ma/",
      degree: "1st Year of Bachelor's Degree of Software Engineering",
      logoUrl: "/ibnzohr.jpg",
      start: "2024",
      end: "Now",
    },
  ],
  projects: [
    {
      title: "Faturly",
      href: "https://faturly.online",
      dates: "Micro SaaS",
      active: true,
      description:
        "Faturly is a professional invoice application tailored for online businesses, developed with Next.js. It enables businesses to streamline their invoicing processes, generate PDF invoices, and send them via email with ease.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Vercel",
        "AuthJs",
        "PDFJS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://faturly.online",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Oclaz/faturly",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Faturly.png",
      video: "",
    },
    {
      title: "WeLoveCall",
      href: "https://welovecall-oclazs-projects.vercel.app/",
      dates: "Landing Page",
      active: true,
      description:
        "WeLoveCall is a comprehensive service designed to generate qualified real estate leads through optimized advertising campaigns. It offers a streamlined approach to help real estate brokers achieve consistent growth in their portfolios by targeting potential clients effectively.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://welovecall-oclazs-projects.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/OclaZ/welovecall",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "wlc.mp4",
    },
    {
      title: "Ta7alil Ai",
      href: "https://ta7alil-ai.vercel.app/",
      dates: "AI Platform",
      active: true,
      description:
        "TA7ALIL AI is an advanced healthcare application that leverages artificial intelligence to analyze medical reports. Built with cutting-edge technologies, it provides healthcare professionals with quick and accurate insights from medical documents.",
      technologies: [
        "Next.js",
        "Typescript",
        "Gemini AI",
        "Pinecone",
        "mixedbread-ai/mxbai-embed-large-v1",
        "TailwindCSS",
        "Shadcn UI",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://ta7alil-ai.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/OclaZ/ta7alil-Ai",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/ta7alil.mp4",
    },
    {
      title: "Clean Madina",
      href: "https://github.com/OclaZ/clean_madina",
      dates: "Web Application",
      active: true,
      description:
        "CleanMadina is a Moroccan waste management application developed using Next.js. This app aims to streamline waste collection processes and enhance community engagement in environmental sustainability.",
      technologies: [
        "Next.js",
        "Typescript",
        "Gemini AI",
        "PostgreSQL",
        "Drizzle ORM",
        "TailwindCSS",
        "Shadcn UI",
        "Vercel",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/OclaZ/clean_madina",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "cleanmadina.mp4",
    },
  ],
} as const;
