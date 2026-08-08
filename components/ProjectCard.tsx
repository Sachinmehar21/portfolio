"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef } from "react";
import Parallax from "@/components/Parallax";

export type Project = {
  title: string;
  description: string;
  image: string;
  layout: "center" | "crop" | "cover";
  background: string;
  href: string;
};

// Interactive project card: tilts gently toward the cursor, zooms the
// artwork on hover, and floats a "view" chip that trails the pointer.
// All motion is lerped in a rAF loop so it feels springy, never jumpy.
export default function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const chipRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const card = cardRef.current!;
    const chip = chipRef.current!;
    const current = { rx: 0, ry: 0, x: 0, y: 0, o: 0 };
    const target = { rx: 0, ry: 0, x: 0, y: 0, o: 0 };
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      target.ry = px * 5;
      target.rx = -py * 5;
      target.x = e.clientX - r.left;
      target.y = e.clientY - r.top;
      target.o = 1;
    };
    const onLeave = () => {
      target.rx = 0;
      target.ry = 0;
      target.o = 0;
    };

    const tick = () => {
      const k = 0.14;
      current.rx += (target.rx - current.rx) * k;
      current.ry += (target.ry - current.ry) * k;
      current.x += (target.x - current.x) * k;
      current.y += (target.y - current.y) * k;
      current.o += (target.o - current.o) * k;
      card.style.transform = `perspective(1100px) rotateX(${current.rx.toFixed(3)}deg) rotateY(${current.ry.toFixed(3)}deg)`;
      chip.style.transform = `translate(${current.x.toFixed(1)}px, ${current.y.toFixed(1)}px) translate(-50%, -130%)`;
      chip.style.opacity = current.o.toFixed(3);
      raf = requestAnimationFrame(tick);
    };

    card.addEventListener("mousemove", onMove);
    card.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(tick);
    return () => {
      card.removeEventListener("mousemove", onMove);
      card.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <a
      ref={cardRef}
      href={project.href}
      className="stamp group relative block bg-white p-6 will-change-transform sm:p-10"
    >
      <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[1fr_1.2fr] md:gap-8">
        <div>
          <h3 className="font-serif text-2xl sm:text-3xl">{project.title}</h3>
          <p className="mt-3 max-w-md text-[21px] font-semibold leading-[26px] text-muted sm:mt-4 sm:text-[25px] sm:leading-[30px]">
            {project.description}
          </p>
        </div>
        <div
          className="relative h-60 overflow-hidden sm:h-80"
          style={{ backgroundColor: project.background }}
        >
          <Parallax className="absolute inset-0">
            {/* Extra wrapper so the hover zoom never fights Parallax's or
                the crop layout's own inline transforms */}
            <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.05]">
              {project.layout === "center" ? (
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="absolute left-1/2 top-1/2 h-[92%] w-auto -translate-x-1/2 -translate-y-1/2"
                />
              ) : project.layout === "cover" ? (
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : (
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="absolute right-0 top-1/2 h-[135%] w-auto max-w-none"
                  style={{ transform: "translate(10.9%, -50%)" }}
                />
              )}
            </div>
          </Parallax>
        </div>
      </div>

      {/* Cursor-trailing chip; desktop only — no hover on touch screens */}
      <span
        ref={chipRef}
        className="pointer-events-none absolute left-0 top-0 z-10 hidden select-none items-center rounded-full bg-foreground px-5 py-2 text-lg font-semibold text-white opacity-0 md:inline-flex"
      >
        view <span className="ml-1 text-[0.7em]">↗</span>
      </span>
    </a>
  );
}
