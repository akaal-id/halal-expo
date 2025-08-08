import React from 'react';
import { handleScrollTo } from '../../utils/scroll';

const Exposure = () => (
    <section className="bg-gray-50 relative overflow-hidden">
        {/* Top Image */}
        <div className="w-full">
            <img 
                src="https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=1920&auto=format&fit=crop&h=480" 
                alt="Business conference hall" 
                className="w-full h-auto object-cover aspect-[16/4]"
            />
        </div>

        {/* Content Section */}
        <div className="py-24 relative">
            {/* Decorative elements from original */}
            <div className="absolute top-0 right-0 -mr-48 -mt-48 w-96 h-96 bg-gray-200/50 rounded-full"></div>
            <div className="absolute bottom-0 left-0 -ml-48 -mb-48 w-96 h-96 bg-gray-200/50 rounded-full"></div>
            
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <h2 className="text-6xl md:text-8xl font-semibold text-gray-800" style={{ lineHeight: '90%' }}>
                    EXPOSURE. <br/><span className="text-[#BE9A64]">CREDIBILITY.</span><br/> GROWTH.
                </h2>
                
                <div className="mt-16">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-6">About HEI</h3>
                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 text-gray-600 font-normal leading-relaxed">
                        <div className="space-y-6">
                            <p>
                                Halal Expo Indonesia (HEI) isn’t just the largest B2B halal exhibition in the country — it’s a place where business meets purpose.
                            </p>
                            <p>
                                HEI stands as real support for the government’s mission to grow Indonesia’s halal industry into a global powerhouse. But more than that, it’s a space where producers, brands, and businesses come together to explore new markets, create opportunities, and build meaningful connections.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <p>
                                Whether you’re a local entrepreneur or an international brand, HEI helps you tap into the momentum of a fast-growing halal economy. Through business matchmaking, international exposure, and collaboration across industries, this event opens doors to real partnerships and long-term growth.
                            </p>
                            <p>
                                Together with the government, we’re building a future where Indonesia isn’t just part of the global halal conversation — we’re leading it.
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="mt-12 flex flex-wrap gap-4">
                    <a href="#registration" onClick={(e) => handleScrollTo(e, '#registration')} className="bg-gradient-to-r from-[#FEFFFF] to-[#F8E07A] text-gray-800 font-semibold py-3 px-6 rounded-lg text-base hover:opacity-90 transition-all shadow-lg uppercase tracking-wider">
                        Register as Exhibitor
                    </a>
                    <a href="#" className="bg-gradient-to-r from-[#F8E07A] to-[#AB6E2B] text-white font-semibold py-3 px-6 rounded-lg text-base hover:opacity-90 transition-all shadow-lg uppercase tracking-wider">
                        Why should I register?
                    </a>
                </div>
            </div>
        </div>
    </section>
);

export default Exposure;