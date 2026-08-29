/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Quicksand } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import type { Project } from "@/components/ProjectCard";

// Placeholder page for projects whose case study isn't written yet.
// Lives here (not in app/work/[slug]/) because Tailwind's source scanner
// skips bracketed directories, so classes used only there never get built.
const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-quicksand",
});

export default function ComingSoon({ project, live }: { project: Project; live: Project[] }) {
  return (
    <div className={`${quicksand.variable} relative flex flex-1 flex-col overflow-x-clip font-quicksand`}>
      <Nav variant="page" />

      <main className="mx-auto w-full max-w-[845px] flex-1 px-4 pb-24 pt-[120px] sm:px-8 cs:px-0">
        <Reveal>
          <h1 className="mb-4 font-serif text-[30px] leading-[36px] tracking-tight text-[#111111]">
            {project.title}
          </h1>

          {/* the project's card artwork, in the same postage-stamp frame the
              case studies use for their hero */}
          <figure className="stamp-fluid bg-white p-6 sm:px-[35px] sm:py-8">
            <div
              className="relative h-56 overflow-hidden sm:h-72"
              style={{ backgroundColor: project.background }}
            >
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
          </figure>
        </Reveal>

        <Reveal delay={120} className="mt-14 text-center sm:mt-20">
          <p className="font-serif text-[44px] leading-none tracking-tight text-[#111111] sm:text-[64px]">
            coming <span className="italic text-accent">soon</span>
            <span className="text-accent"> *</span>
          </p>
          <p className="mx-auto mt-6 max-w-md text-[16px] font-medium leading-[24px] text-[#737373]">
            i&rsquo;m still writing this one up. the full story — the problem, the research, the
            screens — will land here soon.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/#works"
              className="rounded-full border border-[#d1d1d6] px-5 py-2 text-[14px] font-semibold text-[#111111] transition-colors hover:border-[#111111]"
            >
              ← back to works
            </Link>
            {live.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="rounded-full bg-foreground px-5 py-2 text-[14px] font-semibold text-white transition-colors hover:bg-accent"
              >
                read {p.title} <span className="text-[0.75em]">↗</span>
              </Link>
            ))}
          </div>
        </Reveal>
      </main>

      <Footer />
    </div>
  );
}
