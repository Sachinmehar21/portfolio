/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import CaseStudyPage from "@/components/case-study/CaseStudyPage";
import Persona from "@/components/case-study/Persona";
import SectionHeading from "@/components/case-study/SectionHeading";
import KeyInsights from "@/components/case-study/KeyInsights";
import TypeSpecimen from "@/components/case-study/TypeSpecimen";
import { body, cardShadow } from "@/components/case-study/styles";
import { carpooling as c } from "@/lib/carpooling";

export const metadata: Metadata = {
  title: "carpooling app — sanskrati",
  description: c.overview.text,
};

export default function CarpoolingCaseStudy() {
  return (
    <CaseStudyPage
      title={c.title}
      nav={c.nav}
      hero={{ src: c.hero.image, alt: c.hero.alt, width: 1556, height: 526 }}
      accent="#bdb1f8"
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

      {/* user persona — the frame puts her between the research she came out
          of and the insights she leads to */}
      <Persona
        className="mt-[47px]"
        heading="user persona"
        persona={{ ...c.persona, photoAlt: `${c.persona.name}, standing in a garden` }}
      />

      {/* key insights */}
      <KeyInsights className="mt-[43px]" heading={c.insights.heading} items={c.insights.items} />

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
        {/* One column until the case-study breakpoint, then the frame's three.
            No sm:grid-cols-2 here — it outranks the cs: rule and drops the
            solution column onto a second row. */}
        <div className="relative mt-[18px] grid gap-10 cs:grid-cols-[297px_326px_1fr] cs:gap-0 cs:pl-[14px]">
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
          <img
            src={c.solution.arrows.downRight}
            alt=""
            width={65}
            height={52}
            className="pointer-events-none absolute left-[175px] top-[331px] hidden cs:block"
            loading="lazy"
          />
          <img
            src={c.solution.arrows.upRight}
            alt=""
            width={64}
            height={42}
            className="pointer-events-none absolute left-[545px] top-[331px] hidden cs:block"
            loading="lazy"
          />
        </div>
      </section>

      {/* brand identity — type specimen only; the rest of the identity work
          isn't in the frame yet */}
      <TypeSpecimen
        className="mt-[50px]"
        image={c.typography.image}
        alt={c.typography.alt}
        width={c.typography.width}
        height={c.typography.height}
      />

      {/* screens */}
      <section id="screens" className="mt-9 scroll-mt-[120px]">
        <SectionHeading>screens</SectionHeading>
        {/* Each cell is the phone's footprint (245×402 in the design). The
            exported artwork is bigger than the phone because it carries a
            soft shadow, so it's oversized and offset to keep the phone
            itself centred in the cell at every width. */}
        {/* The band cools from pale blue at the top to white at the bottom,
            and a white veil sits over the last row so the phones dissolve
            into the page instead of being cut off. */}
        <div className="relative mt-[3px]">
          <ul className="grid grid-cols-2 bg-[linear-gradient(180deg,#eef0f8_0%,#f5f6fb_55%,#ffffff_100%)] px-4 pb-4 sm:grid-cols-3 sm:px-[55px] sm:pb-[15px]">
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
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[200px] bg-[linear-gradient(to_top,#ffffff_14%,rgba(255,255,255,0)_100%)]"
          />
        </div>
      </section>
    </CaseStudyPage>
  );
}
