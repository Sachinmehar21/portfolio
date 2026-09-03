/* eslint-disable @next/next/no-img-element */
import type { ReactNode } from "react";

// The tail of a case study that isn't written up yet. Any section passed as
// a child is still rendered, but only a sliver of it — masked away to
// nothing, so it reads as "there is more behind this" — with the coming-soon
// sign standing in front. That veiled part is inert: not focusable, not read
// out, not selectable, so what's left of it is decoration rather than
// content. With no children the sign simply closes the page on its own.
export default function ComingSoonVeil({
  children,
  note,
  peek = 210,
  className = "",
}: {
  children?: ReactNode;
  note: string;
  peek?: number;
  className?: string;
}) {
  // Full strength through the section heading, then off to nothing well
  // before the clip edge, so the cut itself never shows.
  const fade =
    "linear-gradient(to bottom, #000 0%, #000 13%, rgba(0,0,0,0.34) 47%, transparent 88%)";
  return (
    <div className={`relative ${className}`}>
      {children ? (
        <div
          inert
          aria-hidden
          className="pointer-events-none select-none overflow-hidden [filter:grayscale(0.3)]"
          style={{ height: peek, maskImage: fade, WebkitMaskImage: fade }}
        >
          {children}
        </div>
      ) : null}

      <div
        className="relative flex flex-col items-center"
        // pull the sign up over the sliver it's standing in front of
        style={children ? { marginTop: -(peek * 0.55) } : undefined}
      >
        <img
          src="/assets/coming-soon-sign.svg"
          alt="a pair of hands holding up a “coming soon” sign"
          width={177}
          height={201}
          className="h-[201px] w-[177px]"
        />
        <p className="mt-4 max-w-[460px] text-center text-[14px] font-medium leading-[22px] text-[#737373]">
          {note}
        </p>
      </div>
    </div>
  );
}
