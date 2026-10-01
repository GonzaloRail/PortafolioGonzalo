import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { SiteHeader } from "@/components/site-header";
import { getProjects } from "@/sanity/lib/projects";

export const metadata: Metadata = { title: "Proyectos", description: "Archivo de proyectos y casos de estudio de Gonzalo." };

export default async function ProjectsPage() {
  const projects = await getProjects();
  return <main className="archive"><div className="page-shell"><SiteHeader /><header className="archive-intro"><p className="section-number">ARCHIVO / 2025—2026</p><h1>Proyectos que convierten problemas reales en experiencias útiles<span>.</span></h1><p>Cada caso combina pensamiento de producto, diseño de interfaz y desarrollo full-stack.</p></header><div className="projects-grid">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div></div></main>;
}
