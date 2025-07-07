import React, { useState, useEffect, useRef } from 'react';
import { handleScrollTo } from '../utils/scroll';
import { PhoneIcon, WhatsAppIcon, EmailIcon, HamburgerIcon, CloseIcon } from './icons';

const navLinkData = [
  { name: "OVERVIEW", href: "#overview" },
  { name: "WHY VISIT HEI", href: "#why-visit-hei" },
  { name: "PROGRAMS", href: "#programs" },
  { name: "SPONSOR", href: "#sponsors" },
  { name: "GALLERIES", href: "#event-highlight" },
];

const Logo = () => (
  <div className="bg-white px-5 shadow-lg h-[96px] flex items-center relative">
    <img src="/assets/hei-logo.png" alt="Halal Expo Indonesia 2025 Logo" style={{ maxHeight: '56px', width: 'auto' }} />
    <div className="absolute top-0 bottom-0 right-0 w-1 bg-gradient-to-b from-[#E3C98C] to-[#BE9A64]"></div>
  </div>
);

const NavLinks = () => {
  const [activeLink, setActiveLink] = useState('');
  const intersectingState = useRef<Map<Element, IntersectionObserverEntry>>(new Map());

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        intersectingState.current.set(entry.target, entry);
      });

      let bestCandidate: IntersectionObserverEntry | null = null;
      intersectingState.current.forEach(entry => {
        if (entry.isIntersecting) {
          if (!bestCandidate || entry.intersectionRatio > bestCandidate.intersectionRatio) {
            bestCandidate = entry;
          }
        }
      });

      if (bestCandidate) {
        setActiveLink(`#${bestCandidate.target.id}`);
      }
    };
    
    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '-48px 0px -40% 0px',
      threshold: Array.from({ length: 101 }, (_, i) => i / 100),
    });

    const sections = navLinkData.map(link => document.querySelector(link.href));
    sections.forEach(section => {
      if(section) observer.observe(section as Element);
    });

    return () => {
      sections.forEach(section => {
        if(section) observer.unobserve(section as Element);
      });
    };
  }, []);

  return (
    <nav className="hidden lg:flex items-center space-x-8 h-full">
      {navLinkData.map((link) => {
        const isActive = activeLink === link.href;
        return (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => handleScrollTo(e, link.href)}
            className={`tracking-wider transition-colors h-full flex items-center relative cursor-pointer px-4 whitespace-nowrap ${
              isActive
                ? 'font-semibold bg-gradient-to-r from-[#E3C98C] to-[#BE9A64] bg-clip-text text-transparent'
                : 'font-normal text-gray-700 hover:text-[#BE9A64]'
            }`}
          >
            {link.name}
            {isActive && (
              <span className="absolute bottom-0 left-4 right-4 h-1 bg-gradient-to-r from-[#E3C98C] to-[#BE9A64] rounded-full"></span>
            )}
          </a>
        );
      })}
    </nav>
  );
};

const MobileNavLinks = ({ onLinkClick }: { onLinkClick?: () => void }) => (
    <nav className="flex flex-col space-y-4">
        {navLinkData.map((link) => (
            <a key={link.name} href={link.href} onClick={(e) => {
                handleScrollTo(e, link.href);
                if (onLinkClick) onLinkClick();
            }} className="text-gray-700 font-semibold text-lg hover:text-[#BE9A64] transition-colors p-2 rounded-md cursor-pointer">
                {link.name}
            </a>
        ))}
    </nav>
);

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);
    const contactRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (contactRef.current && !contactRef.current.contains(event.target as Node)) {
                setIsContactOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [contactRef]);

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-40 bg-white shadow-lg h-[48px]">
                <div className="w-full flex justify-between h-full pl-0 pr-6">
                    <div className="flex-shrink-0">
                        <Logo />
                    </div>

                    <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-full">
                        <NavLinks />
                    </div>

                    <div className="flex items-center h-full">
                        <div className="hidden lg:block relative" ref={contactRef}>
                            <button
                                onClick={() => setIsContactOpen(!isContactOpen)}
                                className="bg-gradient-to-r from-[#E3C98C] to-[#BE9A64] text-white font-semibold h-[36px] px-5 rounded-lg hover:opacity-90 transition-all shadow-md flex items-center gap-2 border-2 border-[#E3C98C]/50 cursor-pointer"
                            >
                                <PhoneIcon />
                                <span>CONTACT US</span>
                            </button>
                            {isContactOpen && (
                                <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 z-50 border border-gray-200">
                                    <a href="https://wa.me/62820182018121" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                                        <WhatsAppIcon />
                                        <span>Chat on WhatsApp</span>
                                    </a>
                                    <a href="mailto:sales@skyconnection.id" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                                        <EmailIcon />
                                        <span>Send an Email</span>
                                    </a>
                                </div>
                            )}
                        </div>
                        <div className="lg:hidden">
                            <button onClick={() => setIsMenuOpen(true)} aria-label="Open menu">
                                <HamburgerIcon />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 z-50 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}>
                <div className="fixed inset-0 bg-black/30" onClick={() => setIsMenuOpen(false)} aria-hidden="true"></div>
                <div className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-white shadow-xl p-6">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-2xl font-semibold">Menu</h2>
                        <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
                            <CloseIcon />
                        </button>
                    </div>
                    <MobileNavLinks onLinkClick={() => setIsMenuOpen(false)} />
                    <div className="mt-8 border-t pt-6 space-y-4">
                        <a href="https://wa.me/62820182018121" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white font-semibold py-3 px-5 rounded-lg hover:bg-green-600 transition-all shadow-md flex items-center justify-center gap-2 w-full cursor-pointer">
                            <WhatsAppIcon />
                            <span>Chat on WhatsApp</span>
                        </a>
                        <a href="mailto:sales@skyconnection.id" className="bg-gray-600 text-white font-semibold py-3 px-5 rounded-lg hover:bg-gray-700 transition-all shadow-md flex items-center justify-center gap-2 w-full cursor-pointer">
                            <EmailIcon />
                            <span>Send an Email</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;