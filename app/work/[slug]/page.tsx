import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ComingSoon from "@/components/ComingSoon";
import { projects } from "@/lib/data";

// Placeholder route for projects whose case study isn't written yet. The two
// finished ones (7seers, carpooling) have their own static routes, which
// take precedence over this dynamic segment.
const LIVE = new Set(["7seers", "carpooling"]);
const pending = projects.filter((p) => !LIVE.has(p.slug));

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return pending.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const project = pending.find((p) => p.slug === slug);
  return project
    ? {
        title: `${project.title} — coming soon`,
        description: `the ${project.title} case study is on its way.`,
      }
    : {};
}

export default async function ComingSoonPage({ params }: { params: Params }) {
  const { slug } = await params;
  const project = pending.find((p) => p.slug === slug);
  if (!project) notFound();
  return <ComingSoon project={project} live={projects.filter((p) => LIVE.has(p.slug))} />;
}
