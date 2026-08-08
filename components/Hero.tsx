/* eslint-disable @next/next/no-img-element */
import { profile } from "@/lib/data";
import Lanyard from "@/components/Lanyard";

const socials = [
  { name: "LinkedIn", icon: "/assets/icon-linkedin.svg", href: profile.socials.linkedin },
  { name: "Dribbble", icon: "/assets/icon-dribbble.svg", href: profile.socials.dribbble },
  { name: "Behance", icon: "/assets/icon-behance.svg", href: profile.socials.behance },
];

export default function Hero() {
  return (
    <section id="top" className="dot-grid relative overflow-hidden pb-10 pt-28 sm:pt-44">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 px-6 sm:px-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h1 className="font-serif text-[44px] leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl">
            hi, i&rsquo;m {profile.firstName} <span className="text-accent">*</span>
            <br />
            and i <span className="italic text-accent">design</span>!
          </h1>
          <p className="mt-6 max-w-lg text-xl font-medium leading-[26px] text-muted sm:mt-8 sm:text-[25px] sm:leading-[30px]">
            {profile.tagline}
          </p>

          <div className="mt-12 flex flex-col gap-5 sm:mt-28 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
            <div>
              <p className="text-lg font-medium text-muted">Say hi to me at</p>
              <a
                href={`mailto:${profile.email}`}
                className="block text-xl font-semibold underline-offset-4 hover:underline"
              >
                {profile.email}
              </a>
            </div>
            <ul className="flex items-center gap-6 sm:gap-5">
              {socials.map((s) => (
                <li key={s.name}>
                  <a href={s.href} target="_blank" rel="noreferrer" aria-label={s.name}>
                    <img
                      src={s.icon}
                      alt=""
                      className="h-7 w-7 opacity-80 transition-opacity hover:opacity-100 sm:h-6 sm:w-6"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Lanyard + ID badge hanging from the top edge, strap passing over the nav */}
        {/* Phones get a static tilted badge; the physics lanyard needs the tall column */}
        <div className="mt-8 flex justify-center lg:hidden">
          <img
            src="/assets/badge-card.svg"
            alt="ID badge with a photo of Sanskrati reading UX Designer"
            className="w-[290px] rotate-3 drop-shadow-xl"
          />
        </div>
        <div className="relative hidden min-h-[520px] justify-center lg:flex">
          <Lanyard />
        </div>
      </div>
    </section>
  );
}
