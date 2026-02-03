"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-orange-50 to-orange-100 animated-bg text-gray-900">
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-orange-200/30 via-transparent to-orange-300/20 blur-3xl"></div>

      {/* HEADER VACÍO */}
      <header className="max-w-5xl mx-auto px-6 py-1"></header>


      {/* HERO */}
      <section className="relative max-w-7xl mx-auto px-6 pt-4 pb-10 md:pt-10 md:pb-24 grid md:grid-cols-2 gap-8 items-center animate-fade-in">

        {/* HAMBURGUESA */}
        <div className="absolute right-6 top-12 md:top-8 z-50">

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-10 h-10 flex items-center justify-center rounded-lg border bg-white/80 backdrop-blur hover:bg-orange-100 transition shadow-sm"
          >
            ☰
          </button>

          {menuOpen && (
            <div className="absolute right-0 mt-3 w-56 rounded-xl border bg-white/95 backdrop-blur shadow-xl p-3">

              <Link href="/projects" onClick={() => setMenuOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-orange-100">
                Proyectos
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
        <div>

          <span className="inline-block mb-3 px-3 py-1 text-xs rounded-full bg-orange-100 text-orange-700">
            Ingeniero IA · Automatización · Fullstack
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
            Desarrollo soluciones en IA y backend
            <span className="text-orange-500"> con enfoque práctico</span>
          </h1>

          <p className="mt-4 text-base md:text-lg text-gray-600 max-w-xl">
            Aprendo creando sistemas inteligentes aplicados a problemas reales.
          </p>

          {/* STACK */}
          <div className="mt-3 flex flex-wrap gap-2 text-xs md:text-sm">
            <span className="px-3 py-1 rounded-full bg-white/70 border">Python</span>
            <span className="px-3 py-1 rounded-full bg-white/70 border">FastAPI</span>
            <span className="px-3 py-1 rounded-full bg-white/70 border">Next.js</span>
            <span className="px-3 py-1 rounded-full bg-white/70 border">Machine Learning</span>
            <span className="px-3 py-1 rounded-full bg-white/70 border">Power BI</span>
            <span className="px-3 py-1 rounded-full bg-white/70 border">Excel</span>
            
          </div>

          {/* BOTONES */}
          <div className="mt-6 flex flex-wrap gap-3">

            <Link
              href="/projects"
              className="px-6 py-3 rounded-lg bg-orange-500 text-white font-medium transition hover:bg-orange-600 hover:scale-[1.03] w-full sm:w-auto"
            >
              Ver proyectos !
            </Link>

            <Link
              href="/contact"
              className="px-6 py-3 rounded-lg border font-medium transition hover:bg-orange-100 hover:scale-[1.03] w-full sm:w-auto"
            >
              Contactar
            </Link>

          </div>

          {/* METRICAS */}
          <div className="mt-6 grid grid-cols-2 gap-6 md:flex md:gap-8">

            <div className="text-center">
              <div className="text-3xl font-bold">5+</div>
              <div className="text-sm text-gray-600">Proyectos </div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold">3</div>
              <div className="text-sm text-gray-600">Sistemas productivos</div>
            </div>

            <div className="text-center col-span-2 md:col-span-1">
              <div className="text-3xl font-bold">Activo</div>
              <div className="text-sm text-gray-600">Aprendizaje continuo</div>
            </div>

          </div>

        </div>

        {/* IMAGEN */}
        <div className="flex justify-center">
          <div className="relative">

            <div className="absolute inset-0 bg-orange-300/20 blur-3xl rounded-full"></div>

            <img
              src="/portada.png"
              alt="Jaume profile"
              className="relative w-44 sm:w-52 md:w-80 -translate-y-2 md:translate-y-0 transition-all duration-500 hover:scale-[1.06]"
            />

          </div>
        </div>

      </section>

      {/* DIFERENCIADOR */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="p-4 rounded-xl bg-orange-100 text-orange-800 text-sm">
          Construyendo experiencia poco a poco en IA aplicada y automatización a través de proyectos reales.
        </div>
      </section>

      {/* QUE HAGO */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-semibold">Qué hago??</h2>

        <div className="mt-8 grid md:grid-cols-3 gap-5">

          <div className="rounded-xl border bg-white/70 backdrop-blur p-5 shadow-sm transition hover:shadow-md hover:-translate-y-1">
            <h3 className="font-semibold">IA aplicada</h3>
            <p className="mt-2 text-sm text-gray-600">
              Implemento visión artificial, RAG y asistentes inteligentes para automatizar tareas repetiitvas y aportar valor .
            </p>
          </div>

          <div className="rounded-xl border bg-white/70 backdrop-blur p-5 shadow-sm transition hover:shadow-md hover:-translate-y-1">
            <h3 className="font-semibold">Automatización</h3>
            <p className="mt-2 text-sm text-gray-600">
              Desarrollo workflows con n8n y APIs para eliminar procesos repetitivos y mejorar eficiencia operativa.
            </p>
          </div>

          <div className="rounded-xl border bg-white/70 backdrop-blur p-5 shadow-sm transition hover:shadow-md hover:-translate-y-1">
            <h3 className="font-semibold">Sistemas locales</h3>
            <p className="mt-2 text-sm text-gray-600">
              Despliego soluciones productivas en Ubuntu y mini PCs evitando asi dependencia innecesaria de cloud.
            </p>
          </div>

        </div>
      </section>

      {/* COMO TRABAJO */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-semibold">Cómo trabajo</h2>

        <div className="mt-6 grid md:grid-cols-3 gap-5">

          <div className="p-5 rounded-xl border bg-white/70">
            <h3 className="font-semibold">Problema real</h3>
            <p className="mt-2 text-sm text-gray-600">
              Primero defino el problema y los objetivos a cumplir.
            </p>
          </div>

          <div className="p-5 rounded-xl border bg-white/70">
            <h3 className="font-semibold">Construcción práctica</h3>
            <p className="mt-2 text-sm text-gray-600">
              Desarrollo sistemas buscando que sean estables y fiables.
            </p>
          </div>

          <div className="p-5 rounded-xl border bg-white/70">
            <h3 className="font-semibold">Iteración</h3>
            <p className="mt-2 text-sm text-gray-600">
              Pruebo y mejoro hasta cumplir los objetivos definidos.
            </p>
          </div>

        </div>
      </section>

      {/* PROYECTOS */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-semibold">Proyectos reales</h2>

        <div className="mt-8 grid md:grid-cols-2 gap-6">

          <div className="rounded-xl border bg-white/70 backdrop-blur p-5 shadow-sm transition hover:shadow-md hover:-translate-y-1">
            <h3 className="font-semibold">Pollería App — Sistema de pedidos</h3>
            <p className="mt-2 text-sm text-gray-600">
              Plataforma para digitalizar pedidos físicos y automatizar el flujo completo desde mostrador hasta cocina.
            </p>

            <div className="mt-4">
              <Link href="/projects" className="text-sm text-orange-600 font-medium hover:underline">
                Ver proyecto →
              </Link>
            </div>
          </div>

          <div className="rounded-xl border bg-white/70 backdrop-blur p-5 shadow-sm transition hover:shadow-md hover:-translate-y-1">
            <h3 className="font-semibold">Detector de humo y fuego</h3>
            <p className="mt-2 text-sm text-gray-600">
              Sistema de detección temprana de incendios mediante visión artificial usando YOLOv8.
            </p>

            <div className="mt-4">
              <Link href="/projects" className="text-sm text-orange-600 font-medium hover:underline">
                Ver proyecto →
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
            <a href="https://github.com/Jaume92" target="_blank" className="hover:text-orange-600 transition">
              GitHub
            </a>

            <a href="https://www.linkedin.com" target="_blank" className="hover:text-orange-600 transition">
              LinkedIn
            </a>
          </div>

        </div>
      </footer>

    </main>
  );
}
