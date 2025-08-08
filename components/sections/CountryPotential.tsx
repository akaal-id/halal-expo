import React from 'react';
import { handleScrollTo } from '../../utils/scroll';

const FloatingImage = ({ className, delay, src }: { className: string, delay: string, src: string }) => (
    <div 
        className={`absolute backdrop-blur-sm rounded-lg shadow-lg overflow-hidden ${className}`}
        style={{ animationDelay: delay }}
    >
        <img src={src} alt="Halal product or service example" className="w-full h-full object-cover" />
    </div>
);

export default function CountryPotential() {
    const imagePositions = [
        { className: 'md:w-72 md:h-48 w-48 h-32 md:top-[15%] top-[15%] left-[5%] md:left-[calc(50%-40.5rem)] md:right-auto animate-float-1', delay: '0s', src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=400&auto=format&fit=crop' },
        { className: 'md:w-48 md:h-36 w-24 h-20 md:top-[60%] top-[70%] left-[20%] md:left-[calc(50%-34rem)] md:right-auto animate-float-2', delay: '1.5s', src: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=400&auto=format&fit=crop' },
        { className: 'md:w-72 md:h-48 w-42 h-24 md:bottom-[10%] bottom-[10%] left-[8%] md:left-[calc(50%-38rem)] md:right-auto animate-float-1', delay: '3s', src: 'https://images.unsplash.com/photo-1542060748-10c28b62716f?q=80&w=400&auto=format&fit=crop' },
        { className: 'md:w-72 md:h-48 w-36 h-24 md:top-[15%] top-[10%] right-[8%] md:right-[calc(50%-38rem)] md:left-auto animate-float-2', delay: '0.5s', src: 'https://images.unsplash.com/photo-1615485925824-2b23a0f16a13?q=80&w=400&auto=format&fit=crop' },
        { className: 'md:w-48 md:h-32 w-32 h-20 md:top-[40%] top-[23%] right-[5%] md:right-[calc(50%-40.5rem)] md:left-auto animate-float-1', delay: '2s', src: 'https://images.unsplash.com/photo-1620916566398-39f168a2325b?q=80&w=400&auto=format&fit=crop' },
        { className: 'md:w-72 md:h-48 w-48 h-32 md:bottom-[15%] bottom-[15%] right-[10%] md:right-[calc(50%-36rem)] md:left-auto animate-float-2', delay: '3.5s', src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=400&auto=format&fit=crop' },
    ];

    return (
      <section className="bg-gradient-to-b from-[#59482F] to-[#B99863] text-center text-white relative flex items-center justify-center min-h-[1080px] overflow-hidden">
        {/* Background World Map */}
        <div 
            className="absolute inset-0 bg-no-repeat bg-bottom bg-contain opacity-10 z-0" 
            style={{ backgroundImage: "url('https://pngimg.com/uploads/world_map/world_map_PNG28.png')" }}
        ></div>

        {/* Floating Images Container */}
        <div className="absolute inset-0 z-10">
            {imagePositions.map((img, i) => (
                <FloatingImage key={i} className={img.className} delay={img.delay} src={img.src} />
            ))}
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-20 flex flex-col items-center">
          <h2 className="text-6xl md:text-8xl font-thin text-[#FBE47D] tracking-wider">
            100+ COUNTRY
          </h2>
          <p className="text-3xl md:text-4xl font-semibold text-white uppercase mt-4 leading-snug">
            Potential halal market overseas waiting for <span className="text-[#FBE47D]">your brand to shine</span>
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#registration"
                onClick={(e) => handleScrollTo(e, '#registration')}
                className="bg-gradient-to-r from-[#F8E07A] to-[#FEFFFF] text-gray-800 font-semibold py-3 px-8 rounded-lg text-base hover:opacity-90 transition-all shadow-lg uppercase tracking-wide"
              >
                Register as Exhibitor
              </a>
              <a 
                href="#"
                className="bg-gradient-to-r from-[#AB6E2B] to-[#F8E07A] text-white font-semibold py-3 px-8 rounded-lg text-base hover:opacity-90 transition-all shadow-lg uppercase tracking-wide"
              >
                Meet our Exhibitor
              </a>
          </div>

          <a href="#" className="mt-6 text-sm text-white/80 hover:text-white underline transition-colors cursor-pointer">
            discuss with us for more exhibitor information
          </a>

        </div>
      </section>
    );
}