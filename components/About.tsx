/* eslint-disable @next/next/no-img-element */
import { about } from "@/lib/data";
import AboutText from "@/components/AboutText";

export default function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="flex items-center justify-center gap-3 font-grotesque text-[21px] font-semibold leading-snug text-muted sm:text-[25px]">
          <img src="/assets/doodle-laptop-color.svg" alt="" className="h-16 w-16" />
          {about.intro}
        </p>
        <AboutText paragraphs={about.paragraphs} />
      </div>
    </section>
  );
}
