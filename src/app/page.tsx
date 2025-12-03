import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Home PWA</h1>
      <p>This is the root PWA, controlled by <strong>/sw.js</strong> and scoped to <strong>/</strong>.</p>
      <p>The browser should be running a service worker with the scope: {`http://localhost:3000/`}</p>
      <nav>
        <h2>Navigation</h2>
        <ul>
          <li>
            <Link href="/app1">Go to App1 PWA</Link>
          </li>
          <li>
            <Link href="/app2">Go to App2 PWA</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}