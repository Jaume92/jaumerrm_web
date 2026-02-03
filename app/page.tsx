"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-orange-50 to-orange-100 animated-bg text-gray-900">
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-orange-200/30 via-transparent to-orange-300/20 blur-3xl"></div>

      {/* HEADER */}
      <header className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">

        <span className="font-semibold text-lg tracking-tight">
          Jaume RRM
        </span>

        {/* MENU */}
        <div className="relative">

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-10 h-10 flex items-center justify-center rounded-lg border bg-white/70 backdrop-blur hover:bg-orange-100 transition"
          >
            ☰
          </button>

          {menuOpen && (
            <div className="absolute right-0 mt-3 w-56 rounded-xl border bg-white/90 backdrop-blur shadow-xl p-3 z-50">

              <Link href="/projects" onClick={() => setMenuOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-orange-100 transition">
                Proyectos
              </Link>

              <Link href="/cv" onClick={() => setMenuOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-orange-100 transition">
                CV
              </Link>

              <Link href="/dam" onClick={() => setMenuOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-orange-100 transition">
                DAM / Formación
              </Link>

              <Link href="/contact" onClick={() => setMenuOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-orange-100 transition">
                Contacto
              </Link>

              <a href="https://github.com/Jaume92" target="_blank" className="block px-3 py-2 rounded-lg hover:bg-orange-100 transition">
                GitHub
              </a>

            </div>
          )}

        </div>

      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-24 grid md:grid-cols-2 gap-12 items-center animate-fade-in">

        {/* TEXTO */}
        <div>

          <span className="inline-block mb-4 px-3 py-1 text-xs rounded-full bg-orange-100 text-orange-700">
            Ingeniero IA · Automatización · Fullstack
          </span>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Desarrollo soluciones reales en IA y backend
            <span className="text-orange-500"> con enfoque práctico</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            Backend, web y data aplicada usando Python, automatización y machine learning.
          </p>

          {/* STACK BADGES */}
          <div className="mt-4 flex flex-wrap gap-2 text-sm">

            <span className="px-3 py-1 rounded-full bg-white/70 border">Python</span>
            <span className="px-3 py-1 rounded-full bg-white/70 border">FastAPI</span>
            <span className="px-3 py-1 rounded-full bg-white/70 border">Next.js</span>

            <span className="px-3 py-1 rounded-full bg-white/70 border">Machine Learning</span>
            <span className="px-3 py-1 rounded-full bg-white/70 border">Power BI</span>
            <span className="px-3 py-1 rounded-full bg-white/70 border">Excel</span>

          </div>

          <div className="mt-8 flex flex-wrap gap-3">

            <Link href="/projects" className="px-6 py-3 rounded-lg bg-orange-500 text-white font-medium transition hover:bg-orange-600 hover:scale-[1.03]">
              Ver proyectos reales
            </Link>

            <Link href="/contact" className="px-6 py-3 rounded-lg border font-medium transition hover:bg-orange-100 hover:scale-[1.03]">
              Contactar
            </Link>

          </div>

          {/* METRICAS */}
          <div className="mt-8 flex flex-wrap gap-8">

            <div className="text-center transition hover:-translate-y-1">
              <div className="text-2xl font-bold text-gray-900">5+</div>
              <div className="text-sm text-gray-600">proyectos reales</div>
            </div>

            <div className="text-center transition hover:-translate-y-1">
              <div className="text-2xl font-bold text-gray-900">3</div>
              <div className="text-sm text-gray-600">sistemas productivos</div>
            </div>

            <div className="text-center transition hover:-translate-y-1">
              <div className="text-2xl font-bold text-gray-900">100%</div>
              <div className="text-sm text-gray-600">código propio</div>
            </div>

          </div>

        </div> 

        {/* IMAGEN */}
        <div className="flex justify-center">
          <div className="relative">

            <div className="absolute inset-0 bg-orange-300/20 blur-3xl rounded-full"></div>
            <div className="absolute inset-0 rounded-full border border-orange-300/20 blur-sm"></div>
            <div className="absolute bottom-[-28px] left-1/2 -translate-x-1/2 w-70 h-32 bg-black/10 blur-xl rounded-full"></div>

            <img
              src="/portada.png"
              alt="Jaume profile"
              className="relative w-64 md:w-80 transition-all duration-500 hover:scale-[1.10] hover:-translate-y-8"
            />

          </div>
        </div>

      </section>

      {/* DIFERENCIADOR */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="p-4 rounded-xl bg-orange-100 text-orange-800 text-sm">
          Construyendo experiencia en IA aplicada y automatización a través de proyectos reales.
        </div>
      </section>

      {/* QUE HAGO */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-semibold">Qué hago??</h2>

        <div className="mt-8 grid md:grid-cols-3 gap-5">

          <div className="rounded-xl border bg-white/70 backdrop-blur p-5 shadow-sm transition hover:shadow-md hover:-translate-y-1">
            <h3 className="font-semibold">IA aplicada</h3>
            <p className="mt-2 text-sm text-gray-600">
              Implemento visión artificial, RAG y asistentes inteligentes para automatizar tareas reales y aportar valor directo.
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
              Despliego soluciones productivas en Linux y mini PCs evitando dependencia innecesaria de cloud.
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
              Analizo el contexto operativo antes de escribir código.
            </p>
          </div>

          <div className="p-5 rounded-xl border bg-white/70">
            <h3 className="font-semibold">Construcción práctica</h3>
            <p className="mt-2 text-sm text-gray-600">
              Desarrollo sistemas funcionales con foco en estabilidad.
            </p>
          </div>

          <div className="p-5 rounded-xl border bg-white/70">
            <h3 className="font-semibold">Iteración</h3>
            <p className="mt-2 text-sm text-gray-600">
              Pruebo, optimizo y mejoro hasta cumplir el objetivo.
            </p>
          </div>

        </div>
      </section>

      {/* PROYECTOS DESTACADOS */}
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
