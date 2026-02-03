import Link from "next/link";

export default function DamPage() {
  const asignaturas = [
    {
      nombre: "Bases de Datos A",
      descripcion: "Modelo entidad-relación, normalización, SQL, Oracle, etc.",
    },
    {
      nombre: "Programación A",
      descripcion: "Algoritmos, Java, estructuras de control, clases, POO.",
    },
    {
      nombre: "Sistemas Informáticos",
      descripcion: "Linux, hardware, redes, comandos, tipos de memoria.",
    },
    {
      nombre: "Digitalización",
      descripcion: "Transformación digital, herramientas TIC, automatización.",
    },
    {
      nombre: "Sostenibilidad",
      descripcion: "Eficiencia energética, ciclo de vida, triple balance.",
    },
    {
      nombre: "ITI I",
      descripcion: "Empleabilidad, soft skills, marca personal y orientación.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-orange-50 to-white px-6 py-16 text-gray-900">
      <div className="max-w-6xl mx-auto">

        {/* NAV */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-orange-600 hover:text-orange-700 transition hover:translate-x-1"
          >
            ← Volver al menú
          </Link>
        </div>

        {/* HEADER */}
        <div className="mb-12">

          <span className="inline-block mb-3 px-3 py-1 text-xs rounded-full bg-orange-100 text-orange-700">
            Formación DAM · Ilerna
          </span>

          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            DAM — Resúmenes por asignatura
          </h1>

          <p className="text-gray-600 max-w-2xl">
            Resúmenes propios, visuales y prácticos orientados a entender conceptos clave
            y aplicarlos en proyectos reales. Nada de paja teórica.
          </p>

        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

          {asignaturas.map((asignatura) => (
            <div
              key={asignatura.nombre}
              className="group relative rounded-2xl border bg-white/80 backdrop-blur p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-orange-300"
            >

              {/* Glow hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-orange-200/20 blur-xl rounded-2xl"></div>

              <div className="relative">

                <h2 className="text-lg font-semibold">
                  {asignatura.nombre}
                </h2>

                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  {asignatura.descripcion}
                </p>

                <div className="mt-4 flex items-center justify-between">

                  <span className="text-xs px-3 py-1 rounded-full bg-orange-100 text-orange-700">
                    DAM Ilerna
                  </span>

                  <span className="text-sm text-orange-600 font-medium">
                    Próximamente →
                  </span>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </main>
  );
}
