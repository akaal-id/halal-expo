import React from 'react';
import { InstagramIcon, FacebookIcon, LinkedInIcon, YouTubeIcon } from './icons';

const FooterLogo = () => (
    <img src="/assets/hei-logo.png" alt="Halal Expo Indonesia 2025 Logo" style={{ maxHeight: '48px', width: 'auto' }} />
);

const Footer = () => {
    const address = "Jl. Gotong Royong I No.50 Rt.004/DI, RT.3/RW.1, Ragunan, Ps. Minggu, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12550";
    const gmapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    const phone = "+62 0820182018121";
    const whatsAppNumber = "62820182018121";
    const email = "sales@skyconnection.id";

    return (
        <footer className="bg-white text-gray-800 pt-20 pb-8">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:grid md:grid-cols-12 gap-12">
                    {/* Column 1: Contact Info */}
                    <div className="space-y-6 order-2 md:order-1 md:col-span-4">
                        <FooterLogo />
                        <div>
                            <h4 className="font-semibold text-black mb-1">Headoffice</h4>
                            <a href={gmapsUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-[#BE9A64] transition-colors leading-relaxed">
                                {address}
                            </a>
                        </div>
                        <div>
                            <h4 className="font-semibold text-black mb-1">Phone</h4>
                            <a href={`https://wa.me/${whatsAppNumber}`} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-[#BE9A64] transition-colors">
                                {phone}
                            </a>
                        </div>
                        <div>
                            <h4 className="font-semibold text-black mb-1">Email</h4>
                            <a href={`mailto:${email}`} className="text-sm text-gray-600 hover:text-[#BE9A64] transition-colors">
                                {email}
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Featured Links */}
                    <div className="order-3 md:order-2 md:col-span-2">
                         <h3 className="text-lg font-semibold text-black mb-4">More For You</h3>
                         <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-[#BE9A64] text-gray-600 transition-colors">About HEI</a></li>
                            <li><a href="#" className="hover:text-[#BE9A64] text-gray-600 transition-colors">Become Trade Visitor</a></li>
                            <li><a href="#" className="hover:text-[#BE9A64] text-gray-600 transition-colors">Book a Space</a></li>
                            <li><a href="#" className="hover:text-[#BE9A64] text-gray-600 transition-colors">Become a Sponsor</a></li>
                             <li><a href="#" className="hover:text-[#BE9A64] text-gray-600 transition-colors">News & Update</a></li>
                         </ul>
                    </div>

                    {/* Column 3: Social Media */}
                    <div className="order-4 md:order-3 md:col-span-2">
                        <h3 className="text-lg font-semibold text-black mb-4">Follow Us</h3>
                        <div className="flex items-center space-x-4">
                             <a href="#" aria-label="Instagram" className="text-gray-600 hover:text-[#BE9A64] transition-colors"><InstagramIcon /></a>
                             <a href="#" aria-label="Facebook" className="text-gray-600 hover:text-[#BE9A64] transition-colors"><FacebookIcon /></a>
                             <a href="#" aria-label="LinkedIn" className="text-gray-600 hover:text-[#BE9A64] transition-colors"><LinkedInIcon /></a>
                             <a href="#" aria-label="YouTube" className="text-gray-600 hover:text-[#BE9A64] transition-colors"><YouTubeIcon /></a>
                        </div>
                    </div>
                     
                    {/* Column 4: Newsletter */}
                     <div className="order-1 md:order-4 md:col-span-4">
                        <h3 className="text-lg font-semibold text-black mb-4">
                            Sign up for <span className="text-[#BE9A64]">HEI Newsletter</span> and never miss another update!
                        </h3>
                        <form className="flex flex-col gap-4">
                             <div>
                                <label htmlFor="footer-email" className="block text-sm font-semibold text-black mb-2">Email</label>
                                <input type="email" id="footer-email" placeholder="Your Email" className="w-full bg-white border border-gray-400 rounded-lg px-4 py-2.5 text-black placeholder-gray-500 focus:ring-[#BE9A64] focus:border-[#BE9A64] transition"/>
                             </div>
                            <button type="submit" className="bg-gradient-to-r from-[#E3C98C] to-[#BE9A64] text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-all shadow-md w-full sm:w-auto self-start">
                               SIGN ME UP
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 border-t border-gray-200 pt-6 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-between">
                    <p className="font-normal">© Halal Expo Indonesia 2025. All Right Reserved.</p>
                    <div className="space-x-4 mt-2 md:mt-0">
                        <a href="#" className="hover:text-black font-normal transition-colors">Terms & Conditions</a>
                        <span className="font-normal">|</span>
                        <a href="#" className="hover:text-black font-normal transition-colors">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;