import React from 'react';
import App2Welcome from './components/App2Welcome';
import Link from 'next/link';

export default function App2Page() {
  return (
    <div>
      <h2>Welcome to App 2</h2>
      <p>This is the main page for the App 2 PWA. It demonstrates a completely separate application structure from App 1.</p>
      <App2Welcome />
      <div style={{marginTop: '2rem'}}>
          <Link href="/games/example-page" style={{ textDecoration: 'underline' }}>
            Go to the example page inside App 2 &rarr;
          </Link>
      </div>
    </div>
  );
}