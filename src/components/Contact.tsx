import React from 'react';
import { MapPin, Phone, Clock, Mail, Truck, CreditCard } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Visit Our Supply Yard
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stop by to see our materials in person, get expert advice, or arrange delivery. 
            Our team is ready to help with projects of any size.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="bg-green-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600">
                      123 Garden Way<br />
                      Landscape City, LC 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">info@greenscapesupply.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Hours</h4>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 7:00 AM - 6:00 PM</p>
                      <p>Saturday: 8:00 AM - 5:00 PM</p>
                      <p>Sunday: 9:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <Truck className="w-12 h-12 text-green-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Delivery Service</h4>
                <p className="text-sm text-gray-600">Free delivery on orders over $200 within 15 miles</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <CreditCard className="w-12 h-12 text-green-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Payment Options</h4>
                <p className="text-sm text-gray-600">Cash, credit cards, and contractor accounts accepted</p>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-gray-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Find Us Here</h3>
                <p className="text-gray-600 mb-4">
                  Located in the heart of the landscaping district with easy access and ample parking.
                </p>
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  Get Directions
                </button>
              </div>
            </div>

            <div className="mt-8 bg-green-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="mb-6 text-green-100 leading-relaxed">
                Whether you're a professional contractor or a weekend warrior, we're here to help you 
                find the perfect materials for your project. Visit us today or call for a quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Call Now
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-700 transition-colors">
                  Request Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;