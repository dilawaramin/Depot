import React from 'react';
import { ArrowRight } from 'lucide-react';

const Products = () => {
  const products = [
    {
      title: "Premium Mulch",
      description: "Enhance your gardens with our selection of organic mulches including hardwood, cedar, and colored varieties.",
      image: "https://images.pexels.com/photos/4505458/pexels-photo-4505458.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      features: ["Organic & Natural", "Weed Suppression", "Moisture Retention", "Multiple Colors"]
    },
    {
      title: "Decorative Stone",
      description: "Beautiful stones and aggregates perfect for pathways, driveways, and decorative landscaping features.",
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      features: ["River Rock", "Crushed Granite", "Pea Gravel", "Flagstone"]
    },
    {
      title: "Premium Soils",
      description: "Nutrient-rich topsoil, compost, and specialized growing mediums for healthy plant growth.",
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      features: ["Organic Compost", "Topsoil Blends", "Potting Mixes", "Sand & Fill"]
    },
    {
      title: "Seasonal Plants",
      description: "Fresh, healthy plants including perennials, annuals, shrubs, and trees for every season.",
      image: "https://images.pexels.com/photos/226610/pexels-photo-226610.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      features: ["Native Plants", "Flowering Perennials", "Shade Trees", "Seasonal Annuals"]
    },
    {
      title: "Hardscape Materials",
      description: "Everything needed for patios, retaining walls, and outdoor living spaces.",
      image: "https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      features: ["Pavers & Blocks", "Natural Stone", "Retaining Walls", "Fire Pit Kits"]
    },
    {
      title: "Tools & Supplies",
      description: "Professional-grade tools and supplies for landscaping and garden maintenance.",
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      features: ["Hand Tools", "Power Equipment", "Irrigation", "Fertilizers"]
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Premium Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From foundational materials to finishing touches, we supply everything needed 
            to create exceptional outdoor spaces that exceed expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className="flex items-center space-x-2 text-green-700 font-semibold hover:text-green-800 transition-colors group">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-green-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Need Custom Materials?</h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              We work with contractors and designers to source specialized materials for unique projects. 
              Contact us to discuss your specific requirements.
            </p>
            <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors hover:scale-105 transform duration-300">
              Request Custom Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;