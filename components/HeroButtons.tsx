"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const options = [
  {
    label: "Ver proyectos",
    desc: "Sistemas de IA reales",
    href: "/projects",
    bg: "from-orange-500 to-orange-600",
    text: "text-white",
    border: "",
  },
  {
    label: "Ver CV",
    desc: "Experiencia y formación",
    href: "/cv",
    bg: "from-white to-orange-50",
    text: "text-gray-900",
    border: "border border-orange-200",
  },
  {
    label: "Contactar",
    desc: "Hablemos de tu proyecto",
    href: "/contact",
    bg: "from-white to-gray-50",
    text: "text-gray-900",
    border: "border border-gray-200",
  },
];

export function HeroButtons() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="mt-6 relative w-full flex justify-center md:justify-start">

      <motion.button
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.96 }}
        className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold shadow-lg shadow-orange-200 hover:shadow-xl hover:shadow-orange-300 hover:-translate-y-0.5 transition-all duration-200 text-sm"
      >
        <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.2 }}>
          ✦
        </motion.span>

        {open ? "Cerrar menú" : "¿Por dónde empezamos?"}

        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          ↓
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -8 }}
            transition={{ duration: 0.18 }}
            className="absolute top-full left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 mt-4 w-64 rounded-2xl border bg-white/95 backdrop-blur-xl shadow-2xl shadow-orange-100 p-2 z-50"
          >
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 md:left-6 md:translate-x-0 w-4 h-4 bg-white border-l border-t rotate-45 rounded-sm" />

            {options.map((opt, i) => (
              <motion.div
                key={opt.label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.2 }}
              >
                <Link
                  href={opt.href}
                  onClick={() => setOpen(false)}
                  className={`flex flex-col px-4 py-3.5 rounded-xl bg-gradient-to-r ${opt.bg} ${opt.text} ${opt.border} hover:-translate-y-0.5 hover:shadow-md transition-all duration-150 mb-1.5 last:mb-0`}
                >
                  <span className="font-semibold text-sm">{opt.label}</span>
                  <span className={`text-xs mt-0.5 ${opt.text === "text-white" ? "text-orange-100" : "text-gray-400"}`}>
                    {opt.desc}
                  </span>
                </Link>
              </motion.div>
            ))}

            <div className="mt-2 pt-2 border-t px-2 pb-1">
              <p className="text-xs text-gray-400 text-center">
                Disponible para nuevas oportunidades ✓
              </p>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}