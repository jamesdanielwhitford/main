import Link from "next/link";

export default function App1ExamplePage() {
  return (
    <div>
      <h1>App1 - Example Page</h1>
      <p>This page is part of the App1 PWA.</p>
      <p>It is controlled by the service worker at <strong>/app1/sw.js</strong> and shares the same layout as the rest of App 1.</p>
    </div>
  );
}