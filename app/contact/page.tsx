"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const contacts = [
  {
    label: "Email",
    value: "jaumeni@gmail.com",
    href: "mailto:jaumeni@gmail.com",
    description: "Respondo en menos de 24h",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "jaume-ruiz-ruano-marcos",
    href: "https://linkedin.com/in/jaume-ruiz-ruano-marcos",
    description: "Perfil profesional y experiencia",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
        <path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM7.06 20.45H3.98V9h3.08v11.45zM5.52 7.43c-.99 0-1.78-.81-1.78-1.8 0-.99.79-1.8 1.78-1.8s1.79.81 1.79 1.8c0 .99-.8 1.8-1.79 1.8zm14.93 13.02h-3.08v-5.87c0-1.4-.03-3.2-1.95-3.2-1.96 0-2.25 1.52-2.25 3.1v5.98h-3.08V9h2.96v1.56h.04c.41-.78 1.42-1.6 2.92-1.6 3.13 0 3.7 2.06 3.7 4.74v6.75z"/>
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "Jaume92",
    href: "https://github.com/Jaume92",
    description: "Proyectos y código",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
        <path fillRule="evenodd" d="M12 .5C5.648.5.5 5.647.5 12a11.5 11.5 0 0 0 7.865 10.93c.575.105.785-.25.785-.558v-2.157c-3.2.695-3.875-1.542-3.875-1.542-.523-1.33-1.278-1.687-1.278-1.687-1.045-.714.08-.699.08-.699 1.158.082 1.767 1.19 1.767 1.19 1.028 1.764 2.695 1.255 3.35.96.105-.744.4-1.256.727-1.545-2.554-.29-5.238-1.277-5.238-5.68 0-1.256.448-2.283 1.183-3.086-.119-.29-.513-1.462.112-3.05 0 0 .966-.31 3.167 1.18a10.77 10.77 0 0 1 2.885-.39c.98.005 1.97.134 2.886.39 2.2-1.49 3.165-1.18 3.165-1.18.626 1.588.232 2.76.115 3.05.737.803 1.182 1.83 1.182 3.086 0 4.415-2.69 5.385-5.255 5.668.41.35.78 1.055.78 2.142v3.173c0 .31.208.67.79.558A11.504 11.504 0 0 0 23.5 12C23.5 5.647 18.353.5 12 .5Z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    label: "Teléfono",
    value: "+34 633 897 821",
    href: "tel:+34633897821",
    description: "Disponible de lunes a viernes",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0-1.243 1.007-2.25 2.25-2.25h2.379c.982 0 1.82.672 2.07 1.624l.52 1.955c.21.79-.107 1.63-.77 2.098l-1.18.84c-.398.284-.574.79-.425 1.255a12.035 12.035 0 006.67 6.67c.465.15.97-.027 1.255-.425l.84-1.18c.468-.663 1.308-.98 2.098-.77l1.955.52c.952.25 1.624 1.088 1.624 2.07V19.5c0 1.243-1.007 2.25-2.25 2.25h-1.5C9.273 21.75 2.25 14.727 2.25 6.75z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-orange-50 to-white px-6 py-20">
      <div className="max-w-3xl mx-auto">

        {/* NAV */}
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-orange-600 transition hover:text-orange-700 hover:translate-x-[-4px]"
          >
            ← Volver al inicio
          </Link>
        </div>

        {/* HEADER */}
        <motion.div initial="hidden" animate="show" variants={fadeUp} className="mb-12">
          <span className="inline-block mb-3 px-3 py-1 text-xs rounded-full bg-orange-100 text-orange-700">
            Disponible para nuevas oportunidades
          </span>
          <h1 className="text-4xl font-bold text-gray-900">Hablemos</h1>
          <p className="mt-3 text-gray-500 max-w-lg">
            Si tienes un proyecto, una propuesta o simplemente quieres hablar sobre IA aplicada — escríbeme.
          </p>
        </motion.div>

        {/* CARDS */}
        <motion.div
          className="grid gap-4 sm:grid-cols-2"
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        >
          {contacts.map((c) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              variants={fadeUp}
              className="group rounded-xl border bg-white p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex items-start gap-4"
            >
              <div className="p-2 rounded-lg bg-orange-50 text-orange-500 group-hover:bg-orange-100 transition">
                {c.icon}
              </div>
              <div>
                <div className="text-xs text-gray-400 mb-0.5">{c.description}</div>
                <div className="font-semibold text-gray-900">{c.label}</div>
                <div className="text-sm text-orange-600 mt-0.5">{c.value}</div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* MENSAJE FINAL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-12 p-5 rounded-xl bg-orange-50 border border-orange-100 text-sm text-orange-800"
        >
          Estoy en proceso de búsqueda activa.
        </motion.div>

      </div>
    </main>
  );
}