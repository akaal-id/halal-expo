import React from 'react';
import { handleScrollTo } from '../utils/scroll';

const InfoBar = () => (
    <div className="max-w-6xl mx-auto px-6">
        <div className="bg-gradient-to-r from-[#BE9A64] to-[#E3C98C] rounded-2xl shadow-lg md:-mt-12 relative z-20 flex flex-col md:flex-row items-center justify-evenly py-4 md:py-5 px-6">
            <a href="#registration" onClick={(e) => handleScrollTo(e, '#registration')} className="font-regular text-base md:text-lg text-white hover:underline whitespace-nowrap py-3 md:py-0">
                &larr; Register as Exhibitor
            </a>

            <div className="w-4/5 h-px bg-white/30 my-3 md:hidden"></div>
            <div className="hidden md:block h-16 w-px bg-white/30"></div>

            <div className="text-center font-regular text-sm md:text-base text-white/90 py-3 md:py-0">
                <a href="https://www.google.com/maps/search/?api=1&query=Indonesia+Convention+Exhibition+(ICE)+BSD+City" target="_blank" rel="noopener noreferrer" className="hover:underline block md:inline">
                    @ICE BSD, Indonesia
                </a>
                <span className="mx-2 md:mx-4 text-white/50 hidden md:inline">|</span>
                <span className="block md:inline whitespace-nowrap mt-1 md:mt-0">October, 5th-9th 2025</span>
            </div>

            <div className="w-4/5 h-px bg-white/30 my-3 md:hidden"></div>
            <div className="hidden md:block h-16 w-px bg-white/30"></div>

            <a href="#" className="font-regular text-base md:text-lg text-white hover:underline whitespace-nowrap py-3 md:py-0">
                Register as Visitor &rarr;
            </a>
        </div>
    </div>
);

export default InfoBar;