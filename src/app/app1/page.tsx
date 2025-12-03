import Link from "next/link";

export default function App1Home() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>App1 PWA</h1>
      <p>This is the App1 PWA, controlled by <strong>/app1/sw.js</strong> and scoped to <strong>/app1/</strong>.</p>
      <p>The browser should be running a service worker with the scope: {`http://localhost:3000/app1/`}</p>
      <nav>
        <h2>Navigation</h2>
        <ul>
          <li>
            <Link href="/">Back to Home</Link>
          </li>
          <li>
            <Link href="/app1/example-page">Go to nested page</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
