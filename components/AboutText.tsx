"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef } from "react";
import type { AboutSegment } from "@/lib/data";

// One continuous letter-by-letter reveal across all paragraphs, scrubbed by
// scroll position — letters brighten strictly in reading order, line by line.
export default function AboutText({ paragraphs }: { paragraphs: AboutSegment[][] }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current!;
    const spans = Array.from(el.querySelectorAll<HTMLSpanElement>("span[data-ch]"));
    let raf = 0;
    let lastCount = -1;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const start = window.innerHeight * 0.92;
      const end = window.innerHeight * 0.38;
      const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));
      const count = Math.round(progress * spans.length);
      if (count !== lastCount) {
        lastCount = count;
        spans.forEach((s, i) => {
          s.style.opacity = i < count ? "1" : "0.14";
        });
      }
      raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, []);

  const NBSP = String.fromCharCode(160);

  return (
    <div
      ref={ref}
      className="mt-3 space-y-5 font-grotesque text-[21px] font-semibold leading-[1.4] text-foreground/70 sm:text-[25px]"
    >
      {paragraphs.map((segments, pi) => (
        <p key={pi}>
          {segments.map((seg, si) =>
            seg.sticker ? (
              <img
                key={si}
                src={seg.sticker}
                alt=""
                className="mx-0.5 inline-block h-10 w-10 align-middle"
              />
            ) : (
              seg.text!.split(" ").map((word, wi) => (
                <span key={`${si}-${wi}`} className="inline-block whitespace-nowrap">
                  {word.split("").map((ch, ci) => (
                    <span
                      key={ci}
                      data-ch
                      style={{ opacity: 0.14, transition: "opacity 0.25s ease" }}
                    >
                      {ch}
                    </span>
                  ))}
                  <span data-ch style={{ opacity: 0.14 }}>
                    {NBSP}
                  </span>
                </span>
              ))
            ),
          )}
        </p>
      ))}
    </div>
  );
}
