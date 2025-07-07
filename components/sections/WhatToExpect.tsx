import React, { useState, useEffect, useRef } from 'react';

// A component to animate a number from random values to a final value
const AnimatedNumber = ({ value: finalValueString, startAnimation }: { value: string; startAnimation: boolean }) => {
  const [displayValue, setDisplayValue] = useState("0");
  const animationDuration = 1000; // ms
  const frameInterval = 50; // ms

  useEffect(() => {
    if (!startAnimation) return;

    const finalValue = parseInt(finalValueString.replace(/,/g, ''), 10);
    if (isNaN(finalValue)) {
      setDisplayValue(finalValueString); // If not a number, just display it
      return;
    }

    // Start the animation interval
    const interval = setInterval(() => {
      const randomValue = Math.floor(Math.random() * finalValue * 1.2);
      setDisplayValue(Math.min(randomValue, finalValue).toLocaleString());
    }, frameInterval);

    // Set a timeout to stop the animation and set the final value
    const timeout = setTimeout(() => {
      clearInterval(interval);
      setDisplayValue(finalValueString);
    }, animationDuration);

    // Cleanup function to clear interval and timeout on unmount
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };

  }, [startAnimation, finalValueString]);

  return <p className="text-8xl font-normal text-[#FBE47D] w-full">{displayValue}</p>;
};

const WhatToExpect = () => {
  const expectations = [
    { value: "3", label: "Days" },
    { value: "2,000", label: "Exhibitors Booth" },
    { value: "40,000", label: "Trade Visitors from 100+ Countries" },
    { value: "15", label: "Clusters" }
  ];
  
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current); // Stop observing after it becomes visible
          }
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="bg-gradient-to-br from-[#58472E] to-[#BE9A64] py-20 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* PERBAIKAN DI SINI: Penulisan tag span yang benar */}
        <h2 className="text-2xl font-semibold tracking-widest mb-16">
          WHAT TO <span className="text-3xl text-[#FBE47D]">EXPECT</span>
        </h2>
        <div className="flex flex-col md:flex-row flex-wrap items-center justify-center md:justify-between gap-y-10">
          {expectations.map((item, index) => (
            <React.Fragment key={item.label}>
              <div className="text-center px-4 md:px-6 flex flex-col items-center min-h-[150px]">
                <AnimatedNumber value={item.value} startAnimation={isVisible} />
                <p className="text-xl text-white mt-2 font-normal">{item.label}</p>
              </div>
              {index < expectations.length - 1 && (
                <div className="hidden md:block w-px bg-[#E2C88B]" style={{ height: '120px' }}></div>
              )}
            </React.Fragment>
          ))}
        </div>
        <p className="mt-16 text-sm text-white/60 max-w-4xl mx-auto font-normal">
          Speakers and schedule subject to change. Workshops require a separate purchase and will be available starting July 1st. Limited capacity—register early to secure your spot.
        </p>
      </div>
    </div>
  );
};

export default WhatToExpect;