import React, { useState } from 'react';
import { X, Filter } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'residential', name: 'Residential' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'hardscape', name: 'Hardscape' },
    { id: 'materials', name: 'Materials' },
    { id: 'plants', name: 'Plants' }
  ];

  const images = [
    {
      src: "https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "Modern Backyard Transformation",
      category: "residential",
      description: "Complete backyard renovation featuring natural stone patios, premium mulch beds, and native plantings."
    },
    {
      src: "https://images.pexels.com/photos/226610/pexels-photo-226610.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "Corporate Headquarters Landscaping",
      category: "commercial",
      description: "Professional commercial landscaping with drought-tolerant plants and decorative stone features."
    },
    {
      src: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "Elegant Garden Design",
      category: "residential",
      description: "Sophisticated residential garden featuring premium hardwood mulch and seasonal flowering plants."
    },
    {
      src: "https://images.pexels.com/photos/4505458/pexels-photo-4505458.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "Premium Mulch Installation",
      category: "materials",
      description: "Fresh installation of our premium hardwood mulch creating clean, defined planting beds."
    },
    {
      src: "https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "Natural Stone Patio",
      category: "hardscape",
      description: "Beautiful natural stone patio installation with complementary landscape plantings."
    },
    {
      src: "https://images.pexels.com/photos/226610/pexels-photo-226610.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "Seasonal Plant Display",
      category: "plants",
      description: "Vibrant seasonal plantings showcasing our selection of annuals and perennials."
    },
    {
      src: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "River Rock Drainage Solution",
      category: "materials",
      description: "Functional and attractive river rock installation providing excellent drainage and visual appeal."
    },
    {
      src: "https://images.pexels.com/photos/4505458/pexels-photo-4505458.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "Retaining Wall Project",
      category: "hardscape",
      description: "Engineered retaining wall using our premium blocks with integrated landscape design."
    },
    {
      src: "https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "Front Yard Makeover",
      category: "residential",
      description: "Complete front yard transformation featuring decorative stone, premium soil, and native plants."
    },
    {
      src: "https://images.pexels.com/photos/226610/pexels-photo-226610.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "Shopping Center Landscaping",
      category: "commercial",
      description: "Large-scale commercial project using our bulk materials and professional-grade plants."
    },
    {
      src: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "Decorative Stone Pathway",
      category: "hardscape",
      description: "Elegant pathway created with our premium decorative stone and professional installation."
    },
    {
      src: "https://images.pexels.com/photos/4505458/pexels-photo-4505458.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "Organic Compost Application",
      category: "materials",
      description: "Soil improvement project using our premium organic compost for healthier plant growth."
    }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(image => image.category === selectedCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-800 to-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Project Gallery</h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
            See how our premium materials transform ordinary spaces into extraordinary landscapes. 
            These projects showcase the quality and versatility of our products.
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
              <span>{filteredImages.length} Projects</span>
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

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-2"
                onClick={() => setSelectedImage(image.src)}
              >
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-sm font-semibold bg-green-600 px-3 py-1 rounded-full mb-2 inline-block">
                      {categories.find(cat => cat.id === image.category)?.name}
                    </div>
                    <h3 className="text-lg font-bold mb-2">{image.title}</h3>
                    <p className="text-sm text-gray-200 leading-relaxed">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Create Your Own Masterpiece?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Let our premium materials and expert advice help you transform your outdoor space. 
            From concept to completion, we're here to support your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors hover:scale-105 transform duration-300">
              Start Your Project
            </button>
            <button className="border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Get Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={selectedImage} 
              alt="Gallery image" 
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;