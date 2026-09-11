// Copy for the 7seers case study (/work/7seers). All lowercase, like the design.
import type { PersonaData } from "@/components/case-study/Persona";

const A = "/assets/7seers";

export const sevenseers = {
  title: "7seers",
  hero: {
    src: `${A}/hero.webp`,
    alt: "collage of the 7seers sign-up screens on a phone and a laptop, with coffee and watermelon stickers",
    width: 1556,
    height: 526,
  },
  nav: [
    { label: "overview", id: "overview" },
    { label: "problem", id: "problem" },
    { label: "research", id: "research" },
    { label: "key-insights", id: "key-insights" },
    { label: "ideation", id: "ideation" },
    { label: "solution", id: "solution" },
    { label: "flow/screen design", id: "screens" },
    { label: "brand identity", id: "brand-identity" },
    // Reflection still isn't designed, so it stays an unlinked index entry.
    { label: "reflection" },
  ],
  overview: {
    text: "7seers is an ai-powered platform that helps tier 2/3 college students in india get placed. students get a role-specific readiness score, practice with ai mock interviews, fix skill gaps through guided learning, and get matched to jobs they actually qualify for. tpos get real-time batch visibility instead of excel sheets.",
    meta: [
      { label: "project type", value: "job readiness portal" },
      { label: "my role", value: "ux · systems design · interaction design · visual design" },
      { label: "duration", value: "12 months" },
    ],
  },
  problem: {
    pills: `${A}/pills.svg`,
    pillsAlt:
      "the five problem areas as coloured labels: unstructured preparation, no job match visibility, fear of judgment kills practice, learning feels disconnected from outcomes, no role-specific clarity",
    items: [
      {
        title: "no role-specific clarity",
        text: "students have no idea what “ready” means for a software developer or any other target role. they prepare blindly without a benchmark.",
      },
      {
        title: "unstructured preparation",
        text: "youtube videos and random mcq quizzes are the default prep strategy. no feedback, no direction, no measurable progress.",
      },
      {
        title: "fear of judgment kills practice",
        text: "students won’t do mock interviews in front of peers or seniors. social anxiety is a bigger barrier than lack of access to tools.",
      },
      {
        title: "learning feels disconnected from outcomes",
        text: "students finish courses but have no way to know if it actually moved them closer to getting placed.",
      },
      {
        title: "no job match visibility",
        text: "students apply everywhere hoping something sticks. nobody tells them which roles they qualify for right now and what to fix to qualify for better ones.",
      },
    ],
  },
  idea: {
    heading: "where did the idea come from?",
    cards: [
      {
        title: "trigger",
        text: "a placement officer at a mid-tier college in indore told us: “our students are talented, but they’re just not getting placed.” that wasn’t a content problem. it was a readiness visibility problem — nobody knew what the gap was, so nobody could fix it.",
      },
      {
        title: "the hypothesis",
        text: "if students could see exactly where they stand — by role, by skill, by industry standard — they would know what to fix. if tpos had that same view at batch level, they could intervene early instead of scrambling when the placement drive started.",
      },
      {
        title: "why now — the ai window",
        text: "ai made it possible to simulate real interviews, assess skill gaps at scale, and generate personalised paths — things that needed a full mentorship team before. this window created an opportunity to build something that couldn’t have existed 3 years earlier.",
      },
    ],
    monitor: {
      src: `${A}/monitor.webp`,
      alt: "7seers student dashboard on a desktop monitor: overall jri score 72%, activity status, job pick and batch updates",
    },
  },
  data: {
    heading: "what the data says about placement in india",
    stats: [
      { value: "<50%", label: "tier 2/3 graduates placed (aicte data)" },
      { value: "10k+", label: "engineering colleges in india" },
      { value: "1.5m+", label: "engineering graduates per year" },
      { value: "30%", label: "top colleges capture most recruiter mindshare" },
    ],
    paradox: {
      title: "the placement paradox",
      text: "india produces the world’s largest pool of engineering graduates. yet placement rates at tier 2/3 colleges are consistently below 50% — not because students lack potential, but because:",
      points: [
        "nobody tells them what “ready” looks like",
        "institutions have no data to act on",
        "the top-college bias is structural",
      ],
      image: { src: `${A}/cubicles.webp`, alt: "rows of dim office cubicles with people working at glowing laptops" },
    },
  },
  competitors: {
    heading: "who else is in the space — and where they fall short",
    rows: [
      {
        name: "superset",
        logo: { src: `${A}/superset-box.webp`, box: true },
        text: "campus recruitment automation. strong on connecting colleges to companies and managing the hiring pipeline.",
        gap: "no student-side skill",
        side: "left" as const,
      },
      {
        name: "pod",
        logo: { src: `${A}/logo-pod.svg`, width: 128, height: 40 },
        text: "ai interview prep with mock q&a. generic practice, decent feedback loop.",
        gap: "not mapped to student’s role or college context",
        side: "right" as const,
      },
      {
        name: "lineup",
        logo: { src: `${A}/logo-lineup.svg`, width: 135, height: 33 },
        text: "ai-powered campus hiring. resume parsing, job matching, company connect for tier 1 colleges.",
        gap: "no readiness assessment or upskilling",
        side: "left" as const,
      },
      {
        name: "unstop",
        logo: { src: `${A}/logo-unstop.svg`, width: 106, height: 43 },
        text: "competitions, hackathons, hiring challenges. discovery-led model.",
        gap: "top-of-funnel only, no readiness path",
        side: "right" as const,
      },
    ],
    whiteSpace: {
      title: "the white space 7seers occupies",
      // Segments marked bold render in the darker weight, as in the frame.
      segments: [
        { text: "every competitor solves either the " },
        { text: "hiring side", bold: true },
        { text: " (connect students to companies) or the " },
        { text: "content side", bold: true },
        { text: " (courses, videos). nobody has built an integrated system that measures " },
        {
          text: "readiness + identifies gaps + helps students fix those gaps + connects them to roles that match their actual skill level",
          bold: true,
        },
        { text: " — all inside one platform, built specifically for tier 2/3 colleges in india." },
      ],
    },
    laptop: {
      src: `${A}/laptop.webp`,
      alt: "7seers profile page with master resume on a convertible laptop",
    },
  },
  voices: {
    heading: "student voices",
    illustration: { src: `${A}/students.svg`, alt: "four college students standing together" },
    star: `${A}/star.svg`,
    quotes: [
      "“i watch interview videos on youtube every night. but i still don’t know if i’m actually ready or not.”",
      "“i’m scared to do mock interviews with my seniors. what if they think i’m bad? at least a machine won’t judge me.”",
      "“i got placed but my friend didn’t — and he’s smarter than me. we just didn’t know what to prepare for.”",
    ],
  },
  insights: {
    heading: "key insights that shaped the design",
    items: [
      {
        title: "students lack direction, not effort",
        action: "build a role-specific readiness score as the product’s north star. make it the first thing students see.",
      },
      {
        title: "learning without outcome visibility is motivation-killing",
        action: "every learning activity must show its impact on the jri score. make progress visible and measurable.",
      },
      {
        title: "fear of judgment kills practice",
        action: "ai-only feedback, no human evaluator in the loop. make failure feel private and safe.",
      },
    ],
  },
  // 7seers has its own persona now — the frame no longer reuses jigyasa.
  persona: {
    name: "nirmala",
    age: "22 year",
    photo: `${A}/persona-nirmala.webp`,
    photoAlt: "nirmala, standing in front of a wall of branches",
    description:
      "college-going student and is in her last year of college, searching for internship or a full time job.",
    groups: [
      {
        title: "goal",
        items: [
          "find relevant internships and entry-level business opportunities",
          "build practical, industry-relevant skills",
          "create a strong resume and improve employability",
          "explore different career paths within business operations",
          "get better guidance and support during job preparation",
        ],
      },
      {
        title: "needs",
        items: [
          "a centralized platform to find internships and jobs",
          "relevant and personalized job opportunities",
          "practical resources for resume building and interview preparation",
          "guidance on skills required for different roles",
          "easier access to opportunities beyond campus placements",
        ],
      },
      {
        title: "concerns",
        items: [
          "finding relevant internships across multiple platforms is time-consuming",
          "difficult to know which skills are actually required for a job",
          "uncertainty about what to include in a resume",
          "limited practical guidance for interview preparation",
          "campus placement opportunities feel limited and inconsistent",
          "difficult to discover suitable opportunities outside college placements",
        ],
      },
      {
        title: "finds useful",
        items: [
          "platforms that bring multiple job opportunities into one place",
          "practical, industry-relevant learning resources",
          "resume-building guidance",
          "interview preparation and feedback",
          "personalized recommendations based on skills and interests",
          "guidance on career paths and required skills",
        ],
      },
    ],
  } satisfies PersonaData,
  ideation: {
    image: `${A}/stickies.svg`,
    alt: "sticky notes with feature ideas: ai voice mock interview, skill sprint learning, peer mock interview, mentor booking, whatsapp chatbot practice, role-based jri score, readiness-gated job match, video submission review, leaderboard gamification",
  },
  // Unlike carpooling, 7seers states its solution as a flat list rather than
  // the concern → opportunity → solution columns.
  solution: [
    "7seers shows their skill gap against the specific job and tells them what skills they need to work on.",
    "they can take job-specific assessments and mock interviews to practice before facing the real interview.",
    "a readiness score helps them understand where they stand and what they still need to improve.",
    "we created a separate learning hub for courses, skills, and learning resources, keeping learning and job application journeys distinct.",
    "instead of asking them to learn everything, 7seers provides role-specific preparation based on the job they’re targeting.",
  ],
  // Brand identity is the type specimen, dropped in as exported artwork.
  typography: {
    image: `${A}/typography-card.svg`,
    alt: "type specimen: Work Sans, regular and medium, with upper- and lowercase alphabets and numerals",
    width: 748,
    height: 357,
  },
  // Wide desktop captures rather than carpooling's phone grid.
  screens: [
    {
      // Rasterised at 2× from the Figma SVG, which was 2.4MB of embedded
      // bitmap and arrived too late to paint before you scrolled past it.
      // The export's margin carries a drop shadow over transparency, so it
      // is flattened onto the band colour and the band holds that colour
      // flat behind this image — see the gradient stops on the page.
      src: `${A}/screen-01.webp`,
      alt: "readiness panel over a job listing: a 42% readiness score with its jri breakdown, and the backend developer role it is measured against",
      width: 1578,
      height: 1086,
    },
    {
      src: `${A}/screen-02.svg`,
      alt: "mock assessment in progress: a multiple-choice question, the timer, and the question palette tracking answered and flagged questions",
      width: 791,
      height: 487,
    },
  ],
};
