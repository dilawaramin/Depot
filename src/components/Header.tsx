// Header.OpaqueThenScrolledSemi.tsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll(); // set initial state if page is loaded scrolled
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/products', label: 'Products' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/yardage-calculator', label: 'Yardage' },
    { path: '/contact', label: 'Contact' },
  ];

  const linkClass = (path: string) =>
    `font-medium text-base md:text-lg leading-6 transition-colors ${
      location.pathname === path ? 'text-white font-semibold' : 'text-white/95 hover:text-white'
    }`;

  // Classes used for header and mobile menu background:
  const topBgClass = 'bg-green-700';      // fully opaque at top
  const scrolledBgClass = 'bg-green-700/80'; // slightly more transparent when scrolled

  return (
    <>
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? scrolledBgClass : topBgClass}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center space-x-3">
              <div className="h-10 w-auto rounded-md p-1 bg-white/95 shadow-sm flex items-center">
                <img src="/images/logo.jpg" alt="The Dirt Depot Logo" className="h-8 object-contain" />
              </div>
              <span className="text-white font-semibold hidden md:inline">The Dirt Depot</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link key={item.path} to={item.path} className={linkClass(item.path)}>
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Contact Info (right side) */}
            <div className="hidden lg:flex flex-col items-end text-sm text-white/95">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>(905) 689-8787</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>163 Hwy 5 West</span>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
              aria-label="toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`lg:hidden border-green-600`}>
            <div className="px-4 py-6 space-y-4 text-white">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  /* === ONLY CHANGE ===:
                     match original spacing/size/position: text-base + py-2 + full-width left-align */
                  className={`block w-full text-left font-medium text-base py-2 transition-colors ${
                    location.pathname === item.path ? 'text-white font-semibold' : 'text-white/95 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <div className="pt-4 border-t border-green-600 text-sm text-white/90">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>(905) 689-8787</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>163 Hwy 5 West</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;






// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Menu, X, Phone, MapPin } from 'lucide-react';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const isActive = (path: string) => {
//     return location.pathname === path;
//   };

//   return (
//     <header className={`fixed w-full z-50 transition-all duration-300 ${
//       isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
//     }`}>
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-20">
//           <Link to="/" className="flex items-center space-x-2">
//             <div className="h-10 rounded-lg overflow-hidden flex items-center justify-center">
//               <img 
//                 src="/images/logo.jpg" 
//                 alt="The Dirt Depot Logo" 
//                 className="w-full h-full object-contain"
//               />
//             </div>
//           </Link>

//           {/* Desktop Nav */}
//           <nav className="hidden lg:flex items-center space-x-8">
//             <Link 
//               to="/" 
//               className={`font-medium transition-colors ${
//                 isActive('/') ? 'text-green-700' : 'text-gray-700 hover:text-green-700'
//               }`}
//             >
//               Home
//             </Link>
//             <Link 
//               to="/about" 
//               className={`font-medium transition-colors ${
//                 isActive('/about') ? 'text-green-700' : 'text-gray-700 hover:text-green-700'
//               }`}
//             >
//               About
//             </Link>
//             <Link 
//               to="/products" 
//               className={`font-medium transition-colors ${
//                 isActive('/products') ? 'text-green-700' : 'text-gray-700 hover:text-green-700'
//               }`}
//             >
//               Products
//             </Link>
//             <Link 
//               to="/gallery" 
//               className={`font-medium transition-colors ${
//                 isActive('/gallery') ? 'text-green-700' : 'text-gray-700 hover:text-green-700'
//               }`}
//             >
//               Gallery
//             </Link>
//             <Link 
//               to="/yardage-calculator" 
//               className={`font-medium transition-colors ${
//                 isActive('/yardage-calculator') ? 'text-green-700' : 'text-gray-700 hover:text-green-700'
//               }`}
//             >
//               Yardage Calculator
//             </Link>
//             <Link 
//               to="/contact" 
//               className={`font-medium transition-colors ${
//                 isActive('/contact') ? 'text-green-700' : 'text-gray-700 hover:text-green-700'
//               }`}
//             >
//               Contact
//             </Link>
//           </nav>

//           {/* Contact Info (right side) */}
//           <div className="hidden lg:flex flex-col items-end text-sm text-gray-600">
//             <div className="flex items-center space-x-2">
//               <Phone className="w-4 h-4" />
//               <span>(905) 689-8787</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <MapPin className="w-4 h-4" />
//               <span>163 Hwy 5 West</span>
//             </div>
//           </div>

//           {/* Mobile Menu Toggle */}
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
//           >
//             {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="lg:hidden bg-white border-t border-gray-200">
//             <div className="px-4 py-6 space-y-4">
//               <Link 
//                 to="/" 
//                 onClick={() => setIsMenuOpen(false)}
//                 className={`block w-full text-left font-medium py-2 transition-colors ${
//                   isActive('/') ? 'text-green-700' : 'text-gray-700 hover:text-green-700'
//                 }`}
//               >
//                 Home
//               </Link>
//               <Link 
//                 to="/about" 
//                 onClick={() => setIsMenuOpen(false)}
//                 className={`block w-full text-left font-medium py-2 transition-colors ${
//                   isActive('/about') ? 'text-green-700' : 'text-gray-700 hover:text-green-700'
//                 }`}
//               >
//                 About
//               </Link>
//               <Link 
//                 to="/products" 
//                 onClick={() => setIsMenuOpen(false)}
//                 className={`block w-full text-left font-medium py-2 transition-colors ${
//                   isActive('/products') ? 'text-green-700' : 'text-gray-700 hover:text-green-700'
//                 }`}
//               >
//                 Products
//               </Link>
//               <Link 
//                 to="/gallery" 
//                 onClick={() => setIsMenuOpen(false)}
//                 className={`block w-full text-left font-medium py-2 transition-colors ${
//                   isActive('/gallery') ? 'text-green-700' : 'text-gray-700 hover:text-green-700'
//                 }`}
//               >
//                 Gallery
//               </Link>
//               <Link 
//                 to="/yardage-calculator" 
//                 onClick={() => setIsMenuOpen(false)}
//                 className={`block w-full text-left font-medium py-2 transition-colors ${
//                   isActive('/yardage-calculator') ? 'text-green-700' : 'text-gray-700 hover:text-green-700'
//                 }`}
//               >
//                 Yardage Calculator
//               </Link>
//               <Link 
//                 to="/contact" 
//                 onClick={() => setIsMenuOpen(false)}
//                 className={`block w-full text-left font-medium py-2 transition-colors ${
//                   isActive('/contact') ? 'text-green-700' : 'text-gray-700 hover:text-green-700'
//                 }`}
//               >
//                 Contact
//               </Link>
              
//               {/* Mobile Contact Info */}
//               <div className="pt-4 border-t border-gray-200 space-y-2">
//                 <div className="flex items-center space-x-2 text-sm text-gray-600">
//                   <Phone className="w-4 h-4" />
//                   <span>(905) 689-8787</span>
//                 </div>
//                 <div className="flex items-center space-x-2 text-sm text-gray-600">
//                   <MapPin className="w-4 h-4" />
//                   <span>163 Hwy 5 West</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;
