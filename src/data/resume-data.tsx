import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Brendatama Akbar Ramadhan",
  initials: "BA",
  location: "Jakarta (GMT+07)",
  locationLink: "https://www.google.com/maps/place/Jakarta",
  currentJob: "Frontend Developer",
  about:
    "Web developer specializing in building applications🖖",
  summary:
    "I am a web developer with 4 years of experience. I build stuff mostly with Vue/React, Typescript, and Tailwind. Currently, I am working as a Web Software Developer at PLN Icon Plus. Have a keen interest in tech, RPG games, and good stories.🤖",
  avatarUrl: "https://avatars.githubusercontent.com/u/15965200?s=400&u=f240353cd552d7409e345f8d367046014c99161b&v=4",
  personalWebsiteUrl: "https://brendatama.vercel.app/",
  contact: {
    email: "brendatamaa@gmail.com",
    tel: "+6282128947353",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/brendatamaar",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/brendatamaar/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "CEP CCIT University of Indonesia",
      degree: "Associate Degree in Information Engineering, GPA: 3.7",
      start: "2017",
      end: "2019",
      desc: "Prominent coursework: Web & Mobile App Development, Databases, Object-oriented Programming, DevOps. Developed 24 applications for monthly project using various programming languages, frameworks and APIs."
    },
  ],
  work: [
    {
      company: "PLN Icon Plus",
      link: "https://plniconplus.co.id/",
      badges: [],
      title: "Web Software Developer",
      logo: "",
      start: "2022",
      end: "Present",
      description:
        "PLN Icon Plus (ICON+) is a subholding of State Electricity Company (PLN) Indonesia) is a subholding of State Electricity Company (PLN) Indonesia, specializing in telecommunications networks, software development, and information technology services. I worked on improving web products by delivering several new major features based on user feedback. Tech Stack: Vue, Node, Spring Boot",
    },
    {
      company: "Cipta Kreasi",
      link: "#",
      badges: [],
      title: "Front-End Developer",
      logo: "",
      start: "2020",
      end: "2022",
      description:
        "Cipta Kreasi is an agency providing digital marketing services along with software development solutions. I designed and developed SEO-optimized landing pages that are search engine friendly for companies and agency. Tech Stack: Laravel, AMP, Bootstrap",
    },
    {
      company: "Tebuireng Telecom",
      link: "#",
      badges: [],
      title: "Junior Front-End Developer",
      logo: "",
      start: "2019",
      end: "2020",
      description:
        "I assisted in developing web components, integrating API and resolving front-end related issues.",
    },
  ],
  skills: [
    "TypeScript",
    "React",
    "NextJS",
    "Remix",
    "Vue",
    "NuxtJS",
    "Tailwind",
    "NodeJS", 
    "Spring Boot",
    "Laravel",
  ],
  projects: [
    {
      title: "AIR Tax",
      techStack: [
        "Main Project",
        "Vue",
        "NodeJS",
        "Spring Boot"
      ],
      description: "B2G SaaS product designed to simplify tax calculation, reporting, and payment processes, integrated directly with the Directorate General of Taxes (DJP) Indonesia.",
      logo: "",
      link: {
        label: "air-tax",
        href: "https://web-blue.air.id/airtax-new",
      },
      img: "/images/airtax.webp",
      isFeatured: true
    },
    {
      title: "cheSKP",
      techStack: [
        "Main Project",
        "Vue",
        "NodeJS",
        "Spring Boot",
        "Kotlin"
      ],
      description: "Digital platform to seamlessly conducting and analyzing customer satisfaction surveys.",
      logo: "",
      link: {
        label: "cheskp",
        href: "https://cheskp-mobile.pln.co.id/",
      },
      img: "/images/cheskp.webp",
      isFeatured: true
    },
    {
      title: "CheckMATE",
      techStack: [
        "Main Project",
        "Vue",
        "NodeJS",
        "Spring Boot"
      ],
      description: "CRM system for monitoring, analyzing, and evaluating the maturity levels of company units.",
      logo: "",
      img: "",
      isFeatured: false
    },
    {
      title: "Skenatify",
      techStack: [
        "Side Project",
        "NextJS",
        "React",
        "Tailwind",
        "Typescript",
        "Spotify API"
      ],
      description: "Customized track recommendations based on your favorite artists.",
      logo: "",
      link: {
        label: "skenatify",
        href: "https://skenatify.vercel.app/",
      },
      img: "/images/skenatify.webp",
      isFeatured: true
    },
    {
      title: "Kenali Caleg",
      techStack: [
        "Side Project",
        "React",
        "NextJS",
        "NodeJS",
        "Tailwind"
      ],
      description: "Webpage to provide info on legislative candidates for the 2024 Indonesian Election.",
      logo: "",
      link: {
        label: "kenali-caleg",
        href: "https://kenali-caleg.vercel.app/",
      },
      img: "/images/kenali-caleg.webp",
      isFeatured: true
    },
      {
      title: "datatech",
      techStack: ["Side Project", "AMP", "Bootstrap"],
      description:
        "Landing page for an IT consultant company.",
      logo: "",
      link: {
        label: "datatech.id",
        href: "https://datatech.id/",
      },
      img: "/images/datatech.webp",
      isFeatured: true
    },
    {
      title: "Englishseed",
      techStack: ["Side Project", "Wordpress", "PHP", "Google API"],
      description:
        "Online english learning class for kindergarten and elementary level.",
      logo: "",
      link: {
        label: "englishseed",
        href: "https://www.instagram.com/englishseed/",
      },
      img: "",
      isFeatured: false
    },
    {
      title: "Sewa-gi",
      techStack: ["Laravel", "Bootstrap", "Elasticsearch", "Google API"],
      description:
        "User-friendly apartment management dashboard.",
      logo: "",
      link: {
        label: "sewagi-web",
        href: "https://sewagi-web.inspira.web.id",
      },
      img: "/images/sewagi.webp",
      isFeatured: false
    },
    {
      title: "RRW",
      techStack: [
        "Main Project",
        "Java",
        "Laravel"
      ],
      description: "A tool to assist SEO team in processing web reports.",
      logo: "",
      img: "",
      isFeatured: false
    },
    {
      title: "Translight",
      techStack: [
        "Side Project",
        "Bootstrap"
      ],
      description: "Landing page for a transportation company.",
      logo: "",
      img: "",
      isFeatured: false
    },
    {
      title: "Tratus",
      techStack: [
        "Main Project",
        "Java",
        "SQLite"
      ],
      description: " Mobile app to view information about tourist sites in West Java.",
      logo: "",
      img: "",
      isFeatured: false
    },
  ],
} as const;
