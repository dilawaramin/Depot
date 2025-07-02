import React, { useState } from 'react';
import { ArrowRight, Filter } from 'lucide-react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'mulch', name: 'Mulch' },
    { id: 'stone', name: 'Stone & Gravel' },
    { id: 'soil', name: 'Soils & Compost' },
    { id: 'plants', name: 'Plants' },
    { id: 'hardscape', name: 'Hardscape' },
    { id: 'tools', name: 'Tools & Supplies' }
  ];

  const products = [
    {
      title: "Premium Hardwood Mulch",
      category: "mulch",
      description: "Natural hardwood mulch that enriches soil and suppresses weeds while maintaining moisture.",
      image: "https://images.pexels.com/photos/4505458/pexels-photo-4505458.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      features: ["100% Natural", "Weed Suppression", "Moisture Retention", "Rich Brown Color"],
      price: "Starting at $35/yard"
    },
    {
      title: "Cedar Mulch",
      category: "mulch",
      description: "Aromatic cedar mulch that naturally repels insects while providing excellent ground cover.",
      image: "https://images.pexels.com/photos/4505458/pexels-photo-4505458.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      features: ["Insect Repellent", "Long Lasting", "Pleasant Aroma", "Natural Preservatives"],
      price: "Starting at $42/yard"
    },
    {
      title: "Colored Mulch",
      category: "mulch",
      description: "Vibrant colored mulch available in red, black, and brown to complement any landscape design.",
      image: "https://images.pexels.com/photos/4505458/pexels-photo-4505458.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      features: ["Multiple Colors", "Fade Resistant", "Uniform Coverage", "Enhanced Curb Appeal"],
      price: "Starting at $38/yard"
    },
    {
      title: "River Rock",
      category: "stone",
      description: "Smooth, rounded stones perfect for drainage, pathways, and decorative landscaping.",
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      features: ["Various Sizes", "Natural Colors", "Excellent Drainage", "Low Maintenance"],
      price: "Starting at $45/ton"
    },
    {
      title: "Crushed Granite",
      category: "stone",
      description: "Durable crushed granite ideal for driveways, walkways, and base material for pavers.",
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      features: ["High Durability", "Compacts Well", "Weather Resistant", "Multiple Grades"],
      price: "Starting at $32/ton"
    },
    {
      title: "Pea Gravel",
      category: "stone",
      description: "Small, smooth stones perfect for pathways, drainage, and decorative applications.",
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      features: ["Uniform Size", "Easy to Walk On", "Good Drainage", "Natural Appearance"],
      price: "Starting at $40/ton"
    },
    {
      title: "Premium Topsoil",
      category: "soil",
      description: "Rich, screened topsoil perfect for new lawns, gardens, and planting beds.",
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      features: ["Nutrient Rich", "Well Screened", "pH Balanced", "Organic Matter"],
      price: "Starting at $28/yard"
    },
    {
      title: "Organic Compost",
      category: "soil",
      description: "Fully composted organic matter that improves soil structure and provides nutrients.",
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      features: ["100% Organic", "Improves Soil", "Slow Release Nutrients", "Environmentally Friendly"],
      price: "Starting at $35/yard"
    },
    {
      title: "Potting Mix",
      category: "soil",
      description: "Premium potting mix designed for container gardening and raised beds.",
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      features: ["Container Ready", "Excellent Drainage", "Nutrient Enriched", "Lightweight"],
      price: "Starting at $3.50/bag"
    },
    {
      title: "Native Perennials",
      category: "plants",
      description: "Hardy native plants that thrive in local conditions with minimal maintenance.",
      image: "https://images.pexels.com/photos/226610/pexels-photo-226610.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      features: ["Drought Tolerant", "Wildlife Friendly", "Low Maintenance", "Seasonal Interest"],
      price: "Starting at $12/plant"
    },
    {
      title: "Flowering Shrubs",
      category: "plants",
      description: "Beautiful flowering shrubs that provide color and structure to your landscape.",
      image: "https://images.pexels.com/photos/226610/pexels-photo-226610.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      features: ["Seasonal Blooms", "Various Sizes", "Attracts Pollinators", "Year-Round Interest"],
      price: "Starting at $25/plant"
    },
    {
      title: "Shade Trees",
      category: "plants",
      description: "Mature shade trees that provide immediate impact and long-term value.",
      image: "https://images.pexels.com/photos/226610/pexels-photo-226610.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      features: ["Instant Shade", "Energy Savings", "Property Value", "Various Species"],
      price: "Starting at $150/tree"
    },
    {
      title: "Concrete Pavers",
      category: "hardscape",
      description: "Durable concrete pavers in various styles and colors for patios and walkways.",
      image: "https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      features: ["Multiple Styles", "Durable", "Easy Installation", "Color Options"],
      price: "Starting at $2.50/sq ft"
    },
    {
      title: "Natural Stone",
      category: "hardscape",
      description: "Beautiful natural stone for walls, patios, and architectural features.",
      image: "https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      features: ["Unique Character", "Long Lasting", "Natural Beauty", "Various Types"],
      price: "Starting at $8/sq ft"
    },
    {
      title: "Retaining Wall Blocks",
      category: "hardscape",
      description: "Engineered blocks for building attractive and functional retaining walls.",
      image: "https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      features: ["Easy Installation", "Structural Integrity", "Multiple Textures", "Interlocking Design"],
      price: "Starting at $4.25/block"
    },
    {
      title: "Professional Hand Tools",
      category: "tools",
      description: "High-quality hand tools designed for professional landscapers and serious gardeners.",
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      features: ["Professional Grade", "Ergonomic Design", "Durable Construction", "Lifetime Warranty"],
      price: "Starting at $25/tool"
    },
    {
      title: "Irrigation Supplies",
      category: "tools",
      description: "Complete irrigation systems and components for efficient water management.",
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      features: ["Water Efficient", "Easy Installation", "Professional Grade", "Complete Systems"],
      price: "Starting at $15/component"
    },
    {
      title: "Organic Fertilizers",
      category: "tools",
      description: "Natural fertilizers that feed your plants while improving soil health.",
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      features: ["100% Organic", "Slow Release", "Soil Building", "Environmentally Safe"],
      price: "Starting at $18/bag"
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-800 to-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Premium Products</h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
            From foundational materials to finishing touches, we supply everything needed 
            to create exceptional outdoor spaces that exceed expectations.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Browse by Category</h2>
            <div className="flex items-center space-x-2 text-gray-600">
              <Filter className="w-5 h-5" />
              <span>{filteredProducts.length} Products</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-green-700 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div key={index} className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {product.price}
                  </div>
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
                  
                  <button className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                    <span>Get Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Materials CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-green-50 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Need Custom Materials?</h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              We work with contractors and designers to source specialized materials for unique projects. 
              Contact us to discuss your specific requirements and get a custom quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Request Custom Quote
              </button>
              <button className="border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Speak with Expert
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;