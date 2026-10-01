import Link from "next/link";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className={`project-card accent-${project.accent}`}>
      <Link href={`/proyectos/${project.slug}`} className="project-link" aria-label={`Ver proyecto: ${project.title}`}>
        <div className="project-art" aria-hidden="true">
          <span className="art-index">0{index + 1}</span>
          <span className="art-shape art-shape-one" />
          <span className="art-shape art-shape-two" />
          <span className="art-label">CASO / {project.year}</span>
        </div>
        <div className="project-copy">
          <div className="eyebrow"><span>{project.category}</span><span>{project.year}</span></div>
          <h3>{project.title}</h3>
          <p>{project.excerpt}</p>
          <span className="text-link">Ver caso <span aria-hidden="true">↗</span></span>
        </div>
      </Link>
    </article>
  );
}
