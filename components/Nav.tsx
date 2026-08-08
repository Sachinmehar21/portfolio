/* eslint-disable @next/next/no-img-element */
const links = [
  { label: "works", href: "#works" },
  { label: "about", href: "#about" },
  { label: "resume", href: "#resume" },
  { label: "let's chat", href: "#chat" },
];

export default function Nav() {
  return (
    <header className="absolute inset-x-0 top-6 z-20 px-4 sm:px-8">
      <nav className="relative mx-auto flex h-14 max-w-[1030px] items-center justify-between overflow-hidden rounded-full bg-white pl-3 pr-4 shadow-[0_2px_12px_rgba(0,0,0,0.06)] sm:h-16 sm:pl-4 sm:pr-14">
        {/* Soft shadow the lanyard strap casts on the pill; centered on the
            strap, which hangs at the middle of the hero's right column */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 hidden lg:block"
          style={{
            background:
              "radial-gradient(140px 200% at calc(50% + 320px) 50%, rgba(0,0,0,0.22), rgba(0,0,0,0.08) 45%, transparent 72%)",
          }}
        />
        <a href="#top" aria-label="Home">
          <img src="/assets/logo-face.svg" alt="" className="h-10 w-auto" />
        </a>
        <ul className="flex items-center gap-4 text-base font-medium text-foreground/80 sm:gap-12 sm:text-xl">
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="transition-colors hover:text-accent">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
