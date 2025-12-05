'use client';
import { useState } from 'react';

export const useApp2State = () => {
    const [message, setMessage] = useState('Hello from App 2');
    const updateMessage = () => setMessage('State updated at ' + new Date().toLocaleTimeString());
    return { message, updateMessage };
};
