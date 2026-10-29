import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  ShieldCheck, 
  Target, 
  CheckCircle2, 
  ArrowRight, 
  PhoneCall, 
  Package, 
  Factory,
  Layers,
  Wrench
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { CATEGORIES_DATA } from '../data/productsData';
import { BRANDS_DATA } from '../data/brandsData';

export default function AboutPage() {
  useEffect(() => {
    document.title = "About Srivaari Agencies | Industrial Equipment & Machinery Spares Supplier";
  }, []);

  return (
    <div className="bg-[#F5F7FB] min-h-screen">
      
      {/* 1. Compact Page Hero */}
      <section className="bg-[#09275E] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img 
            src="/assets/hero-img-3.jpg" 
            alt="Industrial plant facility" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#09275E] via-[#09275E]/90 to-[#09275E]/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold uppercase tracking-wider text-white mb-4">
              <Building2 className="w-3.5 h-3.5 text-[#F04438]" />
              <span>Company Profile</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading tracking-tight leading-tight mb-4">
              Your Reliable Partner in Industrial Equipment
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              SRIVAARI AGENCIES connects manufacturing facilities, road infrastructure contractors, and process plants with established machinery manufacturers and verified industrial spares.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Company Introduction & Business Focus */}
      <section className="py-16 bg-white border-b border-[#E5EAF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-bold uppercase tracking-wider text-[#123D8D]">
                Who We Are
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172033] font-heading">
                Supplying Critical Machinery & Thermal Equipment
              </h2>
              <p className="text-[#64748B] text-base leading-relaxed">
                Operating from Rani Gunj, Secunderabad, Srivaari Agencies functions as a single-stop supplier for industrial plant machinery, process heating components, and road construction spares. 
              </p>
              <p className="text-[#64748B] text-base leading-relaxed">
                We understand that unexpected downtime in a boiler room, asphalt batching plant, or fluid transfer system leads to heavy commercial losses. For this reason, our sourcing focus prioritizes equipment durability, verified manufacturer build quality, and immediate availability of consumable wear spares.
              </p>

              {/* Core Strengths */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-[#F5F7FB] border border-[#E5EAF2]">
                  <Target className="w-5 h-5 text-[#123D8D] mb-2" />
                  <h4 className="font-bold text-sm text-[#172033]">Comprehensive Sourcing</h4>
                  <p className="text-xs text-[#64748B] mt-1">
                    Connecting clients directly with top domestic and international manufacturers under one roof.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#F5F7FB] border border-[#E5EAF2]">
                  <Wrench className="w-5 h-5 text-[#F04438] mb-2" />
                  <h4 className="font-bold text-sm text-[#172033]">Technical Alignment</h4>
                  <p className="text-xs text-[#64748B] mt-1">
                    Guidance on nozzle spray angles, pump viscosities, screed plate alloys, and IBR certificates.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Real Photography Asset */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-[#E5EAF2] shadow-xl bg-slate-100">
                <img
                  src="/assets/boiler.jpg"
                  alt="Industrial steam boiler unit supplied by Srivaari Agencies"
                  className="w-full h-80 sm:h-96 object-cover object-center"
                />
                <div className="p-4 bg-white border-t border-[#E5EAF2]">
                  <span className="text-xs font-bold text-[#172033] block">
                    Secunderabad Operations & Warehouse
                  </span>
                  <span className="text-xs text-[#64748B]">
                    Serving Telangana, Andhra Pradesh, and industrial corridors across South India.
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Product Supply Capabilities */}
      <section className="py-16 bg-[#F5F7FB] border-b border-[#E5EAF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-[#123D8D] mb-2">
              Capabilities
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172033] font-heading">
              Product Supply Coverage Across 5 Core Sectors
            </h2>
            <p className="text-[#64748B] text-sm sm:text-base mt-2">
              Our inventory covers complete assemblies as well as essential wear parts and replacement mountings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES_DATA.map((cat) => (
              <div 
                key={cat.id} 
                className="bg-white p-6 rounded-2xl border border-[#E5EAF2] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#123D8D]/10 text-[#123D8D] flex items-center justify-center font-bold text-sm mb-4">
                    <Factory className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#172033] mb-2">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed mb-4">
                    {cat.description}
                  </p>
                  <ul className="space-y-1.5 mb-6 text-xs text-slate-700">
                    {cat.subcategories.map((sub, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#123D8D] shrink-0" />
                        <span>{sub}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={`/products/${cat.slug}`}
                  className="pt-4 border-t border-slate-100 inline-flex items-center gap-1.5 text-xs font-bold text-[#123D8D] hover:text-[#F04438] transition-colors"
                >
                  <span>Explore {cat.shortTitle} Catalogue</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}

            {/* Direct Enquiry Card */}
            <div className="bg-[#123D8D] text-white p-6 rounded-2xl flex flex-col justify-between shadow-md">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-white/80 block mb-2">
                  Technical Assistance
                </span>
                <h3 className="text-xl font-bold font-heading mb-3">
                  Have a Bill of Materials to Price?
                </h3>
                <p className="text-xs text-slate-200 leading-relaxed mb-6">
                  Send your technical drawings or required specifications directly to our engineering desk for immediate quotes.
                </p>
              </div>

              <Link
                to="/enquiry"
                className="w-full py-3 px-4 rounded-xl bg-[#F04438] hover:bg-[#d83227] text-white text-xs font-bold text-center transition-colors shadow"
              >
                Submit Requirements
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Brand & Manufacturer Relationships */}
      <section className="py-16 bg-white border-b border-[#E5EAF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-[#123D8D] mb-2">
              Supply Relationships
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172033] font-heading">
              Verified Brands in Our Supply Network
            </h2>
            <p className="text-[#64748B] text-sm sm:text-base mt-2">
              We work with trusted domestic and international manufacturers whose components meet stringent industrial standards.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {BRANDS_DATA.map((brand) => (
              <Link
                key={brand.id}
                to={`/brands/${brand.slug}`}
                className="p-4 rounded-xl border border-[#E5EAF2] hover:border-[#123D8D] bg-white text-center flex flex-col items-center justify-center transition-all group"
              >
                <div className="w-full h-14 flex items-center justify-center mb-2">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all"
                  />
                </div>
                <span className="text-xs font-bold text-[#172033] group-hover:text-[#123D8D] truncate w-full">
                  {brand.name}
                </span>
                <span className="text-[10px] text-[#64748B] truncate w-full">
                  {brand.categoryLabel}
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/brands"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#123D8D] hover:underline"
            >
              <span>Explore All Verified Brands</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Direct Enquiry CTA */}
      <section className="py-16 bg-[#09275E] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading">
            Ready to Discuss Your Plant Machinery Requirements?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Get in touch with Srivaari Agencies for quick product availability, technical data sheets, and competitive commercial quotes.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/enquiry"
              className="px-6 py-3.5 rounded-xl bg-[#F04438] hover:bg-[#d83227] text-white font-bold text-sm shadow-md transition-colors"
            >
              Request a Commercial Quote
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-colors"
            >
              Contact Our Office
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
