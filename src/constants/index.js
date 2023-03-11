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
      "Self taught trader",
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
      "Growing grains without external resources",
      "Production cost 30% less compare to conventional system",
      "Managing 2 acre of regenerative farm"
    ]
  },
];

export const projectsData = [
  {
    id: 'ebank',
    imgUrl: Hoobank,
    title: 'E-Bank',
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