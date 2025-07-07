import React from 'react';

const Venue = () => {
    const venueName = "Indonesia Convention Exhibition (ICE) BSD City";
    const venueAddress = "Jl. BSD Grand Boulevard No.1, Pagedangan, Kec. Pagedangan, Kabupaten Tangerang, Banten 15339";
    const googleMapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(venueName)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
    const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(venueName)}`;

    return (
      <section className="relative py-24 bg-gray-200">
        <div className="absolute inset-0">
            <img src="https://picsum.photos/1920/1080?random=3&blur=5" className="w-full h-full object-cover opacity-30" alt="Audience"/>
        </div>
        <div className="max-w-6xl mx-auto px-6 relative z-10 flex justify-center items-center">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden grid md:grid-cols-5">
               <div className="md:col-span-2">
                   <iframe
                       className="w-full h-full min-h-[450px] md:min-h-0 border-0"
                       src={googleMapsEmbedUrl}
                       allowFullScreen={true}
                       loading="lazy"
                       referrerPolicy="no-referrer-when-downgrade"
                       title="Event Venue Location"
                   ></iframe>
               </div>
               <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                   <p className="text-[#BE9A64] font-semibold mb-2">THE VENUE</p>
                   <h2 className="text-4xl md:text-5xl font-semibold text-gray-800">{venueName}</h2>
                   <p className="mt-4 text-gray-600 font-normal">{venueAddress}</p>
                   <div className="mt-8 flex space-x-6">
                       <a href="#" className="font-semibold text-[#BE9A64] hover:brightness-90 transition-all">City Guide →</a>
                       <a 
                            href={googleMapsDirectionsUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="font-semibold text-[#BE9A64] hover:brightness-90 transition-all"
                        >
                            Directions →
                        </a>
                   </div>
               </div>
            </div>
        </div>
      </section>
    );
};

export default Venue;