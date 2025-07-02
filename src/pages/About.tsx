import React from 'react';
import { Users, TreePine, Truck, Star, Award, Clock, Shield } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-800 to-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About GreenScape Supply</h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
            Your trusted partner in landscape excellence for over 25 years, providing premium materials 
            and exceptional service to professionals and homeowners alike.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 1999, GreenScape Supply began as a small family business with a simple mission: 
                to provide the highest quality landscape materials with unmatched customer service. What started 
                in a modest yard has grown into the region's premier destination for professional landscapers 
                and discerning homeowners.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Over the years, we've built lasting relationships with suppliers, contractors, and customers 
                who trust us to deliver excellence in every load of mulch, every ton of stone, and every 
                plant we provide. Our commitment to quality and service has made us the go-to source for 
                landscape materials in the community.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Today, we continue to honor our founding principles while embracing innovation and 
                sustainability in everything we do. From our eco-friendly sourcing practices to our 
                modern delivery fleet, we're constantly evolving to better serve our customers and 
                protect the environment we all share.
              </p>
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
                    src="https://images.pexels.com/photos/4505458/pexels-photo-4505458.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
                    alt="Quality materials" 
                    className="w-full h-48 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Impact by the Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              These numbers represent more than statistics—they represent relationships built, 
              projects completed, and landscapes transformed.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-700 mb-2">25+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-700 mb-2">5000+</div>
              <div className="text-gray-600 font-medium">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-700 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Product Varieties</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-700 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Quality Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              These principles guide everything we do, from sourcing materials to serving customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <Star className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality First</h3>
              <p className="text-gray-600">We source only the finest materials that meet our rigorous standards for excellence.</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <Users className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Focus</h3>
              <p className="text-gray-600">Your success is our success. We're committed to helping you achieve your vision.</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <TreePine className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sustainability</h3>
              <p className="text-gray-600">We're committed to environmentally responsible practices and sustainable sourcing.</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <Shield className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Integrity</h3>
              <p className="text-gray-600">Honest pricing, reliable service, and transparent communication in every interaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our knowledgeable staff brings decades of combined experience in landscaping, 
              horticulture, and customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-shadow duration-300">
              <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">JD</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">John Davis</h3>
              <p className="text-green-700 font-semibold mb-3">Owner & Founder</p>
              <p className="text-gray-600 leading-relaxed">
                With over 30 years in the landscaping industry, John founded GreenScape Supply 
                with a vision to provide unmatched quality and service.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-shadow duration-300">
              <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">SM</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sarah Martinez</h3>
              <p className="text-green-700 font-semibold mb-3">Operations Manager</p>
              <p className="text-gray-600 leading-relaxed">
                Sarah ensures smooth operations and maintains our high standards for quality 
                control and customer satisfaction.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-shadow duration-300">
              <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">MT</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mike Thompson</h3>
              <p className="text-green-700 font-semibold mb-3">Plant Specialist</p>
              <p className="text-gray-600 leading-relaxed">
                Mike's expertise in horticulture helps customers select the perfect plants 
                for their specific growing conditions and design goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Recognition & Certifications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our commitment to excellence has been recognized by industry organizations and customers alike.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-xl">
              <Award className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Best Landscape Supplier</h3>
              <p className="text-gray-600">Landscape Contractors Association - 2023</p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-xl">
              <TreePine className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sustainable Business</h3>
              <p className="text-gray-600">Green Business Certification - 2022</p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-xl">
              <Users className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Customer Choice</h3>
              <p className="text-gray-600">Local Business Awards - 2021, 2022, 2023</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;