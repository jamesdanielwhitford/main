'use client';
import { useState } from 'react';

export const useApp1State = () => {
    const [count, setCount] = useState(0);
    const increment = () => setCount(c => c + 1);
    return { count, increment };
};
