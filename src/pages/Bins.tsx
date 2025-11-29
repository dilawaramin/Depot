// src/components/Bins.tsx
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Bins = () => {
  return (
    <>
      <Helmet>
        <title>Bins | The Dirt Depot</title>
        <meta
          name="description"
          content="Bruce's Bins — fast, reliable bin rentals for cleanups, construction, and landscaping."
        />
        <meta property="og:title" content="Bins | The Dirt Depot" />
        <meta property="og:description" content="Bruce's Bins — fast, reliable bin rentals." />
        <meta property="og:image" content="/images/logo.jpg" />
        <meta property="og:url" content="https://thedirtdepot.com/bins" />
      </Helmet>

      <div className="pt-20">
        <section className="py-20 bg-gradient-to-r from-green-800 to-green-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Bins & Rentals</h1>
            <p className="text-lg md:text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              We operate <strong>Bruce&apos;s Bins</strong>, our dedicated bin rental service for quick, easy disposal.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 lg:px-12">
            <div className="flex flex-col items-center gap-12">
              {/* Text content block */}
              <div className="text-center max-w-3xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Bruce&apos;s Bins</h2>
                <p className="text-gray-600 mb-6">
                  Order the right bin for your project and schedule delivery and pickup through our bin rental site.
                  We have sizes from 6 yards up to 35 yards! Check availability and pricing on Bruce&apos;s Bins.
                </p>
                <a
                  href="https://brucesbin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Visit Bruce&apos;s Bins
                </a>
              </div>

              {/* Image container block */}
              <div className="w-full max-w-5xl">
                {/* Updated grid classes for responsive stacking */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <img
                    src="/images/bins.webp"
                    alt="Bruce's Bins — driveway-safe rental bin"
                    className="w-full h-56 md:h-64 object-cover rounded-lg shadow-md"
                  />
                  <img
                    src="/images/bins2.webp"
                    alt="Bruce's Bins — on-site drop-off"
                    className="w-full h-56 md:h-64 object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Not sure which size you need?</h3>
            <p className="text-gray-600 mb-6">Call us at (905) 689-8787 and we’ll help you choose.</p>
            <Link
              to="/contact"
              className="inline-block border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Bins;

// // src/components/Bins.tsx
// import React from "react";
// import { Helmet } from "react-helmet-async";
// import { Link } from "react-router-dom";

// const Bins = () => {
//   return (
//     <>
//       <Helmet>
//         <title>Bins | The Dirt Depot</title>
//         <meta
//           name="description"
//           content="Bruce's Bins — fast, reliable bin rentals for cleanups, construction, and landscaping."
//         />
//         <meta property="og:title" content="Bins | The Dirt Depot" />
//         <meta property="og:description" content="Bruce's Bins — fast, reliable bin rentals." />
//         <meta property="og:image" content="/images/logo.jpg" />
//         <meta property="og:url" content="https://thedirtdepot.com/bins" />
//       </Helmet>

//       <div className="pt-20">
//         <section className="py-20 bg-gradient-to-r from-green-800 to-green-700 text-white">
//           <div className="container mx-auto px-4 text-center">
//             <h1 className="text-5xl md:text-6xl font-bold mb-4">Bins & Rentals</h1>
//             <p className="text-lg md:text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
//               We operate <strong>Bruce&apos;s Bins</strong>, our dedicated bin rental service for quick, easy disposal.
//             </p>
//           </div>
//         </section>

//         <section className="py-16 bg-white">
//           <div className="container mx-auto px-4 lg:px-12">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
//               <div>
//                 <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Bruce&apos;s Bins</h2>
//                 <p className="text-gray-600 text-center mb-4">
//                   Order the right bin for your project and schedule delivery and pickup through our bin rental site.
//                   We have sizes from 6 yards up to 35 yards! Check availability and pricing on Bruce&apos;s Bins.
//                 </p>

//                 {/* Center just the button within this column */}
//                 <div className="text-center">
//                   <a
//                     href="https://brucesbin.com/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-block bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
//                   >
//                     Visit Bruce&apos;s Bins
//                   </a>
//                 </div>
//               </div>

//               <div className="space-y-4">
//                 <div className="grid grid-cols-2 gap-2">
//                   <img
//                     src="/images/bins.webp"
//                     alt="Bruce's Bins — driveway-safe rental bin"
//                     className="w-full h-60 object-cover rounded-lg shadow"
//                   />
//                   <img
//                     src="/images/bins2.webp"
//                     alt="Bruce's Bins — on-site drop-off"
//                     className="w-full h-60 object-cover rounded-lg shadow"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="py-12 bg-gray-50">
//           <div className="container mx-auto px-4 text-center">
//             <h3 className="text-2xl font-bold text-gray-900 mb-4">Not sure which size you need?</h3>
//             <p className="text-gray-600 mb-6">Call us at (905) 689-8787 and we’ll help you choose.</p>
//             <Link
//               to="/contact"
//               className="inline-block border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors"
//             >
//               Contact Us
//             </Link>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// };

// export default Bins;


// // src/components/Bins.tsx
// import React from "react";
// import { Helmet } from "react-helmet-async";
// import { Link } from "react-router-dom";

// const Bins = () => {
//   return (
//     <>
//       <Helmet>
//         <title>Bins | The Dirt Depot</title>
//         <meta
//           name="description"
//           content="Bruce's Bins — fast, reliable bin rentals for cleanups, construction, and landscaping."
//         />
//         <meta property="og:title" content="Bins | The Dirt Depot" />
//         <meta property="og:description" content="Bruce's Bins — fast, reliable bin rentals." />
//         <meta property="og:image" content="/images/logo.jpg" />
//         <meta property="og:url" content="https://thedirtdepot.com/bins" />
//       </Helmet>

//       <div className="pt-20">
//         <section className="py-20 bg-gradient-to-r from-green-800 to-green-700 text-white">
//           <div className="container mx-auto px-4 text-center">
//             <h1 className="text-5xl md:text-6xl font-bold mb-4">Bins & Rentals</h1>
//             <p className="text-lg md:text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
//               We operate <strong>Bruce&apos;s Bins</strong>, our dedicated bin rental service for quick, easy disposal.
//             </p>
//           </div>
//         </section>

//         <section className="py-16 bg-white">
//           <div className="container mx-auto px-4 lg:px-12">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
//               <div>
//                 <h2 className="text-3xl font-bold text-gray-900 mb-4">Bruce&apos;s Bins</h2>
//                 <p className="text-gray-600">
//                   Order the right bin for your project and schedule delivery and pickup through our bin rental site.
//                 </p>
//                 <p className="text-gray-600 mb-6">
//                   We have sizes from 6 yards up to 35 yards! Check availability and pricing on Bruce&apos;s Bins.
//                 </p>

//                 <a
//                   href="https://brucesbin.com/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-block bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
//                 >
//                   Visit Bruce&apos;s Bins
//                 </a>
//               </div>

//               <div className="space-y-4">
//                 <div className="grid grid-cols-2 gap-4">
//                   <img
//                     src="/images/bins.webp"
//                     alt="Bruce's Bins — driveway-safe rental bin"
//                     className="w-full h-40 object-cover rounded-lg shadow"
//                   />
//                   <img
//                     src="/images/bins2.webp"
//                     alt="Bruce's Bins — on-site drop-off"
//                     className="w-full h-40 object-cover rounded-lg shadow"
//                   />
//                 </div>

//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="py-12 bg-gray-50">
//           <div className="container mx-auto px-4 text-center">
//             <h3 className="text-2xl font-bold text-gray-900 mb-4">Not sure which size you need?</h3>
//             <p className="text-gray-600 mb-6">Call us at (905) 689-8787 and we’ll help you choose.</p>
//             <Link
//               to="/contact"
//               className="inline-block border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors"
//             >
//               Contact Us
//             </Link>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// };

// export default Bins;
