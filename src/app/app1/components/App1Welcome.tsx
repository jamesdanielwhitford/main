'use client';
import React from 'react';
import { useApp1State } from '../hooks/useApp1State';
import { getAppInfo } from '../lib/getAppInfo';

const App1Welcome = () => {
    const { count, increment } = useApp1State();
    const appInfo = getAppInfo();

    return (
        <div style={{ border: '1px dashed blue', padding: '1rem', marginTop: '1.5rem', borderRadius: '8px' }}>
            <h3>This is a component specific to {appInfo.name}!</h3>
            <p>It has its own state, hooks, and lib functions, completely isolated from other apps.</p>
            <button onClick={increment}>You have clicked me {count} times</button>
        </div>
    );
};

export default App1Welcome;
