import Link from "next/link";

export default function App2ExamplePage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>App2 - Example Page</h1>
      <p>This page is part of the App2 PWA.</p>
      <p>It is controlled by the service worker at <strong>/app2/sw.js</strong>.</p>
      <nav>
        <h2>Navigation</h2>
        <ul>
          <li>
            <Link href="/app2">Back to App2 Home</Link>
          </li>
          <li>
            <Link href="/">Back to Root Home</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
