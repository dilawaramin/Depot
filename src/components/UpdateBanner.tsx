// src/components/UpdateBanner.tsx

import React, { useState, useEffect, useRef } from 'react';
import Airtable from 'airtable';
import { Info, X } from 'lucide-react'; 

// (Airtable credential and base initialization logic remains the same)
const AIRTABLE_PAT = import.meta.env.VITE_AIRTABLE_PAT as string | undefined;
const AIRTABLE_BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID as string | undefined;
const isReady = !!AIRTABLE_PAT && !!AIRTABLE_BASE_ID;

let base: Airtable.Base | null = null;
if (isReady) {
  try {
      base = new Airtable({ apiKey: AIRTABLE_PAT as string }).base(AIRTABLE_BASE_ID as string);
  } catch (e) {
      console.error("Airtable initialization failed:", e);
  }
}

// Define the type for the component's props
interface UpdateBannerProps {
    onVisibleChange: (isVisible: boolean) => void;
}

const UpdateBanner: React.FC<UpdateBannerProps> = ({ onVisibleChange }) => {
  const [bannerData, setBannerData] = useState<{ message: string; enabled: boolean } | null>(null);
  const [loading, setLoading] = useState(true);
  // Use sessionStorage to persist the closed state across page loads
  const [isClosed, setIsClosed] = useState(sessionStorage.getItem('updateBannerClosed') === 'true'); 

  // --- Visibility Effect (Simplified) ---
  useEffect(() => {
    // Report visibility status back to the parent component (Header)
    const isVisible = !!bannerData?.enabled && !isClosed && !!bannerData.message;
    onVisibleChange(isVisible);
  }, [bannerData, isClosed, onVisibleChange]);


  // --- Data Fetching Effect (Same as before) ---
  useEffect(() => {
    if (!isReady || !base) {
      setLoading(false);
      return;
    }
    
    (base as Airtable.Base)('Banner Settings')
      .select({ maxRecords: 1, filterByFormula: "{Setting} = 'Website Banner'" })
      .firstPage((err, records) => {
        setLoading(false);
        if (err) return;
        if (records && records.length > 0) {
          const record = records[0];
          setBannerData({
            message: record.get('Message') as string,
            enabled: record.get('Enabled') as boolean,
          });
        }
      });
  }, []);

  // --- Close Handler ---
  const handleClose = () => {
    setIsClosed(true);
    // Save to session storage so it stays closed until the browser tab is shut
    sessionStorage.setItem('updateBannerClosed', 'true'); 
  };

  // Return nothing if loading, error, data is missing/disabled, OR if the user closed it
  if (loading || !bannerData || !bannerData.enabled || !bannerData.message || isClosed) {
    return null;
  }

  return (
    <div className="bg-red-700 text-yellow-300 w-full">
      <div className="container mx-auto px-4 py-2 text-sm font-medium">
        <div className="flex items-center justify-between space-x-4">
          
          <div className="flex items-center space-x-2 flex-grow justify-center">
            <Info className="w-5 h-5 flex-shrink-0" />
            <span className="text-center">{bannerData.message}</span>
          </div>

          <button
            onClick={handleClose}
            aria-label="Close update banner"
            className="p-1 rounded-full hover:bg-red-600 transition-colors flex-shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateBanner;

// // src/components/UpdateBanner.tsx

// import React, { useState, useEffect } from 'react';
// import Airtable from 'airtable';
// import { Info } from 'lucide-react'; 

// // 1. Get credentials using Vite's import.meta.env and VITE_ prefix
// const AIRTABLE_PAT = import.meta.env.VITE_AIRTABLE_PAT as string | undefined;
// const AIRTABLE_BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID as string | undefined;

// // 2. Check if both required values are present
// const isReady = !!AIRTABLE_PAT && !!AIRTABLE_BASE_ID;

// let base: Airtable.Base | null = null;
// if (isReady) {
//   // If ready, initialize the base, safely casting the non-null variables
//   try {
//       base = new Airtable({ apiKey: AIRTABLE_PAT as string }).base(AIRTABLE_BASE_ID as string);
//   } catch (e) {
//       console.error("Airtable initialization failed:", e);
//       // If initialization fails here, base remains null, and the component won't try to fetch
//   }
// }

// const UpdateBanner: React.FC = () => {
//   const [bannerData, setBannerData] = useState<{ message: string; enabled: boolean } | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     // Check 1: If credentials are missing, log an error and stop
//     if (!isReady || !base) {
//       console.error("DEV ERROR: Airtable credentials (VITE_AIRTABLE_PAT and/or VITE_AIRTABLE_BASE_ID) are missing or invalid.");
//       setLoading(false);
//       // Note: We don't set a visible error to the user, just log it for the developer.
//       return;
//     }
    
//     // Check 2: Fetch data from your 'Banner Settings' table
//     // We use the non-null assertion (!) because we checked 'base' above
//     (base as Airtable.Base)('Banner Settings')
//       .select({
//         maxRecords: 1, 
//         filterByFormula: "{Setting} = 'Website Banner'", 
//       })
//       .firstPage((err, records) => {
//         setLoading(false);
//         if (err) {
//           console.error("Error fetching banner from Airtable:", err);
//           setError("Banner content could not be loaded."); 
//           return;
//         }
//         if (records && records.length > 0) {
//           const record = records[0];
//           setBannerData({
//             message: record.get('Message') as string,
//             enabled: record.get('Enabled') as boolean,
//           });
//         }
//       });
//   }, []);

//   // --- RENDERING LOGIC ---

//   // Return nothing if loading, error, or data is missing/disabled
//   if (loading || error) {
//       return null;
//   }

//   if (!bannerData || !bannerData.enabled || !bannerData.message) {
//     return null;
//   }

//   // Final Banner Display (Using Tailwind classes)
//   return (
//     <div className="bg-red-700 text-yellow-300">
//       <div className="container mx-auto px-4 py-2 text-center text-sm font-medium">
//         <div className="flex items-center justify-center space-x-2">
//           <Info className="w-5 h-5" />
//           <span>{bannerData.message}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UpdateBanner;