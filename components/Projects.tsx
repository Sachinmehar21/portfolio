/* eslint-disable @next/next/no-img-element */
import { projects } from "@/lib/data";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";

export default function Projects() {
  return (
    <section id="works" className="py-16">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal>
          <h2 className="text-center font-serif text-4xl sm:text-5xl">
            Selected <span className="italic text-accent">Projects</span>
          </h2>
        </Reveal>

        <div className="mt-14">
          {projects.map((project, i) => (
            <div key={project.title} className="sticky top-[110px] mb-16 last:mb-0">
              <a
                href={project.href}
                className="stamp block bg-white p-6 transition-transform hover:-translate-y-1 sm:p-10"
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
                      {project.layout === "center" ? (
                        <img
                          src={project.image}
                          alt={`${project.title} preview`}
                          className="absolute left-1/2 top-1/2 h-[92%] w-auto -translate-x-1/2 -translate-y-1/2"
                        />
                      ) : (
                        <img
                          src={project.image}
                          alt={`${project.title} preview`}
                          className="absolute right-0 top-1/2 h-[135%] w-auto max-w-none"
                          style={{ transform: "translate(10.9%, -50%)" }}
                        />
                      )}
                    </Parallax>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
