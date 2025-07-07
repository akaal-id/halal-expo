import React from 'react';
import { useCountdown } from '../hooks/useCountdown';

const CountdownTimer = () => {
    const { days, hours, minutes, seconds } = useCountdown('2025-10-22T00:00:00');
    const items = { Days: days, Hours: hours, Minutes: minutes, Second: seconds };

    return (
        <div className="flex items-center justify-center space-x-3 sm:space-x-6">
            {Object.entries(items).map(([label, value], index) => (
                <React.Fragment key={label}>
                    <div className="text-center">
                        <p className="text-4xl sm:text-5xl font-light text-[#6b4e2b] tracking-wider">{value}</p>
                        <p className="text-xs sm:text-sm text-gray-800 font-semibold mt-1">{label}</p>
                    </div>
                    {index < Object.keys(items).length - 1 && (
                        <div className="h-16 w-px bg-[#BE9A64]/50"></div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

const PromoCountdown = () => {
    return (
        <section className="bg-white py-12 md:py-16">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
                    <div className="text-center lg:text-left">
                        <h2 className="text-3xl text-gray-800 leading-snug">
                            Get ready to <span className="text-4xl font-semibold text-[#BE9A64]">join the largest B2B</span>
                            <br />
                            <span className="text-4xl font-semibold text-[#BE9A64]">Halal Exhibition</span> in the country
                        </h2>
                    </div>
                    <div>
                        <CountdownTimer />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PromoCountdown;