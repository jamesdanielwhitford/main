import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header style={{ padding: '1rem', borderBottom: '1px solid #ddd', backgroundColor: '#fafafa' }}>
      <Link href="/" style={{ textDecoration: 'none', color: 'inherit', fontWeight: 'bold', fontSize: '1.5rem' }}>
        Multi-PWA Demo
      </Link>
    </header>
  );
};

export default Header;
