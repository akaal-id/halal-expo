import React from 'react';

const SponsorLogoBox = () => (
  <div className="p-1 bg-gradient-to-br from-[#FCEF99] via-[#BE9A64] to-[#FCEF99] rounded-2xl shadow-md transition-all hover:shadow-xl hover:scale-105">
    <div className="bg-white w-full h-48 md:h-56 rounded-xl flex items-center justify-center">
      {/* Sponsor logo will be placed here */}
    </div>
  </div>
);

const Sponsors = () => (
  <section className="bg-white py-24">
    <div className="max-w-6xl mx-auto px-6"> {/* Perbaiki: max-w-6x1 -> max-w-6xl */}
      <div className="grid md:grid-cols-2 gap-y-4 md:gap-x-16 items-start mb-16">
        <div className="md:col-span-1">
          <h2 className="text-6xl font-semibold text-gray-900 leading-tight text-left" style={{ lineHeight: '90%' }}>
            <span className="text-[#FBBF24]">SPONSORS</span>
            <br />
            & PARTNER
          </h2>
        </div>
        <div className="text-gray-600 font-normal text-lg text-left max-w-full"> {/* Perbaiki: max-w-fill -> max-w-full */}
          Gain valuable exposure for your brand and help us ensure the success of our 11th annual conference by becoming a sponsor or exhibitor!
          <br />
          <br />
          <span className="font-semibold">Meet ours here,</span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {Array(6).fill(0).map((_, i) => (
          <SponsorLogoBox key={i} />
        ))}
      </div>

      <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
        <a href="#" className="bg-gradient-to-r from-[#FEFFFF] to-[#F8E07A] text-gray-800 font-semibold py-3 px-6 rounded-lg text-base hover:opacity-90 transition-all shadow-lg uppercase tracking-wide">
          Become a Sponsor
        </a>
        <a href="#" className="bg-gradient-to-r from-[#F8E07A] to-[#AB6E2B] text-white font-semibold py-3 px-6 rounded-lg text-base hover:opacity-90 transition-all shadow-lg uppercase tracking-wider">
          Download Sponsor Deck
        </a>
      </div>
    </div>
  </section>
);

export default Sponsors;