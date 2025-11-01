import React, { useState } from 'react';
import { MapPin, Phone, Clock, Mail, Send, User, MessageSquare } from 'lucide-react';
import { Helmet } from "react-helmet-async";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Thank you for your message! We'll get back to you soon.");
      setFormData({ name: '', email: '', phone: '', projectType: '', message: '' });
    } else {
      alert("Oops! Something went wrong. Please try again.");
    }
  } catch (error) {
    console.error(error);
    alert("Network error. Please try again.");
  }
};


  return (

    <>
      <Helmet>
        <title>Contact Us | The Dirt Depot</title>
        <meta
          name="description"
          content="Get in touch with The Dirt Depot. Visit our supply yard, call (905) 689-8787, or send us a message for expert advice and landscaping material orders."
        />
        <meta property="og:title" content="Contact The Dirt Depot" />
        <meta property="og:description" content="Visit, call, or email The Dirt Depot for landscaping materials and expert advice." />
        <meta property="og:image" content="/images/logo.jpg" />
        <meta property="og:url" content="https://thedirtdepot.com/contact" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-800 to-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
            Visit our supply yard, get expert advice, or arrange delivery. 
            Our team is ready to help with projects of any size.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-lg">Visit Our Yard</h3>
                    <p className="text-gray-600 mb-2">
                      163 Hwy 5 West<br />
                      Dundas, ON L9H 5E2
                    </p>
                    <p className="text-sm text-gray-500">
                      Located in the heart of the landscaping district with easy access and ample parking.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-lg">Call Us</h3>
                    <p className="text-gray-600 mb-2">(905) 689-8787</p>
                    <p className="text-sm text-gray-500">
                      Speak directly with our knowledgeable staff for immediate assistance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-lg">Email Us</h3>
                    <p className="text-gray-600 mb-2">info@thedirtdepot.com</p>
                    <p className="text-sm text-gray-500">
                      Send us your questions or project details for a detailed response.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-lg">Business Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                      <p>Saturday: 8:00 AM - 3:00 PM</p>
                      <p>Sunday: CLOSED</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services */}
              {/* <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
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
              </div> */}
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="Your full name"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        <option value="">Select project type</option>
                        <option value="residential">Residential Landscaping</option>
                        <option value="commercial">Commercial Project</option>
                        <option value="hardscape">Hardscape Installation</option>
                        <option value="maintenance">Landscape Maintenance</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                        placeholder="Tell us about your project, materials needed, or any questions you have..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-700 hover:bg-green-800 text-white py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Find Our Location</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conveniently located with easy access for pickup and delivery throughout the region.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            {/* Embedded Google Map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.661573678884!2d-79.9608!3d43.2668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c9c8d44cbbd7f%3A0x2e7e8c3f62c5ef3f!2s163%20ON-5%2C%20Dundas%2C%20ON%20L9H%205E2!5e0!3m2!1sen!2sca!4v1700000000000"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Get Directions Button */}
          <div className="text-center mt-8">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=163+Hwy+5+West+Dundas+ON+L9H+5E2"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Whether you're planning a small garden project or a large commercial installation, 
            our team is here to help you succeed. Contact us today to discuss your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Call (905) 689-8787
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-700 transition-colors">
              Request Quote
            </button>
          </div>
        </div>
      </section>
    </div>
    </>

  );
};

export default Contact;
