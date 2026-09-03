/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import CaseStudyPage from "@/components/case-study/CaseStudyPage";
import SectionHeading from "@/components/case-study/SectionHeading";
import Persona from "@/components/case-study/Persona";
import ComingSoonVeil from "@/components/case-study/ComingSoonVeil";
import { body, cardShadow, cardTitle } from "@/components/case-study/styles";
import { sevenseers as s } from "@/lib/sevenseers";

export const metadata: Metadata = {
  title: "7seers — sanskrati",
  description: s.overview.text,
};

// Pink "gap" tag under each competitor description
function GapTag({ children }: { children: string }) {
  return (
    <span className="inline-block max-w-[274px] rounded-md bg-[#ffd8d8] px-[10px] py-[3px] text-[14px] font-medium leading-[22px] text-[#756e6e]">
      {children}
    </span>
  );
}

// 180×175 gradient tile holding a competitor's logo
function LogoBox({ logo, name }: { logo: (typeof s.competitors.rows)[number]["logo"]; name: string }) {
  if ("box" in logo && logo.box) {
    return (
      <img
        src={logo.src}
        alt={`${name} logo`}
        width={360}
        height={350}
        className="h-[175px] w-[180px] shrink-0 rounded-xl"
        loading="lazy"
      />
    );
  }
  return (
    <div className="flex h-[175px] w-[180px] shrink-0 items-center justify-center rounded-xl bg-[linear-gradient(90deg,#eae5ec_0%,#f4f3f4_100%)]">
      <img
        src={logo.src}
        alt={`${name} logo`}
        width={"width" in logo ? logo.width : undefined}
        height={"height" in logo ? logo.height : undefined}
        className="h-auto max-w-[135px]"
        loading="lazy"
      />
    </div>
  );
}

export default function SevenSeersCaseStudy() {
  return (
    <CaseStudyPage title={s.title} nav={s.nav} hero={s.hero}>
      {/* overview */}
      <section id="overview" className="mt-[22px] scroll-mt-[120px]">
        <SectionHeading>overview</SectionHeading>
        <div className="mt-[3px] flex flex-col gap-10 cs:grid cs:grid-cols-[301px_1fr] cs:gap-x-[53px] cs:pl-[14px]">
          <p className={body}>{s.overview.text}</p>
          <dl className="cs:pt-[7px]">
            {s.overview.meta.map((row) => (
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
      <section id="problem" className="mt-[52px] scroll-mt-[120px]">
        <SectionHeading>problem</SectionHeading>
        <div className="mt-[2px] flex flex-col gap-8 cs:flex-row cs:items-end cs:justify-between">
          <img
            src={s.problem.pills}
            alt={s.problem.pillsAlt}
            width={437}
            height={197}
            className="order-2 h-auto w-full max-w-[437px] cs:order-1"
            loading="lazy"
          />
          <div
            className={`order-1 w-full rounded-2xl bg-white px-[21px] pb-[29px] pt-[30px] cs:order-2 cs:w-[410px] cs:shrink-0 ${cardShadow}`}
          >
            <ul className="space-y-[22px]">
              {s.problem.items.map((item) => (
                <li key={item.title}>
                  <h3 className="text-[14px] font-semibold leading-[18px] text-[#111111]">
                    {item.title}
                  </h3>
                  <p className={`mt-[6px] ${body}`}>{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* research: where the idea came from, data, competitors */}
      <section id="research" className="mt-[89px] scroll-mt-[120px]">
        <SectionHeading>{s.idea.heading}</SectionHeading>

        {/* Three cards stepping right-left-right, joined by dashed connectors.
            In the frame the cards and connectors run past the content column
            on both sides (to x=345 and x=1343 of the 1440 frame), so this
            block deliberately overflows at desktop widths. */}
        <div className="relative mt-[3px] flex flex-col gap-[22px] cs:h-[398px] cs:gap-0">
          {s.idea.cards.map((card, i) => {
            const right = i !== 1;
            return (
              <div
                key={card.title}
                className={`rounded-lg px-[15px] pb-[14px] pt-[14px] cs:absolute ${
                  right
                    ? "bg-[linear-gradient(90deg,#efeaf6_0%,#f6e9f1_100%)] cs:left-[223px] cs:w-[652px]"
                    : "bg-[linear-gradient(90deg,#ebe9f6_0%,#f6f0e6_100%)] cs:left-[13px] cs:w-[592px]"
                }`}
                style={{ top: i === 0 ? 0 : i === 1 ? 140 : 280 }}
              >
                <h3 className={cardTitle}>{card.title}</h3>
                <p className={`mt-2 ${body}`}>{card.text}</p>
              </div>
            );
          })}
          {/* connectors: trigger → hypothesis (right side), hypothesis → why now (left side) */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-[875px] top-[59px] hidden h-[139px] w-[68px] border-b border-r border-dashed border-[#d9dbdd] cs:block"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute left-[-55px] top-[199px] hidden h-[139px] w-[278px] border-b border-l border-dashed border-[#d9dbdd] cs:block"
          />
        </div>

        {/* dashboard on a monitor, on a full-bleed soft gradient band */}
        <div className="relative mt-[54px] py-6 cs:h-[875px] cs:py-0">
          <div
            aria-hidden
            className="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 bg-[radial-gradient(55%_60%_at_22%_88%,#efe3e6_0%,rgba(239,227,230,0)_70%),radial-gradient(45%_55%_at_82%_82%,#eae0f0_0%,rgba(234,224,240,0)_70%)]"
          />
          <img
            src={s.idea.monitor.src}
            alt={s.idea.monitor.alt}
            width={1652}
            height={1382}
            className="h-auto w-full cs:absolute cs:left-[15px] cs:top-[20px] cs:w-[826px]"
            loading="lazy"
          />
        </div>

        {/* data */}
        <div className="mt-[68px]">
          <SectionHeading>{s.data.heading}</SectionHeading>
          <ul className="mt-3 grid grid-cols-2 gap-[14px] cs:grid-cols-4 cs:pl-[15px]">
            {s.data.stats.map((stat) => (
              <li
                key={stat.value}
                className="stat-card flex h-[112px] flex-col items-center justify-center rounded-lg px-3 text-center"
              >
                <span className="text-[24px] font-medium leading-none text-[#111111]">
                  {stat.value}
                </span>
                <span className={`mt-[14px] block ${body}`}>{stat.label}</span>
              </li>
            ))}
          </ul>

          <div className="mt-[50px] flex flex-col gap-8 cs:grid cs:grid-cols-[371px_414px] cs:justify-between cs:pl-[14px]">
            <div>
              <h3 className={cardTitle}>{s.data.paradox.title}</h3>
              <p className={`mt-[22px] ${body}`}>{s.data.paradox.text}</p>
              <ol className="mt-[25px] space-y-[9px]">
                {s.data.paradox.points.map((point, i) => (
                  <li
                    key={point}
                    className="flex gap-2 text-[16px] font-bold leading-[22px] text-[#111111]"
                  >
                    <span className="text-[#6d28d9]">{String.fromCharCode(97 + i)}.</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ol>
            </div>
            <img
              src={s.data.paradox.image.src}
              alt={s.data.paradox.image.alt}
              width={828}
              height={440}
              className="h-auto w-full max-w-[414px] rounded-lg cs:-mt-3"
              loading="lazy"
            />
          </div>
        </div>

        {/* competitors */}
        <div className="mt-[86px]">
          <SectionHeading>{s.competitors.heading}</SectionHeading>
          <ul className="mt-3 space-y-[27px] cs:pl-[15px] cs:pr-[23px]">
            {s.competitors.rows.map((row) => (
              <li
                key={row.name}
                className={`flex flex-col gap-5 sm:flex-row sm:items-start ${
                  row.side === "right" ? "sm:flex-row-reverse sm:justify-start" : ""
                }`}
              >
                <LogoBox logo={row.logo} name={row.name} />
                <div className={`sm:pt-10 ${row.side === "right" ? "sm:mr-[22px]" : "sm:ml-[25px]"} sm:w-[274px]`}>
                  <p className={body}>{row.text}</p>
                  <div className="mt-[11px]">
                    <GapTag>{row.gap}</GapTag>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mx-auto mt-[60px] max-w-[755px] text-center">
            <h3 className={cardTitle}>{s.competitors.whiteSpace.title}</h3>
            <p className={`mt-[14px] ${body}`}>
              {s.competitors.whiteSpace.segments.map((seg, i) =>
                seg.bold ? (
                  <b key={i} className="font-bold">
                    {seg.text}
                  </b>
                ) : (
                  <span key={i}>{seg.text}</span>
                ),
              )}
            </p>
          </div>

          <div className="mt-[103px] flex justify-center cs:block cs:pl-[50px]">
            <img
              src={s.competitors.laptop.src}
              alt={s.competitors.laptop.alt}
              width={1940}
              height={924}
              className="h-auto w-full max-w-[820px]"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* student voices */}
      <section className="mt-[191px]">
        <SectionHeading>{s.voices.heading}</SectionHeading>
        <div className="mt-1 flex flex-col gap-8 cs:flex-row cs:items-start cs:gap-[43px] cs:pl-[13px]">
          <img
            src={s.voices.illustration.src}
            alt={s.voices.illustration.alt}
            width={346}
            height={232}
            className="h-auto w-full max-w-[346px]"
            loading="lazy"
          />
          <ul className="space-y-8 cs:pt-[11px]">
            {s.voices.quotes.map((quote) => (
              <li key={quote} className="flex items-start gap-[14px]">
                <img src={s.voices.star} alt="" width={46} height={49} className="-mt-2 shrink-0" />
                <p className={`max-w-[362px] ${body}`}>{quote}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* key insights */}
      <section id="key-insights" className="mt-[88px] scroll-mt-[120px]">
        <SectionHeading>{s.insights.heading}</SectionHeading>
        <ol className="mt-[7px] space-y-[42px] pl-[35px] cs:pl-[50px]">
          {s.insights.items.map((item, i) => (
            <li key={item.title} className="relative">
              <span
                aria-hidden
                className="pointer-events-none absolute -left-[35px] top-1/2 -translate-y-1/2 select-none text-[72px] font-bold leading-none text-[#bdb1f8]"
              >
                {i + 1}
              </span>
              <div className="max-w-[705px] rounded-lg bg-[#f5f2e9] py-[14px] pl-[8px] pr-[14px] cs:w-fit">
                <h3 className={cardTitle}>{item.title}</h3>
                <p className="mt-[6px] text-[14px] font-medium leading-[22px] text-[#a16ae1]">
                  → {item.action}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ideation */}
      <section id="ideation" className="mt-[72px] scroll-mt-[120px]">
        <SectionHeading>ideation</SectionHeading>
        <figure className="mt-[2px] flex justify-center bg-white px-4 py-[11px]">
          <img
            src={s.ideation.image}
            alt={s.ideation.alt}
            width={640}
            height={250}
            className="h-auto w-full max-w-[640px]"
            loading="lazy"
          />
        </figure>
      </section>

      {/* the personas are the last thing written up so far */}
      <ComingSoonVeil className="mt-[60px]" note={s.comingSoon}>
        <Persona heading="user personas" persona={s.persona} />
      </ComingSoonVeil>
    </CaseStudyPage>
  );
}
