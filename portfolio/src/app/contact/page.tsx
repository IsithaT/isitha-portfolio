"use client";

import React, { useState, useEffect } from 'react'
import NavBar from '@/components/NavBar'

const AURA_KEY = 'rav_aura_value';

const RavAura = () => {
    const [aura, setAura] = useState<number>(-5);

    // Load saved value from localStorage on mount
    useEffect(() => {
        const saved = localStorage.getItem(AURA_KEY);
        if (saved !== null) {
            setAura(Number(saved));
        }
    }, []);

    // Save value to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem(AURA_KEY, aura.toString());
    }, [aura]);

    const handleDecrement = () => {
        setAura(aura - 1);
    };

    return (
        <div className="flex flex-col h-screen w-full bg-black text-white">
            <NavBar />
            <div className="flex flex-col items-center justify-center h-full">
                <h1 className="text-4xl font-bold mb-6">Rav's Aura Tracker</h1>
                <div className="bg-red-900 p-6 rounded-2xl shadow-xl flex flex-col items-center">
                    <p className="text-xl font-mono">Aura Level:</p>
                    <p className="text-5xl font-bold text-red-300 mt-2">{aura}</p>
                    <button
                        className="mt-6 px-6 py-2 bg-red-700 hover:bg-red-800 rounded-lg text-white font-bold text-lg transition"
                        onClick={handleDecrement}
                    >
                        Decrease Aura
                    </button>
                </div>
                <p className="mt-10 text-sm italic opacity-70">
                    This aura reading is permanent. Please do not attempt to intervene.
                </p>
            </div>
        </div>
    );
}

export default RavAura;