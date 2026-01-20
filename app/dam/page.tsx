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
    <main className="min-h-screen bg-gradient-to-br from-white via-orange-50 to-white px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-black">DAM — Resúmenes por asignatura</h1>

        <p className="text-gray-700 max-w-2xl mb-12">
          Resúmenes propios, visuales, prácticos y directos al grano. Ideal para estudiar sin perder el tiempo.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {asignaturas.map((asignatura) => (
            <div
              key={asignatura.nombre}
              className="rounded-xl border bg-white shadow-md p-6 transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <h2 className="text-xl font-semibold text-black">
                {asignatura.nombre}
              </h2>

              <p className="text-sm text-gray-600 mt-2">{asignatura.descripcion}</p>

              <span className="inline-block mt-4 text-orange-600 text-sm font-medium">
                Próximamente →
              </span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
