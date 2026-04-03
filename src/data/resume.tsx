import { Icons } from "@/components/icons";
import { HomeIcon, icons, NotebookIcon, PanelsTopLeftIcon } from "lucide-react";

export const DATA = {
  name: "Hamza Aslikh", // [cite: 1]
  initials: "HA",
  url: "https://hamzaaslikh.com",
  location: "Agadir, Morocco",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Fullstack AI Developer passionate about designing modern web solutions that integrate artificial intelligence to offer seamless user experiences.",
  summary:
    "I am a Fullstack and AI Developer. I am capable of transforming technical complexity into intuitive solutions. I design modern web solutions integrating artificial intelligence to provide seamless user experiences. I am seeking an opportunity within an ambitious team to contribute to highly impactful and innovative projects.",
  avatarUrl: "/avatar1.png",
  Skills: [
   { id: 1, title: "HTML", href: "/html.svg", site: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { id: 2, title: "CSS", href: "/css.svg", site: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { id: 3, title: "JavaScript", href: "/javascript.svg", site: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { id: 4, title: "Tailwind CSS", href: "/tailwindcss.svg", site: "https://tailwindcss.com" },
  { id: 5, title: "React", href: "/react-logo.svg", site: "https://react.dev" },
  { id: 6, title: "Next.js", href: "/next-logo.svg", site: "https://nextjs.org" },
  { id: 7, title: "TypeScript", href: "/typescript.svg", site: "https://www.typescriptlang.org" },

  // Backend
  { id: 8, title: "Node.js", href: "/nodejs.svg", site: "https://nodejs.org" },
  { id: 9, title: "Python", href: "/python.svg", site: "https://www.python.org" },
  { id: 10, title: "Java", href: "/java.svg", site: "https://www.oracle.com/java" },
  { id: 11, title: "C++", href: "/cpp.svg", site: "https://isocpp.org" },
  { id: 12, title: "FastAPI", href: "/fastapi-original.svg", site: "https://fastapi.tiangolo.com/" },

  // Database
  { id: 13, title: "PostgreSQL", href: "/postgresql.svg", site: "https://www.postgresql.org" },
  { id: 14, title: "MySQL", href: "/mysql.svg", site: "https://www.mysql.com/" },
  { id: 15, title: "SQL", href: "/sql.svg", site: "https://en.wikipedia.org/wiki/SQL" },
  { id: 16, title: "SQLAlchemy", href: "/sqlalchemy.svg", site: "https://www.sqlalchemy.org/" },
  { id: 17, title: "Prisma", href: "/prisma.svg", site: "https://www.prisma.io" },
  { id: 18, title: "Drizzle", href: "/drizzle.svg", site: "https://orm.drizzle.team" },
  { id: 19, title: "MongoDB", href: "/mongo.svg", site: "https://mangojs.dev" },
  { id: 20, title: "ChromaDB", href: "/chromadb.svg", site: "https://www.trychroma.com/" },

  // AI / ML
  { id: 21, title: "TensorFlow", href: "/tensorflow.svg", site: "https://www.tensorflow.org/" },
  { id: 22, title: "Scikit-learn", href: "/scikitlearn.svg", site: "https://scikit-learn.org/" },
  { id: 23, title: "MLflow", href: "/mlflow.svg", site: "https://mlflow.org/" },
  {id :38 , title: "Airflow", href: "/airflow.svg", site: "https://airflow.apache.org/" },
  { id: 24, title: "Langchain", href: "/langchain.svg", site: "https://www.langchain.com/" },

  // DevOps / Cloud
  { id: 25, title: "Docker", href: "/docker.svg", site: "https://www.docker.com" },
  { id: 26, title: "Vercel", href: "/vercel.svg", site: "https://vercel.com" },
  { id: 27, title: "Kubernetes", href: "/kubernetes.svg", site: "https://kubernetes.io/" },
  { id: 28, title: "Git & GitHub", href: "/git.svg", site: "https://git-scm.com/" },
  { id: 29, title: "GitHub Actions", href: "/githubactions.svg", site: "https://github.com/features/actions" },

  // Monitoring / Observability
  { id: 30, title: "Prometheus", href: "/prometheus.svg", site: "https://prometheus.io/" },
  { id: 31, title: "Grafana", href: "/grafana.svg", site: "https://grafana.com/" },

  // Queue / Caching
  { id: 32, title: "Redis", href: "/redis.svg", site: "https://redis.io/" },

  // OS / Tools
  { id: 33, title: "Windows", href: "/windows.svg", site: "https://www.microsoft.com/windows" },
  { id: 34, title: "Linux", href: "/linux.svg", site: "https://www.linux.org/" },
  { id: 35, title: "Azure", href: "/azure.svg", site: "https://azure.microsoft.com/" },
  { id: 36, title: "Windev", href: "/windev.svg", site: "https://www.pcsoft-windev.com" },
  { id: 37, title: "Oracle", href: "/oracle.svg", site: "https://www.oracle.com/" }
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
    email: "hello@hamzaaslikh.com", // [cite: 3]
    tel: "+212 605-3698-70", // [cite: 3]
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
        url: "mailto:hello@hamzaaslikh.com", // [cite: 3]
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Simplon Maghreb", // [cite: 21]
      href: "https://www.simplon.ma/",
      badges: ["Bootcamp"], 
      location: "Agadir, Morocco",
      title: "AI Developer", 
      logoUrl: "/Simplon_Maghreb.png", // Added placeholder for new logo
      start: "September 2025", // [cite: 21]
      end: "Present", // [cite: 21]
      description: `
        Intensive training in Artificial Intelligence development 
        Acquired competencies in Machine Learning, Deep Learning, and data processing
        Realized practical projects integrating web development and AI models
      `,
    },
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
      company: "Ascensor Job", // [cite: 33]
      badges: ["Freelance"], // [cite: 33]
      href: "https://www.linkedin.com/company/ascensorjob/posts/?feedView=all",
      location: "Agadir, Morocco",
      title: "Développeur WordPress", // [cite: 32]
      logoUrl: "/asensorjob.jpg",
      start: "December 2023", // [cite: 33]
      end: "February 2024", // [cite: 33]
      description:
        "The company was looking for an exclusive and tailor-made web solution to stand out. Result: a high-performing, secure platform perfectly aligned with its identity and requirements.",
    },
  ],
  education: [
    {
      school: "Lycée Houmane-El Fetouaki", // [cite: 37]
      href: "https://g.co/kgs/B4hSFKA",
      degree: "Baccalauréat Sciences Mathématiques B", // [cite: 38]
      logoUrl: "/houmane.jpg",
      start: "2018", // [cite: 38]
      end: "2019", // [cite: 38]
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
      school: "Institut Libre des Etudes Informatiques et Commerciales", // [cite: 37]
      href: "https://ileic.com/",
      degree: "Diplôme technicien spécialisé en développement informatique", // [cite: 37]
      logoUrl:
        "https://impro.usercontent.one/appid/oneComWsb/domain/ileic.com/media/ileic.com/onewebmedia/logo.png?etag=%22c759-5a412d4e%22&sourceContentType=image%2Fpng&ignoreAspectRatio&resize=382%2B260",
      start: "2021", // [cite: 37]
      end: "2023", // [cite: 37]
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
      title: "Equivision",
      href: "https://github.com/OclaZ/Equivision",
      dates: "Full Infrastructure Stack",
      active: true,
      description:
        "EquiVision is a comprehensive full-stack machine learning infrastructure project. It features a Next.js frontend, a FastAPI backend, and a robust ML/data pipeline orchestrated with Apache Airflow and MLflow. The stack utilizes PostgreSQL and Redis, and is fully containerized with Docker, complete with system monitoring via Prometheus and Grafana.",
      iconLists: [
        "/next-logo.svg",
        "/fastapi-original.svg",
        "/postgresql.svg",
        "/redis.svg",
        "/airflow.svg",
        "/mlflow.svg",
        "/docker.svg",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/OclaZ/equivision",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/equivision.mp4",
    },
    {
      title: "RetentionAI",
      href: "https://github.com/OclaZ/brief_09_RetentionAI",
      dates: "HR SaaS Platform",
      active: true,
      description:
        "RetentionAI is a complete SaaS solution for HR departments that combines Machine Learning (Random Forest) to predict employee churn and Generative AI (Google Gemini) to generate personalized retention plans. Built with a Glassmorphism Next.js dashboard, a secure FastAPI REST API, PostgreSQL, and fully containerized with Docker.",
      iconLists: [
        "/python.svg",
        "/next-logo.svg",
        "/fastapi-original.svg",
        "/postgresql.svg",
        "/docker.svg",
        "/scikitlearn.svg",
        "/gemini.svg",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/OclaZ/brief_09_RetentionAI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/retention.png",
      video: "",
    },
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
      name: "ALX AICE (AI Career Essentials)", // [cite: 40]
      issuingOrganization: "Alx Africa",
      issueDate: "3rd December 2024",
      credentialId: "FmYXfM5Ec6",
      credentialUrl: "https://intranet.alxswe.com/certificates/FmYXfM5Ec6",
      logo: "/alx.png",
    },
    {
      name: "ÖSD Zertifikat B1 (Allemand)", // [cite: 41]
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
    "AI Developer",
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
    "Machine Learning",
    "Deep Learning",
    "Hamza Aslikh Projects",
    "Innovative Apps by Hamza",
    "Modern Web Apps",
    "Tech Solutions Morocco",
    "Moroccan Tech",
    "Moroccan Startups",
    "Developer from Morocco",
    "Moroccan Innovation",
  ],
  author: "Hamza Aslikh", // [cite: 1]
} as const;