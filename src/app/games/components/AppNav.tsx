import React from 'react';
import Link from 'next/link';

const AppNav = () => {
  return (
    <nav style={{ padding: '1rem', background: '#f0f0f0', borderBottom: '1px solid #ddd' }}>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '1.5rem', margin: 0, padding: 0, alignItems: 'center' }}>
        <li><Link href="/games" style={{ fontWeight: 'bold' }}>App2 Home</Link></li>
        <li><Link href="/games/example-page">Example Page</Link></li>
        <li><Link href="/">Back to Root</Link></li>
      </ul>
    </nav>
  );
};

export default AppNav;
