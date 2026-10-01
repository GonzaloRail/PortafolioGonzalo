import Link from "next/link";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { ProjectCard } from "@/components/project-card";
import { SiteHeader } from "@/components/site-header";
import { getProjects } from "@/sanity/lib/projects";

export default async function Home() {
  const projects = await getProjects();
  return (
    <main>
      <div className="page-shell">
        <SiteHeader />
        <section className="hero" aria-labelledby="hero-title">
          <p className="availability"><span /> Disponible para proyectos seleccionados</p>
          <h1 id="hero-title">Construyo productos digitales que <em>funcionan</em> y se sienten bien.</h1>
          <div className="hero-footer">
            <p>Desarrollador full-stack. Conecto estrategia, diseño y código para convertir ideas ambiciosas en experiencias claras.</p>
            <a className="round-link" href="#proyectos" aria-label="Ir a proyectos"><ArrowDown size={22} /></a>
          </div>
          <div className="hero-stamp" aria-hidden="true">CÓDIGO<br />+<br />CRITERIO</div>
        </section>
      </div>

      <section id="proyectos" className="projects-section">
        <div className="page-shell">
          <div className="section-heading"><p className="section-number">(01)</p><h2>Trabajo seleccionado<span>.</span></h2><Link href="/proyectos">Ver archivo completo <ArrowUpRight size={17} /></Link></div>
          <div className="projects-grid">{projects.filter((project) => project.featured).map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div>
        </div>
      </section>

      <section className="approach"><div className="page-shell approach-grid"><p className="section-number">(02)</p><div><p className="kicker">Cómo trabajo</p><h2>Las buenas interfaces no empiezan en una pantalla.</h2><p className="large-copy">Empiezan entendiendo el problema. Trabajo desde la primera pregunta hasta el último detalle: diseño sistemas que ayudan a las personas y código que puede crecer con el producto.</p><div className="principles"><p><b>01</b> Pensar antes de construir</p><p><b>02</b> Diseñar para la realidad</p><p><b>03</b> Cuidar el detalle técnico</p></div></div></div></section>

      <section id="sobre-mi" className="about"><div className="page-shell about-grid"><div className="portrait" role="img" aria-label="Espacio reservado para fotografía editorial de Gonzalo"><span>FOTO<br />GONZALO</span></div><div><p className="section-number">(03) SOBRE MÍ</p><h2>Curioso por naturaleza. Obsesivo con la claridad.</h2><p>Trabajo en la intersección entre tecnología y personas. Me gusta reducir lo complejo a experiencias que se entienden, se usan y se mantienen.</p><p className="replacement-note">Este texto, la foto y los enlaces se administrarán desde el Studio.</p><div className="social-links"><a href="https://github.com" aria-label="GitHub"><Github size={20} /></a><a href="https://linkedin.com" aria-label="LinkedIn"><Linkedin size={20} /></a><a href="mailto:tu-email@ejemplo.com" aria-label="Email"><Mail size={20} /></a></div></div></div></section>

      <section id="contacto" className="contact"><div className="page-shell contact-grid"><div><p className="section-number">(04) CONTACTO</p><h2>¿Tienes una idea que merece existir?</h2><p>Cuéntame qué estás construyendo. Responderé con honestidad y sin rodeos.</p><a className="contact-email" href="mailto:tu-email@ejemplo.com">tu-email@ejemplo.com <ArrowUpRight size={20} /></a></div><ContactForm /></div></section>
      <footer className="footer"><div className="page-shell"><span>© {new Date().getFullYear()} Gonzalo</span><span>Diseñado y construido con intención.</span><a href="#top">Volver arriba ↑</a></div></footer>
    </main>
  );
}
