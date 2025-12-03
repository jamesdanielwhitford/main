import Link from "next/link";

export default function App1ExamplePage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>App1 - Example Page</h1>
      <p>This page is part of the App1 PWA.</p>
      <p>It is controlled by the service worker at <strong>/app1/sw.js</strong>.</p>
      <nav>
        <h2>Navigation</h2>
        <ul>
          <li>
            <Link href="/app1">Back to App1 Home</Link>
          </li>
          <li>
            <Link href="/">Back to Root Home</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
