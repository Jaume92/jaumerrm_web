import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Jaume Ruiz · Ingeniero de IA y Automatización",
  description:
    "Ingeniero de Inteligencia Artificial especializado en automatización, visión artificial y desarrollo backend. Soluciones de IA aplicadas a negocio y sistemas productivos.",
  keywords: [
    "Inteligencia Artificial",
    "Automatización",
    "Visión Artificial",
    "FastAPI",
    "Machine Learning",
    "Desarrollo Backend",
    "Ingeniero IA",
    "IA aplicada a negocio",
  ],
  openGraph: {
    title: "Jaume Ruiz · Ingeniero de IA y Automatización",
    description:
      "Soluciones de IA, visión artificial y automatización para entornos productivos y empresas.",
    url: "https://jaumerrm.dev",
    siteName: "Jaume Ruiz — Portfolio IA",
    images: [
      {
        url: "/portada.png",
        width: 1200,
        height: 630,
        alt: "Jaume Ruiz — Portfolio IA",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaume Ruiz · Ingeniero de IA",
    description:
      "Automatización, visión artificial y soluciones backend productivas.",
    images: ["/portada.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        {/* Datos estructurados para SEO PRO */}
        <Script
          id="schema-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
          {
            "@context": "http://schema.org",
            "@type": "Person",
            "name": "Jaume Ruiz",
            "jobTitle": "Ingeniero de IA",
            "url": "https://jaumerrm.dev",
            "sameAs": [
              "https://github.com/Jaume92",
              "https://www.linkedin.com/in/jaume-ruiz-ruano"
            ]
          }
        `,
          }}
        />

        {/* CLARITY */}
        <Script
          id="clarity-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "v5uz6y7t6t");
            `,
          }}
        />
      </head>

      <body>{children}</body>
    </html>
  );
}