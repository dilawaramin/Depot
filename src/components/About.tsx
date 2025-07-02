import React from 'react';
import { Users, TreePine, Truck, Star } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Trusted Partner in
              <span className="block text-green-700">Landscape Excellence</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              For over 25 years, GreenScape Supply has been the premier destination for professional 
              landscapers and homeowners seeking the highest quality materials for their outdoor projects.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From premium mulches and decorative stones to nutrient-rich soils and seasonal plants, 
              we provide everything you need to create stunning landscapes that stand the test of time.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-700 mb-2">25+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-700 mb-2">5000+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-700 mb-2">50+</div>
                <div className="text-gray-600">Product Varieties</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-700 mb-2">100%</div>
                <div className="text-gray-600">Quality Guarantee</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
                  alt="Landscape materials" 
                  className="w-full h-48 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
                <img 
                  src="https://images.pexels.com/photos/226610/pexels-photo-226610.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
                  alt="Garden supplies" 
                  className="w-full h-32 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img 
                  src="https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
                  alt="Professional landscaping" 
                  className="w-full h-32 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
                <img 
                  src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
                  alt="Quality materials" 
                  className="w-full h-48 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
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
  );
};

export default About;