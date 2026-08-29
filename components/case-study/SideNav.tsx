"use client";

import { useEffect, useState } from "react";

export type NavItem = { label: string; id?: string };

const base = "block whitespace-nowrap text-[14px] leading-9 transition-colors duration-200";

// Section index for the case study. Desktop: sticky column on the left.
// Small screens: a horizontally scrolling strip pinned to the top. The
// active item follows the section that currently sits in the top third
// of the viewport, so it tracks reading position rather than link clicks.
export default function SideNav({ items }: { items: NavItem[] }) {
  const ids = items.map((i) => i.id).filter((id): id is string => Boolean(id));
  const [active, setActive] = useState(ids[0] ?? "");

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const line = window.innerHeight * 0.35;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      // Once the page is scrolled to the very end, the last section wins
      // even if it's shorter than the viewport.
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
        current = ids[ids.length - 1];
      }
      setActive((prev) => (prev === current ? prev : current));
      raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
    // `ids` comes from a static list, so subscribing once is enough.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const render = (item: NavItem) => {
    if (!item.id) {
      return (
        <span className={`${base} cursor-default font-medium text-[#737373]`}>
          {item.label}
        </span>
      );
    }
    const isActive = item.id === active;
    return (
      <a
        href={`#${item.id}`}
        aria-current={isActive ? "location" : undefined}
        className={`${base} ${
          isActive
            ? "font-bold text-[#111111]"
            : "font-medium text-[#737373] hover:text-[#111111]"
        }`}
      >
        {item.label}
      </a>
    );
  };

  return (
    <>
      {/* desktop */}
      <ul className="hidden cs:block">
        {items.map((item) => (
          <li key={item.label}>{render(item)}</li>
        ))}
      </ul>
      {/* phones / tablets */}
      <div className="sticky top-0 z-10 -mx-4 mb-8 bg-background/90 backdrop-blur sm:-mx-8 cs:hidden">
        <ul className="flex gap-6 overflow-x-auto px-4 py-1 [scrollbar-width:none] sm:px-8 [&::-webkit-scrollbar]:hidden">
          {items.map((item) => (
            <li key={item.label} className="shrink-0">
              {render(item)}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
