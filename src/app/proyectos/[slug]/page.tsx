import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { sampleProjects } from "@/lib/projects";
import { getProjectBySlug } from "@/sanity/lib/projects";

export function generateStaticParams() { return sampleProjects.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const project = await getProjectBySlug((await params).slug);
  return project ? { title: project.title, description: project.excerpt } : {};
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const project = await getProjectBySlug((await params).slug);
  if (!project) notFound();
  return <main className="case-study"><div className="page-shell"><SiteHeader /><Link className="back-link" href="/proyectos"><ArrowLeft size={17} /> Todos los proyectos</Link><header className="case-hero"><p className="section-number">{project.category.toUpperCase()} / {project.year}</p><h1>{project.title}<span>.</span></h1><p>{project.excerpt}</p><dl><div><dt>Mi rol</dt><dd>{project.role}</dd></div><div><dt>Tecnologías</dt><dd>{project.technologies.join(" · ")}</dd></div></dl><div className="project-actions">{project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Ver proyecto <ExternalLink size={17} /></a>}{project.repositoryUrl && <a href={project.repositoryUrl} target="_blank" rel="noreferrer"><Github size={17} /> Repositorio</a>}</div></header><div className={`case-art accent-${project.accent}`} aria-hidden="true"><span>G</span><i /><b>{project.year}</b></div><div className="case-content"><section><p className="section-number">CONTEXTO</p><h2>Qué construí.</h2><p>{project.challenge}</p></section><section><p className="section-number">MI PARTICIPACIÓN</p><h2>Aporte al proyecto.</h2><p>{project.participation}</p></section><section><p className="section-number">IMPLEMENTACIÓN</p><h2>Cómo lo resolví.</h2><p>{project.solution}</p><div className="case-details"><div><h3>Herramientas</h3><ul>{project.tools.map((tool) => <li key={tool}>{tool}</li>)}</ul></div><div><h3>Metodologías y prácticas</h3><ul>{project.methodologies.map((methodology) => <li key={methodology}>{methodology}</li>)}</ul></div></div></section><section><p className="section-number">RESULTADOS</p><h2>Lo que quedó resuelto.</h2><p>{project.outcome}</p><ul className="results-list">{project.results.map((result) => <li key={result}>{result}</li>)}</ul></section></div><div className="case-cta"><p>¿Quieres ver cómo puedo aportar a tu próximo producto?</p><Link href="/#contacto">Hablemos <ArrowUpRight size={20} /></Link></div></div></main>;
}
