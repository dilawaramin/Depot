import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Clock, Award, Users, TreePine, Star } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-800/80 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')"
          }}
        ></div>
        
        <div className="relative z-20 container mx-auto px-4 py-32">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Premium Landscape
              <span className="block text-green-300">Materials & Supply</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8 leading-relaxed max-w-2xl">
              Transform your outdoor spaces with our high-quality mulch, stone, soil, and landscaping supplies. 
              Professional-grade materials for contractors and homeowners alike.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link 
                to="/products"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <span>View Our Products</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-green-800 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                Get Quote Today
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Flat-Rate Delivery</h3>
                  <p className="text-green-200">On orders over $200</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Fast Service</h3>
                  <p className="text-green-200">Same day pickup available</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Quality Guaranteed</h3>
                  <p className="text-green-200">Premium materials only</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose The Dirt Depot?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              With over 25 years of experience, we're your trusted partner for premium landscape materials 
              and exceptional service that exceeds expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <Users className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600">Knowledgeable staff ready to help with your project needs</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <TreePine className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sustainable</h3>
              <p className="text-gray-600">Eco-friendly materials sourced from responsible suppliers</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <Truck className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Reliable delivery service to get materials when you need them</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <Star className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Top Quality</h3>
              <p className="text-gray-600">Premium materials that exceed industry standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our most popular landscape materials that help create stunning outdoor spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/4505458/pexels-photo-4505458.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                  alt="Premium Mulch"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                  Premium Mulch
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Enhance your gardens with our selection of organic mulches including hardwood, cedar, and colored varieties.
                </p>
                <Link to="/products" className="flex items-center space-x-2 text-green-700 font-semibold hover:text-green-800 transition-colors group">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                  alt="Decorative Stone"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                  Decorative Stone
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Beautiful stones and aggregates perfect for pathways, driveways, and decorative landscaping features.
                </p>
                <Link to="/products" className="flex items-center space-x-2 text-green-700 font-semibold hover:text-green-800 transition-colors group">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/226610/pexels-photo-226610.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                  alt="Seasonal Plants"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                  Seasonal Plants
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Fresh, healthy plants including perennials, annuals, shrubs, and trees for every season.
                </p>
                <Link to="/products" className="flex items-center space-x-2 text-green-700 font-semibold hover:text-green-800 transition-colors group">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link 
              to="/products"
              className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors hover:scale-105 transform duration-300"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-green-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Landscape?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Whether you're a professional contractor or a weekend warrior, we're here to help you 
            find the perfect materials for your project. Visit us today or call for a quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Visit Our Yard
            </Link>
            <Link 
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-700 transition-colors"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;