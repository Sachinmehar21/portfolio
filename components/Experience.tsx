import { experience } from "@/lib/data";
import Reveal from "@/components/Reveal";

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
                  {job.role} ({job.period})
                </span>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
