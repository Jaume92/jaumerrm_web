import "./globals.css";
import Link from "next/link";
import Image from "next/image";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="text-gray-900">

        {/* NAVBAR GLOBAL */}
        <header className="sticky top-0 z-50 px-6 py-4 bg-gradient-to-br from-orange-50 via-white to-orange-100 backdrop-blur-xl bg-opacity-80 border-b border-orange-200 shadow-md">





          <nav className="max-w-5xl mx-auto flex items-center justify-between">

            {/* LOGO */}
            <Link href="/" className="flex items-center gap-4">
              <Image
                src="/logo_jrrm.png"
                alt="JRRM Logo"
                width={55}
                height={55}
              />
            </Link>

            {/* LINKS */}
            <div className="flex items-center gap-5 text-sm font-medium text-black">

              <Link href="/projects" className="hover:text-orange-600 transition">
                Proyectos
              </Link>

              <Link href="/dam" className="hover:text-orange-600 transition">
                DAM
              </Link>

              <Link href="/contact" className="hover:text-orange-600 transition">
                Contacto
              </Link>

              {/* DESCARGAR CV */}
              <a
                href="/Jaume_Ruiz_CV.pdf"
                download
                className="px-4 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition"
              >
                Descargar CV
              </a>

            </div>

          </nav>
        </header>

        {/* CONTENIDO */}
        {children}

      </body>
    </html>
  );
}
