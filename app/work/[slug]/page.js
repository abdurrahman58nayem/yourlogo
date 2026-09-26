import { notFound } from "next/navigation";
import CaseView from "@/components/CaseView";
import { getNextProject, getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.brief.en,
    openGraph: {
      title: `${project.name} — YourLogo`,
      description: project.idea.en,
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const next = getNextProject(slug);
  return <CaseView project={project} next={next} />;
}
