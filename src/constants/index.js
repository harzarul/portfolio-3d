import { Op, Pokeball, Kame, Crypto, Restaurant, Hoobank } from "../assets";


export const navLinks = [
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const aboutMe = [
  {
    title: "trader",
    icon: Op,
    iconBg: "#fff",
    points: [
      "700% gain in a single trade",
      "US Penny Stock Trader",
    ]
  },
  {
    title: "engineer",
    icon: Kame,
    iconBg: "#fff",
    points: [
      "Project Engineer for Robotic Department",
      "Degree Holder in Mechatronic Engineering",
    ]
  },
  {
    title: "permaculturist",
    icon: Pokeball,
    iconBg: "#fff",
    points: [
      "Implementing Food Forest system",
      "Main harvest beans, legumes and eggs",
    ]
  },
];

export const projectsData = [
  {
    id: 'ebank',
    imgUrl: Hoobank,
    title: 'E-Wallet',
    link: 'https://harzarul.github.io/hoooobank/',
    ps: 'Frontend',
  },
  {
    id: 'restaurant',
    imgUrl: Restaurant,
    title: 'Restaurant',
    link: 'https://harzarul.github.io/restaurant/',
    ps: 'Frontend',
  },
  {
    id: 'crypto',
    imgUrl: Crypto,
    title: 'Crypto Tracker',
    link: 'https://harzarul.github.io/cryptotracker/',
    ps: 'Fullstack',
  },
]