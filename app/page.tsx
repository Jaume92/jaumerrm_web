"use client";

import Reveal from "@/components/Reveal";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { HeroButtons } from "@/components/HeroButtons";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const stack = [
    { name: "Python", description: "Backend & IA", icon: "/icons/python.svg" },
    { name: "FastAPI", description: "APIs productivas", icon: "/icons/fastapi.svg" },
    { name: "Computer Vision", icon: "/icons/opencv.svg" },
    { name: "Machine Learning", icon: "/icons/pytorch.svg" },
    { name: "Power BI", icon: "/icons/powerbi.svg" },
    { name: "Next.js", icon: "/icons/nextjs.svg" },
    { name: "Docker", icon: "/icons/docker.svg" }, 
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-orange-50 to-orange-100 animated-bg text-gray-900">
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-orange-200/30 via-transparent to-orange-300/20 blur-3xl"></div>

      {/* HEADER */}
      <header className="max-w-5xl mx-auto px-6 py-1"></header>

      {/* HERO */}
      <section className="relative max-w-6xl mx-auto px-6 pt-7 pb-16 md:pt-10 md:pb-24 grid md:grid-cols-2 gap-10 items-center animate-fade-in">

        {/* HAMBURGUESA */}
        <div className="absolute right-4 top-6 sm:right-6 sm:top-8 md:right-6 md:top-10 z-40">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-12 h-8 flex items-center justify-center rounded-lg border bg-white/80 backdrop-blur hover:bg-orange-100 transition shadow-sm"
          >
            <span className="text-lg md:text-xl">☰</span>
          </button>

          {menuOpen && (
            <div className="absolute right-0 mt-3 w-60 rounded-2xl border bg-white/90 backdrop-blur-xl shadow-2xl p-4">
              <Link href="/projects" onClick={() => setMenuOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-orange-100">
                Proyectos técnicos
              </Link>
              <Link href="/cv" onClick={() => setMenuOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-orange-100">
                CV
              </Link>
              <Link href="/dam" onClick={() => setMenuOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-orange-100">
                DAM / Formación
              </Link>
              <Link href="/contact" onClick={() => setMenuOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-orange-100">
                Contacto
              </Link>
              <a
                href="https://github.com/Jaume92"
                target="_blank"
                className="block px-5 py-2 rounded-lg hover:bg-orange-100"
              >
                GitHub
              </a>
            </div>
          )}
        </div>

        {/* TEXTO */}
        <div className="md:ml-16">
          <span className="inline-block mb-3 px-3 py-1 text-xs rounded-full bg-orange-100 text-orange-700">
            AI Engineer · Digitalización Industrial · Consultoría IA
          </span>

          {/* H1 orientado a Lean Best / consultoría digital */}
              <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold leading-tight">
                 Digitalización industrial y{" "}
                  <span className="text-orange-500">sistemas de IA</span>{" "}
                     aplicados a operaciones reales.
                         </h1>

          {/* FIX */}
              <section className="max-w-5xl mx-auto px-6 pb-16">
               <div className="p-4 rounded-xl bg-orange-100 text-orange-800 text-sm">
                    Background industrial + inteligencia artificial aplicada.
                     Construyo sistemas de IA diseñados para funcionar en entornos reales, no solo en notebooks.
                   </div>
              </section>
          {/* STACK */}
          <motion.div
            className="mt-4 flex flex-wrap gap-2 text-xs md:text-sm"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.10 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {stack.map((tech) => (
              <motion.div
                key={tech.name}
                className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 border"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: { opacity: 1, y: 0, x: [0, -2, 2, -2, 2, 0] },
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <img src={tech.icon} alt={tech.name} className="w-4 h-4" />
                <span className="font-medium">
                  {tech.name}
                  {tech.description && (
                    <span className="text-gray-500 ml-1">({tech.description})</span>
                  )}
                </span>
              </motion.div>
            ))}
           </motion.div>
             {/* BOTONES */}
            <HeroButtons />
          {/* FIX: Métricas con más contexto */}
          <div className="mt-6 grid grid-cols-2 gap-6 md:flex md:gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold">6+</div>
              <div className="text-sm text-gray-600">Proyectos reales</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">3</div>
              <div className="text-sm text-gray-600">Sistemas en producción</div>
            </div>
            
          </div>
        </div>

        {/* IMAGEN */}
        <Reveal delay={0.2}>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-orange-300/20 blur-3xl rounded-full"></div>
              <img
                src="/portada.png"
                alt="Jaume profile"
                className="relative w-60 sm:w-52 md:w-100 -translate-y-2 md:translate-y-0 transition-all duration-500 hover:scale-[1.110]"
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* FIX: Diferenciador con mensaje real, no humilde */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="p-4 rounded-xl bg-orange-100 text-orange-800 text-sm">
          Background industrial + inteligencia artificial aplicada.
Construyo sistemas de IA diseñados para funcionar en entornos reales, no solo en notebooks.
        </div>
      </section>

{/* SOBRE MI + TIMELINE */}
<Reveal delay={0.1}>
<section className="max-w-4xl mx-auto px-6 pb-24">

{/* TITULO */}
<div className="flex flex-col md:flex-row items-center gap-4 my-16">
<div className="hidden md:block flex-1 h-px bg-orange-300"></div>
<h2 className="text-2xl md:text-3xl font-semibold text-center">
Sobre mí
</h2>
<div className="hidden md:block flex-1 h-px bg-orange-300"></div>
</div>

{/* TIMELINE */}
<div className="relative border-l border-orange-200 pl-8 space-y-12 max-w-2xl mx-auto">

{/* BASE INDUSTRIAL */}
<div className="relative">
<div className="absolute -left-[38px] top-1 w-4 h-4 bg-orange-400 rounded-full border-4 border-white"></div>
<h3 className="font-semibold text-gray-800">
Base industrial
</h3>
<p className="text-sm text-gray-600 mt-1">
Formación en <strong>Fabricación Mecánica</strong>, desarrollando una
comprensión práctica de los procesos de producción, fabricación y diseño técnico.
</p>
</div>

{/* DISEÑO TECNICO */}
<div className="relative">
<div className="absolute -left-[38px] top-1 w-4 h-4 bg-orange-400 rounded-full border-4 border-white"></div>
<h3 className="font-semibold text-gray-800">
Ingeniería y diseño técnico
</h3>
<p className="text-sm text-gray-600 mt-1">
Etapa centrada en <strong>diseño técnico y programación de máquinas con SolidWorks</strong>,
trabajando con geometría, tolerancias y procesos de fabricación en entornos industriales.
</p>
</div>

{/* TRANSICION A IA */}
<div className="relative">
<div className="absolute -left-[38px] top-1 w-4 h-4 bg-orange-400 rounded-full border-4 border-white"></div>
<h3 className="font-semibold text-gray-800">
Transición hacia datos e IA
</h3>
<p className="text-sm text-gray-600 mt-1">
Máster en <strong>Ciencia de Datos e Inteligencia Artificial en Nuclio School</strong>,
donde comienzo a trabajar con machine learning, análisis de datos y desarrollo de modelos.
</p>
</div>

{/* SISTEMAS DE IA */}
<div className="relative">
<div className="absolute -left-[38px] top-1 w-4 h-4 bg-orange-400 rounded-full border-4 border-white"></div>
<h3 className="font-semibold text-gray-800">
Construcción de sistemas de IA
</h3>
<p className="text-sm text-gray-600 mt-1">
Desarrollo de sistemas aplicados de inteligencia artificial incluyendo
<strong> RAG systems, aplicaciones con LLMs y proyectos de Computer Vision con YOLOv8</strong>.
</p>
</div>

{/* ACTUALIDAD */}
<div className="relative">
<div className="absolute -left-[38px] top-1 w-4 h-4 bg-orange-400 rounded-full border-4 border-white"></div>
<h3 className="font-semibold text-gray-800">
Hoy
</h3>
<p className="text-sm text-gray-600 mt-1">
Construyendo sistemas de IA enfocados en aplicaciones reales y reforzando
mi base de ingeniería de software estudiando <strong>DAM</strong>.
</p>
</div>
{/* ACTUALIDAD */}
<div className="relative">
<div className="absolute -left-[38px] top-1 w-4 h-4 bg-orange-400 rounded-full border-4 border-white"></div>
<h3 className="font-semibold text-gray-800">
Hoy
</h3>
<p className="text-sm text-gray-600 mt-1">
Construyendo sistemas de IA aplicados a problemas reales:
<strong> RAG systems, Computer Vision con YOLOv8 y aplicaciones LLM</strong>.
Actualmente estudiando <strong>DAM</strong> y el
<strong> Grado en Ingeniería Informática (UNED)</strong>.
</p>
</div>

</div>

{/* SKILLS */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-16 max-w-3xl mx-auto">

{[
"RAG Systems",
"LLM Applications",
"Computer Vision",
"YOLOv8",
"FastAPI",
"LangChain",
"Vector Databases",
"PyTorch"
].map((skill) => (
<div
key={skill}
className="px-3 py-3 rounded-lg border border-orange-200 bg-orange-50 text-xs font-medium text-center"
>
{skill}
</div>
))}

</div>

</section>
</Reveal>

      {/* Soluciones que desarrollo */}
      <Reveal delay={0.2}>
        <section className="max-w-5xl mx-auto px-6 pb-20">
          <div className="flex flex-col md:flex-row items-center gap-4 my-16">
            <div className="hidden md:block flex-1 h-px bg-orange-300"></div>
            <h2 className="text-2xl md:text-3xl font-semibold text-center">Soluciones que desarrollo</h2>
            <div className="hidden md:block flex-1 h-px bg-orange-300"></div>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-5">
            <div className="rounded-xl border bg-white/70 backdrop-blur p-5 shadow-sm transition hover:shadow-md hover:-translate-y-1">
              <h3 className="font-semibold">IA aplicada</h3>
              <p className="mt-2 text-sm text-gray-600">
                Implemento sistemas RAG, visión artificial y agentes LLM para automatizar
                tareas operativas y digitalizar conocimiento industrial.
              </p>
            </div>
            <div className="rounded-xl border bg-white/70 backdrop-blur p-5 shadow-sm transition hover:shadow-md hover:-translate-y-1">
              <h3 className="font-semibold">Automatización</h3>
              <p className="mt-2 text-sm text-gray-600">
                Desarrollo backends con FastAPI y workflows con APIs para eliminar
                procesos manuales y mejorar eficiencia operativa.
              </p>
            </div>
            <div className="rounded-xl border bg-white/70 backdrop-blur p-5 shadow-sm transition hover:shadow-md hover:-translate-y-1">
              <h3 className="font-semibold">Sistemas locales</h3>
              <p className="mt-2 text-sm text-gray-600">
                Despliego soluciones en entornos on-premise cuando el negocio
                lo requiere, sin dependencia innecesaria de la nube.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Cómo trabajo */}
      <Reveal delay={0.4}>
        <section className="max-w-5xl mx-auto px-6 pb-20">
          <div className="flex items-center gap-4 my-12">
            <div className="flex-1 h-px bg-orange-400"></div>
            <h2 className="text-3xl font-semibold text-center whitespace-nowrap">¿Cómo trabajo?</h2>
            <div className="flex-1 h-px bg-orange-400"></div>
          </div>

          <div className="mt-6 grid md:grid-cols-3 gap-5">
            <div className="p-5 rounded-xl border bg-white/70">
              <div className="text-orange-500 font-bold text-lg mb-1">01</div>
              <h3 className="font-semibold">Entender el problema</h3>
              <p className="mt-2 text-sm text-gray-600">
                Primero entiendo el proceso real: qué datos hay, qué decisión se toma,
                dónde está el cuello de botella.
              </p>
            </div>
            <div className="p-5 rounded-xl border bg-white/70">
              <div className="text-orange-500 font-bold text-lg mb-1">02</div>
              <h3 className="font-semibold">Construir con criterio</h3>
              <p className="mt-2 text-sm text-gray-600">
                Elijo la arquitectura adecuada para el problema, no la más compleja.
                Sistemas estables antes que sistemas sofisticados.
              </p>
            </div>
            <div className="p-5 rounded-xl border bg-white/70">
              <div className="text-orange-500 font-bold text-lg mb-1">03</div>
              <h3 className="font-semibold">Iterar en producción</h3>
              <p className="mt-2 text-sm text-gray-600">
                Los sistemas mejoran con uso real. Itero sobre feedback concreto,
                no sobre suposiciones.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* PROYECTOS */}
      <Reveal delay={0.20}>
        <section className="max-w-6xl mx-auto px-12 pb-20">
          <div className="flex items-center gap-4 my-10">
            <div className="flex-1 h-px bg-gray-400"></div>
            <h2 className="text-3xl font-semibold text-center whitespace-nowrap">Proyectos</h2>
            <div className="flex-1 h-px bg-gray-400"></div>
          </div>

          {/* PROYECTO DESTACADO */}
          <div className="mt-8 max-w-3xl mx-auto">
            <h3 className="font-semibold text-center text-lg">
              Lean AI Assistant — IA para mejora continua
            </h3>
            <p className="mt-2 text-sm text-gray-600 text-center">
              Asistente RAG especializado en Lean Manufacturing. Permite consultar documentación
              técnica en lenguaje natural: OEE, Takt Time, desperdicios, eficiencia de procesos.
            </p>

            {/* STACK BADGES */}
            <div className="mt-3 flex justify-center flex-wrap gap-2">
              {["Python", "LangChain", "Qdrant", "Streamlit", "RAG"].map((t) => (
                <span key={t} className="text-xs px-2 py-1 rounded-full bg-orange-100 text-orange-700 font-medium">
                  {t}
                </span>
              ))}
            </div>

            {/* VIDEO */}
            <div className="mt-4 w-full aspect-video rounded-lg overflow-hidden border">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/Ki_d4YFjgL4"
                title="Lean AI Assistant Demo"
                allowFullScreen
              />
            </div>

            <div className="mt-4 flex justify-center gap-4 flex-wrap">
              <a
                href="https://leanrag-fpayub2h46ogjcnn3kquub.streamlit.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-orange-600 font-medium hover:underline"
              >
                Ver demo en vivo →
              </a>
              <Link href="/projects" className="text-sm text-gray-600 hover:underline">
                Ver detalles →
              </Link>
            </div>
          </div>

          {/* GRID PROYECTOS RESTANTES */}
          <div className="mt-10 grid md:grid-cols-2 gap-6">

            {/* POLLERIA */}
            <Reveal delay={0.15}>
              <div className="rounded-xl border bg-white/70 backdrop-blur p-5 shadow-sm transition hover:shadow-md hover:-translate-y-1">
                <h3 className="font-semibold">Pollería App — Sistema de pedidos</h3>
                <p className="mt-2 text-sm text-gray-600">
                  SaaS para digitalizar pedidos físicos en negocios locales. TPV, tablets,
                  backend en tiempo real con WebSockets y red local.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["FastAPI", "WebSockets", "Next.js", "React"].map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <Link href="/projects" className="text-sm text-orange-600 font-medium hover:underline">
                    Ver proyecto →
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* DETECTOR HUMO */}
            <Reveal delay={0.17}>
              <div className="rounded-xl border bg-white/70 backdrop-blur p-5 shadow-sm transition hover:shadow-md hover:-translate-y-1">
                <h3 className="font-semibold">Detector de humo y fuego</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Sistema de detección temprana de incendios mediante Computer Vision.
                  Entrenado con dataset combinado de Fire & Smoke + COCO en GPU remota.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["YOLOv8", "Python", "RunPod", "Computer Vision"].map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex gap-4">
                  <Link href="/projects" className="text-sm text-orange-600 font-medium hover:underline">
                    Ver proyecto →
                  </Link>
                  <a
                    href="https://github.com/Jaume92"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-500 hover:underline"
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            </Reveal>

          </div>
        </section>
      </Reveal>

{/* FOOTER */}
<footer className="mt-auto border-t bg-white/70 backdrop-blur">

  {/* BOTON CV */}
  <div className="flex justify-center pt-10">
    <a
      href="/Jaume_Ruiz_CV.pdf"
      download
      className="px-6 py-3 rounded-lg bg-orange-500 text-white font-medium text-sm hover:bg-orange-600 transition shadow-sm"
    >
      Descargar CV
    </a>
  </div>

  <div className="max-w-5xl mx-auto px-6 py-8 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-3">

    <span>© {new Date().getFullYear()} Jaume Ruiz — Portfolio técnico</span>

    <div className="flex gap-4">
      <a
        href="https://github.com/Jaume92"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-orange-600 transition"
      >
        GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/TU-USUARIO-AQUI"
        target="_blank"
        rel="noopener noreferrer"
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