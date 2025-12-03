'use client';
import React from 'react';
import { useApp2State } from '../hooks/useApp2State';
import { getAppInfo } from '../lib/getAppInfo';

const App2Welcome = () => {
    const { message, updateMessage } = useApp2State();
    const appInfo = getAppInfo();

    return (
        <div style={{ border: '1px dashed green', padding: '1rem', marginTop: '1.5rem', borderRadius: '8px' }}>
            <h3>This is a component specific to {appInfo.name}!</h3>
            <p>It has its own state and logic, demonstrating isolation from App 1.</p>
            <p><strong>Current message:</strong> {message}</p>
            <button onClick={updateMessage}>Update Message</button>
        </div>
    );
};

export default App2Welcome;
