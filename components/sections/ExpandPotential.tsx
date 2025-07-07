import React from 'react';
import { handleScrollTo } from '../../utils/scroll';
import { ChevronDownCircleIcon } from '../icons';

const ExpandPotential = () => (
    <section className="bg-gradient-to-b from-[#BC9963] to-[#59482F] pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-6 text-white">

            {/* Mobile View */}
            <div className="md:hidden flex flex-col items-center text-center">
                <div className="group aspect-square w-full overflow-hidden rounded-lg">
                    <img 
                        src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=800&auto=format&fit=crop&ar=1:1" 
                        alt="People networking at a business exhibition" 
                        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                </div>

                <h2 className="text-4xl font-semibold text-left leading-tight mt-8" style={{ lineHeight: '90%' }}>
                    EXPAND YOUR<br/>
                    HALAL MARKET POTENTIAL AT <span className="text-5xl text-[#FCEF99]">HALAL EXPO INDONESIA</span>
                </h2>

                <div className="mt-8 grid grid-cols-2 gap-x-4 text-left font-light text-white/90">
                    <div className="space-y-6">
                        <p>
                            Running a business in today’s world means looking for the right stage to be seen, heard, and trusted.
                        </p>
                        <p>
                            Whether you're a product maker, a local vendor, or a growing brand looking to go regional — Halal Expo Indonesia is your moment to shine.
                        </p>
                        <p>
                            This isn’t just an exhibition. It’s where decision-makers meet innovators. Where halal industry trends come alive.
                        </p>
                    </div>
                    <div className="space-y-6">
                        <p>
                            Where your product doesn’t just sit on a shelf, it tells a story, meets a new buyer, or catches the eye of a future partner.
                        </p>
                        <p>
                            Be where the market is growing. Be where your brand belongs, right in the heart of Southeast Asia's thriving halal industry.
                        </p>
                        <p>
                            Let’s open more doors. Let’s make halal global together.
                        </p>
                    </div>
                </div>
                
                <a 
                    href="#exposure" 
                    onClick={(e) => handleScrollTo(e, '#exposure')} 
                    className="mt-8 self-center inline-flex items-center gap-2 bg-gradient-to-r from-[#FEFFFF] to-[#F8E07A] text-gray-900 font-semibold py-3 px-6 rounded-xl text-base hover:opacity-90 transition-all shadow-lg cursor-pointer"
                >
                    <ChevronDownCircleIcon />
                    <span>MORE ABOUT US</span>
                </a>
            </div>

            {/* Desktop View */}
            <div className="hidden md:block">
                <h2 className="text-6xl font-semibold leading-tight" style={{ lineHeight: '90%' }}>
                    EXPAND YOUR<br/>
                    HALAL MARKET POTENTIAL AT<br/>
                    <span className="text-7xl text-[#FCEF99]">HALAL EXPO INDONESIA</span>
                </h2>

                <div className="mt-12 grid md:grid-cols-3 gap-8 items-start">
                    {/* Image Container with Hover Effect */}
                    <div className="group aspect-square w-full overflow-hidden rounded-lg">
                        <img 
                            src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=800&auto=format&fit=crop&ar=1:1" 
                            alt="People networking at a business exhibition" 
                            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                        />
                    </div>

                    {/* Text Column 1 */}
                    <div className="space-y-6 font-light text-white/90">
                        <p>
                            Running a business in today’s world means looking for the right stage to be seen, heard, and trusted.
                        </p>
                        <p>
                            Whether you're a product maker, a local vendor, or a growing brand looking to go regional — Halal Expo Indonesia is your moment to shine.
                        </p>
                        <p>
                            This isn’t just an exhibition. It’s where decision-makers meet innovators. Where halal industry trends come alive.
                        </p>
                    </div>

                    {/* Text Column 2 */}
                    <div className="space-y-6 font-light text-white/90">
                        <p>
                            Where your product doesn’t just sit on a shelf, it tells a story, meets a new buyer, or catches the eye of a future partner.
                        </p>
                        <p>
                            Be where the market is growing. Be where your brand belongs, right in the heart of Southeast Asia's thriving halal industry.
                        </p>
                        <p>
                            Let’s open more doors. Let’s make halal global together.
                        </p>
                    </div>
                </div>
                
                <div className="mt-12 flex justify-center">
                     <a 
                        href="#exposure" 
                        onClick={(e) => handleScrollTo(e, '#exposure')} 
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FEFFFF] to-[#F8E07A] text-gray-900 font-semibold py-3 px-6 rounded-xl text-base hover:opacity-90 transition-all shadow-lg cursor-pointer"
                     >
                        <ChevronDownCircleIcon />
                        <span>MORE ABOUT US, HERE</span>
                    </a>
                </div>
            </div>
        </div>
    </section>
);

export default ExpandPotential;