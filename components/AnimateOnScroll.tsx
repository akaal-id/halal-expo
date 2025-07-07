import React, { useState, useEffect, useRef, ReactNode } from 'react';

interface AnimateOnScrollProps {
    children: ReactNode;
}

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            // Using forEach in case multiple entries are observed
            entries.forEach(entry => {
                // When entry.isIntersecting is true, the element is in view.
                // When it's false, it's out of view. This enables fade-out on scroll up.
                setIsVisible(entry.isIntersecting);
            });
        });

        const { current } = domRef;
        if (current) {
            observer.observe(current);
        }

        // Cleanup observer on component unmount
        return () => {
            if (current) {
                observer.unobserve(current);
            }
        };
    }, []);

    return (
        <div
            ref={domRef}
            className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
        >
            {children}
        </div>
    );
};

export default AnimateOnScroll;
