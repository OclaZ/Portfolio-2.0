import { Icons } from "@/components/icons";
import { HomeIcon, icons, NotebookIcon, PanelsTopLeftIcon } from "lucide-react";

export const DATA = {
  name: "Hamza Aslikh",
  initials: "HA",
  url: "https://hamzaaslikh.com",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Fullstack developer with a passion for creating visually stunning and user-friendly web applications.",
  summary:
    "I am a Software Developer specializing in web development and digital marketing. Based in Agadir, Morocco, I am passionate about transforming complex problems into simple, aesthetic, and intuitive solutions. My goal is to convey your message and identity in the most creative and impactful way possible, ensuring that each project faithfully reflects your values while captivating your target audience.",
  avatarUrl: "/avatar1.png",
  Skills: [
    {
      id: 1,
      title: "HTML",
      href: "/html.svg",
      site: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      id: 2,
      title: "CSS",
      href: "/css.svg",
      site: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      id: 3,
      title: "JavaScript",
      href: "/javascript.svg",
      site: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      id: 4,
      title: "Tailwind CSS",
      href: "/tailwindcss.svg",
      site: "https://tailwindcss.com",
    },
    {
      id: 5,
      title: "React",
      href: "/react-logo.svg",
      site: "https://react.dev",
    },
    {
      id: 6,
      title: "Next.js",
      href: "/next-logo.svg",
      site: "https://nextjs.org",
    },
    {
      id: 7,
      title: "TypeScript",
      href: "/typescript.svg",
      site: "https://www.typescriptlang.org",
    },
    {
      id: 8,
      title: "Node.js",
      href: "/nodejs.svg",
      site: "https://nodejs.org",
    },
    {
      id: 9,
      title: "Python",
      href: "/python.svg",
      site: "https://www.python.org",
    },
    {
      id: 10,
      title: "Postgres",
      href: "/postgresql.svg",
      site: "https://www.postgresql.org",
    },
    {
      id: 11,
      title: "Prisma",
      href: "/prisma.svg",
      site: "https://www.prisma.io",
    },
    {
      id: 12,
      title: "Drizzle",
      href: "/drizzle.svg",
      site: "https://orm.drizzle.team",
    },
    {
      id: 13,
      title: "MongoDB",
      href: "/mongo.svg",
      site: "https://mangojs.dev",
    },
    {
      id: 14,
      title: "Docker",
      href: "/docker.svg",
      site: "https://www.docker.com",
    },
    {
      id: 15,
      title: "Vercel",
      href: "/vercel.svg",
      site: "https://vercel.com",
    },
    {
      id: 16,
      title: "Windev",
      href: "/windev.svg",
      site: "https://www.pcsoft-windev.com",
    },
    {
      id: 17,
      title: "Java",
      href: "/java.svg",
      site: "https://www.oracle.com/java",
    },
    {
      id: 18,
      title: "C++",
      href: "/cpp.svg",
      site: "https://isocpp.org",
    },
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog", navbar: false },
    {
      href: "/projects",
      icon: PanelsTopLeftIcon,
      label: "Projects",
      navbar: false,
    },
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
      iconLists: [
        "/next-logo.svg",
        "/tailwindcss.svg",
        "/typescript.svg",
        "/prisma.svg",
        "/postgresql.svg",
        "/shadcn.svg",
        "/vercel.svg",
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
      iconLists: [
        "/next-logo.svg",
        "/tailwindcss.svg",
        "/typescript.svg",
        "/vercel.svg",
        "/shadcn.svg",
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
      iconLists: [
        "/next-logo.svg",
        "/tailwindcss.svg",
        "/typescript.svg",
        "/gemini.svg",
        "/shadcn.svg",
        "/vercel.svg",
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
      iconLists: [
        "/next-logo.svg",
        "/tailwindcss.svg",
        "/typescript.svg",
        "/gemini.svg",
        "/postgresql.svg",
        "/drizzle.svg",
        "/shadcn.svg",
        "/vercel.svg",
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
  certificates: [
    {
      name: "ALX AiCE - AI Career Essentials",
      issuingOrganization: "Alx Africa",
      issueDate: " 3rd December 2024",
      credentialId: "FmYXfM5Ec6",
      credentialUrl: "https://intranet.alxswe.com/certificates/FmYXfM5Ec6",
      logo: "/alx.png",
    },
    {
      name: "Zerifikat B1",
      issuingOrganization: "ÖSD – Österreichisches Sprachdiplom Deutsch",
      issueDate: "October 2020",
      credentialId: "ZB12012344",
      credentialUrl:
        "https://media.licdn.com/dms/image/v2/D4E2DAQFrqCWDdvu9Bw/profile-treasury-document-cover-images_1280/profile-treasury-document-cover-images_1280/0/1709529045626?e=1734789600&v=beta&t=bIHr3xcX6k7NXi4IIggMVl0CfD8Ekb7avjbZ1FQtbwY",
      logo: "/osd.jpg",
    },
  ],
  keywords: [
    "Hamza Aslikh",
    "Aslikh Hamza",
    "Moroccan Developer",
    "Software Engineer Hamza",
    "Hamza Aslikh Portfolio",
    "Moroccan Entrepreneur",
    "Full-Stack Developer",
    "Front-End Developer",
    "Back-End Developer",
    "Web Development",
    "JavaScript Expert",
    "Python Developer",
    "Software Solutions",
    "Next.js Developer",
    "TypeScript Specialist",
    "TailwindCSS Expert",
    "React Developer",
    "Node.js Back-End",
    "API Integration",
    "Hamza Aslikh Projects",
    "Innovative Apps by Hamza",
    "Modern Web Apps",
    "Tech Solutions Morocco",
    "Moroccan Tech",
    "Moroccan Startups",
    "Developer from Morocco",
    "Moroccan Innovation",
  ],
  author: "Hamza Aslikh",
} as const;
