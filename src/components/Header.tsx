import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-green-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">The Dirt Depot</h1>
              <p className="text-sm text-gray-600">Premium Landscape Materials</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors ${
                isActive('/') ? 'text-green-700' : 'text-gray-700 hover:text-green-700'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition-colors ${
                isActive('/about') ? 'text-green-700' : 'text-gray-700 hover:text-green-700'
              }`}
            >
              About
            </Link>
            <Link 
              to="/products" 
              className={`font-medium transition-colors ${
                isActive('/products') ? 'text-green-700' : 'text-gray-700 hover:text-green-700'
              }`}
            >
              Products
            </Link>
            <Link 
              to="/gallery" 
              className={`font-medium transition-colors ${
                isActive('/gallery') ? 'text-green-700' : 'text-gray-700 hover:text-green-700'
              }`}
            >
              Gallery
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium transition-colors ${
                isActive('/contact') ? 'text-green-700' : 'text-gray-700 hover:text-green-700'
              }`}
            >
              Contact
            </Link>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <span>(905) 689-8787</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <MapPin className="w-4 h-4" />
              <span>163 Hwy 5 West</span>
            </div>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-6 space-y-4">
              <Link 
                to="/" 
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left font-medium py-2 transition-colors ${
                  isActive('/') ? 'text-green-700' : 'text-gray-700 hover:text-green-700'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left font-medium py-2 transition-colors ${
                  isActive('/about') ? 'text-green-700' : 'text-gray-700 hover:text-green-700'
                }`}
              >
                About
              </Link>
              <Link 
                to="/products" 
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left font-medium py-2 transition-colors ${
                  isActive('/products') ? 'text-green-700' : 'text-gray-700 hover:text-green-700'
                }`}
              >
                Products
              </Link>
              <Link 
                to="/gallery" 
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left font-medium py-2 transition-colors ${
                  isActive('/gallery') ? 'text-green-700' : 'text-gray-700 hover:text-green-700'
                }`}
              >
                Gallery
              </Link>
              <Link 
                to="/contact" 
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left font-medium py-2 transition-colors ${
                  isActive('/contact') ? 'text-green-700' : 'text-gray-700 hover:text-green-700'
                }`}
              >
                Contact
              </Link>
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>123 Garden Way</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;