import type { ReactNode } from "react";

// "overview", "problem", … — bold label with the 5px bar on its left,
// exactly as in the Figma frame (bar 5×28, text starts 14px from the bar).
// The bar stretches with the text when a long heading wraps on phones.
// Each case study sets its own bar colour on the page wrapper (7seers is
// amber, carpooling lavender), so the bar reads it off --cs-accent.
export default function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="flex min-h-7 items-stretch">
      <span aria-hidden className="mr-[9px] block w-[5px] shrink-0 bg-[var(--cs-accent)]" />
      <span className="py-1 text-[15px] font-bold leading-5 tracking-[0.02em] text-[#111111]">
        {children}
      </span>
    </h2>
  );
}
