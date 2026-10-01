export type Project = {
  title: string;
  slug: string;
  excerpt: string;
  year: string;
  role: string;
  category: string;
  technologies: string[];
  featured: boolean;
  accent: "coral" | "blue" | "lime";
  challenge: string;
  solution: string;
  outcome: string;
  participation: string;
  tools: string[];
  methodologies: string[];
  results: string[];
  liveUrl?: string;
  repositoryUrl?: string;
};

export const sampleProjects: Project[] = [
  {
    title: "Senses",
    slug: "senses",
    excerpt: "Plataforma integral para la gestión operativa de un centro psicológico.",
    year: "2025",
    role: "Desarrollo frontend y backend",
    category: "Sistema de gestión",
    technologies: ["React", "TypeScript", "Node.js", "Prisma"],
    featured: true,
    accent: "coral",
    challenge: "Centralizar la operación de un centro psicológico con necesidades clínicas, administrativas y de atención al paciente.",
    solution: "Una aplicación modular con autenticación, pacientes, citas, historias clínicas, evaluaciones, inventario, ingresos y administración.",
    outcome: "Una base de gestión unificada, con frontend React y una API preparada para los distintos roles del centro.",
    participation: "Contribuí en el frontend: dashboard financiero y reportes, notificaciones, confirmación de citas, navegación por rol, cambios del módulo de ingresos, fotos de pacientes y configuración de API y despliegue.",
    tools: ["Vite", "Tailwind CSS", "TanStack Query", "Zustand", "Axios", "Socket.IO", "Docker", "Swagger"],
    methodologies: ["Arquitectura frontend orientada a funcionalidades", "Trabajo por historias de usuario (HU)", "Ramas feature-HUXXX e integración en dev", "Migraciones, seeds y verificación de base de datos"],
    results: ["Frontend desplegado en Vercel", "Módulos para pacientes, citas, historias clínicas, evaluaciones, inventario, ingresos y administración", "Rutas y vistas diferenciadas por rol"],
    liveUrl: "https://senses-frontend-five.vercel.app",
    repositoryUrl: "https://github.com/GonzaloRail/Senses-Frontend",
  },
  {
    title: "Cifrador y descifrador",
    slug: "cifrador-descifrador",
    excerpt: "Herramienta web educativa para explorar el cifrado Vigenère y la transposición por columnas.",
    year: "2025",
    role: "Desarrollo frontend",
    category: "Seguridad",
    technologies: ["JavaScript", "HTML", "CSS"],
    featured: true,
    accent: "blue",
    challenge: "Convertir conceptos de criptografía clásica en una experiencia interactiva y comprensible.",
    solution: "Implementé los flujos de cifrado, descifrado, normalización de texto y visualización paso a paso de ambos algoritmos.",
    outcome: "Una interfaz que permite experimentar con claves, mensajes y la matriz de transposición de forma directa.",
    participation: "Autor de los cuatro commits registrados: versión inicial de la aplicación y mejoras incrementales de los algoritmos de cifrado.",
    tools: ["DOM API", "Clipboard API", "GitHub"],
    methodologies: ["Implementación incremental", "Separación de módulos de interfaz y algoritmos", "Normalización y validación de entradas"],
    results: ["Cifrado y descifrado Vigenère y por transposición", "Alfabeto español con Ñ, números y normalización de tildes", "Explicación paso a paso y matriz visual del algoritmo"],
    repositoryUrl: "https://github.com/GonzaloRail/Cifrador-Descifrador",
  },
  {
    title: "Kusi-CRED",
    slug: "kusi-cred",
    excerpt: "Landing page de validación para una app de control de crecimiento y desarrollo infantil.",
    year: "2026",
    role: "Diseño y desarrollo web",
    category: "Landing page",
    technologies: ["HTML", "Tailwind CSS", "JavaScript"],
    featured: true,
    accent: "lime",
    challenge: "Validar una propuesta dirigida a madres primerizas que necesitan centralizar el seguimiento de salud de su bebé.",
    solution: "Diseñé una landing de conversión con información sobre percentiles OMS, vacunación MINSA, desarrollo y funcionamiento offline.",
    outcome: "Una página responsive con formulario de interés, accesibilidad, SEO y un mensaje de producto claro.",
    participation: "Desarrollo de la landing de validación y de su experiencia de captación de interés.",
    tools: ["Tailwind CDN", "Google Fonts", "JSON-LD", "Open Graph", "localStorage"],
    methodologies: ["Hipótesis de validación de mercado", "Definición de segmento, problema, promesa y métricas objetivo", "Accesibilidad con salto al contenido y reducción de movimiento", "Captación offline-first en cola local"],
    results: ["Landing responsive con modo oscuro persistente", "Formulario de captación sin backend, preparado para integración", "Metas de validación definidas: CTR >= 2.5% y 50 registros en 30 días (objetivos, no resultados medidos)"],
    repositoryUrl: "https://github.com/andre98652/kusi-con-creed",
  },
  {
    title: "MarkItDown GUI",
    slug: "markitdown-gui",
    excerpt: "Aplicación de escritorio para convertir documentos a Markdown desde una interfaz visual.",
    year: "2026",
    role: "Desarrollo de aplicación de escritorio",
    category: "Herramienta de productividad",
    technologies: ["Python", "PySide6", "MarkItDown"],
    featured: true,
    accent: "blue",
    challenge: "Hacer accesible la conversión de documentos variados a Markdown sin depender de la línea de comandos.",
    solution: "Construí una interfaz para cargar archivos, gestionar una cola y elegir la carpeta de salida antes de procesar.",
    outcome: "Conversión por lotes de PDF, DOCX, XLSX, PPTX, HTML, CSV, JSON, XML y EPUB a archivos Markdown.",
    participation: "Desarrollo de la aplicación de escritorio y de la experiencia de conversión por lotes.",
    tools: ["Qt", "QThread", "pathlib", "dataclasses"],
    methodologies: ["Procesamiento por lotes con aislamiento de errores", "Ejecución en segundo plano para mantener la interfaz disponible", "Validación de formatos y supresión de duplicados", "Salida no destructiva para evitar sobrescrituras"],
    results: ["Arrastrar y soltar, cola de archivos, progreso y registro por archivo", "Los fallos individuales no detienen el lote", "Nombres de salida incrementales cuando el Markdown ya existe"],
  },
  {
    title: "YaToy",
    slug: "yatoy",
    excerpt: "Prototipo de rastreo de buses urbanos simulados para Arequipa.",
    year: "2026",
    role: "Desarrollo web",
    category: "Movilidad urbana",
    technologies: ["JavaScript", "Leaflet", "Firebase", "Vite"],
    featured: true,
    accent: "coral",
    challenge: "Representar rutas y tiempos de llegada de transporte urbano en una experiencia útil, sin datos GPS reales.",
    solution: "Implementé un mapa interactivo con rutas académicas, buses sincronizados, filtros, ETA y geolocalización opcional.",
    outcome: "Un prototipo responsive con autenticación, favoritos, historial y controles administrativos para la simulación compartida.",
    participation: "Desarrollo del prototipo web, el motor de simulación, la integración de mapa y el despliegue en GitHub Pages.",
    tools: ["OpenStreetMap", "Firebase Realtime Database", "Firebase Authentication", "Vitest", "GitHub Actions"],
    methodologies: ["Plan de trabajo con criterios de aceptación y verificación", "Separación de responsabilidades y fuente de posiciones intercambiable", "Pruebas unitarias de funciones puras", "CI que prueba y compila antes del despliegue"],
    results: ["Sitio publicado en GitHub Pages", "Tres rutas académicas y nueve buses simulados sincronizados", "ETA local, geolocalización opcional y panel administrativo"],
    liveUrl: "https://gonzalorail.github.io/YaToy/",
    repositoryUrl: "https://github.com/GonzaloRail/YaToy",
  },
  {
    title: "YuguGYM",
    slug: "yugugym",
    excerpt: "Sistema de gestión para administrar socios, pagos, asistencias y reportes de un gimnasio.",
    year: "2026",
    role: "Desarrollo full-stack",
    category: "Sistema de gestión",
    technologies: ["Django", "React", "REST API", "SQLite"],
    featured: true,
    accent: "lime",
    challenge: "Unificar la gestión diaria de un gimnasio: socios, membresías, pagos y control de ingreso.",
    solution: "Desarrollé módulos conectados para operaciones, comprobantes, alertas de vencimiento y visualización de reportes.",
    outcome: "Una aplicación full-stack con autenticación JWT, panel React y una API Django REST preparada para producción.",
    participation: "Desarrollo del sistema full-stack, con alcance documentado en requisitos y registros de mejora del proyecto.",
    tools: ["Django REST Framework", "SimpleJWT", "WeasyPrint", "Recharts", "shadcn/ui", "Oxlint"],
    methodologies: ["Especificación de requisitos y control de cambios", "Ciclo de mantenimiento perfectivo con análisis de impacto", "Registros de verificación manual", "Arquitectura documentada con referencia a ISO/IEC 12207"],
    results: ["Rutas REST protegidas con JWT", "Flujo consolidado de membresías y pagos", "Comprobantes y reportes PDF, alertas de vencimiento y gráficos operativos"],
    repositoryUrl: "https://github.com/GonzaloRail/YuguGYM",
  },
  {
    title: "TrArtículos",
    slug: "trarticulos",
    excerpt: "Aplicación local para convertir artículos científicos en PDF a Markdown legible.",
    year: "2026",
    role: "Desarrollo full-stack",
    category: "Herramienta de investigación",
    technologies: ["FastAPI", "React", "Docling", "SQLite"],
    featured: true,
    accent: "coral",
    challenge: "Extraer contenido científico de PDF respetando su lectura, tablas, fórmulas y privacidad.",
    solution: "Integré procesamiento local por lotes, Docling como conversor principal y pypdf como alternativa de respaldo.",
    outcome: "Una herramienta que permite revisar y descargar el Markdown, documento fuente, informe de calidad y paquete ZIP.",
    participation: "Desarrollo de la aplicación local full-stack y del flujo de conversión con preservación de privacidad.",
    tools: ["Uvicorn", "Pydantic", "React Markdown", "remark-gfm", "Docker", "pytest"],
    methodologies: ["Procesamiento local-first y privacidad por defecto", "Conversión resiliente con Docling y respaldo pypdf", "Cola persistente de trabajos", "Prueba de API de carga, conversión, estado y descarga de artefactos"],
    results: ["Conversión por lotes con estado persistente en SQLite", "Extracción de estructura, tablas, fórmulas y recursos cuando Docling está disponible", "Vista previa y descarga de Markdown, PDF fuente, informe de calidad y ZIP"],
  },
];

export function getProject(slug: string) {
  return sampleProjects.find((project) => project.slug === slug);
}
