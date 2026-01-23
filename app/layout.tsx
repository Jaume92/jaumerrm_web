import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Jaume Ruiz — Portfolio",
  description: "Desarrollador Fullstack, Automatización e IA aplicada",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>

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

        {children}

      </body>
    </html>
  );
}








