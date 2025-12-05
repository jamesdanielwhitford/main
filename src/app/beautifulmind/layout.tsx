import type { Metadata } from "next";
import Script from "next/script";
import AppNav from "./components/AppNav";

export const metadata: Metadata = {
  title: "App1 PWA",
  description: "App1 PWA",
  manifest: "/app1/manifest.webmanifest",
};

export default function App1Layout({
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
      <Script id="sw-registration-app1" strategy="afterInteractive">
        {`
          if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/app1/sw.js', { scope: '/app1/' })
              .then(registration => console.log('App1 SW registered with scope: ', registration.scope))
              .catch(error => console.log('App1 SW registration failed: ', error));
          }
        `}
      </Script>
    </>
  );
}