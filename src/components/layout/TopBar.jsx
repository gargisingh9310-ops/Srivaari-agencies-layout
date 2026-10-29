import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';
import { FacebookIcon, LinkedinIcon } from '../common/SocialIcons';

export default function TopBar() {
  return (
    <div className="bg-[#F5F7FB] border-b border-[#E5EAF2] text-xs text-[#64748B] py-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        {/* Left: Contact Info */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 justify-center sm:justify-start">
          <a 
            href={`mailto:${COMPANY_INFO.emails[0]}`}
            className="flex items-center gap-1.5 hover:text-[#123D8D] transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-[#123D8D]/20 rounded"
          >
            <Mail className="w-3.5 h-3.5 text-[#123D8D]" />
            <span>{COMPANY_INFO.emails[0]}</span>
          </a>
          
          <a 
            href={`tel:${COMPANY_INFO.phones[0].value}`}
            className="flex items-center gap-1.5 hover:text-[#123D8D] transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-[#123D8D]/20 rounded"
          >
            <Phone className="w-3.5 h-3.5 text-[#123D8D]" />
            <span>{COMPANY_INFO.phones[0].display}</span>
          </a>

          <a 
            href={`tel:${COMPANY_INFO.phones[1].value}`}
            className="hidden md:flex items-center gap-1.5 hover:text-[#123D8D] transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-[#123D8D]/20 rounded"
          >
            <Phone className="w-3.5 h-3.5 text-[#123D8D]" />
            <span>{COMPANY_INFO.phones[1].display}</span>
          </a>

          <span className="hidden lg:flex items-center gap-1.5 text-slate-500">
            <MapPin className="w-3.5 h-3.5 text-[#123D8D]" />
            <span>Secunderabad, Telangana</span>
          </span>
        </div>

        {/* Right: Social & Quick Info */}
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline text-[11px] font-semibold tracking-wider uppercase text-slate-500">
            Industrial Equipment & Spares Supplier
          </span>
          <div className="flex items-center gap-2 border-l border-slate-200 pl-3">
            <a 
              href={COMPANY_INFO.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Srivaari Agencies Facebook"
              className="p-1 hover:text-[#123D8D] hover:bg-slate-200/60 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-[#123D8D]/20"
            >
              <FacebookIcon className="w-3.5 h-3.5" />
            </a>
            <a 
              href={COMPANY_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Srivaari Agencies LinkedIn"
              className="p-1 hover:text-[#123D8D] hover:bg-slate-200/60 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-[#123D8D]/20"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
