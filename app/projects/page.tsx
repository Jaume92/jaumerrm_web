"use client";

import Link from "next/link";
import { useState } from "react";

const powerbiImages = [
  "/projects/powerbi_1.png",
  "/projects/powerbi_2.png",
  "/projects/powerbi_3.png",
];

const polleriaImages = [
  "/projects/pollos1.png",
  "/projects/Pollos2.png",
  "/projects/Pollos3.png",
];

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const [currentPolleria, setCurrentPolleria] = useState(0);

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
            Colección de sistemas desarrollados con enfoque productivo y orientados
            a resolver problemas reales mediante automatización, visión artificial,
            analítica industrial y backend aplicado. Todos los proyectos están diseñados
            con mentalidad de despliegue real, no como simples pruebas académicas.
          </p>
        </div>

        {/* LISTA PROYECTOS */}
        <div className="space-y-8">

          {/* 1️⃣ LEAN AI */}
<div className="rounded-xl border bg-white/70 backdrop-blur p-6 shadow-sm transition hover:shadow-md">
  <h2 className="text-xl font-semibold">
    AI Lean Assistant — Arquitectura RAG aplicada a conocimiento empresarial
  </h2>

  <p className="mt-3 text-sm text-gray-600">
    Asistente inteligente basado en arquitectura RAG diseñado para transformar
    conocimiento operativo en respuestas accionables en tiempo real.
    El sistema permite a organizaciones consultar procesos, métricas y
    documentación técnica mediante lenguaje natural, reduciendo la dependencia
    de información dispersa y acelerando la toma de decisiones.
  </p>

  <ul className="mt-4 text-sm space-y-2">
    <li>✅ Implementación de arquitectura RAG con recuperación semántica</li>
    <li>✅ API backend desarrollada con FastAPI</li>
    <li>✅ Integración con modelos LLM para generación contextual</li>
    <li>✅ Interfaz interactiva orientada a uso empresarial</li>
  </ul>

  <div className="mt-5 w-full aspect-video rounded-lg overflow-hidden border">
    <iframe
      className="w-full h-full"
      src="https://www.youtube.com/embed/Ki_d4YFjgL4"
      title="Lean AI Assistant Demo"
      allowFullScreen
    />
  </div>

  <p className="mt-4 text-sm">
    <b>Impacto:</b> reducción del tiempo de acceso a conocimiento crítico,
    mejora en la consistencia de decisiones operativas y base tecnológica
    reutilizable para asistentes empresariales basados en IA.
  </p>

  <p className="mt-2 text-sm">
    <b>Stack:</b> Python, FastAPI, RAG, LLM API, recuperación semántica,
    arquitectura backend orientada a producción
  </p>

  <div className="mt-5 flex gap-3 flex-wrap">
    <a
      href="https://github.com/Jaume92/Lean_RAG"
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-2 text-sm rounded-lg border transition hover:bg-gray-100"
    >
      Ver repositorio
    </a>

    <a
      href="https://leanrag-fpayub2h46ogjcnn3kquub.streamlit.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-2 text-sm rounded-lg bg-orange-500 text-white transition hover:bg-orange-600"
    >
      Ver demo en vivo
    </a>
  </div>
</div>


          {/* 2️⃣ DETECTOR HUMO */}
          <div className="rounded-xl border bg-white/70 backdrop-blur p-6 shadow-sm transition hover:shadow-md">
            <h2 className="text-xl font-semibold">
              Detector de humo y fuego — Computer Vision
            </h2>

            <p className="mt-3 text-sm text-gray-600">
              Sistema de detección temprana de incendios basado en análisis de vídeo
              en tiempo real.
            </p>

            <ul className="mt-4 text-sm space-y-2">
              <li>✅ Entrenamiento personalizado de modelo YOLOv8</li>
              <li>✅ Procesamiento de vídeo en tiempo real con OpenCV</li>
              <li>✅ Arquitectura preparada para despliegue local o edge</li>
            </ul>

            <div className="mt-5 w-full h-[640px] overflow-hidden rounded-lg border">
              <img
                src="/projects/Humo1.jpg"
                className="w-full h-full object-cover"
                alt="Detección de humo y fuego"
              />
            </div>

            <p className="mt-4 text-sm">
              <b>Impacto:</b> reducción del tiempo de reacción ante incendios.
            </p>

            <p className="mt-2 text-sm">
              <b>Stack:</b> Python, YOLOv8, OpenCV
            </p>

            <div className="mt-5">
              <a
                href="https://github.com/Jaume92/Proyecto_detector_humo_YoloV8"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm rounded-lg border transition hover:bg-gray-100"
              >
                Ver repositorio
              </a>
            </div>
          </div>

          {/* 3️⃣ SMART FACTORY */}
          <div className="rounded-xl border bg-white/70 backdrop-blur p-6 shadow-sm transition hover:shadow-md">
            <h2 className="text-xl font-semibold">
              Smart Factory Control Tower — Lean Analytics
            </h2>

            <div className="mt-5 w-full aspect-video rounded-lg overflow-hidden border">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/V969vFWjLTs"
                title="Smart Factory Control Tower Demo"
                allowFullScreen
              />
            </div>
          </div>

         {/* 4️⃣ POLLERIA */}
<div className="rounded-xl border bg-white/70 backdrop-blur p-6 shadow-sm transition hover:shadow-md">
  <h2 className="text-xl font-semibold">
    Pollería App — Sistema de pedidos automatizado
  </h2>

  <p className="mt-3 text-sm text-gray-600">
    Sistema desarrollado para digitalizar el flujo completo de pedidos en un
    negocio físico de comida para llevar. El objetivo principal es eliminar
    papel, reducir errores manuales y sustituir soluciones propietarias por
    una arquitectura propia, estable y optimizada para entorno local.
  </p>

  <ul className="mt-4 text-sm space-y-2">
    <li>✅ API backend REST desarrollada con FastAPI</li>
    <li>✅ Interfaz diferenciada para mostrador y cocina</li>
    <li>✅ Integración directa con impresora térmica</li>
    <li>✅ Arquitectura local optimizada para bajo consumo</li>
  </ul>


{/* SLIDER IMÁGENES */}
<div className="mt-5 relative">

  {/* Flecha izquierda */}
  <button
    onClick={() =>
      setCurrentPolleria(
        currentPolleria === 0
          ? polleriaImages.length - 1
          : currentPolleria - 1
      )
    }
    className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow transition"
  >
    ←
  </button>

  {/* Imagen */}
  <img
    src={polleriaImages[currentPolleria]}
    className="w-full h-full object-cover rounded-lg border"
    alt="Pollería App"
  />

  {/* Flecha derecha */}
  <button
    onClick={() =>
      setCurrentPolleria(
        currentPolleria === polleriaImages.length - 1
          ? 0
          : currentPolleria + 1
      )
    }
    className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow transition"
  >
    →
  </button>

</div>

  {/* BOTONES SLIDER */}
  <div className="flex justify-center gap-4 mt-4">
    {polleriaImages.map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrentPolleria(index)}
        className={`w-3 h-3 rounded-full transition ${
          currentPolleria === index
            ? "bg-orange-500"
            : "bg-gray-300 hover:bg-gray-400"
        }`}
      />
    ))}
  </div>

  <p className="mt-4 text-sm">
    <b>Impacto:</b> mejora del flujo operativo, reducción de tiempos de pedido,
    disminución de errores humanos y mayor control del proceso en entornos
    de alta rotación.
  </p>

  <p className="mt-2 text-sm">
    <b>Stack:</b> Python, FastAPI, JavaScript, Arquitectura local
  </p>

  <div className="mt-5">
    <a
      href="https://github.com/Jaume92/Polleria_app"
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-2 text-sm rounded-lg border transition hover:bg-gray-100"
    >
      Ver repositorio
    </a>
  </div>
</div>


          {/* 5️⃣ EXPENSE TRACKER */}
<div className="rounded-xl border bg-white/70 backdrop-blur p-6 shadow-sm transition hover:shadow-md">
  <h2 className="text-xl font-semibold">
    AI Expense Tracker OCR — Automatización financiera
  </h2>

  <p className="mt-3 text-sm text-gray-600">
    Sistema automático de procesamiento de facturas mediante OCR orientado a
    eliminar tareas manuales de introducción de datos. El backend gestiona la
    extracción, validación y estructuración de información financiera para su
    posterior análisis o integración con sistemas empresariales.
  </p>

  <ul className="mt-4 text-sm space-y-2">
    <li>✅ Lectura automática de documentos con OCR</li>
    <li>✅ API backend para gestión financiera</li>
    <li>✅ Pipeline de procesamiento y validación de facturas</li>
    <li>✅ Preparado para integración con aplicaciones móviles o sistemas contables</li>
  </ul>

  <p className="mt-4 text-sm">
    <b>Impacto:</b> reducción significativa del tiempo administrativo,
    disminución de errores manuales en la introducción de datos y
    automatización de procesos financieros repetitivos.
  </p>

  <p className="mt-2 text-sm">
    <b>Stack:</b> Python, OCR, FastAPI, Procesamiento de documentos
  </p>

  <div className="mt-5">
    <a
      href="https://github.com/Jaume92/ai-expense-tracker-ocr"
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-2 text-sm rounded-lg border transition hover:bg-gray-100"
    >
      Ver repositorio
    </a>
  </div>
</div>

          {/* 6️⃣ POWER BI */}
<div className="rounded-xl border bg-white/70 backdrop-blur p-6 shadow-sm transition hover:shadow-md">
  <h2 className="text-xl font-semibold">
    Power BI Portfolio — Business & Lean Analytics
  </h2>

  <p className="mt-3 text-sm text-gray-600">
    Colección de dashboards ejecutivos diseñados para analizar rendimiento
    empresarial, operaciones Lean y KPIs estratégicos. El enfoque está orientado
    a visualización clara, toma de decisiones basada en datos y monitorización
    operativa en entornos reales.
  </p>

  {/* SLIDER IMÁGENES */}
<div className="mt-5 relative">

  {/* Flecha izquierda */}
  <button
    onClick={() =>
      setCurrent(
        current === 0
          ? powerbiImages.length - 1
          : current - 1
      )
    }
    className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow transition"
  >
    ←
  </button>

  {/* Imagen */}
  <img
    src={powerbiImages[current]}
    className="w-full h-full object-cover rounded-lg border"
    alt="Power BI Dashboard"
  />

  {/* Flecha derecha */}
  <button
    onClick={() =>
      setCurrent(
        current === powerbiImages.length - 1
          ? 0
          : current + 1
      )
    }
    className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow transition"
  >
    →
  </button>

</div>


  {/* BOTONES SLIDER */}
  <div className="flex justify-center gap-4 mt-4">
    {powerbiImages.map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrent(index)}
        className={`w-3 h-3 rounded-full transition ${
          current === index
            ? "bg-orange-500"
            : "bg-gray-300 hover:bg-gray-400"
        }`}
      />
    ))}
  </div>

  <p className="mt-4 text-sm">
    <b>Impacto:</b> mejora de la visibilidad operativa, análisis de rendimiento
    en tiempo real y soporte a la toma de decisiones estratégicas basadas en datos.
  </p>

  <p className="mt-2 text-sm">
    <b>Stack:</b> Power BI, DAX, SQL, Modelado de datos
  </p>

  <div className="mt-5">
    <a
      href="https://github.com/Jaume92/portfolio_Powerbi"
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-2 text-sm rounded-lg border transition hover:bg-gray-100"
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
