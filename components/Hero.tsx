import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from './icons';

const sliderImages = [
    "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=800&auto=format&fit=crop&ar=1:1",
    "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop&ar=1:1",
    "https://images.unsplash.com/photo-1549592429-b0c8a6f5e6b7?q=80&w=800&auto=format&fit=crop&ar=1:1",
];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
            setCurrentIndex((prevIndex) =>
                prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
            ),
            5000 // Change slide every 5 seconds
        );

        return () => {
            resetTimeout();
        };
    }, [currentIndex]);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? sliderImages.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === sliderImages.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className="max-w-6xl mx-auto px-0 md:px-6 pt-12 md:pt-24 pb-12 md:pb-20">
            <div className="grid md:grid-cols-5 gap-8 md:gap-16 items-center">
                {/* Left Column: Text and Button */}
                <div className="order-2 md:order-1 text-center md:text-left md:col-span-2 px-6 md:px-0">
                    <h1 className="text-5xl lg:text-5xl font-semibold text-gray-800 leading-tight" style={{ lineHeight: '100%' }}>
                        The Premier Halal Trade Exhibition in <span className="text-[#BE9A64]">Southeast Asia</span>
                    </h1>
                    <p className="mt-4 text-lg text-gray-600 font-normal">
                        Connecting businesses, fostering innovation, and shaping the future of the global halal economy. Join us at Halal Expo Indonesia 2025.
                    </p>
                    <a 
                        href="#sponsors"
                        className="mt-8 inline-block bg-gradient-to-r from-[#E3C98C] to-[#BE9A64] text-white font-semibold py-4 px-8 rounded-lg text-lg hover:opacity-90 transition-all shadow-xl"
                    >
                        BOOK SPACE NOW!
                    </a>
                </div>

                {/* Right Column: Image Slider */}
                <div className="relative group w-full aspect-square order-1 md:order-2 md:col-span-3">
                    {/* Images */}
                    {sliderImages.map((src, index) => (
                        <img
                            key={src}
                            src={src}
                            alt="Highlights from the Halal Expo event"
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 md:rounded-2xl ${
                                index === currentIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                        />
                    ))}
                    
                    {/* Chevrons */}
                    <button 
                        onClick={goToPrevious} 
                        aria-label="Previous slide"
                        className="absolute top-1/2 -translate-y-1/2 left-4 text-white cursor-pointer bg-black/20 rounded-full p-2 hover:bg-black/40 transition-all z-20 opacity-0 group-hover:opacity-100"
                    >
                        <ChevronLeftIcon />
                    </button>
                     <button 
                        onClick={goToNext} 
                        aria-label="Next slide"
                        className="absolute top-1/2 -translate-y-1/2 right-4 text-white cursor-pointer bg-black/20 rounded-full p-2 hover:bg-black/40 transition-all z-20 opacity-0 group-hover:opacity-100"
                    >
                        <ChevronRightIcon />
                    </button>

                    {/* Dots */}
                    <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-3 z-20">
                        {sliderImages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                aria-label={`Go to slide ${index + 1}`}
                                className={`h-1.5 rounded-full transition-all duration-300 ${
                                   index === currentIndex ? 'w-8 bg-white' : 'w-4 bg-white/25 hover:bg-white/50'
                                }`}
                            ></button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;