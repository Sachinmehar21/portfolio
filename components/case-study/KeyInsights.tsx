import SectionHeading from "@/components/case-study/SectionHeading";
import { cardTitle } from "@/components/case-study/styles";

export type Insight = { title: string; action: string };

// "key insights that shaped the design" — an oversized numeral in a purple
// gradient hanging off the left edge of a grey bar that hugs its own text,
// with the takeaway on an arrow line underneath. Both case studies use this
// same treatment in the Figma frames, so the markup lives here.
//
// The numerals are Carlito Bold 83.16/101.6 per the frame. Carlito isn't a
// Google Font, so it falls back to Calibri (metric-compatible) — drop a
// Carlito woff2 into public/fonts and add an @font-face to pin it exactly.
const numeral =
  "pointer-events-none absolute -left-[42px] top-1/2 -translate-y-1/2 select-none " +
  "bg-[linear-gradient(180deg,#b06af0_0%,#7b2fd6_100%)] bg-clip-text font-bold text-transparent";

export default function KeyInsights({
  heading,
  items,
  id = "key-insights",
  className = "",
}: {
  heading: string;
  items: readonly Insight[];
  id?: string;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-[120px] ${className}`}>
      <SectionHeading>{heading}</SectionHeading>
      <ol className="mt-[7px] space-y-[42px] pl-[42px] cs:pl-[56px]">
        {items.map((item, i) => (
          <li key={item.title} className="relative">
            <span
              aria-hidden
              className={numeral}
              style={{
                fontFamily: '"Carlito", Calibri, "Trebuchet MS", sans-serif',
                fontSize: "83.16px",
                lineHeight: "101.6px",
              }}
            >
              {i + 1}
            </span>
            <div className="max-w-[705px] rounded-lg bg-[#ededed] py-[14px] pl-[14px] pr-[14px] cs:w-fit">
              <h3 className={cardTitle}>{item.title}</h3>
              <p className="mt-[6px] text-[14px] font-medium leading-[22px] text-[#a16ae1]">
                → {item.action}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
