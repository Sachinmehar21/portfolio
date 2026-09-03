/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import CaseStudyPage from "@/components/case-study/CaseStudyPage";
import Persona from "@/components/case-study/Persona";
import SectionHeading from "@/components/case-study/SectionHeading";
import ComingSoonVeil from "@/components/case-study/ComingSoonVeil";
import { body, cardShadow } from "@/components/case-study/styles";
import { carpooling as c } from "@/lib/carpooling";

export const metadata: Metadata = {
  title: "carpooling app — sanskrati",
  description: c.overview.text,
};

// Hand-drawn curved arrow used twice in the solution section. `up` mirrors
// it so the same stroke points up-right instead of down-right.
function CurvedArrow({ color, up = false }: { color: string; up?: boolean }) {
  return (
    <svg
      aria-hidden
      width="72"
      height="64"
      viewBox="0 0 72 64"
      fill="none"
      stroke={color}
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={up ? { transform: "scaleY(-1)" } : undefined}
    >
      <path d="M5 7c22 2 44 14 61 46" />
      <path d="M46 46l20 7 4-21" />
    </svg>
  );
}

export default function CarpoolingCaseStudy() {
  return (
    <CaseStudyPage
      title={c.title}
      nav={c.nav}
      hero={{ src: c.hero.image, alt: c.hero.alt, width: 1337, height: 450 }}
    >
      {/* overview */}
      <section id="overview" className="mt-[22px] scroll-mt-[120px]">
        <SectionHeading>overview</SectionHeading>
        <div className="mt-[13px] flex flex-col gap-10 cs:grid cs:grid-cols-[301px_1fr] cs:gap-x-[53px] cs:pl-[14px]">
          <p className={body}>{c.overview.text}</p>
          <dl>
            {c.overview.meta.map((row) => (
              <div
                key={row.label}
                className={`grid grid-cols-[95px_1fr] border-b border-[#d1d1d6] py-2 first:pt-0 last:border-0 ${body}`}
              >
                <dt className="text-[#b4b4b4]">{row.label}</dt>
                <dd>{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* problem */}
      <section id="problem" className="mt-[61px] scroll-mt-[120px]">
        <SectionHeading>problem</SectionHeading>
        <div className="mt-px flex flex-col gap-8 cs:flex-row cs:items-end cs:justify-between">
          <img
            src={c.problem.pills}
            alt="the four problem areas as coloured labels: understanding frequent travel patterns, creating a sustainable revenue model, communicating price without overwhelming users, building trust & safety"
            width={437}
            height={248}
            className="order-2 h-auto w-full max-w-[437px] cs:order-1"
            loading="lazy"
          />
          <div
            className={`order-1 w-full rounded-2xl bg-white px-[21px] pb-[29px] pt-[30px] cs:order-2 cs:w-[410px] cs:shrink-0 ${cardShadow}`}
          >
            <ul className="space-y-[22px]">
              {c.problem.items.map((item) => (
                <li key={item.title}>
                  <h3 className="text-[14px] font-semibold leading-[18px] text-[#111111]">
                    {item.title}
                  </h3>
                  <p className={`mt-[6px] ${body}`}>{item.question}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* research */}
      <section id="research" className="mt-[75px] scroll-mt-[120px]">
        <SectionHeading>research</SectionHeading>
        <div className={`mt-2 cs:pl-[14px] ${body}`}>
          <p>
            {c.research.intro[0]}
            <br />
            {c.research.intro[1]}
          </p>
          <p className="mt-[22px]">{c.research.questionsLead}</p>
          <ol className="ml-[7px]">
            {c.research.questions.map((q, i) => (
              <li key={q} className="flex gap-x-[10px]">
                <span className="w-[13px] shrink-0">{i + 1}.</span>
                <span>{q}</span>
              </li>
            ))}
          </ol>
          <h3 className="mt-[22px] font-bold">{c.research.competitive.title}</h3>
          <p>
            {c.research.competitive.before}{" "}
            {c.research.competitive.brands.map((brand, i) => (
              <span key={brand.name} className="whitespace-nowrap">
                <img
                  src={brand.logo}
                  alt=""
                  className="mr-1 inline-block h-[22px] w-auto align-[-5px]"
                  loading="lazy"
                />
                <b className="font-bold">{brand.name}</b>
                {i < c.research.competitive.brands.length - 1 ? " and " : ""}
              </span>
            ))}
            {c.research.competitive.after}
          </p>
        </div>
      </section>

      {/* Everything from the persona on is still being written up: it stays

      {/* key insights */}
      <section id="key-insights" className="mt-[43px] scroll-mt-[120px]">
        <SectionHeading>key insights</SectionHeading>
        <ol className="mt-[10px] grid gap-x-[13px] gap-y-[11px] sm:grid-cols-2 cs:pl-[13px]">
          {c.insights.map((text, i) => (
            <li
              key={text}
              className="flex items-start gap-[13px] rounded-[10px] bg-[#edffe1] px-[14px] pb-2 pt-4"
            >
              <span
                aria-hidden
                className="-mt-px flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-[#4dbb04] text-[14px] font-bold leading-none text-white"
              >
                {i + 1}
              </span>
              <p className="text-[14px] font-semibold leading-[22px] text-[#4dbb04]">{text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ideation */}
      <section id="ideation" className="mt-[49px] scroll-mt-[120px]">
        <SectionHeading>ideation</SectionHeading>
        <figure className="mt-[2px] flex justify-center bg-white px-4 py-[11px]">
          <img
            src={c.ideation.image}
            alt={c.ideation.alt}
            width={638}
            height={250}
            className="h-auto w-full max-w-[638px]"
            loading="lazy"
          />
        </figure>
      </section>

      {/* solution */}
      <section id="solution" className="mt-[50px] scroll-mt-[120px]">
        <SectionHeading>solution</SectionHeading>
        <div className="relative mt-[18px] grid gap-10 sm:grid-cols-2 cs:grid-cols-[297px_326px_1fr] cs:gap-0 cs:pl-[14px]">
          {[c.solution.concerns, c.solution.opportunities, c.solution.solutions].map((col, i) => (
            <div
              key={col.title}
              className={i === 0 ? "cs:max-w-[232px]" : i === 1 ? "cs:pt-[211px]" : ""}
            >
              <h3 className="text-[16px] font-semibold leading-none text-[#111111]">{col.title}</h3>
              <ul className={`mt-[25px] space-y-[21px] ${body}`}>
                {col.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
          <span className="pointer-events-none absolute left-[175px] top-[331px] hidden cs:block">
            <CurvedArrow color="#f4ecd2" />
          </span>
          <span className="pointer-events-none absolute left-[545px] top-[331px] hidden cs:block">
            <CurvedArrow color="#d3e9c5" up />
          </span>
        </div>
      </section>

      {/* screens */}
      <section id="screens" className="mt-9 scroll-mt-[120px]">
        <SectionHeading>screens</SectionHeading>
        {/* Each cell is the phone's footprint (245×402 in the design). The
            exported artwork is bigger than the phone because it carries a
            soft shadow, so it's oversized and offset to keep the phone
            itself centred in the cell at every width. */}
        <ul className="mt-[3px] grid grid-cols-2 bg-[#fbeec7] px-4 pb-4 sm:grid-cols-3 sm:px-[55px] sm:pb-[15px]">
          {c.screens.map((screen, i) => (
            <li
              key={screen.src}
              // odd count: centre the last phone when the grid is two columns wide
              className={`relative aspect-[245/402] ${
                i === c.screens.length - 1 ? "col-span-2 mx-auto w-1/2 sm:col-span-1 sm:w-auto" : ""
              }`}
            >
              <img
                src={screen.src}
                alt={screen.alt}
                width={772}
                height={1090}
                className="absolute left-[-23.88%] top-[-15.92%] w-[157.55%] max-w-none"
                loading="lazy"
              />
            </li>
          ))}
        </ul>
      </section>

      {/* the persona is the last thing written up so far */}
      <ComingSoonVeil className="mt-[60px]" note={c.comingSoon}>
        <Persona
          heading="user persona"
          persona={{ ...c.persona, photoAlt: `${c.persona.name}, standing in a garden` }}
        />
      </ComingSoonVeil>
    </CaseStudyPage>
  );
}
