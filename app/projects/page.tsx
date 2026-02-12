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

          {/* POLLERIA */}
          <div className="rounded-xl border bg-white/70 backdrop-blur p-6 shadow-sm transition hover:shadow-md">

            <h2 className="text-xl font-semibold">
              Pollería App — Sistema de pedidos automatizado
            </h2>

            <p className="mt-3 text-sm text-gray-600">
              Sistema desarrollado para digitalizar el flujo completo de pedidos
              en un negocio físico de comida para llevar. El objetivo principal es
              eliminar papel, errores manuales y dependencias de sistemas propietarios,
              ofreciendo una solución local, rápida y estable.
            </p>

            <ul className="mt-4 text-sm space-y-2">
              <li>✅ API backend REST desarrollada con FastAPI</li>
              <li>✅ Interfaz web diferenciada para mostrador y cocina</li>
              <li>✅ Integración directa con impresora térmica</li>
              <li>✅ Arquitectura local optimizada para bajo consumo de recursos</li>
            </ul>

            {/* IMÁGENES POLLERÍA */}
            <div className="mt-5">
              <img
                src={polleriaImages[currentPolleria]}
                className="w-full max-h-[420px] object-contain bg-white rounded-lg border"
                alt="Pollería App"
              />
            </div>

            <div className="flex justify-center gap-2 mt-3">
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
              <b>Impacto:</b> mejora del flujo operativo, reducción de tiempos de pedido
              y disminución de errores humanos en entornos de alta rotación.
            </p>

            <p className="mt-2 text-sm">
              <b>Stack:</b> Python, FastAPI, JavaScript
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

          {/* DETECTOR HUMO */}
          <div className="rounded-xl border bg-white/70 backdrop-blur p-6 shadow-sm transition hover:shadow-md">

            <h2 className="text-xl font-semibold">
              Detector de humo y fuego — Computer Vision
            </h2>

            <p className="mt-3 text-sm text-gray-600">
              Sistema de detección temprana de incendios basado en análisis de vídeo
              en tiempo real. El proyecto está enfocado a escenarios industriales
              y entornos de vigilancia donde la detección precoz es crítica para
              reducir daños materiales y riesgos humanos.
            </p>

            <ul className="mt-4 text-sm space-y-2">
              <li>✅ Entrenamiento personalizado de modelo YOLOv8</li>
              <li>✅ Procesamiento de vídeo en tiempo real con OpenCV</li>
              <li>✅ Detección automática de eventos críticos</li>
              <li>✅ Arquitectura preparada para despliegue local o edge</li>
            </ul>
                    <div className="mt-5">
                      <img
               src="/projects/Humo1.jpg"
                    className="w-full max-h-[420px] object-contain bg-white rounded-lg border"
                   alt="Detección de humo y fuego"
                     />
                </div>

            <p className="mt-4 text-sm">
              <b>Impacto:</b> reducción del tiempo de reacción ante incendios
              y aumento de la seguridad operativa en entornos críticos.
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

          {/* SMART FACTORY */}
          <div className="rounded-xl border bg-white/70 backdrop-blur p-6 shadow-sm transition hover:shadow-md">

            <h2 className="text-xl font-semibold">
              Smart Factory Control Tower — Lean Analytics
            </h2>

            <p className="mt-3 text-sm text-gray-600">
              Plataforma de simulación industrial y monitorización de KPIs Lean
              orientada a visualizar rendimiento productivo en tiempo real.
              El proyecto reproduce escenarios reales de planta para análisis
              de eficiencia, cuellos de botella y toma de decisiones operativas.
            </p>

            <ul className="mt-4 text-sm space-y-2">
              <li>✅ Simulación de producción industrial</li>
              <li>✅ KPIs Lean: OEE, rendimiento y disponibilidad</li>
              <li>✅ Dashboard web interactivo</li>
              <li>✅ Arquitectura orientada a datos en tiempo real</li>
            </ul>

            <p className="mt-4 text-sm">
              <b>Impacto:</b> mejora de visibilidad operativa y soporte a decisiones
              basadas en datos para entornos industriales.
            </p>

            <p className="mt-2 text-sm">
              <b>Stack:</b> Python, JavaScript, HTML
            </p>

            <div className="mt-5">
              <a
                href="https://github.com/Jaume92/Smart-Factory-Control-Tower"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm rounded-lg border transition hover:bg-gray-100"
              >
                Ver repositorio
              </a>
            </div>

          </div>

          {/* EXPENSE TRACKER */}
          <div className="rounded-xl border bg-white/70 backdrop-blur p-6 shadow-sm transition hover:shadow-md">

            <h2 className="text-xl font-semibold">
              AI Expense Tracker OCR — Automatización financiera
            </h2>

            <p className="mt-3 text-sm text-gray-600">
              Sistema automático de procesamiento de facturas mediante OCR
              orientado a eliminar tareas manuales de introducción de datos.
              El backend gestiona la extracción, validación y estructuración
              de información financiera.
            </p>

            <ul className="mt-4 text-sm space-y-2">
              <li>✅ Lectura automática de documentos con OCR</li>
              <li>✅ API backend para gestión financiera</li>
              <li>✅ Pipeline de procesamiento de facturas</li>
              <li>✅ Preparado para integración móvil</li>
            </ul>

            <p className="mt-4 text-sm">
              <b>Impacto:</b> reducción de tiempo administrativo y automatización
              de procesos financieros repetitivos.
            </p>

            <p className="mt-2 text-sm">
              <b>Stack:</b> Python, OCR, FastAPI
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

          {/* POWER BI */}
          <div className="rounded-xl border bg-white/70 backdrop-blur p-6 shadow-sm transition hover:shadow-md">

            <h2 className="text-xl font-semibold">
              Power BI Portfolio — Business & Lean Analytics
            </h2>

            <p className="mt-3 text-sm text-gray-600">
              Colección de dashboards ejecutivos diseñados para analizar
              rendimiento empresarial, operaciones Lean y KPIs estratégicos.
              El enfoque está orientado a visualización clara, toma de decisiones
              y análisis operativo en entornos reales.
            </p>

            <div className="mt-5">
              <img
                src={powerbiImages[current]}
                className="w-full max-h-[420px] object-contain bg-white rounded-lg border"
                alt="Power BI Dashboard"
              />
            </div>

            <div className="flex justify-center gap-2 mt-3">
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
              <b>Stack:</b> Power BI, DAX, SQL
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

          {/* EXPENSE TRACKER */}
          <div className="rounded-xl border bg-white/70 backdrop-blur p-6 shadow-sm transition hover:shadow-md">

            <h2 className="text-xl font-semibold">
              AI lean Assistant- inteligencia aplicada a mejora continua 
            </h2>

            <p className="mt-3 text-sm text-gray-600">
              Asistente basado en IA especializado en metodologías Lean Manufacturing,
                capaz de responder preguntas técnicas, analizar procesos y proponer
                mejoras operativas utilizando documentación estructurada y técnicas RAG.
                  Diseñado para entornos industriales reales.
            </p>

            <ul className="mt-4 text-sm space-y-2">
              <li>✅ Chatbot experto en Lean basado en documentación técnica</li>
              <li>✅ Arquitectura RAG con recuperación de conocimiento industrial</li>
                <li>✅ API backend preparada para integración en planta o dashboard</li>
                <li>✅ Escalable a asistentes de mejora continua en tiempo real</li>
            </ul>

            <p className="mt-4 text-sm">
            <b>Impacto:</b> aceleración del análisis de procesos, soporte a toma dedecisiones operativas y digitalización del conocimiento Lean en fábrica.
            </p>

            <p className="mt-2 text-sm">
              <b>Stack:</b> Python, OCR, FastAPI
            </p>

            <div className="mt-5">
              <a
                href="https://github.com/Jaume92/Lean_RAG"
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

