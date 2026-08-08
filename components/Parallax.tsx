"use client";

import { useEffect, useRef, type ReactNode } from "react";

// Shifts its child vertically based on how far the element is from the
// viewport center, giving card images a gentle glide while scrolling.
export default function Parallax({
  children,
  strength = 26,
  className = "",
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current!;
    let raf = 0;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      const progress = (elementCenter - viewportCenter) / viewportCenter; // -1..1
      el.style.transform = `translateY(${(-progress * strength).toFixed(2)}px)`;
      raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, [strength]);

  return (
    <div ref={ref} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}
