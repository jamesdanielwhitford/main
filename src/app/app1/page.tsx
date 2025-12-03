import React from 'react';
import App1Welcome from './components/App1Welcome';
import Link from 'next/link';

export default function App1Page() {
  return (
    <div>
      <h2>Welcome to App 1</h2>
      <p>This is the main page for the App 1 PWA. It uses its own components, hooks, and utilities, all scoped to this app.</p>
      <App1Welcome />
      <div style={{marginTop: '2rem'}}>
          <Link href="/app1/example-page" style={{ textDecoration: 'underline' }}>
            Go to the example page inside App 1 &rarr;
          </Link>
      </div>
    </div>
  );
}