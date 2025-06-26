import React from 'react'
import NavBar from '@/components/NavBar'

const RavAura = () => {
    const aura = "gullible, additional -5 aura";

    return (
        <div className="flex flex-col h-screen w-full bg-black text-white">
            <NavBar />
            <div className="flex flex-col items-center justify-center h-full">
                <h1 className="text-4xl font-bold mb-6">Rav's Aura Tracker</h1>
                <div className="bg-red-900 p-6 rounded-2xl shadow-xl">
                    <p className="text-xl font-mono">Aura Level:</p>
                    <p className="text-5xl font-bold text-red-300 mt-2">{aura.toLocaleString()}</p>
                </div>
                <p className="mt-10 text-sm italic opacity-70">
                    This aura reading is permanent. Please do not attempt to intervene.
                </p>
            </div>
        </div>
    );
}

export default RavAura;