import React from 'react';
import { ArrowRight } from 'lucide-react';
import products from '../data/soils.json';

type Product = {
  type: string;
  title: string;
  description: string;
  image: string;
};

export const Products: React.FC<{ filterType?: string }> = ({ filterType }) => {
  // if filterType is supplied (e.g. "soil" or "mulch"), only show those
  const list = filterType
    ? (products as Product[]).filter(p => p.type === filterType)
    : (products as Product[]);

  return (
    <section id="products" className="py-20 bg-white">
      {/* ...header remains the same... */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {list.map((p, i) => (
          <div key={i} className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2">
            <div className="relative overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                {p.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {p.description}
              </p>
              <button className="flex items-center space-x-2 text-green-700 font-semibold hover:text-green-800 transition-colors group">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* ...CTA footer... */}
    </section>
  );
};
