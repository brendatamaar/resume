import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Brendatama Akbar Ramadhan",
  initials: "BA",
  location: "Jakarta, WIB",
  locationLink: "https://www.google.com/maps/place/Jakarta",
  about:
    "Software developer who likes to solve real-live problems with technology.",
  summary:
    "Passionate software developer specializing in designing and building application with 4+ years of experience. Skilled in technical management, software development, project management, and various programming languages. Currently, I work mostly with TypeScript, React/Vue, and Next.",
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
      school: "CEP CCIT Faculty of Engineering, University of Indonesia",
      degree: "Associate Degree in Information Engineering, GPA: 3.7",
      start: "2017",
      end: "2019",
      desc: "Prominent coursework: Web and Mobile App Development, Databases, Objectoriented Programming, DevOps. Developed 24 application for monthly project using various programming languages, frameworks and APIs. Participated in DILo Hackathon Festival in 2019 as Designer."
    },
  ],
  work: [
    {
      company: "PLN Icon Plus",
      link: "https://plniconplus.co.id/",
      badges: [],
      title: "Web Software Engineer",
      logo: "",
      start: "2022",
      end: "Present",
      description:
        "PLN Icon Plus (ICON+) is a Subsidiary Entity of PT PLN (Persero). ICON+ is focused on serving the needs of PT PLN (Persero) for telecommunication networks, software development and information technology services. I worked on improving web products by delivering several new major features based on user feedback, Technologies: Vue.js, Node, Spring Boot",
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
        "Cipta Kreasi is a company that provides digital marketing services (search engine Optimization, search engine marketing, and social media marketing) and software development. I designed and developed SEO-optimized landing pages that are search engine friendly for companies and agency. I also implemented several SEO strategies in website optimization, content and link building. Technologies: Laravel, Lumen, Bootstrap, Wordpress",
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
        "Tebuireng Telecom is a company that provides system integrator and software development solutions. I assisted in developing web components, integrating API and resolving front-end related issues.",
    },
  ],
  skills: [
    "TypeScript",
    "React",
    "Vue",
    "Angular",
    "Saas",
    "Bulma",
    "Tailwind",
    "Prisma",
    "Sequelize",
    "Node Js",
    "Next Js",
    "Spring Boot",
    "Laravel",
    "Lumen",
    "Codeigniter",
    "Postgre",
    "Mongo",
    "Grafana"
  ],
  projects: [
    {
      title: "AIR Tax",
      techStack: [
        "Main Project",
        "Vue",
        "Node.js",
        "Bootstrap",
        "Spring Boot"
      ],
      description: "A digital platform designed to simplify the intricate processes of tax calculation, reporting, and payment.",
      logo: "",
      link: {
        label: "air-tax",
        href: "https://web-blue.air.id/airtax-new",
      },
    }, 
    {
      title: "cheSKP",
      techStack: [
        "Main Project",
        "Vue",
        "Node.js",
        "Materialize CSS",
        "Spring Boot",
        "Kotlin"
      ],
      description: "A website developed to seamlessly conducting and analyzing customer satisfaction surveys.",
      logo: "",
      link: {
        label: "cheskp",
        href: "https://cheskp-mobile.pln.co.id/",
      },
    },
    {
      title: "datatech",
      techStack: ["Side Project", "React", "Tailwind"],
      description:
        "Landing page for an IT consultant company.",
      logo: "",
      link: {
        label: "datatech.id",
        href: "https://datatech.id/",
      },
    },
    {
      title: "housera",
      techStack: ["Side Project", "TypeScript", "Next.js", "React", "Prisma"],
      description:
        "Platform for listing and renting property with ease.",
      logo: "",
      link: {
        label: "housera.git",
        href: "https://github.com/brendatamaar/housera",
      },
    },
    {
      title: "Englishseed",
      techStack: ["Side Project", "Wordpress", "PHP", "Google API"],
      description:
        "Online English learning class for kindergarten and elementary level.",
      logo: "",
    },
    {
      title: "Sewa-gi",
      techStack: ["Laravel", "Saas", "Elasticsearch", "Google APIs", "ArcGis", "Xendit"],
      description:
        "User-friendly apartment management dashboard.",
      logo: "",
      link: {
        label: "sewagi-web",
        href: "https://sewagi-web.inspira.web.id",
      },
    },
  ],
} as const;
