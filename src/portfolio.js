/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Tagore Jangali's Portfolio",
  description:
    "An MBA (Finance & Analytics) professional aiming to leverage AI, LLMs, and data-driven automation to solve complex problems in finance, credit, and business operations.",
  og: {
    title: "Tagore Jangali Portfolio",
    type: "website",
    url: "http://tagorej.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Tagore Jangali",
  logo_name: "TagoreJangali",
  nickname: "tagorej",
  subTitle:
    "Aspiring to contribute to organizations that value technology-led innovation, continuous learning, and real-world impact.",
  resumeLink: "https://github.com/tagorej",
  portfolio_repository: "https://github.com/tagorej/masterPortfolio",
  githubProfile: "https://github.com/tagorej",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/tagorej",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/tagorej/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:tagorej.ssshil@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];

const skills = {
  data: [
    {
      title: "AI & Data Analytics",
      fileName: "undraw_analytics_re_dkf8",
      skills: [
        "⚡ Developing AI-powered solutions for finance, credit, and business operations.",
        "⚡ Using Python for automation, data analysis, and building decision systems.",
        "⚡ Leveraging AI/LLMs (OpenAI, Gemini) and prompt engineering for complex problem-solving.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
        },
        {
          skillName: "R Programming",
          fontAwesomeClassname: "logos:r-lang",
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "logos:tableau-icon",
        },
        {
          skillName: "Power BI",
          fontAwesomeClassname: "logos:power-bi",
        },
        {
          skillName: "Hadoop",
          fontAwesomeClassname: "logos:hadoop",
        },
      ],
    },
    {
      title: "Web & Programming",
      fileName: "undraw_programming_re_kg9v",
      skills: [
        "⚡ Building and managing websites using WordPress, HTML, CSS, and JavaScript.",
        "⚡ Applying SEO and keyword optimization to improve digital reach.",
        "⚡ Using Google Analytics and related tools to track performance.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "vscode-icons:file-type-html",
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "vscode-icons:file-type-css",
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "vscode-icons:file-type-js-official",
        },
        {
          skillName: "WordPress",
          fontAwesomeClassname: "logos:wordpress-icon",
        },
        {
          skillName: "Git & GitHub",
          fontAwesomeClassname: "logos:git-icon",
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Github",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "#181717",
      },
      profileLink: "https://github.com/tagorej",
    },
    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0077B5",
      },
      profileLink: "https://www.linkedin.com/in/tagorej/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Sri Sathya Sai Institute of Higher Learning",
      subtitle: "MBA (Finance & Analytics)",
      logo_path: "iiitk_logo.png", // You might want to change this
      alt_name: "SSSIHL",
      duration: "2024 - Present",
      descriptions: [],
      website_link: "https://www.sssihl.edu.in/",
    },
    {
      title: "Sri Sathya Sai Institute of Higher Learning",
      subtitle: "B.Com (Hons)",
      logo_path: "iiitk_logo.png", // You might want to change this
      alt_name: "SSSIHL",
      duration: "2021 - 2024",
      descriptions: [
        "⚡ Graduated with A+ Grade.",
        "⚡ Winner of Top Academic Improvement (TAI) Award at UG Level.",
      ],
      website_link: "https://www.sssihl.edu.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Building Wealth",
      subtitle: "- VAC Program",
      logo_path: "stanford_logo.png", // Placeholder
      certificate_link: "#",
      alt_name: "VAC Program",
      color_code: "#8C151599",
    },
    {
      title: "Leadership Program",
      subtitle: "- Aspire Institute",
      logo_path: "google_logo.png", // Placeholder
      certificate_link: "#",
      alt_name: "Aspire Institute",
      color_code: "#0C9D5899",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internships and Projects",
  description:
    "I have worked on various projects leveraging AI, data analytics, and web technologies to solve real-world problems. My experience ranges from equity research and business development to building automated financial tools and AI-driven applications.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      work: true,
      experiences: [
        {
          title: "Equity Research Intern",
          company: "Avendus Spark",
          company_url: "https://www.avendus.com/",
          logo_path: "delhivery_logo.png", // Placeholder
          duration: "May 2025 - June 2025",
          location: "Chennai",
          description:
            "Conducted pan-India channel checks across 27 sectors, empaneled 250+ dealers, and developed a fully automated Fund Tracker using Python, Excel, and PowerPoint, saving 3+ hours per report.",
          color: "#ee3c26",
        },
        {
          title: "Business Development and Research Specialist",
          company: "Younity.in",
          company_url: "https://younity.in/",
          logo_path: "legato_logo.png", // Placeholder
          duration: "March 2021 - May 2021",
          location: "Remote",
          description:
            "Led a cross-functional team to conduct market research, organize data, and develop actionable client insights.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Projects",
      experiences: [
        {
          title: "AI-Powered Credit Analysis & Underwriting Assistant",
          company: "Personal Project",
          company_url: "#",
          logo_path: "tiktok_logo.png", // Placeholder
          duration: "Ongoing",
          location: "Self-directed",
          description:
            "Built an AI-based system to simulate the end-to-end loan lifecycle, from application to disbursement, featuring loan application analysis, credit risk indicators, and AI-generated insights for underwriters.",
          color: "#000000",
        },
        {
          title: "SSSIHL MBA Student Directory",
          company: "Academic Project",
          company_url: "#",
          logo_path: "muffito_logo.png", // Placeholder
          duration: "2023-2024",
          location: "Bengaluru, India",
          description:
            "Built a secure web app with Google OAuth, Sheets API, real-time data sync, PDF reporting, and role-based dashboards for the MBA student directory.",
          color: "#9b1578",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects showcase my skills in AI, data analytics, and web development. I enjoy building tools that solve real-world problems and provide actionable insights.",
  avatar_image_path: "undraw_project_completed_re_pddq.svg",
};

const publicationsHeader = {
  title: "Key Projects",
  description: "Here are a few of my key projects.",
  avatar_image_path: "undraw_project_completed_re_pddq.svg",
};

const publications = {
  data: [
    {
      id: "credit-risk-bot",
      name: "Credit Risk Bot",
      createdAt: "2023-10-01T00:00:00Z",
      description:
        "A Python-based tool for credit risk evaluation with automated data analysis, scoring, and reporting.",
      url: "https://github.com/tagorej",
    },
    {
      id: "equity-assistant",
      name: "Equity-Assistant",
      createdAt: "2023-09-01T00:00:00Z",
      description:
        "An AI dashboard for portfolio analytics, risk metrics (Sharpe, VaR/CVaR), and multi-market insights.",
      url: "https://github.com/tagorej",
    },
    {
      id: "gesture-game",
      name: "Gesture-Based Fighting Game",
      createdAt: "2023-08-01T00:00:00Z",
      description:
        "A camera-based fighting game where hand gestures control the character, built with Python and OpenCV.",
      url: "https://github.com/tagorej",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "undraw_personal_email_re_4adw.svg",
    description:
      "I am available on social media and email. Feel free to reach out. I can help with projects related to AI, Finance, Analytics, and Web Development.",
  },
  blogSection: {
    title: "Blog",
    subtitle: "I document my journey and share technical insights on my blog.",
    link: "#",
    avatar_image_path: "undraw_blog_post_re_fyx2.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Bengaluru, India",
    locality: "Bengaluru",
    country: "IN",
    region: "Karnataka",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "undraw_road_sign_re_3kc3.svg",
    location_map_link: "https://goo.gl/maps/example",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 6303561878",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
