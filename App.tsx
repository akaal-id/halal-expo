import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InfoBar from './components/InfoBar';
import PromoCountdown from './components/PromoCountdown';
import WhatToExpect from './components/sections/WhatToExpect';
import ExpandPotential from './components/sections/ExpandPotential';
import CountryPotential from './components/sections/CountryPotential';
import RegistrationForm from './components/sections/RegistrationForm';
import Venue from './components/sections/Venue';
import Sponsors from './components/sections/Sponsors';
import Exposure from './components/sections/Exposure';
import EventHighlight from './components/sections/EventHighlight';
import NewsAndUpdates from './components/sections/NewsAndUpdates';
import Footer from './components/Footer';
import AnimateOnScroll from './components/AnimateOnScroll';
import FloatingContact from './components/FloatingContact';

function App() {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <section id="overview">
            <Hero />
            <InfoBar />
        </section>
        <AnimateOnScroll>
          <PromoCountdown />
        </AnimateOnScroll>
        <section id="why-visit-hei">
          <AnimateOnScroll>
            <WhatToExpect />
          </AnimateOnScroll>
        </section>
        <section id="programs">
          <AnimateOnScroll>
            <ExpandPotential />
          </AnimateOnScroll>
        </section>
        <AnimateOnScroll>
          <CountryPotential />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <RegistrationForm />
        </AnimateOnScroll>
        <section id="venue">
          <AnimateOnScroll>
            <Venue />
          </AnimateOnScroll>
        </section>
        <section id="sponsors">
          <AnimateOnScroll>
            <Sponsors />
          </AnimateOnScroll>
        </section>
        <section id="exposure">
          <AnimateOnScroll>
            <Exposure />
          </AnimateOnScroll>
        </section>
        <section id="event-highlight">
          <AnimateOnScroll>
            <EventHighlight />
          </AnimateOnScroll>
        </section>
        <section id="news">
          <AnimateOnScroll>
            <NewsAndUpdates />
          </AnimateOnScroll>
        </section>
      </main>
      <div id="contact">
        <Footer />
      </div>
      <FloatingContact />
    </div>
  );
}

export default App;