"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, Variants } from "framer-motion";



const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};



export default function CVPage() {
  const [lang, setLang] = useState<"es" | "en">("es");

  const content = {
    es: {
      title: "Currículum",
      role: "Consultor de Transformación Digital · Power BI · Python · IA aplicada",
      availability: "Disponible para nuevas oportunidades",

      summary:
        "Consultor de transformación digital en Goodwork by Lean Best. Combino experiencia industrial e IA aplicada para analizar procesos, desarrollar soluciones digitales y automatizar tareas con Python. Construyo dashboards con Power BI y proyectos con FastAPI, sistemas RAG y Computer Vision. Mi enfoque: entender la operación y convertir sus necesidades en herramientas útiles.",

      profileTitle: "Perfil Profesional",
      profilePoints: [
        "Transición  hacia IA aplicada con proyectos reales desplegados.",
        "Orientación a resultados: automatización, digitalización y optimización de procesos.",
        "Capacidad para aprender rápido y adaptarme a entornos técnicos exigentes.",
        "Mentalidad de producto: construir soluciones útiles, no solo código.",
      ],

      experienceTitle: "Experiencia Profesional",
      experience: {
        company: "Goodwork by Lean Best",
        role: "Consultor de Transformación Digital",
        date: "Marzo 2026 — Actualidad",
        responsibilities: [
          "Análisis de procesos y necesidades de negocio para identificar oportunidades de digitalización.",
          "Definición y desarrollo de soluciones digitales orientadas a procesos y operaciones.",
          "Desarrollo de dashboards y análisis de datos con Power BI.",
          "Uso de Python para tratamiento de datos y automatización de tareas.",
        ],
        achievements: [],
        tools: ["Power BI", "Python", "Análisis de procesos", "Transformación digital"],
      },

      educationTitle: "Formación Académica",
      education: [
        {
          title: "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM) — En curso",
          place: "ILERNA Online",
          date: "2025 — Actualidad",
          details: ["Programación (Java, lógica y estructuras)", "Bases de datos relacionales (SQL)", "Sistemas informáticos", "Lenguajes de marcas y digitalización", "Entornos de desarrollo"],
        },
        {
          title: "Máster en Data Science e Inteligencia Artificial",
          place: "Núclio School — Barcelona",
          date: "2023 — 2024",
          details: ["Machine Learning y Deep Learning", "Modelado predictivo", "Análisis de datos avanzado", "Visualización con Power BI"],
        },
        {
          title: "Grado Superior en Fabricación Mecánica",
          place: "Salesians Sarrià — Barcelona",
          date: "2012 — 2014",
          details: ["Procesos industriales", "Sistemas mecánicos", "Interpretación de planos técnicos"],
        },
      ],

      skillsTitle: "Habilidades Técnicas",
      skillsGroups: {
        "Backend & APIs": ["Python", "FastAPI", "SQL", "APIs REST"],
        "Frontend": ["Next.js", "React", "HTML", "CSS", "JavaScript"],
        "IA & Computer Vision": ["Machine Learning", "Computer Vision", "YOLOv8", "RAG", "LangChain", "PyTorch"],
        "Datos & Visualización": ["Pandas", "NumPy", "Power BI", "Qdrant"],
        "Sistemas": ["Linux", "Git", "Despliegues locales", "SCADA / HMI"],
      },

      projectsTitle: "Proyectos Destacados",
      projects: [
        {
          name: "Lean AI Assistant — RAG Industrial",
          desc: "Asistente RAG especializado en Lean Manufacturing. Consulta de documentación técnica en lenguaje natural con recuperación contextual.",
          stack: ["Python", "LangChain", "Qdrant", "FastAPI"],
          link: "https://leanrag-fpayub2h46ogjcnn3kquub.streamlit.app/",
        },
        {
          name: "Detector de humo y fuego — Computer Vision",
          desc: "Modelo YOLOv8 para detección en tiempo real, con pipeline de vídeo y filtrado temporal para reducir falsos positivos.",
          stack: ["Python", "YOLOv8", "OpenCV", "PyTorch"],
          link: "https://github.com/Jaume92/Proyecto_detector_humo_YoloV8",
        },
        {
          name: "Smart Factory Control Tower",
          desc: "Simulador de planta industrial con backend FastAPI, métricas en tiempo real y dashboard de KPIs en Power BI.",
          stack: ["Python", "FastAPI", "Power BI", "WebSockets"],
          link: "https://github.com/Jaume92",
        },
      ],

      languagesTitle: "Idiomas",
      languages: ["Español — Nativo", "Catalán — Nativo", "Inglés — Lectura y comprensión técnica (A2)"],
      back: "← Volver al inicio",
    },

    en: {
      title: "Resume",
      role: "Digital Transformation Consultant · Power BI · Python · Applied AI",
      availability: "Open to new opportunities",

      summary:
        "Digital Transformation Consultant at Goodwork by Lean Best, focused on processes, digital solutions, Power BI and Python. Experience with Computer Vision, RAG systems and automation. I build AI tools focused on digitalizing operational and industrial processes — with an engineer's mindset, not just a programmer's.",

      profileTitle: "Professional Profile",
      profilePoints: [
        "Self-taught transition into applied AI with real deployed projects.",
        "Results-oriented: automation, digitalization and process optimization.",
        "Fast learner with strong technical adaptability.",
        "Product mindset: build useful solutions, not just code.",
      ],

      experienceTitle: "Professional Experience",
      experience: {
        company: "Goodwork by Lean Best",
        role: "Digital Transformation Consultant",
        date: "March 2026 — Present",
        responsibilities: [
          "Analyze business processes and needs to identify digitalization opportunities.",
          "Define and develop digital solutions for processes and operations.",
          "Build dashboards and analyze data with Power BI.",
          "Use Python for data processing and task automation.",
        ],
        achievements: [],
        tools: ["Power BI", "Python", "Process analysis", "Digital transformation"],
      },

      educationTitle: "Education",
     education: [
  {
    title: "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM) — En curso",
    place: "ILERNA Online",
    date: "2025 — Actualidad",
    details: [
      "Programación orientada a objetos (Java)",
      "Bases de datos relacionales (SQL)",
      "Sistemas informáticos y redes",
      "Lenguajes de marcas y digitalización",
      "Entornos de desarrollo y control de versiones",
      "Acceso a datos y persistencia",
      "Desarrollo de interfaces",
    ],
    note: "Formación orientada a consolidar la base de ingeniería de software aplicada al desarrollo de sistemas reales.",
  },
  {
    title: "Máster en Data Science e Inteligencia Artificial",
    place: "Núclio School — Barcelona",
    date: "2023 — 2024",
    details: [
      "Machine Learning supervisado y no supervisado",
      "Deep Learning y redes neuronales",
      "Procesamiento de lenguaje natural (NLP)",
      "Computer Vision aplicada",
      "Modelado predictivo y series temporales",
      "Análisis exploratorio de datos",
      "Visualización con Power BI y Matplotlib",
      "Proyecto final: sistema de recomendación con ML",
    ],
    note: "Proyecto final: sistema de recomendación y análisis de rentabilidad para banca online usando Machine Learning.",
  },
  {
    title: "Grado Superior en Fabricación Mecánica",
    place: "Salesians Sarrià — Barcelona",
    date: "2012 — 2014",
    details: [
      "Procesos de fabricación industrial",
      "Sistemas mecánicos y mecanizado",
      "Interpretación de planos técnicos",
      "Programación de máquinas CNC",
      "Control de calidad industrial",
      "Diseño técnico con SolidWorks",
    ],
    note: "Base técnica industrial que aporta comprensión real de procesos productivos y entornos de fabricación.",
  },
],

      skillsTitle: "Technical Skills",
      skillsGroups: {
        "Backend & APIs": ["Python", "FastAPI", "SQL", "REST APIs"],
        "Frontend": ["Next.js", "React", "HTML", "CSS", "JavaScript"],
        "AI & Computer Vision": ["Machine Learning", "Computer Vision", "YOLOv8", "RAG", "LangChain", "PyTorch"],
        "Data & Visualization": ["Pandas", "NumPy", "Power BI", "Qdrant"],
        "Systems": ["Linux", "Git", "Local deployments", "SCADA / HMI"],
      },

      projectsTitle: "Highlighted Projects",
      projects: [
        {
          name: "Lean AI Assistant — Industrial RAG",
          desc: "RAG assistant specialized in Lean Manufacturing. Natural language queries over technical documentation with contextual retrieval.",
          stack: ["Python", "LangChain", "Qdrant", "FastAPI"],
          link: "https://leanrag-fpayub2h46ogjcnn3kquub.streamlit.app/",
        },
        {
          name: "Smoke & Fire Detector — Computer Vision",
          desc: "Real-time YOLOv8 detection model with video processing and temporal filtering to reduce false positives.",
          stack: ["Python", "YOLOv8", "OpenCV", "PyTorch"],
          link: "https://github.com/Jaume92/Proyecto_detector_humo_YoloV8",
        },
        {
          name: "Smart Factory Control Tower",
          desc: "Industrial plant simulator with FastAPI backend, real-time metrics and Power BI KPI dashboard.",
          stack: ["Python", "FastAPI", "Power BI", "WebSockets"],
          link: "https://github.com/Jaume92",
        },
      ],

      languagesTitle: "Languages",
      languages: ["Spanish — Native", "Catalan — Native", "English — Technical reading (A2)"],
      back: "← Back to home",
    },
  };

  const t = content[lang];

  return (
    <main id="main-content" className="min-h-screen bg-gradient-to-br from-white via-orange-50 to-white px-6 py-20 text-gray-900">
      <div className="max-w-5xl mx-auto">

        {/* HERO */}
        <motion.div
          initial="hidden" animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          className="flex flex-col md:flex-row items-center justify-between gap-10 mb-14"
        >
          {/* FOTO */}
          <motion.div variants={fadeUp} className="flex-shrink-0">
            <img
              src="/foto.jpg"
              alt="Jaume Ruiz"
              className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-4 border-orange-200 shadow-md"
            />
          </motion.div>

          {/* INFO */}
          <motion.div variants={fadeUp} className="flex-1 text-center md:text-left">
            <span className="inline-block mb-2 px-3 py-1 text-xs rounded-full bg-orange-100 text-orange-700">
              {t.availability}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold">{t.title}</h1>
            <p className="mt-2 text-gray-600 font-medium">{t.role}</p>
            <p className="mt-1 text-sm text-gray-400">📍 Zafra (Badajoz), España</p>

            <div className="mt-5 flex flex-wrap justify-center md:justify-start gap-3">
              <Link href="/contact" className="px-5 py-2.5 rounded-lg bg-orange-500 text-white text-sm font-medium hover:bg-orange-600 transition">
                Contactar
              </Link>
              <a
                href="/Jaume_Ruiz_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg border text-sm font-medium hover:bg-gray-50 transition"
              >
                Descargar PDF
              </a>
              <Link href="/" className="px-5 py-2.5 rounded-lg border text-sm font-medium hover:bg-gray-50 transition">
                Inicio
              </Link>
            </div>
          </motion.div>

          {/* LANG SWITCHER */}
          <motion.div variants={fadeUp} className="flex gap-2 self-start md:self-center">
            {(["es", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                  lang === l ? "bg-orange-500 text-white" : "border hover:bg-gray-50"
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </motion.div>
        </motion.div>

        {/* SUMMARY */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="p-5 rounded-xl bg-orange-50 border border-orange-100 text-gray-700 mb-12"
        >
          {t.summary}
        </motion.div>

        <motion.div
          initial="hidden" animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="space-y-12"
        >

          {/* PROFILE */}
          <motion.section variants={fadeUp}>
            <h2 className="text-lg font-semibold mb-4 text-orange-600 uppercase tracking-wide text-sm">
              {t.profileTitle}
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {t.profilePoints.map((p, i) => (
                <div key={i} className="flex items-start gap-2 p-3 rounded-lg bg-white border text-sm">
                  <span className="text-orange-400 mt-0.5">✓</span>
                  <span>{p}</span>
                </div>
              ))}
            </div>
          </motion.section>

          {/* EXPERIENCE */}
          <motion.section variants={fadeUp}>
            <h2 className="text-lg font-semibold mb-4 text-orange-600 uppercase tracking-wide text-sm">
              {t.experienceTitle}
            </h2>
            <div className="rounded-xl border bg-white p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-4">
                <div>
                  <h3 className="font-semibold text-base">{t.experience.role}</h3>
                  <p className="text-sm text-gray-500">{t.experience.company}</p>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-orange-100 text-orange-700 self-start sm:self-center">
                  {t.experience.date}
                </span>
              </div>

              <div className="text-sm">
                <div>
                  <h4 className="font-medium mb-2">{lang === "es" ? "Responsabilidades" : "Responsibilities"}</h4>
                  <ul className="space-y-1 text-gray-600">
                    {t.experience.responsibilities.map((r, i) => (
                      <li key={i} className="flex gap-2"><span className="text-orange-400">→</span>{r}</li>
                    ))}
                  </ul>
                </div>

              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {t.experience.tools.map((tool, i) => (
                  <span key={i} className="px-3 py-1 border rounded-full text-xs bg-gray-50">{tool}</span>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section variants={fadeUp}>
            <div className="rounded-xl border bg-white p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div><h3 className="font-semibold">{lang === "es" ? "Técnico Polivalente Industrial" : "Industrial Multi-skilled Technician"}</h3>
                <p className="text-sm text-gray-500">ContourGlobal - {lang === "es" ? "Planta Termosolar Alvarado" : "Alvarado Solar Power Plant"}</p></div>
                <span className="text-xs px-3 py-1 rounded-full bg-orange-100 text-orange-700">{lang === "es" ? "Mayo 2025 - Marzo 2026" : "May 2025 - March 2026"}</span>
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                {(lang === "es" ? ["Monitorización de variables de proceso mediante SCADA/HMI.", "Análisis de incidencias operativas y soporte en optimización de procesos.", "Seguimiento de métricas industriales: eficiencia, disponibilidad y rendimiento."] : ["Monitored process variables using SCADA/HMI.", "Analyzed operational incidents and supported process optimization.", "Tracked industrial metrics: efficiency, availability and performance."]).map(point => <li key={point}>→ {point}</li>)}
              </ul>
            </div>
          </motion.section>

          {/* SKILLS */}
          <motion.section variants={fadeUp}>
            <h2 className="text-lg font-semibold mb-4 text-orange-600 uppercase tracking-wide text-sm">
              {t.skillsTitle}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(t.skillsGroups).map(([category, skills]) => (
                <div key={category} className="rounded-xl border bg-white p-4 shadow-sm">
                  <h3 className="text-xs font-semibold text-orange-600 uppercase mb-3">{category}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {skills.map((s, i) => (
                      <span key={i} className="px-2 py-1 bg-orange-50 border border-orange-100 rounded text-xs">{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* PROJECTS */}
          <motion.section variants={fadeUp}>
            <h2 className="text-lg font-semibold mb-4 text-orange-600 uppercase tracking-wide text-sm">
              {t.projectsTitle}
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {t.projects.map((p, i) => (
                <a
                  key={i}
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border bg-white p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
                >
                  <h3 className="font-semibold text-sm mb-2">{p.name}</h3>
                  <p className="text-xs text-gray-500 mb-3">{p.desc}</p>
                  <div className="flex flex-wrap gap-1">
                    {p.stack.map((s, j) => (
                      <span key={j} className="px-2 py-0.5 bg-orange-50 border border-orange-100 rounded text-xs">{s}</span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </motion.section>

          {/* EDUCATION */}
          <motion.section variants={fadeUp}>
            <h2 className="text-lg font-semibold mb-4 text-orange-600 uppercase tracking-wide text-sm">
              {t.educationTitle}
            </h2>
            <div className="space-y-4">
              {t.education.map((edu, i) => (
                <div key={i} className="rounded-xl border bg-white p-5 shadow-sm flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm">{edu.title}</h3>
                    <p className="text-xs text-gray-400 mt-0.5">{edu.place} · {edu.date}</p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {edu.details.map((d, j) => (
                        <span key={j} className="px-2 py-0.5 bg-gray-50 border rounded text-xs text-gray-600">{d}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* LANGUAGES */}
          <motion.section variants={fadeUp}>
            <h2 className="text-lg font-semibold mb-4 text-orange-600 uppercase tracking-wide text-sm">
              {t.languagesTitle}
            </h2>
            <div className="flex flex-wrap gap-3">
              {t.languages.map((l, i) => (
                <div key={i} className="px-4 py-2 rounded-lg border bg-white text-sm shadow-sm">
                  🌍 {l}
                </div>
              ))}
            </div>
          </motion.section>

        </motion.div>

        {/* BACK */}
        <div className="mt-16">
          <Link
            href="/"
            className="inline-block px-6 py-3 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition text-sm font-medium"
          >
            {t.back}
          </Link>
        </div>

      </div>
    </main>
  );
}


