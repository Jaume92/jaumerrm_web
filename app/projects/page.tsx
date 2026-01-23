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
            Sistemas diseñados y desarrollados para resolver problemas reales
            mediante automatización, backend, web comercial y visión artificial.
          </p>
        </div>

        {/* LISTA PROYECTOS */}
        <div className="space-y-8">

          {/* PROYECTO 1 */}
          <div className="rounded-xl border bg-white/70 backdrop-blur p-6 shadow-sm transition hover:shadow-md">

            <h2 className="text-xl font-semibold">
              Pollería App — Sistema de pedidos automatizado
            </h2>

            <p className="mt-3 text-sm text-gray-600">
              Desarrollo de una solución local para digitalizar el flujo completo
              de pedidos en un negocio físico, eliminando procesos manuales.
            </p>

            <ul className="mt-4 text-sm space-y-2">
              <li>✅ Backend REST con FastAPI</li>
              <li>✅ Interfaz web para mostrador y cocina</li>
              <li>✅ Integración con impresora térmica USB</li>
              <li>✅ Arquitectura local sin dependencia cloud</li>
            </ul>

            <p className="mt-4 text-sm">
              <b>Resultado:</b> mejora del flujo operativo y reducción de errores manuales.
            </p>

            <p className="mt-2 text-sm">
              <b>Stack:</b> Python, FastAPI, JavaScript, Linux
            </p>

            {/* ACTIONS */}
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="PON_AQUI_LA_DEMO"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm rounded-lg bg-orange-500 text-white transition hover:bg-orange-600 active:scale-95 cursor-pointer"
              >
                Ver demo
              </a>

              <a
                href="PON_AQUI_EL_REPO"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm rounded-lg border transition hover:bg-gray-100 active:scale-95 cursor-pointer"
              >
                Ver código
              </a>
            </div>

          </div>

          {/* PROYECTO 2 */}
          <div className="rounded-xl border bg-white/70 backdrop-blur p-6 shadow-sm transition hover:shadow-md">

            <h2 className="text-xl font-semibold">
              Sistema de detección de humo y fuego — Visión artificial
            </h2>

            <p className="mt-3 text-sm text-gray-600">
              Desarrollo de un sistema de detección temprana de incendios
              mediante procesamiento de vídeo en tiempo real.
            </p>

            <ul className="mt-4 text-sm space-y-2">
              <li>✅ Entrenamiento de modelo YOLOv8</li>
              <li>✅ Procesamiento de vídeo con OpenCV</li>
              <li>✅ Detección automática de eventos críticos</li>
              <li>✅ Preparado para despliegue en entornos locales</li>
            </ul>

            <p className="mt-4 text-sm">
              <b>Resultado:</b> detección temprana de riesgo y reducción de tiempo de reacción.
            </p>

            <p className="mt-2 text-sm">
              <b>Stack:</b> Python, YOLOv8, OpenCV
            </p>

            {/* ACTIONS */}
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="PON_AQUI_LA_DEMO"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm rounded-lg bg-orange-500 text-white transition hover:bg-orange-600 active:scale-95 cursor-pointer"
              >
                Ver demo
              </a>

              <a
                href="PON_AQUI_EL_REPO"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm rounded-lg border transition hover:bg-gray-100 active:scale-95 cursor-pointer"
              >
                Ver código
              </a>
            </div>

          </div>

          {/* PROYECTO 3 */}
          <div className="rounded-xl border bg-white/70 backdrop-blur p-6 shadow-sm transition hover:shadow-md">

            <h2 className="text-xl font-semibold">
              Catálogo web de maquinaria industrial — Captación comercial
            </h2>

            <p className="mt-3 text-sm text-gray-600">
              Desarrollo de una landing comercial optimizada para mostrar producto,
              captar leads y facilitar contacto directo con clientes.
            </p>

            <ul className="mt-4 text-sm space-y-2">
              <li>✅ Diseño responsive optimizado para móvil</li>
              <li>✅ Integración directa con WhatsApp Business</li>
              <li>✅ Estructura enfocada a conversión</li>
              <li>✅ Preparada para despliegue en Vercel</li>
            </ul>

            <p className="mt-4 text-sm">
              <b>Resultado:</b> generación directa de leads comerciales desde la web.
            </p>

            <p className="mt-2 text-sm">
              <b>Stack:</b> HTML, CSS, JavaScript, Git, Vercel
            </p>

            {/* ACTIONS */}
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="https://catalogo-test-psi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm rounded-lg bg-orange-500 text-white transition hover:bg-orange-600 active:scale-95 cursor-pointer"
              >
                Ver web
              </a>

              <a
                href="https://github.com/Jaume92/catalogo_test"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm rounded-lg border transition hover:bg-gray-100 active:scale-95 cursor-pointer"
              >
                Ver repositorio
              </a>
            </div>

          </div>

        </div>

      </div>

    </main>
  );
}
