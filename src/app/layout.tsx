import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "MetricFox - IT Personalvermittlung Deutschland",
  description:
    "Verbinden Sie Top IT-Talente mit führenden Unternehmen. Professionelle Personalvermittlung für Entwickler, Ingenieure und Tech-Experten in Deutschland."
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" data-oid="b1jifow" suppressHydrationWarning>
              <head>
          <link rel="icon" href="/images/favicon.png"/>
        </head>
      <body className="antialiased min-h-screen flex flex-col" data-oid="hqec2:a">
        <Navigation data-oid="aoeky0o" />
        <main className="flex-1" data-oid="a2g:yui">
          {children}
        </main>
        <Footer data-oid="27ova8p" />
        <Script
          type="module"
          strategy="afterInteractive"
          src="https://cdn.jsdelivr.net/gh/onlook-dev/onlook@main/apps/web/client/public/onlook-preload-script.js"
          data-oid="zxbuq9a"
        />
      </body>
    </html>
  );
}
