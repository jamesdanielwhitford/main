import Link from "next/link";

export default function App2Home() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>App2 PWA</h1>
      <p>This is the App2 PWA, controlled by <strong>/app2/sw.js</strong> and scoped to <strong>/app2/</strong>.</p>
      <p>The browser should be running a service worker with the scope: {`http://localhost:3000/app2/`}</p>
      <nav>
        <h2>Navigation</h2>
        <ul>
          <li>
            <Link href="/">Back to Home</Link>
          </li>
          <li>
            <Link href="/app2/example-page">Go to nested page</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
