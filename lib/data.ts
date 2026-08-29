// All page content lives here — edit this file to change names, links and copy.

export const profile = {
  firstName: "sanskrati",
  tagline:
    "an engineer turned product designer crafting interfaces that solve real business goals and make users smile.",
  email: "sanskratimoolchandani@gmail.com",
  phone: "+91 7067785857",
  socials: {
    linkedin: "https://www.linkedin.com/in/sanskrati-moolchandani-38b440225/",
    dribbble: "https://dribbble.com/Sanskrati-moolchandani",
    behance: "https://www.behance.net/sanskrimoolcha",
  },
  resumeUrl: "#",
};

export type AboutSegment = { text?: string; sticker?: string };

export const about = {
  intro: "welcome to my little corner of the internet",
  // Each paragraph is a list of segments so stickers sit inline mid-sentence,
  // exactly like the Figma design.
  paragraphs: [
    [
      {
        text: "this is where i share the projects, ideas, and experiments that have shaped my journey as a designer. most of them started with a simple question,",
      },
      { sticker: "/assets/sticker-question.svg" },
      {
        text: "a small frustration, or a curiosity that wouldn't leave me alone.",
      },
    ],
    [
      {
        text: "i enjoy creating digital experiences that are not only visually appealing but also easy to understand and genuinely useful.",
      },
      { sticker: "/assets/sticker-dino.svg" },
      {
        text: "for me, the best designs are the ones people don't have to think about—they just feel right.",
      },
    ],
    [
      {
        text: "every project has taught me something different, and i'm still learning with every challenge i take on.",
      },
    ],
  ] satisfies AboutSegment[][],
};

export const projects = [
  {
    title: "7seers",
    slug: "7seers",
    description:
      "Designed a seamless flight booking application focused on simplicity and ease of use. Every screen was crafted to help users search, compare, and book flights effortlessly with a clear and intuitive experience.",
    image: "/assets/project-7seers.svg",
    // "center" floats the image in the middle of the colored panel;
    // "crop" fills the panel with the right side of a wider image.
    layout: "center" as const,
    background: "#ff9ecf",
    href: "/work/7seers",
  },
  {
    title: "carpoolingapp",
    slug: "carpooling",
    description:
      "Designed a seamless flight booking application focused on simplicity and ease of use. Every screen was crafted to help users search, compare, and book flights effortlessly with a clear and intuitive experience.",
    image: "/assets/project-carpooling-card.svg",
    layout: "crop" as const,
    background: "#ffe066",
    href: "/work/carpooling",
  },
  {
    title: "flight booking app",
    slug: "flight-booking",
    description:
      "Designed a seamless flight booking application focused on simplicity and ease of use. Every screen was crafted to help users search, compare, and book flights effortlessly with a clear and intuitive experience.",
    // "cover" fills the panel with the image; these exports already carry
    // their colored background, so `background` just matches it exactly.
    image: "/assets/project-flight-booking.svg",
    layout: "cover" as const,
    background: "#D1F76C",
    href: "/work/flight-booking",
  },
  {
    title: "botstream",
    slug: "botstream",
    description:
      "Designed a seamless flight booking application focused on simplicity and ease of use. Every screen was crafted to help users search, compare, and book flights effortlessly with a clear and intuitive experience.",
    image: "/assets/project-botstream.svg",
    layout: "cover" as const,
    background: "#6C8CF7",
    href: "/work/botstream",
  },
  {
    title: "floo",
    slug: "floo",
    description:
      "Designed a seamless flight booking application focused on simplicity and ease of use. Every screen was crafted to help users search, compare, and book flights effortlessly with a clear and intuitive experience.",
    image: "/assets/project-floo.svg",
    layout: "cover" as const,
    background: "#F7A86C",
    href: "/work/floo",
  },
];

export const experience = [
  {
    company: "47billion",
    role: "ux designer",
    period: "september 2025 – present",
  },
  {
    // The Figma frame shows no period for this row.
    company: "bombay softwares",
    role: "executive ui/ux designer",
    period: "",
  },
  {
    company: "eulogik",
    role: "ui/ux designer",
    period: "february 2024 – february 2025",
  },
];

export const footer = {
  message:
    "if you're interested in my work or just want to grab a coffee, feel free to reach out.",
};
