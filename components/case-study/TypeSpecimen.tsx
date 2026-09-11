/* eslint-disable @next/next/no-img-element */
import SectionHeading from "@/components/case-study/SectionHeading";

// The brand-identity block: the type specimen card floated on a pale blue
// band (#EEF1F5, 41.55px padding) running the width of the content column.
// The card is a designed object rather than a layout, so it goes in as
// exported artwork instead of being rebuilt in CSS — which also keeps its
// uppercase intact, since globals.css lowercases the whole site.
export default function TypeSpecimen({
  heading,
  image,
  alt,
  width,
  height,
  id = "brand-identity",
  className = "",
}: {
  heading?: string;
  image: string;
  alt: string;
  width: number;
  height: number;
  id?: string;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-[120px] ${className}`}>
      {heading ? <SectionHeading>{heading}</SectionHeading> : null}
      <div className={`${heading ? "mt-[3px]" : ""} bg-[#eef1f5] p-4 sm:p-[41.55px]`}>
        <img
          src={image}
          alt={alt}
          width={width}
          height={height}
          className="mx-auto block h-auto w-full"
          loading="lazy"
        />
      </div>
    </section>
  );
}
