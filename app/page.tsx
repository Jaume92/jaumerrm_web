import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-orange-50 to-orange-100 animated-bg text-gray-900">
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-orange-200/30 via-transparent to-orange-300/20 blur-3xl"></div>

<header className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">

  <span className="font-semibold text-lg tracking-tight">
    Jaume Ruiz Ruano Marcos
  </span>

  <nav className="flex gap-4 text-sm">
    <Link href="/projects" className="hover:text-orange-600 transition">
      Proyectos
    </Link>
    <Link href="/cv" className="hover:text-orange-600 transition">
      CV
    </Link>
    <Link href="/contact" className="hover:text-orange-600 transition">
      Contacto
    </Link>
  </nav>

</header>

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 py-20 animate-fade-in">

        {/* BADGE PROFESIONAL */}
        <span className="inline-block mb-4 px-3 py-1 text-xs rounded-full bg-orange-100 text-orange-700">
          Ingeniero IA · Automatización · Fullstack
        </span>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Desarrollo soluciones web, automatización e IA para negocios reales.
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl">
          Fullstack con Python y Next.js · FastAPI · n8n · Computer Vision · LLMs · Proyectos en producción
        </p>

        {/* HERO BUTTONS */}
        <div className="mt-8 flex flex-wrap gap-3">

          {/* PRIMARIO */}
          <Link
            href="/projects"
            className="px-6 py-3 rounded-lg bg-orange-500 text-white font-medium transition hover:bg-orange-600 hover:scale-[1.02]"
          >
            Ver proyectos reales
          </Link>

          {/* SECUNDARIO */}
          <Link
            href="/cv"
            className="px-6 py-3 rounded-lg border font-medium transition hover:bg-gray-100 hover:scale-[1.02]"
          >
            Ver CV
          </Link>

          {/* TERCIARIO */}
          <Link
            href="/contact"
            className="px-6 py-3 rounded-lg border font-medium transition hover:bg-gray-100 hover:scale-[1.02]"
          >
            Hablemos
          </Link>

        </div>
      </section>

      {/* QUE HAGO */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-semibold">Qué hago</h2>

        <div className="mt-8 grid md:grid-cols-3 gap-5">

          {/* CARD 1 */}
          <div className="rounded-xl border bg-white/70 backdrop-blur p-5 shadow-sm transition hover:shadow-md hover:-translate-y-1">
            <h3 className="font-semibold">IA aplicada</h3>
            <p className="mt-2 text-sm text-gray-600">
              Implemento visión artificial, RAG y asistentes inteligentes para automatizar tareas reales y aportar valor directo.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="rounded-xl border bg-white/70 backdrop-blur p-5 shadow-sm transition hover:shadow-md hover:-translate-y-1">
            <h3 className="font-semibold">Automatización</h3>
            <p className="mt-2 text-sm text-gray-600">
              Desarrollo workflows con n8n y APIs para eliminar procesos repetitivos y mejorar eficiencia operativa.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="rounded-xl border bg-white/70 backdrop-blur p-5 shadow-sm transition hover:shadow-md hover:-translate-y-1">
            <h3 className="font-semibold">Sistemas locales</h3>
            <p className="mt-2 text-sm text-gray-600">
              Despliego soluciones productivas en Linux y mini PCs evitando dependencia innecesaria de cloud.
            </p>
          </div>

        </div>
      </section>

      {/* PROYECTOS DESTACADOS */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-semibold">Proyectos reales</h2>

        <div className="mt-8 grid md:grid-cols-2 gap-6">

          {/* PROJECT 1 */}
          <div className="rounded-xl border bg-white/70 backdrop-blur p-5 shadow-sm transition hover:shadow-md hover:-translate-y-1">
            <h3 className="font-semibold">Pollería App — SaaS de pedidos</h3>
            <p className="mt-2 text-sm text-gray-600">
              Sistema web en tiempo real para gestión de pedidos con FastAPI, frontend responsive y flujo automático de estados.
            </p>

            <div className="mt-4">
              <Link href="/projects" className="text-sm text-orange-600 font-medium hover:underline">
                Ver caso →
              </Link>
            </div>
          </div>

          {/* PROJECT 2 */}
          <div className="rounded-xl border bg-white/70 backdrop-blur p-5 shadow-sm transition hover:shadow-md hover:-translate-y-1">
            <h3 className="font-semibold">Catálogo maquinaria industrial</h3>
            <p className="mt-2 text-sm text-gray-600">
              Landing comercial optimizada para captación de clientes con integración directa de WhatsApp y diseño responsive.
            </p>

            <div className="mt-4">
              <Link href="/projects" className="text-sm text-orange-600 font-medium hover:underline">
                Ver caso →
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t bg-white/70 backdrop-blur">
        <div className="max-w-5xl mx-auto px-6 py-8 text-sm text-gray-500 flex flex-col md:flex-row justify-between gap-3">
          <span>© {new Date().getFullYear()} Jaume Ruiz — Portfolio técnico</span>

          <div className="flex gap-4">
            <a
              href="https://github.com/Jaume92"
              target="_blank"
              className="hover:text-orange-600 transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com"
              target="_blank"
              className="hover:text-orange-600 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>

    </main>
  );
}
