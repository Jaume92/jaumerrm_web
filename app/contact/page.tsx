import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-orange-50 to-white px-6 py-20">

      <div className="max-w-4xl mx-auto">

        {/* TITULO + SUBTEXTO */}
        <h1 className="text-3xl font-bold mb-4 text-black">Contacto</h1>

        <p className="text-gray-700 max-w-xl mb-10">
          ¿Quieres hablar sobre proyectos, colaboración o propuestas de trabajo?
          Aquí tienes todas mis vías de contacto 
        </p>

        {/* INFO DE CONTACTO */}
        <div className="grid gap-6 md:grid-cols-2">

          {/* EMAIL */}
          <div className="rounded-xl border bg-white shadow-sm p-6 hover:shadow-md transition">
            <h2 className="text-lg font-semibold text-black mb-1">📧 Email</h2>
            <p className="text-gray-600">jaumeni@gmail.com</p>
          </div>

          {/* GITHUB */}
          <div className="rounded-xl border bg-white shadow-sm p-6 hover:shadow-md transition">
            <h2 className="text-lg font-semibold text-black mb-1">🐙 GitHub</h2>
            <a
              href="https://github.com/Jaume92"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 hover:underline"
            >
              github.com/Jaume92
            </a>
          </div>

          {/* LINKEDIN */}
          <div className="rounded-xl border bg-white shadow-sm p-6 hover:shadow-md transition">
            <h2 className="text-lg font-semibold text-black mb-1">💼 LinkedIn</h2>
            <a
              href="https://linkedin.com/in/jaume-ruiz-ruano-marcos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 hover:underline"
            >
              linkedin.com/in/jaume-ruiz-ruano-marcos
            </a>
          </div>

          {/* TELÉFONO */}
          <div className="rounded-xl border bg-white shadow-sm p-6 hover:shadow-md transition">
            <h2 className="text-lg font-semibold text-black mb-1">📱 Teléfono</h2>
            <p className="text-gray-600">+34 633 897 821</p>
          </div>
        </div>

        {/* VOLVER AL INICIO */}
        <div className="mt-12">
          <Link
            href="/"
            className="inline-block px-6 py-3 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition"
          >
            ← Volver al inicio
          </Link>
        </div>

      </div>

    </main>
  );
}
