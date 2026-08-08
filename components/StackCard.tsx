"use client";

import { useEffect, useRef, type ReactNode } from "react";

const STICK_TOP = 110; // must match the sticky top offset below

// Sticky wrapper for the project-card deck: while the next card slides up to
// cover this one, the covered card eases back (scales down and dims) so the
// stack reads as cards settling on top of each other instead of a hard overlap.
export default function StackCard({ children }: { children: ReactNode }) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer = outerRef.current!;
    const inner = innerRef.current!;
    let raf = 0;
    const update = () => {
      const rect = outer.getBoundingClientRect();
      const next = outer.nextElementSibling;
      let progress = 0;
      if (next) {
        const nextTop = next.getBoundingClientRect().top;
        progress = Math.min(1, Math.max(0, 1 - (nextTop - STICK_TOP) / rect.height));
      }
      // Scale only — an opacity fade would let the card underneath ghost
      // through, since the cards overlap while stacking.
      inner.style.transform = `scale(${(1 - 0.06 * progress).toFixed(4)})`;
      raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div ref={outerRef} className="sticky top-[110px] mb-16 last:mb-0">
      <div ref={innerRef} className="origin-top will-change-transform">
        {children}
      </div>
    </div>
  );
}
