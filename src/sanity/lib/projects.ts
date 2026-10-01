import { createClient } from "next-sanity";
import { sampleProjects, type Project } from "@/lib/projects";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

const client = projectId && dataset
  ? createClient({ projectId, dataset, apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-09-30", useCdn: true })
  : null;

const projectFields = `{
  title, "slug": slug.current, excerpt, year, role, category, technologies,
  featured, accent, challenge, solution, outcome, participation, tools, methodologies,
  results, liveUrl, repositoryUrl
}`;

function isProject(value: Partial<Project>): value is Project {
  return Boolean(value.title && value.slug && value.excerpt && value.year && value.role && value.category && value.challenge && value.solution && value.outcome && value.participation);
}

export async function getProjects() {
  if (!client) return sampleProjects;
  const projects = await client.fetch<Partial<Project>[]>(`*[_type == "project"] | order(order asc) ${projectFields}`, {}, { next: { revalidate: 60 } });
  return projects.filter(isProject).map((project) => ({ ...project, technologies: project.technologies || [], tools: project.tools || [], methodologies: project.methodologies || [], results: project.results || [], featured: project.featured || false, accent: project.accent || "coral" }));
}

export async function getProjectBySlug(slug: string) {
  if (!client) return sampleProjects.find((project) => project.slug === slug);
  const project = await client.fetch<Partial<Project> | null>(`*[_type == "project" && slug.current == $slug][0] ${projectFields}`, { slug }, { next: { revalidate: 60 } });
  return project && isProject(project) ? { ...project, technologies: project.technologies || [], tools: project.tools || [], methodologies: project.methodologies || [], results: project.results || [], featured: project.featured || false, accent: project.accent || "coral" } : undefined;
}
