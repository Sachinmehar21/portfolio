// All page content lives here — edit this file to change names, links and copy.

export const profile = {
  firstName: "sanskrati",
  tagline:
    "an engineer turned product designer crafting interfaces that solve real business goals and make users smile.",
  email: "sanskratimoolchandani@gmail.com",
  phone: "+91 7067785857",
  socials: {
    linkedin: "https://www.linkedin.com/",
    dribbble: "https://dribbble.com/",
    behance: "https://www.behance.net/",
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
    description:
      "Designed a seamless flight booking application focused on simplicity and ease of use. Every screen was crafted to help users search, compare, and book flights effortlessly with a clear and intuitive experience.",
    image: "/assets/project-7seers.svg",
    // "center" floats the image in the middle of the colored panel;
    // "crop" fills the panel with the right side of a wider image.
    layout: "center" as const,
    background: "#ff9ecf",
    href: "#",
  },
  {
    title: "CarpoolingApp",
    description:
      "Designed a seamless flight booking application focused on simplicity and ease of use. Every screen was crafted to help users search, compare, and book flights effortlessly with a clear and intuitive experience.",
    image: "/assets/project-carpooling-card.svg",
    layout: "crop" as const,
    background: "#ffe066",
    href: "#",
  },
];

// NOTE: roles/dates below are best-effort reads from the Figma frame — a few
// were too small to read reliably. Double-check before publishing.
export const experience = [
  {
    company: "A7Billion",
    role: "UX Designer",
    period: "September 2025 – Present",
  },
  {
    company: "Rombay Softwares",
    role: "Executive UI/UX Designer",
    period: "November 2024 – September 2025",
  },
  {
    company: "Google",
    role: "UI/UX Designer",
    period: "February 2024 – February 2025",
  },
];

export const footer = {
  message:
    "if you're interested in my work or just want to grab a coffee, feel free to reach out.",
};
