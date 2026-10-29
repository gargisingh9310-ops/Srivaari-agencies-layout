import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PhoneCall, Mail, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

export default function EnquiryCTA() {
  return (
    <section className="py-20 bg-[#123D8D] text-white relative overflow-hidden">
      {/* Background industrial grid pattern */}
      <div className="absolute inset-0 industrial-grid-dark opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold tracking-wider uppercase text-white shadow-sm">
            <MessageSquare className="w-3.5 h-3.5 text-[#F04438]" />
            <span>Direct Commercial Enquiry</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading leading-tight">
            Looking for the Right Industrial Equipment?
          </h2>

          <p className="text-base sm:text-xl text-slate-100 max-w-2xl mx-auto leading-relaxed">
            Share your product requirements with our team and enquire about suitable equipment.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/enquiry"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-white bg-[#F04438] hover:bg-[#d83227] shadow-xl hover:shadow-2xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#F04438]/50 active:scale-[0.98]"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-white/30"
            >
              <span>Contact Our Team</span>
              <PhoneCall className="w-4 h-4" />
            </Link>
          </div>

          {/* Direct Phone Assistance Prompt */}
          <div className="pt-6 text-xs text-slate-200 flex flex-wrap justify-center items-center gap-4">
            <span>Direct Phone Assistance:</span>
            <a 
              href={`tel:${COMPANY_INFO.phones[0].value}`} 
              className="font-bold text-white hover:text-[#F04438] transition-colors underline decoration-white/40 underline-offset-4"
            >
              {COMPANY_INFO.phones[0].display}
            </a>
            <span>•</span>
            <a 
              href={`mailto:${COMPANY_INFO.emails[0]}`} 
              className="font-bold text-white hover:text-[#F04438] transition-colors underline decoration-white/40 underline-offset-4"
            >
              {COMPANY_INFO.emails[0]}
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
