/* eslint-disable @next/next/no-img-element */
import type { ReactNode } from "react";
import { Quicksand } from "next/font/google";
import Nav from "@/components/Nav";
import SmoothScroll from "@/components/SmoothScroll";
import SideNav, { type NavItem } from "@/components/case-study/SideNav";

// Case studies are set in Quicksand (the home page uses Darker Grotesque).
const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-quicksand",
});

type Props = {
  title: string;
  nav: NavItem[];
  hero: { src: string; alt: string; width: number; height: number };
  children: ReactNode;
};

// Shell shared by every case study: site nav, serif title, the sticky
// section index on the left and the postage-stamp hero at the top of the
// 845px content column. 1049px = nav column (204) + content (845), centred
// in the 1440 frame exactly like the Figma designs.
export default function CaseStudyPage({ title, nav, hero, children }: Props) {
  return (
    <div className={`${quicksand.variable} relative flex-1 overflow-x-clip font-quicksand`}>
      <SmoothScroll />
      <Nav variant="page" />

      <main className="mx-auto max-w-[1049px] px-4 pb-[77px] pt-[120px] sm:px-8 cs:grid cs:grid-cols-[204px_845px] cs:px-0">
        <h1 className="mb-4 font-serif text-[30px] leading-[36px] tracking-tight text-[#111111] cs:col-start-2 cs:row-start-1">
          {title}
        </h1>

        <aside className="cs:col-start-1 cs:row-start-2">
          <div className="cs:sticky cs:top-[120px] cs:mt-[130px]">
            <SideNav items={nav} />
          </div>
        </aside>

        <div className="cs:col-start-2 cs:row-start-2">
          <figure className="stamp-fluid bg-white p-6 sm:px-[35px] sm:py-8">
            <img
              src={hero.src}
              alt={hero.alt}
              width={hero.width}
              height={hero.height}
              className="block h-auto w-full"
              fetchPriority="high"
            />
          </figure>
          {children}
        </div>
      </main>
    </div>
  );
}
