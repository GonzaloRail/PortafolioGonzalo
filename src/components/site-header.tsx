import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Inicio">
        GONZALO<span>.</span>
      </Link>
      <nav aria-label="Navegación principal">
        <Link href="/#proyectos">Proyectos</Link>
        <Link href="/#sobre-mi">Sobre mí</Link>
        <Link className="nav-contact" href="/#contacto">Hablemos <span aria-hidden="true">↗</span></Link>
      </nav>
    </header>
  );
}
