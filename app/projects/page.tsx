import Link from "next/link";

export default function Projects() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-orange-50 to-white text-gray-900 px-6 py-16">

      <div className="max-w-5xl mx-auto">

        {/* NAV */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-orange-600 transition hover:text-orange-700 hover:translate-x-2"
          >
            ← Volver al inicio
          </Link>
        </div>

        {/* HEADER */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold">Proyectos reales</h1>
          <p className="mt-4 text-gray-600 max-w-2xl">
            Sistemas que he diseñado y desarrollado aplicando automatización,
            backend e inteligencia artificial a problemas reales.
          </p>
        </div>

        {/* LISTA PROYECTOS */}
        <div className="space-y-8">

          {/* PROYECTO 1 */}
          <div className="rounded-xl border bg-white/70 backdrop-blur p-6 shadow-sm transition hover:shadow-md">

            <h2 className="text-xl font-semibold">
              Sistema de pedidos automatizado para restaurante
            </h2>

            <p className="mt-3 text-sm text-gray-600">
              Desarrollo de un sistema local para gestión de pedidos mediante tablets,
              impresión térmica y backend propio.
            </p>

            <ul className="mt-4 text-sm space-y-2">
              <li>✅ Backend REST con FastAPI</li>
              <li>✅ Interfaz web para mostrador y zona cocina</li>
              <li>✅ Integración con impresora térmica USB</li>
              <li>✅ Sistema local sin dependencia cloud</li>
            </ul>

            <p className="mt-4 text-sm">
              <b>Stack:</b> Python, FastAPI, JavaScript, Linux
            </p>

          </div>

          {/* PROYECTO 2 */}
          <div className="rounded-xl border bg-white/70 backdrop-blur p-6 shadow-sm transition hover:shadow-md">

            <h2 className="text-xl font-semibold">
              Detección de humo y fuego con visión artificial
            </h2>

            <p className="mt-3 text-sm text-gray-600">
              Sistema de detección temprana de incendios usando modelos YOLO y
              procesamiento de vídeo en tiempo real.
            </p>

            <ul className="mt-4 text-sm space-y-2">
              <li>✅ Entrenamiento de modelo YOLOv8</li>
              <li>✅ Procesamiento en tiempo real con OpenCV</li>
              <li>✅ Detección de eventos críticos</li>
              <li>✅ Preparado para despliegue local</li>
            </ul>

            <p className="mt-4 text-sm">
              <b>Stack:</b> Python, YOLOv8, OpenCV
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}
