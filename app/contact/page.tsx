import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-orange-50 to-white px-6 py-20">

      <div className="max-w-4xl mx-auto">

        {/* TITULO + SUBTEXTO */}
        <h1 className="text-3xl font-bold mb-4 text-black">Contacto</h1>

        <p className="text-gray-700 max-w-xl mb-10">
          ¿Quieres hablar sobre proyectos, colaboración o propuestas de trabajo?
          Puedes contactarme directamente por cualquiera de estos canales.
        </p>

        {/* INFO DE CONTACTO */}
        <div className="grid gap-6 md:grid-cols-2">

          {/* EMAIL */}
          <div className="rounded-xl border bg-white shadow-sm p-6 hover:shadow-md transition">
            <h2 className="text-lg font-semibold text-black mb-1 flex items-center gap-2">
              {/* SVG EMAIL */}
              <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 512 512"
  className="w-5 h-5"
>
  <path
    fill="#f2f2f2"
    d="M467 392c0 22-18 40-40 40H85c-22 0-40-18-40-40V120c0-22 18-40 40-40h342c22 0 40 18 40 40v272z"
  />
  <path
    fill="#f14336"
    d="M256 299L45 120c6-20 23-34 40-34h342c17 0 34 14 40 34L256 299z"
  />
  <path
    fill="#d32e2a"
    d="M256 299L45 120v272c0 22 18 40 40 40h342c22 0 40-18 40-40V120L256 299z"
  />
  <path
    fill="#fff"
    d="M426 392H316V243L256 299l-60-56v149H86V120l170 155 170-155v272z"
  />
</svg>
              Email
            </h2>

            <a
              href="mailto:jaumeni@gmail.com"
              className="text-orange-600 hover:underline"
            >
              jaumeni@gmail.com
            </a>
          </div>

          {/* GITHUB */}
          <div className="rounded-xl border bg-white shadow-sm p-6 hover:shadow-md transition">
            <h2 className="text-lg font-semibold text-black mb-1 flex items-center gap-2">
              {/* SVG GITHUB */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-black-500"
              >
                <path
                  fillRule="evenodd"
                  d="M12 .5C5.648.5.5 5.647.5 12a11.5 11.5 0 0 0 7.865 10.93c.575.105.785-.25.785-.558v-2.157c-3.2.695-3.875-1.542-3.875-1.542-.523-1.33-1.278-1.687-1.278-1.687-1.045-.714.08-.699.08-.699 1.158.082 1.767 1.19 1.767 1.19 1.028 1.764 2.695 1.255 3.35.96.105-.744.4-1.256.727-1.545-2.554-.29-5.238-1.277-5.238-5.68 0-1.256.448-2.283 1.183-3.086-.119-.29-.513-1.462.112-3.05 0 0 .966-.31 3.167 1.18a10.77 10.77 0 0 1 2.885-.39c.98.005 1.97.134 2.886.39 2.2-1.49 3.165-1.18 3.165-1.18.626 1.588.232 2.76.115 3.05.737.803 1.182 1.83 1.182 3.086 0 4.415-2.69 5.385-5.255 5.668.41.35.78 1.055.78 2.142v3.173c0 .31.208.67.79.558A11.504 11.504 0 0 0 23.5 12C23.5 5.647 18.353.5 12 .5Z"
                  clipRule="evenodd"
                />
              </svg>
              GitHub
            </h2>

            <a
              href="https://github.com/Jaume92"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 hover:underline"
            >
              github.com/Jaume92
            </a>
          </div>

          {/* LINKEDIN */}
          <div className="rounded-xl border bg-white shadow-sm p-6 hover:shadow-md transition">
            <h2 className="text-lg font-semibold text-black mb-1 flex items-center gap-2">
              {/* SVG LINKEDIN */}
              <svg
                       xmlns="http://www.w3.org/2000/svg"
                          fill="#0A66C2"
                              viewBox="0 0 24 24"
                               className="w-5 h-5"
>
                        <path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM7.06 20.45H3.98V9h3.08v11.45zM5.52 7.43c-.99 0-1.78-.81-1.78-1.8 0-.99.79-1.8 1.78-1.8s1.79.81 1.79 1.8c0 .99-.8 1.8-1.79 1.8zm14.93 13.02h-3.08v-5.87c0-1.4-.03-3.2-1.95-3.2-1.96 0-2.25 1.52-2.25 3.1v5.98h-3.08V9h2.96v1.56h.04c.41-.78 1.42-1.6 2.92-1.6 3.13 0 3.7 2.06 3.7 4.74v6.75z"/>
                   </svg>
              LinkedIn
            </h2>

            <a
              href="https://linkedin.com/in/jaume-ruiz-ruano-marcos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 hover:underline"
            >
              linkedin.com/in/jaume-ruiz-ruano-marcos
            </a>
          </div>

          {/* TELÉFONO */}
          <div className="rounded-xl border bg-white shadow-sm p-6 hover:shadow-md transition">
            <h2 className="text-lg font-semibold text-black mb-1 flex items-center gap-2">
              {/* SVG PHONE */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-orange-500"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0-1.243 1.007-2.25 2.25-2.25h2.379c.982 0 1.82.672 2.07 1.624l.52 1.955c.21.79-.107 1.63-.77 2.098l-1.18.84c-.398.284-.574.79-.425 1.255a12.035 12.035 0 006.67 6.67c.465.15.97-.027 1.255-.425l.84-1.18c.468-.663 1.308-.98 2.098-.77l1.955.52c.952.25 1.624 1.088 1.624 2.07V19.5c0 1.243-1.007 2.25-2.25 2.25h-1.5C9.273 21.75 2.25 14.727 2.25 6.75z" />
              </svg>
              Teléfono
            </h2>

            <a
              href="tel:+34633897821"
              className="text-orange-600 hover:underline"
            >
              +34 633 897 821
            </a>
          </div>

        </div>

        {/* VOLVER AL INICIO */}
        <div className="mt-12">
          <Link
            href="/"
            className="inline-block px-6 py-3 rounded-lg bg-orange-500 text-white hover:bg-orange-600 active:scale-95 transition"
          >
            ← Volver al inicio
          </Link>
        </div>

      </div>

    </main>
  );
}