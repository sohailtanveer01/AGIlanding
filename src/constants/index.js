import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitIcon5,
  benefitIcon6,
  benefitIcon7,
  benefitIcon8,
  benefitIcon9,
  benefitIcon10,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "/pricing",
  },
  {
    id: "2",
    title: "use cases",
    url: "#how-to-use",
  },
  // {
  //   id: "3",
  //   title: "Roadmap",
  //   url: "#roadmap",
  // },
  // {
  //   id: "4",
  //   title: "New account",
  //   url: "#signup",
  //   onlyMobile: true,
  // },
  // {
  //   id: "5",
  //   title: "Sign in",
  //   url: "#login",
  //   onlyMobile: true,
  // },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const AskAGIServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const AskAGIServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "workflowEfficiency",
    text: "Streamlined tasks and automated processes result in significant time and resource savings, enabling focus on high-value activities.",
  },
  {
    id: "1",
    title: "workflowEfficiency",
    text: "Streamlined tasks and automated processes result in significant time and resource savings, enabling focus on high-value activities.",
  },
  {
    id: "2",
    title: "workflowEfficiency",
    text: "Streamlined tasks and automated processes result in significant time and resource savings, enabling focus on high-value activities.",
  },
  {
    id: "3",
    title: "workflowEfficiency",
    text: "Streamlined tasks and automated processes result in significant time and resource savings, enabling focus on high-value activities.",
  },
  {
    id: "4",
    title: "workflowEfficiency",
    text: "Streamlined tasks and automated processes result in significant time and resource savings, enabling focus on high-value activities.",
  },
  {
    id: "5",
    title: "workflowEfficiency",
    text: "Streamlined tasks and automated processes result in significant time and resource savings, enabling focus on high-value activities.",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Technology",
    text: "Leverage AI for innovative product development.",
    details: "Utilize AI to create cutting-edge products and enhance the development process.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Healthcare",
    text: "Improve patient care through data analysis",
    details: "Analyze patient data to provide personalized care and treatment plans.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Finance",
    text: "Automate customer service, fraud detection, and risk management processes in Finance and Banking",
    details: "Implement AI solutions to enhance customer service, detect fraud more efficiently, and manage risks.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Manufacturing",
    text: "Enhance production efficiency",
    details: "Implement AI to optimize manufacturing processes and increase production efficiency.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Retail",
    text: "Personalize shopping experiences.",
    details: "Use AI to tailor shopping experiences to individual customer preferences, increasing engagement and sales.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon5,
    imageUrl: benefitImage2,
  },

  {
    id: "5",
    title: "Education",
    text: "AI-driven tutoring",
    details: "Deploy AI tutors to provide personalized learning experiences for students.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon6,
    imageUrl: benefitImage2,
  },
  
  {
    id: "6",
    title: "Hospitality",
    text: "Enhance customer experience through personalized services",
    details: "Utilize AI to offer personalized services to guests, improving their overall experience.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
  {
    id: "7",
    title: "Automotive",
    text: "Optimize supply chain management",
    details: "Implement AI to streamline supply chain operations and reduce costs in the automotive industry.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon7,
    imageUrl: benefitImage2,
  },
  {
    id: "8",
    title: "Legal",
    text: "Automate document analysis and management",
    details: "Leverage AI to automate the analysis and management of legal documents, improving efficiency.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon8,
    imageUrl: benefitImage2,
  },
  {
    id: "9",
    title: "Logistics",
    text: "Optimize route planning",
    details: "Use AI to optimize logistics route planning, saving time and fuel.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon9,
    imageUrl: benefitImage2,
  },
  {
    id: "10",
    title: "Travel",
    text: "Enhance booking systems",
    details: "Utilize AI to improve travel booking systems, making them more efficient and user-friendly.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon10,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
