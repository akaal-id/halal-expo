import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '../icons';

// --- TYPE DEFINITION ---
interface EventDataType {
    year: number;
    date: string;
    details: string[];
    mainImage: string;
    galleryImages: string[];
    longDescription: string;
}

// --- MOCK DATA ---
const eventData: EventDataType[] = [
    { 
        year: 2018, 
        date: "Sept, 21th-23th",
        details: ["Jakarta Convention Center, Indonesia", ">100 Exhibitors", ">5,000 Visitor"], 
        mainImage: "https://images.unsplash.com/photo-1549592429-b0c8a6f5e6b7?q=80&w=800&auto=format&fit=crop&ar=16:9",
        galleryImages: [
            "https://images.unsplash.com/photo-1549592429-b0c8a6f5e6b7?q=80&w=800&auto=format&fit=crop&ar=16:9",
            "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop&ar=16:9",
            "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=800&auto=format&fit=crop&ar=16:9",
            "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=800&auto=format&fit=crop&ar=16:9",
        ],
        longDescription: "The 2018 Halal Expo Indonesia marked a significant milestone, bringing together over 100 exhibitors and more than 5,000 visitors at the prestigious Jakarta Convention Center. The three-day event was packed with insightful seminars on halal certification, panel discussions with industry leaders, and exclusive product launches. It successfully created a dynamic platform for networking, fostering new business partnerships, and setting the stage for future growth in the national halal industry."
    },
    { 
        year: 2019, 
        date: "August, 2nd-4th",
        details: ["International Convention Exhibition (ICE) BSD City, Indonesia", ">280 Exhibitors", ">28,000 Visitors"], 
        mainImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop&ar=16:9",
        galleryImages: [
            "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop&ar=16:9",
            "https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=800&auto=format&fit=crop&ar=16:9",
            "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop&ar=16:9",
        ],
        longDescription: "In 2019, the expo expanded to the International Convention Exhibition (ICE) at BSD City, attracting over 280 exhibitors and a staggering 28,000 visitors. Key agendas included international business matchmaking sessions, a dedicated startup pitch competition, and workshops on digital marketing for halal products. The event solidified its position as a key player in the Southeast Asian halal market."
    },
    { 
        year: 2023, 
        date: "October, 25th-28th",
        details: ["Jakarta Convention Center, Indonesia", ">100 Exhibitors", ">12,000 Visitor from 22 Countries"], 
        mainImage: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=800&auto=format&fit=crop&ar=16:9",
        galleryImages: [
            "https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=800&auto=format&fit=crop&ar=16:9",
             "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop&ar=16:9"
        ],
        longDescription: "Returning with renewed vigor, the 2023 expo welcomed over 12,000 visitors from 22 countries. The agenda focused on resilience and innovation in the post-pandemic era, with a spotlight on sustainable practices in the halal supply chain. A memorandum of understanding was signed between several international trade bodies, promising greater collaboration for years to come."
    },
    { 
        year: 2024, 
        date: "October, 25th-28th",
        details: ["ICE BSD City, Indonesia", ">72 Exhibitors from 12 Countries", ">41,500 Visitor from 140 Countries"], 
        mainImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop&ar=16:9",
        galleryImages: [
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop&ar=16:9",
            "https://images.unsplash.com/photo-1573496773905-f5b17e76b254?q=80&w=800&auto=format&fit=crop&ar=16:9",
            "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop&ar=16:9",
        ],
        longDescription: "The 2024 expo was the most globally-focused event to date, with over 41,500 visitors from 140 countries. The agenda was heavily tech-oriented, featuring discussions on blockchain for halal traceability, AI in food production, and the rise of modest e-commerce. It served as a powerful testament to Indonesia's role as a leader in the global halal conversation."
    },
];

const decorativeImages = [
    { src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd51622?q=80&w=200&auto=format&fit=crop', style: { top: '5%', left: '10%', width: '96px', height: '96px' }, animation: 'animate-float-1' },
    { src: 'https://images.unsplash.com/photo-1505238680356-667803448bb6?q=80&w=200&auto=format&fit=crop', style: { top: '10%', right: '15%', width: '128px', height: '128px' }, animation: 'animate-float-2' },
    { src: 'https://images.unsplash.com/photo-1484723050470-b8527b5b5c46?q=80&w=200&auto=format&fit=crop', style: { top: '30%', left: '5%', width: '112px', height: '112px' }, animation: 'animate-float-2' },
    { src: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=200&auto=format&fit=crop', style: { top: '40%', right: '8%', width: '144px', height: '144px' }, animation: 'animate-float-1' },
    { src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=200&auto=format&fit=crop', style: { top: '55%', left: '12%', width: '160px', height: '160px' }, animation: 'animate-float-2' },
    { src: 'https://images.unsplash.com/photo-1504754524776-8f4f37790774?q=80&w=200&auto=format&fit=crop', style: { top: '70%', right: '20%', width: '96px', height: '96px' }, animation: 'animate-float-1' },
    { src: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=200&auto=format&fit=crop', style: { top: '75%', left: '2%', width: '128px', height: '128px' }, animation: 'animate-float-2' },
    { src: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=200&auto=format&fit=crop', style: { top: '85%', right: '5%', width: '112px', height: '112px' }, animation: 'animate-float-1' },
    { src: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=200&auto=format&fit=crop', style: { top: '90%', left: '15%', width: '144px', height: '144px' }, animation: 'animate-float-2' },
    { src: 'https://images.unsplash.com/photo-1490645935967-10de6ba17025?q=80&w=200&auto=format&fit=crop', style: { top: '95%', right: '25%', width: '80px', height: '80px' }, animation: 'animate-float-1' },
    { src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=200&auto=format&fit=crop', style: { top: '60%', right: '45%', width: '80px', height: '80px' }, animation: 'animate-float-1' },
];

// --- SUB-COMPONENTS ---

const FullScreenDetailView = ({ event, onClose }: { event: EventDataType, onClose: () => void }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') {
                 const isFirstSlide = currentIndex === 0;
                 const newIndex = isFirstSlide ? event.galleryImages.length - 1 : currentIndex - 1;
                 setCurrentIndex(newIndex);
            }
            if(e.key === 'ArrowRight') {
                const isLastSlide = currentIndex === event.galleryImages.length - 1;
                const newIndex = isLastSlide ? 0 : currentIndex + 1;
                setCurrentIndex(newIndex);
            }
        };
        
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = 'auto';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [currentIndex, event.galleryImages.length, onClose]);

    const prevSlide = (e: React.MouseEvent) => {
        e.stopPropagation();
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? event.galleryImages.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = (e: React.MouseEvent) => {
        e.stopPropagation();
        const isLastSlide = currentIndex === event.galleryImages.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex: number, e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex(slideIndex);
    };

    return (
        <div 
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm p-4 sm:p-8 flex flex-col items-center justify-center animate-fade-in"
            onClick={onClose}
        >
            <button
                aria-label="Close"
                onClick={onClose}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-50"
            >
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>

            <div 
                className="w-full h-full flex flex-col lg:flex-row gap-6"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the content
            >
                {/* Left Side: Image Gallery */}
                <div className="w-full lg:w-2/3 h-1/2 lg:h-full flex flex-col justify-center gap-4">
                    {/* Main Slider */}
                    <div className="w-full aspect-video relative group bg-black rounded-lg overflow-hidden">
                        {/* SLIDER IMAGES with cross-fade */}
                        {event.galleryImages.map((imgSrc, index) => (
                             <img 
                                key={index}
                                src={imgSrc} 
                                alt={`Highlight from ${event.year} - ${index + 1}`} 
                                className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0'}`}
                           />
                        ))}
                         
                        {/* SLIDER CONTROLS */}
                         <button
                            onClick={prevSlide}
                            aria-label="Previous image"
                            className="absolute top-1/2 -translate-y-1/2 left-4 text-white cursor-pointer bg-black/30 rounded-full p-2 hover:bg-black/50 transition-all z-20 opacity-0 group-hover:opacity-100"
                         >
                            <ChevronLeftIcon />
                         </button>
                         <button
                            onClick={nextSlide}
                            aria-label="Next image"
                            className="absolute top-1/2 -translate-y-1/2 right-4 text-white cursor-pointer bg-black/30 rounded-full p-2 hover:bg-black/50 transition-all z-20 opacity-0 group-hover:opacity-100"
                         >
                            <ChevronRightIcon />
                         </button>

                        {/* DOTS INDICATOR */}
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
                             {event.galleryImages.map((_, slideIndex) => (
                                 <button
                                     key={slideIndex}
                                     onClick={(e) => goToSlide(slideIndex, e)}
                                     aria-label={`Go to image ${slideIndex + 1}`}
                                     className={`h-2 rounded-full transition-all duration-300 ${currentIndex === slideIndex ? 'w-6 bg-white' : 'w-2 bg-white/50 hover:bg-white'}`}
                                 ></button>
                             ))}
                         </div>
                    </div>
                     {/* Thumbnail Gallery */}
                    <div className="w-full">
                        <div className="overflow-x-auto flex justify-center space-x-2.5 px-2">
                            {event.galleryImages.map((imgSrc, index) => (
                                <button
                                    key={`thumb-${index}`}
                                    onClick={(e) => goToSlide(index, e)}
                                    className={`flex-shrink-0 w-24 h-14 lg:w-28 lg:h-16 rounded-lg overflow-hidden transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black/90 focus:ring-white ${currentIndex === index ? 'ring-2 ring-white opacity-100' : 'opacity-60 hover:opacity-100'}`}
                                >
                                    <img
                                        src={imgSrc}
                                        alt={`Thumbnail ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Side: Description */}
                <div className="w-full lg:w-1/3 h-1/2 lg:h-full text-white overflow-y-auto pr-4 lg:pr-0">
                    <h3 className="text-5xl font-semibold text-[#E3C98C]">{event.year} Highlights</h3>
                    <p className="mt-4 text-lg text-gray-300 font-light">{event.longDescription}</p>
                </div>
            </div>
        </div>
    );
};


const EventItem = ({ event, onSelect, isReversed }: { event: EventDataType, onSelect: () => void, isReversed: boolean }) => {
    return (
        <div className={`flex flex-col ${isReversed ? 'md:items-start' : 'md:items-end'} text-left md:text-right`}>
            <div 
                onClick={onSelect}
                className="relative w-full aspect-video rounded-lg overflow-hidden group cursor-pointer"
            >
                <img src={event.mainImage} alt={`Event of ${event.year}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold py-2 px-4 border border-white rounded-md">
                        More Details
                    </span>
                </div>
            </div>
            <h3 className={`mt-4 text-6xl font-light text-white ${isReversed ? 'md:text-left' : 'md:text-right w-full'}`}>{event.year}</h3>
            <p className={`mt-2 text-lg text-white/80 ${isReversed ? 'md:text-left' : 'md:text-right w-full'}`}>{event.date}</p>
            <ul className={`mt-3 space-y-1 ${isReversed ? 'text-left' : 'md:text-right'}`}>
                {event.details.map((detail, i) => (
                    <li key={i} className="text-white font-normal text-sm">
                        {isReversed ? (
                             <><span className="text-[#E3C98C] mr-2">•</span>{detail}</>
                        ) : (
                             <>{detail}<span className="text-[#E3C98C] ml-2">•</span></>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};


// --- MAIN COMPONENT ---
const EventHighlight = () => {
    const [selectedEvent, setSelectedEvent] = useState<EventDataType | null>(null);

    return (
        <>
            <section className="bg-gradient-to-r from-[#59482F] to-[#E0C78A] py-24 relative overflow-hidden">
                {/* Decorative Floating Images */}
                 <div className="absolute inset-0 z-0 pointer-events-none">
                    {decorativeImages.map((img, i) => (
                        <div
                            key={i}
                            className={`absolute ${img.animation}`}
                            style={{
                                ...img.style,
                                animationDuration: `${Math.random() * 5 + 8}s`,
                                animationDelay: `${Math.random() * 2}s`
                            }}
                        >
                            <img
                                src={img.src}
                                alt=""
                                className="w-full h-full object-cover rounded-2xl shadow-lg opacity-20"
                            />
                        </div>
                    ))}
                </div>

                <div className="max-w-6xl mx-auto px-6 relative z-10">
                    <div className="text-left mb-20">
                        <h2 className="text-4xl font-semibold text-white inline-block">Event Highlight</h2>
                        <div className="w-full h-0.5 bg-white mt-2"></div>
                    </div>

                    <div className="relative">
                        {/* Central Vertical Line */}
                        <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-0.5 bg-[#E3C98C] hidden md:block"></div>
                        
                        <div className="space-y-16">
                            {eventData.map((event, index) => {
                                const isReversed = index % 2 !== 0; // Right side
                                return (
                                    <div key={event.year} className="grid md:grid-cols-2 gap-x-12 gap-y-8 items-start relative">
                                         {/* Timeline Dot */}
                                        <div className="hidden md:block absolute top-4 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-[#E3C98C]"></div>
                                        
                                        {isReversed ? (
                                            <>
                                                <div></div> {/* Spacer */}
                                                <div className="md:pl-6">
                                                    <EventItem event={event} onSelect={() => setSelectedEvent(event)} isReversed={isReversed} />
                                                </div>
                                            </>
                                        ) : (
                                             <>
                                                <div className="md:pr-6">
                                                     <EventItem event={event} onSelect={() => setSelectedEvent(event)} isReversed={isReversed} />
                                                </div>
                                                 <div></div> {/* Spacer */}
                                             </>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Full Screen View conditional render */}
            {selectedEvent && <FullScreenDetailView event={selectedEvent} onClose={() => setSelectedEvent(null)} />}
             <style>{`
                @keyframes animate-fade-in {
                    from { opacity: 0; transform: scale(0.95); }
                    to { opacity: 1; transform: scale(1); }
                }
                .animate-fade-in {
                    animation: animate-fade-in 0.3s ease-out forwards;
                }
            `}</style>
        </>
    );
};

export default EventHighlight;