import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

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
        <Script id="sw-registration-root" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator) {
              // This registration is for the root scope.
              // More specific service workers for /app1/ and /app2/ will take precedence for their respective paths.
              navigator.serviceWorker.register('/sw.js', { scope: '/' })
                .then(reg => console.log('Root SW registered with scope: ', reg.scope))
                .catch(err => console.log('Root SW registration failed: ', err));
            }
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}