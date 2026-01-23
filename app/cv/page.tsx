"use client";

import { useState } from "react";
import Link from "next/link";

export default function CVPage() {
  const [lang, setLang] = useState<"es" | "en">("es");

  const content = {
    es: {
      title: "Currículum",
      role: "Ingeniero en Inteligencia Artificial · Automatización · Sistemas Productivos",
      availability: "Disponible para nuevas oportunidades",

      summary:
        "Perfil técnico con sólida base en Python, Data Science e Inteligencia Artificial, combinado con experiencia industrial real. Especializado en crear soluciones productivas, automatizar procesos y desarrollar sistemas web y backend orientados a negocio.",

      profileTitle: "Perfil Profesional",

      profilePoints: [
        "Experiencia práctica combinando software y entornos industriales.",
        "Orientación a resultados, automatización y optimización de procesos.",
        "Capacidad para aprender rápido y adaptarme a entornos técnicos exigentes.",
        "Mentalidad de producto: construir soluciones útiles, no solo código."
      ],

      experienceTitle: "Experiencia Profesional",

      experience: {
        company: "ContourGlobal — Planta Termosolar Alvarado",
        role: "Técnico Polivalente Industrial",
        date: "2025 — Actualidad",
        responsibilities: [
          "Supervisión de procesos industriales en bloque de potencia y campo solar mediante SCADA / HMI.",
          "Monitorización continua de variables críticas (temperatura, presión, caudal).",
          "Apoyo en mantenimiento preventivo y correctivo de equipos electromecánicos.",
          "Gestión de incidencias técnicas en coordinación con equipos de operación.",
          "Aplicación estricta de protocolos de seguridad industrial."
        ],
        achievements: [
          "Mejora de la estabilidad operativa mediante detección temprana de anomalías.",
          "Reducción de tiempos de respuesta ante incidencias técnicas.",
          "Participación activa en optimización de eficiencia energética."
        ],
        tools: ["SCADA / HMI", "Sistemas industriales", "Linux", "Protocolos de seguridad"]
      },

      educationTitle: "Formación Académica",

      education: [
        {
          title: "Máster en Data Science e Inteligencia Artificial",
          place: "Núclio School — Barcelona",
          date: "2023 — 2024",
          details: [
            "Machine Learning y Deep Learning",
            "Modelado predictivo",
            "Análisis de datos avanzado",
            "Visualización con Power BI"
          ]
        },
        {
          title: "Grado Superior en Fabricación Mecánica",
          place: "Salesians Sarrià — Barcelona",
          date: "2012 — 2014",
          details: [
            "Procesos industriales",
            "Sistemas mecánicos",
            "Interpretación de planos técnicos"
          ]
        }
      ],

      skillsTitle: "Habilidades Técnicas",

      skillsGroups: {
        backend: ["Python", "FastAPI", "SQL", "APIs REST"],
        frontend: ["Next.js", "React", "HTML", "CSS", "JavaScript"],
        automation: ["n8n", "Automatización de procesos", "Integración de APIs"],
        ai: ["Machine Learning", "Computer Vision", "YOLO", "RAG"],
        systems: ["Linux", "Git", "Despliegues locales"]
      },

      projectsTitle: "Proyectos Destacados",

      projects: [
        {
          name: "Pollería App — Sistema de pedidos",
          desc: "Web app para gestión de pedidos en tiempo real con backend FastAPI y frontend responsive."
        },
        {
          name: "Detección de incendios con visión artificial",
          desc: "Sistema basado en YOLO para detección temprana de humo y fuego."
        },
        {
          name: "Catálogo web industrial",
          desc: "Landing comercial optimizada para captación de leads vía WhatsApp."
        }
      ],

      languagesTitle: "Idiomas",

      languages: [
        "Español — Nativo",
        "Catalán — Nativo",
        "Inglés — Nivel básico/intermedio (A2)"
      ],

      back: "← Volver al inicio"
    },

    en: {
      title: "Resume",
      role: "AI Engineer · Automation · Production Systems",
      availability: "Open to new opportunities",

      summary:
        "Technical profile with strong background in Python, Data Science and Artificial Intelligence combined with real industrial experience. Focused on building production-ready systems and business automation.",

      profileTitle: "Professional Profile",

      profilePoints: [
        "Hands-on experience combining software and industrial environments.",
        "Strong focus on automation and process optimization.",
        "Fast learner with strong technical adaptability.",
        "Product-oriented mindset."
      ],

      experienceTitle: "Professional Experience",

      experience: {
        company: "ContourGlobal — Alvarado Solar Power Plant",
        role: "Industrial Multi-skilled Technician",
        date: "2025 — Present",
        responsibilities: [
          "Supervision of industrial processes using SCADA / HMI.",
          "Monitoring of critical variables (temperature, pressure, flow).",
          "Preventive and corrective maintenance support.",
          "Technical incident management.",
          "Industrial safety compliance."
        ],
        achievements: [
          "Improved operational stability through early anomaly detection.",
          "Reduced response time to technical incidents.",
          "Contribution to energy efficiency optimization."
        ],
        tools: ["SCADA / HMI", "Industrial systems", "Linux", "Safety protocols"]
      },

      educationTitle: "Education",

      education: [
        {
          title: "Master in Data Science and Artificial Intelligence",
          place: "Núclio School — Barcelona",
          date: "2023 — 2024",
          details: [
            "Machine Learning",
            "Deep Learning",
            "Advanced data analysis",
            "Power BI visualization"
          ]
        },
        {
          title: "Higher Technical Degree in Mechanical Manufacturing",
          place: "Salesians Sarrià — Barcelona",
          date: "2012 — 2014",
          details: [
            "Industrial processes",
            "Mechanical systems",
            "Technical drawings"
          ]
        }
      ],

      skillsTitle: "Technical Skills",

      skillsGroups: {
        backend: ["Python", "FastAPI", "SQL", "REST APIs"],
        frontend: ["Next.js", "React", "HTML", "CSS", "JavaScript"],
        automation: ["n8n", "Process automation", "API integrations"],
        ai: ["Machine Learning", "Computer Vision", "YOLO", "RAG"],
        systems: ["Linux", "Git", "Local deployments"]
      },

      projectsTitle: "Highlighted Projects",

      projects: [
        {
          name: "Pollería App — Ordering system",
          desc: "Real-time ordering web app with FastAPI backend."
        },
        {
          name: "Fire detection system",
          desc: "YOLO-based early fire detection system."
        },
        {
          name: "Industrial product catalog",
          desc: "Commercial landing page optimized for lead generation."
        }
      ],

      languagesTitle: "Languages",

      languages: [
        "Spanish — Native",
        "Catalan — Native",
        "English — Basic/Intermediate (A2)"
      ],

      back: "← Back to home"
    }
  };

  const t = content[lang];

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-orange-50 to-white px-6 py-20 text-gray-900">

      <div className="max-w-5xl mx-auto">

        {/* HERO */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-14">

          {/* FOTO */}
          <div className="flex-shrink-0">
            <img
              src="/foto.jpg"
              alt="Jaume Ruiz"
              className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-4 border-orange-200 shadow-md"
            />
          </div>

          {/* INFO */}
          <div className="flex-1 text-center md:text-left">

            <span className="inline-block mb-2 px-3 py-1 text-xs rounded-full bg-orange-100 text-orange-700">
              {t.availability}
            </span>

            <h1 className="text-3xl md:text-4xl font-bold">
              {t.title}
            </h1>

            <p className="mt-2 text-gray-600">
              {t.role}
            </p>
            <p className="mt-1 text-sm text-gray-500">
                        📍 Zafra (Badajoz), España
                            </p>


            {/* BOTONES */}
            <div className="mt-5 flex flex-wrap justify-center md:justify-start gap-3">

              <Link
                href="/"
                className="px-6 py-3 rounded-lg border text-sm font-medium hover:bg-gray-100 active:scale-95 transition"
              >
                Menú
              </Link>

              <Link
                href="/contact"
                className="px-6 py-3 rounded-lg bg-orange-500 text-white text-sm font-medium hover:bg-orange-600 active:scale-95 transition"
              >
                Contactar
              </Link>

              <a
                href="/Jaume_Ruiz_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg border text-sm font-medium hover:bg-gray-100 active:scale-95 transition"
              >
                Descargar CV PDF
              </a>

            </div>

          </div>

          {/* LANGUAGE */}
          <div className="flex gap-2">
            <button
              onClick={() => setLang("es")}
              className={`px-4 py-2 rounded-lg text-sm ${
                lang === "es" ? "bg-orange-500 text-white" : "border"
              }`}
            >
              ES
            </button>

            <button
              onClick={() => setLang("en")}
              className={`px-4 py-2 rounded-lg text-sm ${
                lang === "en" ? "bg-orange-500 text-white" : "border"
              }`}
            >
              EN
            </button>
          </div>

        </div>

        {/* SUMMARY */}
        <p className="max-w-3xl mb-10 text-gray-700">{t.summary}</p>

        {/* PROFILE */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">{t.profileTitle}</h2>
          <ul className="space-y-2 text-sm">
            {t.profilePoints.map((p, i) => (
              <li key={i}>✔ {p}</li>
            ))}
          </ul>
        </section>

        {/* EXPERIENCE */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">{t.experienceTitle}</h2>

          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h3 className="font-semibold">{t.experience.role}</h3>
            <p className="text-sm text-gray-500">
              {t.experience.company} · {t.experience.date}
            </p>

            <h4 className="mt-4 font-medium">Responsabilidades</h4>
            <ul className="mt-2 space-y-1 text-sm">
              {t.experience.responsibilities.map((r, i) => (
                <li key={i}>• {r}</li>
              ))}
            </ul>

            <h4 className="mt-4 font-medium">Logros</h4>
            <ul className="mt-2 space-y-1 text-sm">
              {t.experience.achievements.map((a, i) => (
                <li key={i}>★ {a}</li>
              ))}
            </ul>

            <h4 className="mt-4 font-medium">Herramientas</h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {t.experience.tools.map((tool, i) => (
                <span key={i} className="px-3 py-1 border rounded text-xs">
                  {tool}
                </span>
              ))}
            </div>

          </div>
        </section>

        {/* EDUCATION */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">{t.educationTitle}</h2>

          <div className="space-y-4">
            {t.education.map((edu, i) => (
              <div key={i} className="rounded-xl border bg-white p-5 shadow-sm">
                <h3 className="font-semibold">{edu.title}</h3>
                <p className="text-sm text-gray-500">
                  {edu.place} · {edu.date}
                </p>

                <ul className="mt-2 text-sm list-disc list-inside">
                  {edu.details.map((d, j) => (
                    <li key={j}>{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">{t.skillsTitle}</h2>

          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div><b>Backend</b><p>{t.skillsGroups.backend.join(" · ")}</p></div>
            <div><b>Frontend</b><p>{t.skillsGroups.frontend.join(" · ")}</p></div>
            <div><b>Automatización</b><p>{t.skillsGroups.automation.join(" · ")}</p></div>
            <div><b>IA</b><p>{t.skillsGroups.ai.join(" · ")}</p></div>
            <div><b>Sistemas</b><p>{t.skillsGroups.systems.join(" · ")}</p></div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">{t.projectsTitle}</h2>

          <div className="space-y-4">
            {t.projects.map((p, i) => (
              <div key={i} className="rounded-xl border bg-white p-5 shadow-sm">
                <h3 className="font-semibold">{p.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* LANGUAGES */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">{t.languagesTitle}</h2>

          <ul className="text-sm space-y-1">
            {t.languages.map((l, i) => (
              <li key={i}>🌍 {l}</li>
            ))}
          </ul>
        </section>

        {/* BACK */}
        <Link
          href="/"
          className="inline-block mt-8 px-6 py-3 rounded-lg bg-orange-500 text-white hover:bg-orange-600 active:scale-95 transition"
        >
          {t.back}
        </Link>

      </div>

    </main>
  );
}
