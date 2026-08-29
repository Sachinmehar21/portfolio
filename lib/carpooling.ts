// Copy for the carpooling case study (/work/carpooling). Everything on that
// page is lowercase in the design, so keep new copy lowercase too.

export const carpooling = {
  title: "carpoolingapp",
  hero: {
    image: "/assets/rideabit/hero.webp",
    alt: "collage of the carpooling app home screen, riders in cars and a card reading all riders are verified",
  },
  nav: [
    { label: "overview", id: "overview" },
    { label: "problem", id: "problem" },
    { label: "research", id: "research" },
    { label: "key-insights", id: "key-insights" },
    { label: "ideation", id: "ideation" },
    { label: "solution", id: "solution" },
    { label: "flow/screen design", id: "screens" },
    // The design lists these two, but the frame has no content for them yet.
    { label: "brand identity" },
    { label: "reflection" },
  ],
  overview: {
    text: "a carpooling app designed for frequent long- and short-distance travellers to share rides and split fuel costs. it connects people heading in the same direction, helping riders save on expensive cab fares while allowing drivers to share their petrol expenses.",
    meta: [
      { label: "project type", value: "carpooling app" },
      { label: "my role", value: "ux · systems design · interaction design · visual design" },
      { label: "duration", value: "1 month 20 days" },
    ],
  },
  problem: {
    pills: "/assets/rideabit/problem-pills.svg",
    items: [
      {
        title: "building trust & safety",
        question:
          "how might we make users feel safe and comfortable when sharing rides with people they don't know?",
      },
      {
        title: "creating a sustainable revenue model",
        question:
          "how might we generate revenue from the platform without making carpooling feel expensive or defeating its core purpose of saving money?",
      },
      {
        title: "communicating price without overwhelming users",
        question:
          "how might we present the estimated ride/fuel cost clearly and transparently, without making the price feel like a financial burden?",
      },
      {
        title: "understanding frequent travel patterns",
        question:
          "how might we identify the cities and routes users frequently travel to, using their location data, without creating friction or making users feel their privacy is being compromised?",
      },
    ],
  },
  research: {
    intro: [
      "to understand the travel habits, motivations, and concerns of potential users,",
      "i spoke with frequent travellers who use cabs, public transport, or their own vehicles. their experiences and preferences varied depending on how they travelled, but the conversations helped me identify common pain points around cost, convenience, trust, and finding people travelling on similar routes.",
    ],
    questionsLead: "i focused the interviews around questions such as:",
    questions: [
      "how often do you travel between cities?",
      "what makes travelling expensive for you?",
      "would you consider sharing a ride with someone? why or why not?",
      "what would make you trust a stranger enough to travel with them?",
      "how do you currently find people travelling on the same route?",
    ],
    competitive: {
      title: "competitive research",
      before: "i also studied existing carpooling and ride-sharing platforms, including",
      brands: [
        { name: "blablacar", logo: "/assets/rideabit/logo-blablacar.png" },
        { name: "quick ride", logo: "/assets/rideabit/logo-quickride.png" },
      ],
      after:
        ", to understand how they approach ride discovery, user profiles, trust & safety, pricing, and route matching. this helped me identify gaps and opportunities for improving the overall carpooling experience.",
    },
  },
  persona: {
    name: "jigyasa",
    age: "22 year",
    photo: "/assets/rideabit/persona-jigyasa.webp",
    description:
      "college-going student who regularly uses rapido, cabs, metro, and local buses for commuting. she also occasionally travels to a nearby city/hometown.",
    groups: [
      {
        title: "goal",
        items: [
          "find an affordable alternative to cabs and other paid transport",
          "make daily college travel more convenient",
          "travel to nearby cities without relying entirely on public transport",
          "reduce travel costs by sharing fuel expenses",
        ],
      },
      {
        title: "needs",
        items: [
          "a reliable and verified driver/rider",
          "clear information about who she will travel with",
          "strong safety and verification mechanisms",
          "ability to know who else is travelling",
          "option to choose/see female passengers on longer journeys",
        ],
      },
      {
        title: "concerns",
        items: [
          "personal safety with an unknown person",
          "lack of trust during long-distance journeys",
          "whether the driver/rider is genuinely verified",
          "being the only woman in the car",
          "uncertainty about the people she will be travelling with",
        ],
      },
      {
        title: "finds useful",
        items: [
          "sharing petrol/fuel expenses",
          "more affordable than taking a cab alone",
          "convenient for college commuting",
          "useful during rain, extreme heat, or difficult public-transport conditions",
          "useful for travelling to nearby cities/hometowns",
        ],
      },
    ],
  },
  insights: [
    "safety comes before convenience: jigyasa finds carpooling useful and affordable, but will reject a ride if she doesn't feel safe.",
    "visibility builds trust: knowing who the driver and other passengers are helps her feel more confident about sharing a ride.",
    "long-distance rides need more trust: her safety concerns increase as the distance and duration of the journey increase.",
    "verification creates confidence: verified identities and vehicle details make travelling with strangers feel more accountable.",
  ],
  ideation: {
    image: "/assets/rideabit/ideation-stickies.svg",
    alt: "sticky notes with rider questions: who is driving, who else is travelling, is the car genuine, can i identify the car, what happens if something goes wrong, am i the only woman, can someone track my journey, can i reject a ride",
  },
  solution: {
    concerns: {
      title: "user concern",
      items: [
        "“who am i travelling with?”",
        "“is this person genuine?”",
        "“is the vehicle genuine?”",
        "“what if something happens?”",
        "“how do i know i’m entering the right car?”",
        "“what if i feel uncomfortable?”",
      ],
    },
    opportunities: {
      title: "design opportunity",
      items: [
        "make passenger composition visible",
        "verify identity",
        "verify vehicle",
        "create accountability",
        "help user identify vehicle",
        "give user control",
      ],
    },
    solutions: {
      title: "solution",
      items: [
        "male/female seat indicators",
        "aadhaar-based verification",
        "vehicle details + number plate",
        "verified identity records",
        "future: ride-start photo + number plate",
        "safety/reporting mechanisms",
      ],
    },
  },
  screens: [
    { src: "/assets/rideabit/screen-01.webp", alt: "onboarding: empty seats. empty silence." },
    { src: "/assets/rideabit/screen-02.webp", alt: "onboarding: whether you have a car or just a destination" },
    { src: "/assets/rideabit/screen-03.webp", alt: "onboarding: save fuel, earn smiles" },
    { src: "/assets/rideabit/screen-04.webp", alt: "welcome screen with mobile number and otp entry" },
    { src: "/assets/rideabit/screen-05.webp", alt: "let others recognize you: profile photo picker" },
    { src: "/assets/rideabit/screen-06.webp", alt: "home screen with refer a friend banner and suggested rides nearby" },
    { src: "/assets/rideabit/screen-07.webp", alt: "find your next ride: pick-up, drop-off and date" },
    { src: "/assets/rideabit/screen-08.webp", alt: "available rides from mumbai to pune" },
    { src: "/assets/rideabit/screen-09.webp", alt: "select your seat and passenger details" },
  ],
};
