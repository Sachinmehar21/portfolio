import { projects } from "@/lib/data";
import Reveal from "@/components/Reveal";
import StackCard from "@/components/StackCard";
import ProjectCard from "@/components/ProjectCard";

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
          {projects.map((project) => (
            <StackCard key={project.title}>
              <ProjectCard project={project} />
            </StackCard>
          ))}
        </div>
      </div>
    </section>
  );
}
