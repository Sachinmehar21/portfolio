/* eslint-disable @next/next/no-img-element */
import SectionHeading from "@/components/case-study/SectionHeading";
import { body, cardShadow, cardTitle } from "@/components/case-study/styles";

export type PersonaData = {
  name: string;
  age: string;
  photo: string;
  photoAlt: string;
  description: string;
  groups: { title: string; items: string[] }[];
};

// "user persona" block: photo + name/age/description, then the 2×2 grid of
// goal / needs / concerns / finds useful cards. Same in both case studies.
export default function Persona({
  id = "persona",
  heading,
  persona,
  className = "",
}: {
  id?: string;
  heading: string;
  persona: PersonaData;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-[120px] ${className}`}>
      <SectionHeading>{heading}</SectionHeading>
      <div className="mt-[3px] cs:pl-[13px]">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-[25px]">
          <img
            src={persona.photo}
            alt={persona.photoAlt}
            width={404}
            height={360}
            className="h-[180px] w-[202px] shrink-0 rounded-md object-cover"
            loading="lazy"
          />
          <div className="sm:pt-[62px]">
            <p className="flex items-baseline gap-3">
              <span className={cardTitle}>{persona.name}</span>
              <span className="text-[12px] font-semibold text-[#737373]">{persona.age}</span>
            </p>
            <p className={`mt-3 ${body}`}>{persona.description}</p>
          </div>
        </div>

        <div className="mt-[27px] grid gap-[26px] sm:grid-cols-2">
          {persona.groups.map((group) => (
            <div
              key={group.title}
              className={`rounded-lg bg-white px-[13px] pb-3 pt-[15px] ${cardShadow}`}
            >
              <h3 className={cardTitle}>{group.title}</h3>
              <ul className={`mt-[10px] ${body}`}>
                {group.items.map((item) => (
                  <li key={item}>· {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
