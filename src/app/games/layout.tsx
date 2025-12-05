import type { Metadata } from "next";
import Script from "next/script";
import AppNav from "./components/AppNav";

export const metadata: Metadata = {
  title: "App2 PWA",
  description: "App2 PWA",
  manifest: "/games/manifest.webmanifest",
};

export default function App2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AppNav />
      <div style={{ padding: '2rem' }}>
        {children}
      </div>
      <Script id="sw-registration-app2" strategy="afterInteractive">
        {`
          if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/games/sw.js', { scope: '/games/' })
              .then(registration => console.log('App2 SW registered with scope: ', registration.scope))
              .catch(error => console.log('App2 SW registration failed: ', error));
          }
        `}
      </Script>
    </>
  );
}