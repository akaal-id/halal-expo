
import React from 'react';
import { countries } from '../../data/countries';

const FormInput = ({ label, id, required, ...props }: { label: string, id:string, required?: boolean, [key:string]: any}) => (
    <div>
        <label htmlFor={id} className="block text-sm font-semibold text-gray-800 mb-1.5">
            {label}
            {required && <span className="text-red-500">*</span>}
        </label>
        <input
            id={id}
            name={id}
            {...props}
            className="w-full bg-white border border-gray-400 rounded-md px-4 py-3 text-gray-900 placeholder-gray-400 font-normal focus:ring-1 focus:ring-[#BE9A64] focus:border-[#BE9A64] transition-colors"
        />
    </div>
);

const FormSelect = ({ label, id, required, children, ...props }: { label: string, id:string, required?: boolean, children: React.ReactNode, [key:string]: any}) => (
     <div>
        <label htmlFor={id} className="block text-sm font-semibold text-gray-800 mb-1.5">
            {label}
            {required && <span className="text-red-500">*</span>}
        </label>
        <select
            id={id}
            name={id}
            {...props}
            className="w-full bg-white border border-gray-400 rounded-md px-4 py-3 text-gray-900 font-normal focus:ring-1 focus:ring-[#BE9A64] focus:border-[#BE9A64] transition-colors appearance-none bg-no-repeat"
            style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                backgroundPosition: 'right 0.75rem center',
                backgroundSize: '1.5em 1.5em'
            }}
        >
            {children}
        </select>
    </div>
);

const MobileInput = ({ label, id, required }: { label: string, id: string, required?: boolean }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-semibold text-gray-800 mb-1.5">
            {label}
            {required && <span className="text-red-500">*</span>}
        </label>
        <div className="flex items-center w-full bg-white border border-gray-400 rounded-md focus-within:ring-1 focus-within:ring-[#BE9A64] focus-within:border-[#BE9A64] transition-colors">
            <select
                aria-label="Country code"
                name="country-code"
                defaultValue="+62"
                className="bg-transparent pl-3 pr-2 py-3 text-gray-900 font-normal border-r border-gray-400 focus:outline-none h-full appearance-none"
            >
                {countries.map(country => (
                    <option key={country.code} value={country.dial_code}>
                        {country.flag} {country.dial_code}
                    </option>
                ))}
            </select>
            <input
                id={id}
                name={id}
                type="tel"
                placeholder="Your Mobile Number"
                className="w-full bg-transparent px-4 py-3 text-gray-900 placeholder-gray-400 font-normal focus:outline-none"
            />
        </div>
    </div>
);

const RegistrationForm = () => {
    return (
        <section className="bg-white py-24">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-4xl font-light text-center text-gray-900 mb-12 tracking-wider">
                    REGISTER <span className="text-5xl font-semibold text-[#E3C98C]">AS AN EXHIBITOR</span> HERE
                </h2>
                
                <form className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                    <FormInput label="Contact Name" id="contact-name" placeholder="Your Contact Name" required />
                    <FormInput label="Company Name" id="company-name" placeholder="Your Company Name" required />
                    <FormInput 
                        label="Email" 
                        id="email" 
                        type="email" 
                        placeholder="Your Email" 
                        required 
                        pattern=".+@.+\..+"
                        title="Please enter a valid email address."
                    />
                    <FormInput label="Designation (Optional)" id="designation" placeholder="Your Designation" />
                    
                    <FormSelect label="Country" id="country" required defaultValue="Indonesia">
                         {countries.map(country => (
                            <option key={country.code} value={country.name}>{country.name}</option>
                        ))}
                    </FormSelect>

                    <MobileInput label="Mobile Number" id="mobile" required />
                    
                    <FormSelect label="Business Type" id="business-type" required>
                        <option>Distributor</option>
                        <option>Manufacturer</option>
                        <option>Retailer</option>
                    </FormSelect>

                    <FormSelect label="Market Sector of Interest" id="market-sector" required>
                        <option>Select Market Sector of Interest</option>
                        <option>Food & Beverage</option>
                        <option>Cosmetics & Personal Care</option>
                        <option>Fashion</option>
                        <option>Tourism & Hospitality</option>
                    </FormSelect>
                    
                    <div className="md:col-span-2 text-center mt-8">
                         <button 
                            type="submit" 
                            className="bg-gradient-to-r from-[#F8E07A] to-[#AB6E2B] text-white font-semibold py-3 px-20 rounded-lg text-base hover:opacity-90 transition-all shadow-lg uppercase tracking-wider"
                         >
                            REGISTER AS EXHIBITOR
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default RegistrationForm;
