import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-orange-50 to-white animated-bg text-gray-900">
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-orange-200/30 via-transparent to-orange-300/20 blur-3xl"></div>



      

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 py-20 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Construyo automatización e IA aplicada a problemas reales.
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl">
          Python · FastAPI · n8n · Computer Vision · LLMs · Sistemas locales
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="px-6 py-3 rounded-lg bg-orange-500 text-white font-medium transition hover:bg-orange-600 hover:scale-[1.02]"
          >
            Ver proyectos
          </Link>

          <Link
            href="/contact"
            className="px-6 py-3 rounded-lg border font-medium transition hover:bg-gray-100 hover:scale-[1.02]"
          >
            Contactar
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
              RAG, visión artificial y asistentes inteligentes enfocados en utilidad real.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="rounded-xl border bg-white/70 backdrop-blur p-5 shadow-sm transition hover:shadow-md hover:-translate-y-1">
            <h3 className="font-semibold">Automatización</h3>
            <p className="mt-2 text-sm text-gray-600">
              Workflows con n8n, APIs y automatización de procesos empresariales.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="rounded-xl border bg-white/70 backdrop-blur p-5 shadow-sm transition hover:shadow-md hover:-translate-y-1">
            <h3 className="font-semibold">Sistemas locales</h3>
            <p className="mt-2 text-sm text-gray-600">
              Despliegues en Linux y mini PCs sin depender de cloud caro.
            </p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t bg-white/70 backdrop-blur">
        <div className="max-w-5xl mx-auto px-6 py-8 text-sm text-gray-500">
          © {new Date().getFullYear()} Jaume Ruiz — Portfolio técnico
        </div>
      </footer>

    </main>
  );
}
