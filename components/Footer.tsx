/* eslint-disable @next/next/no-img-element */
import { footer, profile } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function Footer() {
  return (
    <footer id="chat" className="mt-16 bg-footer text-white">
      <Reveal className="mx-auto max-w-4xl px-6 pt-20 text-center sm:px-10">
        <p className="mx-auto max-w-2xl text-2xl font-semibold leading-snug sm:text-[34px]">
          {footer.message}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-lg font-medium text-white/80 sm:mt-12 sm:text-xl">
          <a href={`mailto:${profile.email}`} className="hover:text-white">
            {profile.email}
          </a>
          <span className="text-white/30">|</span>
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="hover:text-white">
            {profile.phone}
          </a>
        </div>

        <div className="mt-6 flex items-center justify-center gap-6 text-lg font-medium sm:text-xl">
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="underline-offset-4 hover:underline"
          >
            Linkedin ↗
          </a>
          <span className="text-white/30">|</span>
          <a
            href={profile.resumeUrl}
            className="underline-offset-4 hover:underline"
          >
            Resume ↗
          </a>
        </div>
      </Reveal>

      <img
        src="/assets/flamingo.svg"
        alt=""
        className="mx-auto mt-12 block h-28 w-auto sm:mt-16 sm:h-40"
      />
    </footer>
  );
}
