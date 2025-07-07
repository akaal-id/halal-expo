import React, { useState, useRef, useEffect } from 'react';
import { BigWhatsAppIcon, BigEmailIcon, BigChatBubbleIcon, BigCloseIcon } from './icons';

const contacts = [
    {
        type: 'Sales Contact',
        name: 'Ms. Rindu',
        phone: '+6281274170664',
        email: 'sales@halalexpoindonesia.com',
    },
    {
        type: 'Marketing Promotion',
        name: 'Ms. Angel',
        phone: '+6285777592538',
        email: 'marketing@halalexpoindonesia.com',
    },
];

const FloatingContact = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);


    return (
        <div ref={menuRef} className="fixed bottom-5 right-5 left-5 sm:left-auto z-50 flex flex-col items-end">
            {/* Contact cards container */}
            {isOpen && (
                <div className="mb-4 bg-white rounded-2xl shadow-2xl p-6 sm:p-8 w-full sm:w-[400px] animate-fade-in-up space-y-6">
                    {contacts.map((contact, index) => (
                        <div key={contact.type} className={index < contacts.length - 1 ? "pb-6 border-b border-gray-200" : ""}>
                            <p className="font-bold text-gray-800 text-xl">{contact.type}</p>
                            <p className="text-gray-600 mb-4">{contact.name}</p>
                            <div className="flex flex-col space-y-3">
                                <a
                                    href={`https://wa.me/${contact.phone.replace('+', '')}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 rounded-lg bg-green-50 hover:bg-green-100 text-green-700 transition-colors"
                                >
                                    <BigWhatsAppIcon />
                                    <span className="font-semibold text-base">{contact.phone}</span>
                                </a>
                                <a
                                    href={`mailto:${contact.email}`}
                                    className="flex items-center gap-4 p-4 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                                >
                                    <BigEmailIcon />
                                    <span className="font-semibold text-base">{contact.email}</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Floating Action Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-gradient-to-r from-[#E3C98C] to-[#BE9A64] text-white rounded-full p-5 shadow-lg hover:scale-110 active:scale-100 transition-transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#BE9A64]"
                aria-label={isOpen ? 'Close contact menu' : 'Open contact menu'}
            >
               {isOpen ? 
                <BigCloseIcon /> :
                <BigChatBubbleIcon />
               }
            </button>
        </div>
    );
};

export default FloatingContact;