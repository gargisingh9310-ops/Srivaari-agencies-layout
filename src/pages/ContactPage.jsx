import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowRight, 
  ShieldCheck, 
  Printer, 
  MessageSquare
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function ContactPage() {
  useEffect(() => {
    document.title = "Contact Srivaari Agencies | Secunderabad Office & Support";
  }, []);

  return (
    <div className="bg-[#F5F7FB] min-h-screen">
      
      {/* 1. Hero */}
      <section className="bg-[#09275E] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img 
            src="/assets/hero-img-1.jpg" 
            alt="Office Contact" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#09275E] via-[#09275E]/90 to-[#09275E]/75" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold uppercase tracking-wider text-white mb-3">
              <PhoneCall className="w-3.5 h-3.5 text-[#F04438]" />
              <span>Head Office & Distribution Hub</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading tracking-tight leading-tight mb-3">
              Contact Srivaari Agencies
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Reach our engineering and commercial sales desk in Secunderabad for equipment inquiries, genuine spares availability, and technical consultations.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Contact Cards Grid */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            
            {/* Phone */}
            <div className="bg-white p-6 rounded-2xl border border-[#E5EAF2] card-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#123D8D]/10 text-[#123D8D] flex items-center justify-center mb-4">
                <PhoneCall className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#172033] mb-1">Telephone & Mobile</h3>
              <p className="text-xs text-[#64748B] mb-3">Direct commercial assistance</p>
              <div className="space-y-1">
                <a 
                  href={`tel:${COMPANY_INFO.phones[0].value}`} 
                  className="text-sm font-bold text-[#123D8D] hover:underline block"
                >
                  {COMPANY_INFO.phones[0].display}
                </a>
                <a 
                  href={`tel:${COMPANY_INFO.phones[1].value}`} 
                  className="text-sm font-bold text-[#123D8D] hover:underline block"
                >
                  {COMPANY_INFO.phones[1].display}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white p-6 rounded-2xl border border-[#E5EAF2] card-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#123D8D]/10 text-[#123D8D] flex items-center justify-center mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#172033] mb-1">Official Email</h3>
              <p className="text-xs text-[#64748B] mb-3">Send drawings & BOMs</p>
              <a 
                href={`mailto:${COMPANY_INFO.emails[0]}`} 
                className="text-sm font-bold text-[#123D8D] hover:underline break-all block"
              >
                {COMPANY_INFO.emails[0]}
              </a>
              <span className="text-[11px] text-[#64748B] mt-1 block">Monitored during business hours</span>
            </div>

            {/* Location */}
            <div className="bg-white p-6 rounded-2xl border border-[#E5EAF2] card-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#F04438]/10 text-[#F04438] flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#172033] mb-1">Rani Gunj Office</h3>
              <p className="text-xs text-slate-700 leading-relaxed mb-2">
                {COMPANY_INFO.address.line1}, {COMPANY_INFO.address.line2}, {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} - {COMPANY_INFO.address.pincode}
              </p>
              <span className="text-[11px] text-[#64748B]">Telangana, India</span>
            </div>

            {/* Working Hours & Fax */}
            <div className="bg-white p-6 rounded-2xl border border-[#E5EAF2] card-shadow">
              <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#172033] mb-1">Hours & Telefax</h3>
              <p className="text-xs text-slate-700 mb-1">
                <strong>Monday &ndash; Saturday:</strong><br /> 9:30 AM &ndash; 7:30 PM IST
              </p>
              <p className="text-xs text-[#64748B]">
                Telefax: {COMPANY_INFO.fax}
              </p>
            </div>

          </div>

          {/* 3. Verified Google Map Embed & Direction Box */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5EAF2] shadow-sm mb-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#123D8D]">
                  Verified Office Location
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#172033] font-heading mt-1">
                  Visit Our Rani Gunj Facilities
                </h2>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="https://maps.google.com/?q=Srivaari+Agencies+Rani+Gunj+Secunderabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-[#123D8D] text-white text-xs font-bold hover:bg-[#09275E] transition-colors"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>

            {/* Google Map Iframe */}
            <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-[#E5EAF2] bg-slate-100 shadow-inner">
              <iframe
                title="Srivaari Agencies Google Map Location"
                src={COMPANY_INFO.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* 4. Direct Enquiry Callout */}
          <div className="bg-gradient-to-r from-[#123D8D] to-[#09275E] text-white rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F04438] bg-white/10 px-3 py-1 rounded-full inline-block">
                Immediate Action
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading">
                Have a Commercial Requirement Ready?
              </h3>
              <p className="text-sm text-slate-200 max-w-xl">
                Fill in our structured B2B enquiry form to provide your exact machinery make, capacity, and fluid dynamics.
              </p>
            </div>

            <Link
              to="/enquiry"
              className="px-8 py-4 rounded-xl bg-[#F04438] hover:bg-[#d83227] text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all whitespace-nowrap"
            >
              Fill Online Enquiry Form &rarr;
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
