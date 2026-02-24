"use client";

import Reveal from "@/components/Reveal";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Home() {

  const [menuOpen, setMenuOpen] = useState(false);

  
  const stack = [
    {
      name: "Python",
      description: "Backend & IA",
      icon: "/icons/python.svg",
    },
    {
      name: "FastAPI",
      description: "APIs productivas",
      icon: "/icons/fastapi.svg",
    },
    {
      name: "Computer Vision",
      icon: "/icons/opencv.svg",
    },
    {
      name: "Machine Learning",
      icon: "/icons/pytorch.svg",
    },
    {
      name: "Power BI",
      icon: "/icons/powerbi.svg",
    },
    {
      name: "Next.js",
      icon: "/icons/nextjs.svg",
    
    },
     {
      name: "Docker.js",
      icon: "/icons/docker.svg",
    },
  ];

  
  return (

 
  <main className="min-h-screen bg-gradient-to-br from-white via-orange-50 to-orange-100 animated-bg text-gray-900">
  <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-orange-200/30 via-transparent to-orange-300/20 blur-3xl"></div>




      {/* HEADER VACÍO */}
      <header className="max-w-5xl mx-auto px-6 py-1"></header>


      {/* HERO */}
      <section className="relative max-w-6xl mx-auto px-6 pt-7 pb-16 md:pt-10 md:pb-24 grid md:grid-cols-2 gap-10 items-center animate-fade-in">



        {/* HAMBURGUESA */}
        <div className="absolute right-4 top-6 sm:right-6 sm:top-8 md:right-6 md:top-10 z-40">

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-12 h-8 flex items-center justify-center rounded-lg border bg-white/80 backdrop-blur hover:bg-orange-100 transition shadow-sm"
          >
            <span className="text-lg md:text-xl">☰   
               </span>
          </button>

          {menuOpen && (
            <div className="absolute right-0 mt-3 w-60 rounded-2xl border bg-white/90 backdrop-blur-xl shadow-2xl p-4">


              <Link href="/projects" onClick={() => setMenuOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-orange-100">
                Proyectos tecnicos 
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
            Ingeniero IA · Automatización · Fullstack
          </span>

          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold leading-tight">
            Soluciones de Inteligencia Artificial para negocio y automatización.
            <span className="text-orange-500"> </span>
          </h1>

          <p className="mt-4 text-base md:text-lg text-gray-600 max-w-xl">
            
          </p>
           Ingeniero de IA enfocado en automatización, sistemas productivos e IA aplicada a negocio.

          {/* STACK */}
<motion.div
  className="mt-4 flex flex-wrap gap-2 text-xs md:text-sm"
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.10 }}
  variants={{
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }}
>
  {stack.map((tech) => (
    <motion.div
      key={tech.name}
      className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 border"
      variants={{
        hidden: { opacity: 0, y: 10 },
        show: {
          opacity: 1,
          y: 0,
          x: [0, -2, 2, -2, 2, 0],
        },
      }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
      }}
    >
      <img
        src={tech.icon}
        alt={tech.name}
        className="w-4 h-4"
      />

      <span className="font-medium">
        {tech.name}
        {tech.description && (
          <span className="text-gray-500 ml-1">
            ({tech.description})
          </span>
        )}
      </span>
    </motion.div>
  ))}
</motion.div>

          {/* BOTONES */}
          <div className="mt-6 flex flex-wrap gap-3">

            <Link
              href="/projects"
              className="px-6 py-3 rounded-lg bg-orange-500 text-white font-medium transition hover:bg-orange-600 hover:scale-[1.03] w-full sm:w-auto"
            >
              Ver proyectos Tecnicos!
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
              <div className="text-3xl font-bold">6+</div>
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
   
      {/* DIFERENCIADOR */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="p-4 rounded-xl bg-orange-100 text-orange-800 text-sm">
          Construyendo experiencia poco a poco en IA aplicada y automatización a través de proyectos reales.
        </div>
      </section>
<Reveal delay={0.2}>
      {/*Soluciones que desarrollo */}
<section className="max-w-5xl mx-auto px-6 pb-20">

  {/* TÍTULO CON SEPARADOR RESPONSIVE */}
<div className="flex flex-col md:flex-row items-center gap-4 my-16">

  <div className="hidden md:block flex-1 h-px bg-orange-300"></div>

  <h2 className="text-2xl md:text-3xl font-semibold text-center">
    Soluciones que desarrollo
  </h2>

  <div className="hidden md:block flex-1 h-px bg-orange-300"></div>

</div>


  {/* TARJETAS */}
  
  <div className="mt-8 grid md:grid-cols-3 gap-5">

    <div className="rounded-xl border bg-white/70 backdrop-blur p-5 shadow-sm transition hover:shadow-md hover:-translate-y-1">
      <h3 className="font-semibold">IA aplicada</h3>
      <p className="mt-2 text-sm text-gray-600">
        Implemento visión artificial, RAG y asistentes inteligentes para automatizar tareas repetitivas y aportar valor.
                  </p>
                   </div>

                  <div className="rounded-xl border bg-white/70 backdrop-blur p-5 shadow-sm transition hover:shadow-md hover:-translate-y-1">
                      <h3 className="font-semibold">Automatización</h3>
                  <p className="mt-2 text-sm text-gray-600">
        Desarrollo workflows con APIs para eliminar procesos repetitivos y mejorar eficiencia operativa.
                  </p>
                     </div>

                           <div className="rounded-xl border bg-white/70 backdrop-blur p-5 shadow-sm transition hover:shadow-md hover:-translate-y-1">
                     <h3 className="font-semibold">Sistemas locales</h3>
                     <p className="mt-2 text-sm text-gray-600">
                        Despliego soluciones productivas en Ubuntu y mini PCs evitando dependencia innecesaria de la nube.
                       </p>
                        </div>

               </div>
           </section>

           </Reveal>


      {/* Cómo aporto valor */}
      <Reveal delay={0.4}>
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="flex items-center gap-4 my-12">
               <div className="flex-1 h-px bg-orange-400"></div>

                <h2 className="text-3xl font-semibold text-center whitespace-nowrap">
                 ¿ Cómo aporto valor?
             </h2>

               <div className="flex-1 h-px bg-orange-400"></div>
                 </div>


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
    
      </Reveal>

 

{/* PROYECTOS */}
<Reveal delay={0.20}>
<section className="max-w-5xl mx-auto px-12 pb-20">

  {/* TÍTULO */}
  <div className="flex items-center gap-4 my-10">
    <div className="flex-1 h-px bg-gray-400"></div>

    <h2 className="text-3xl font-semibold text-center whitespace-nowrap">
      Proyectos
    </h2>

    <div className="flex-1 h-px bg-gray-400"></div>
  </div>

  {/* PROYECTO DESTACADO */}
  <div className="mt-8 max-w-3xl mx-auto">
    <h3 className="font-semibold text-center">
      Lean AI Assistant — IA para mejora continua
    </h3>

    <p className="mt-2 text-sm text-gray-600 text-center">
      Asistente inteligente basado en IA generativa y RAG para digitalizar el conocimiento Lean
      y apoyar la toma de decisiones operativas en entornos industriales.
    </p>

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

      <Link
        href="/projects"
        className="text-sm text-gray-600 hover:underline"
      >
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
            Plataforma para digitalizar pedidos físicos y automatizar el flujo completo desde mostrador hasta cocina.
          </p>

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
            Sistema de detección temprana de incendios mediante visión artificial usando YOLOv8.
          </p>

          <div className="mt-4">
            <Link href="/projects" className="text-sm text-orange-600 font-medium hover:underline">
              Ver proyecto →
            </Link>
          </div>
        </div>
      </Reveal>

    </div>

  </section>
</Reveal>

{/* FOOTER */}
<footer className="border-t bg-white/70 backdrop-blur">
  <div className="max-w-5xl mx-auto px-6 py-8 text-sm text-gray-500 flex flex-col md:flex-row justify-between gap-3">

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
        href="https://www.linkedin.com"
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
