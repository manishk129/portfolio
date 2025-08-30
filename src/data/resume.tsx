import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Manish Kumar Pandit",
  initials: "DV",
  url: "https://dillion.io",
  location: "Bengaluru, IND",
  locationLink: "https://www.google.com/maps/place/Bengaluru",
  description:
    "SDE @ Amazon | Technovert",
  summary:
    "I’m a Software Engineer working at Amazon. I'm based in Bangalore, IND and have 1.5+ years of experience in designing and building scalable, high-performant full stack web applications, microservices, and backend systems. My work spans designing API-driven microservices architectures that power SaaS platforms, developing robust backend systems capable of handling complex workflows, and delivering end-to-end full-stack solutions that bring ideas into production. I’ve also contributed to open source through projects like QR-PDF, a Python package for generating multiple QR codes with customizable PDF layouts. With a strong foundation in system design, scalable architectures, and modern development practices, I thrive on turning ambitious ideas into production-ready software that delivers real impact.",
  avatarUrl: "/me.jpeg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "JavaScript",
    "Node.js",
    "Python",
    "C++",
    "Java",
    "Postgres",
    "Docker",
    "Kubernetes",
    "AWS",
    "Microservices",
    "HTML",
    "CSS",
    "TailwindCSS"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "manishkumarpandit12@gmail.com",
    tel: "+918873514280",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/manishk129/",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/manish-kumar-pandit-092107214/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/manishpandit202",
        icon: Icons.x,
        navbar: true,
      },
      Leetcode: {
        name: "Leetcode",
        url: "https://leetcode.com/u/manishkumarpandit12/",
        icon: Icons.Leetcode,
        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:manishkumarpandit12@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Amazon",
      href: "https://www.amazon.in/",
      badges: [],
      location: "Bangalore, IND",
      title: "Software Development Engineer",
      logoUrl: "/amazon.png",
      start: "June 2025",
      end: "current",
      description:
        "Designing and building high-performance, large-scale backend systems capable of handling millions of requests with low latency and high reliability \n Architecting and optimizing distributed services with a strong focus on scalability, fault tolerance, and long-term maintainability \n Contributing to a full-stack web platforms, working across backend workflows and user-facing components to deliver seamless end-to-end features",
    },
    {
      company: "Infineon technologies",
      badges: [],
      href: "https://www.infineon.com/",
      location: "Bangalore, IND",
      title: "Software Engineer",
      logoUrl: "/infineon.png",
      start: "July 2023",
      end: "May 2025",
      description:
        "Built a software framework leveraging Model-Driven Architecture, which acted as a compiler to transform high-level python code into optimized Verilog, SV, VHDL, C code and other collaterals \n Developed automation tools for Electronics Design Automation (EDA) systems, enabling parallel execution of verification processes for SoC and IP designs across distributed servers",
    },
    {
      company: "IdentifYou",
      href: "https://identifyyou.in/",
      badges: [],
      location: "Remote",
      title: "Software Engineering Intern",
      logoUrl: "/identifyou.png",
      start: "December 2022",
      end: "June 2023",
      description:
        "Designed and developed 7 lightweight, API-driven Microservices, facilitating seamless integration within a SaaS ERP platform \n Developed data analysis plugins leveraging Microsoft Graph APIs for MS 365 products, enhancing business insights and user experience",
    },
    {
      company: "Feedants",
      href: "https://www.feedants.com/",
      badges: [],
      location: "Remote",
      title: "Web Developer Intern",
      logoUrl: "/feedant.jpeg",
      start: "September 2022",
      end: "November 2022",
      description:
        "Contributed to the development and enhancement of core components including the Homepage, Authentication system, Post feature, and Chat functionality within a dynamic social media platform",
    }
  ],
  education: [
    {
      school: "National Institute of Technology (NIT), Sikkim",
      href: "https://nitsikkim.ac.in/",
      degree: "B.tech in Computer Science and Engineering",
      logoUrl: "/nitsikkim.png",
      start: "2020",
      end: "2024",
    },
    {
      school: "Central Public School, Chapra",
      href: "https://cpschapra.com/",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/cps.png",
      start: "2017",
      end: "2019",
    }
  ],
  projects: [
    {
      title: "The Craft House",
      href: "https://the-craft-house.vercel.app/",
      dates: "",
      active: true,
      description:
        "An E-commerce platform facilitating the seamless purchase and sale of unique, locally crafted art items, featuring robust user authentication through JWT tokens and integrated secure Paytm payment service.",
      technologies: [
        "Next.js",
        "Javacript",
        "Tailwind CSS",
        "Paytm payments",
        "Material UI",
        "MongoDB",
      ],
      links: [
        {
          type: "Website",
          href: "https://the-craft-house.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/manishk129/The-craft-House",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/crafhouse.png",
      video: ""
    },
    {
      title: "Feedants",
      href: "https://www.feedants.com/",
      dates: "",
      active: true,
      description:
        "Dsigned and developed core components including the Homepage, Authentication system, Post feature, and Chat functionality within a dynamic social media platform",
      technologies: [
        "React.js",
        "Javascript",
        "MongoDB",
        "TailwindCSS",
        "Socket IO",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.feedants.com/",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/feedants.png",
      video: "",
    },
    {
      title: "QR PDF",
      href: "https://pypi.org/project/qr-pdf/",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "An open-source Python package for generating multiple QR codes with a customizable PDF layout",
      technologies: [
        "Python"
      ],
      links: [
        {
          type: "Website",
          href: "https://pypi.org/project/qr-pdf/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/manishk129/qr-pdf",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/qrpdf.png",
      video: "",
    },
    {
      title: "Travel Guide",
      href: "",
      dates: "",
      active: true,
      description:
        "A mobile application built with React Native and Node.js that serves as a dynamic information hub for travelers. The app delivers rich details on numerous tourist destinations through its intuitive mobile UI.",
      technologies: [
        "React native",
        "Node.js",
        "Express.js",
        "MongoDB",
        "TailwindCSS"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/manishk129/Travel-Guide-App",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/travelguide.jpg",
      video: "",
    },
  ],
  hackathons: [],
} as const;
