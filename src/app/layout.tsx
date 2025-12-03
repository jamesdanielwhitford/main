import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Root PWA",
  description: "Root PWA",
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main style={{ flex: '1', padding: '2rem' }}>
          {children}
        </main>
        <Footer />
        <Script id="sw-registration-root" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator) {
              navigator.serviceWorker.register('/sw.js', { scope: '/' })
                .then(reg => console.log('Root SW registered with scope: ', reg.scope))
                .catch(err => console.log('Root SW registration failed: ', err));
            }
          `}
        </Script>
      </body>
    </html>
  );
}
