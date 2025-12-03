'use client';
import React from 'react';
import { useDate } from '../hooks/useDate';

const Footer = () => {
  const { currentDate } = useDate();
  return (
    <footer style={{ padding: '1rem', borderTop: '1px solid #ddd', marginTop: 'auto', backgroundColor: '#fafafa' }}>
      <p style={{ margin: 0, textAlign: 'center' }}>&copy; {currentDate.getFullYear()} Multi-PWA Demo</p>
    </footer>
  );
};

export default Footer;
