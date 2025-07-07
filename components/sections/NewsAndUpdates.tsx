import React from 'react';

const articles = [
    {
        image: 'https://images.unsplash.com/photo-1579202773197-a72d3a1f01dc?q=80&w=800&auto=format&fit=crop',
        category: 'Market Trends',
        date: 'June 24, 2024',
        title: 'Indonesia\'s Halal Economy Set for Exponential Growth in 2025',
        excerpt: 'With government support and a growing middle class, Indonesia\'s halal sector is poised to become a global leader, attracting significant foreign investment and fostering innovation across various industries.'
    },
    {
        image: 'https://images.unsplash.com/photo-1639755498265-5853de1aa8a8?q=80&w=800&auto=format&fit=crop',
        category: 'Technology',
        date: 'June 22, 2024',
        title: 'How Blockchain is Revolutionizing Halal Supply Chain Transparency',
        excerpt: 'From farm to table, blockchain technology is providing consumers and regulators with unprecedented trust and verification in the halal food industry, ensuring authenticity every step of the way.'
    },
    {
        image: 'https://images.unsplash.com/photo-1599451199342-436035414853?q=80&w=800&auto=format&fit=crop',
        category: 'Cosmetics',
        date: 'June 20, 2024',
        title: 'Global Demand for Halal Cosmetics Surges, Opening New Export Avenues',
        excerpt: 'The clean and ethical appeal of halal cosmetics is capturing a global audience, creating exciting opportunities for Indonesian brands to expand their reach and tap into a multi-billion dollar market.'
    }
];

const ArticleCard = ({ article }: { article: typeof articles[0] }) => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col">
        <a href="https://news.halalexpoindonesia.com" target="_blank" rel="noopener noreferrer" className="cursor-pointer flex flex-col flex-grow">
            <div className="relative">
                <img src={article.image} alt={article.title} className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute top-4 left-4 bg-gradient-to-r from-[#E3C98C] to-[#BE9A64] text-white text-xs font-bold uppercase px-3 py-1 rounded-full">{article.category}</div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 h-20">{article.title}</h3>
                <p className="text-gray-600 font-normal leading-relaxed">{article.excerpt}</p>
                 <span className="mt-auto pt-4 inline-block font-semibold text-[#BE9A64] group-hover:text-[#a58555] transition-colors self-start">
                    Read More →
                </span>
            </div>
        </a>
    </div>
);

const NewsAndUpdates = () => (
    <section id="news" className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
                 <h2 className="text-5xl font-semibold text-gray-900 leading-tight">
                    News & Updates
                </h2>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                    Stay informed with the latest trends, insights, and stories from the global halal industry.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article, index) => (
                    <ArticleCard key={index} article={article} />
                ))}
            </div>

            <div className="mt-20 text-center">
                <a 
                    href="https://news.halalexpoindonesia.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-[#F8E07A] to-[#AB6E2B] text-white font-semibold py-4 px-10 rounded-lg text-base hover:opacity-90 transition-all shadow-lg uppercase tracking-wider"
                >
                    Read More Articles
                </a>
            </div>
        </div>
    </section>
);

export default NewsAndUpdates;
