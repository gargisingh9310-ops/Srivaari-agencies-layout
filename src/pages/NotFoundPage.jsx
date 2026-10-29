import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, PhoneCall } from 'lucide-react';

export default function NotFoundPage() {
  useEffect(() => {
    document.title = "404 Page Not Found | SRIVAARI AGENCIES";
  }, []);

  return (
    <div className="bg-[#F5F7FB] min-h-[70vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 border border-[#E5EAF2] shadow-sm text-center space-y-6">
        
        <div className="w-20 h-20 rounded-2xl bg-[#123D8D]/10 text-[#123D8D] flex items-center justify-center mx-auto">
          <span className="text-3xl font-extrabold font-heading">404</span>
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-extrabold text-[#172033] font-heading">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </div>

        <div className="pt-2 flex flex-col gap-3">
          <Link
            to="/"
            className="w-full py-3.5 px-6 rounded-xl bg-[#123D8D] hover:bg-[#09275E] text-white font-bold text-xs transition-colors shadow flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            to="/products"
            className="w-full py-3 px-6 rounded-xl bg-[#F5F7FB] hover:bg-slate-200 text-[#172033] font-semibold text-xs border border-[#E5EAF2] transition-colors"
          >
            Browse Products Catalogue
          </Link>
        </div>

      </div>
    </div>
  );
}
