/* eslint-disable @next/next/no-img-element */
import { experience, profile } from "@/lib/data";
import Reveal from "@/components/Reveal";

const chip =
  "rounded-full px-6 py-2 text-lg font-semibold transition-colors sm:text-xl";

export default function Experience() {
  return (
    <section id="resume" className="py-24">
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        <Reveal>
          <h2 className="text-center font-serif text-4xl sm:text-5xl">
            Work <span className="italic text-accent">Experience</span>
          </h2>
        </Reveal>

        <ul className="mt-14 divide-y divide-foreground/10 border-y border-foreground/10">
          {experience.map((job, i) => (
            <li key={job.company} className="py-8">
              <Reveal
                delay={i * 120}
                className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between"
              >
                <span className="font-serif text-xl sm:text-2xl">{job.company}</span>
                <span className="text-lg font-medium text-muted sm:text-xl">
                  {job.role}
                  {job.period ? ` (${job.period})` : ""}
                </span>
              </Reveal>
            </li>
          ))}
        </ul>

        {/* the resume itself, pinned up beside the pitch for it */}
        <Reveal
          delay={120}
          className="mt-16 flex flex-col items-center gap-10 sm:mt-20 sm:flex-row sm:justify-center sm:gap-16"
        >
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="open the full resume as a pdf"
            className="w-[230px] shrink-0 -rotate-2 transition-transform duration-300 hover:rotate-0 sm:w-[270px]"
          >
            <img
              src={profile.resumePreview}
              alt="sanskrati's one-page resume"
              width={840}
              height={1317}
              className="w-full rounded-md shadow-[0_12px_34px_rgba(0,0,0,0.14)]"
              loading="lazy"
            />
          </a>

          <div className="max-w-sm text-center sm:text-left">
            <h3 className="font-serif text-3xl sm:text-4xl">
              the whole thing on <span className="italic text-accent">one page</span>
            </h3>
            <p className="mt-3 text-lg font-medium text-muted sm:text-xl">
              roles, tools, featured projects and certifications — laid out properly, if you
              would rather skim than scroll.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3 sm:justify-start">
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className={`${chip} bg-foreground text-background hover:bg-accent`}
              >
                view resume <span className="text-[0.7em]">↗</span>
              </a>
              <a
                href={profile.resumeUrl}
                download
                className={`${chip} border border-foreground/20 hover:border-foreground`}
              >
                download pdf <span className="text-[0.7em]">↓</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
