
import React, { useState } from 'react';
import { countries } from '../../data/countries';

const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/1yFIlXn9G0D56M7n2YdU3eT6DoCtVdmceUZDcpikqsws/formResponse";

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

const MobileInput = ({ label, id, required, value, onChange, countryCode, setCountryCode }: { label: string, id: string, required?: boolean, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, countryCode: string, setCountryCode: (v: string) => void }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-semibold text-gray-800 mb-1.5">
            {label}
            {required && <span className="text-red-500">*</span>}
        </label>
        <div className="flex items-center w-full bg-white border border-gray-400 rounded-md focus-within:ring-1 focus-within:ring-[#BE9A64] focus-within:border-[#BE9A64] transition-colors">
            <select
                aria-label="Country code"
                name="country-code"
                value={countryCode}
                onChange={e => setCountryCode(e.target.value)}
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
                value={value}
                onChange={onChange}
                className="w-full bg-transparent px-4 py-3 text-gray-900 placeholder-gray-400 font-normal focus:outline-none"
            />
        </div>
    </div>
);

const RegistrationForm = () => {
    const [form, setForm] = useState({
        contactName: '',
        companyName: '',
        email: '',
        designation: '',
        country: 'Indonesia',
        mobileNumber: '',
        businessType: '',
        marketSector: '',
    });
    const [countryCode, setCountryCode] = useState('+62');
    const [submitted, setSubmitted] = useState(false);

    // Add a timer to revert the thank you message after 5 seconds
    React.useEffect(() => {
        if (submitted) {
            const timer = setTimeout(() => setSubmitted(false), 5000);
            return () => clearTimeout(timer);
        }
    }, [submitted]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new URLSearchParams();
        formData.append('entry.1317044927', form.contactName);
        formData.append('entry.1866812893', form.companyName);
        formData.append('entry.1012080177', form.email);
        formData.append('entry.2131331762', form.designation);
        formData.append('entry.556139143', form.country);
        formData.append('entry.752113826', countryCode + form.mobileNumber);
        formData.append('entry.2077119445', form.businessType);
        formData.append('entry.151081516', form.marketSector);

        await fetch(GOOGLE_FORM_ACTION_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formData.toString(),
        });
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <section className="bg-white py-24">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-light text-gray-900 mb-6 tracking-wider">Thank you for registering!</h2>
                    <p className="text-lg text-gray-700">We have received your submission.</p>
                </div>
            </section>
        );
    }

    return (
        <section className="bg-white py-24">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-4xl font-light text-center text-gray-900 mb-12 tracking-wider">
                    REGISTER <span className="text-5xl font-semibold text-[#E3C98C]">AS AN EXHIBITOR</span> HERE
                </h2>
                <form className="grid md:grid-cols-2 gap-x-8 gap-y-6" onSubmit={handleSubmit}>
                    <FormInput label="Contact Name" id="contactName" name="contactName" placeholder="Your Contact Name" required value={form.contactName} onChange={handleChange} />
                    <FormInput label="Company Name" id="companyName" name="companyName" placeholder="Your Company Name" required value={form.companyName} onChange={handleChange} />
                    <FormInput 
                        label="Email" 
                        id="email" 
                        name="email"
                        type="email" 
                        placeholder="Your Email" 
                        required 
                        pattern=".+@.+\..+"
                        title="Please enter a valid email address."
                        value={form.email}
                        onChange={handleChange}
                    />
                    <FormInput label="Designation (Optional)" id="designation" name="designation" placeholder="Your Designation" value={form.designation} onChange={handleChange} />
                    <FormSelect label="Country" id="country" name="country" required value={form.country} onChange={handleChange} defaultValue="Indonesia">
                        {countries.map(country => (
                            <option key={country.code} value={country.name}>{country.name}</option>
                        ))}
                    </FormSelect>
                    <MobileInput label="Mobile Number" id="mobileNumber" required value={form.mobileNumber} onChange={handleChange} countryCode={countryCode} setCountryCode={setCountryCode} />
                    <FormSelect label="Business Type" id="businessType" name="businessType" required value={form.businessType} onChange={handleChange}>
                        <option value="">Select Business Type</option>
                        <option>Distributor</option>
                        <option>Manufacturer</option>
                        <option>Retailer</option>
                    </FormSelect>
                    <FormSelect label="Market Sector of Interest" id="marketSector" name="marketSector" required value={form.marketSector} onChange={handleChange}>
                        <option value="">Select Market Sector of Interest</option>
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
