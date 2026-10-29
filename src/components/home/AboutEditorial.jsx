import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, ShieldCheck, Factory, Settings } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';
import Industrial3DCanvas from '../common/Industrial3DCanvas';

export default function AboutEditorial() {
  return (
    <section className="py-20 bg-[#F5F7FB] border-b border-[#E5EAF2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Industrial Photography & Interactive 3D Accent */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#E5EAF2] bg-white">
              <img
                src="/assets/hero-img-3.jpg"
                alt="Industrial plant equipment supplied by Srivaari Agencies"
                className="w-full h-[400px] sm:h-[480px] object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09275E]/60 via-transparent to-transparent" />
              
              {/* Floating Engineering Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-white/50 shadow-lg flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#123D8D] text-white flex items-center justify-center shrink-0">
                  <Factory className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#172033]">B2B Industrial Supply</h4>
                  <p className="text-xs text-[#64748B]">
                    Connecting industries with verified national & global machinery makers.
                  </p>
                </div>
              </div>
            </div>

            {/* Subtle Industrial 3D Rotor Accent Floating Card */}
            <div className="hidden sm:block absolute -top-8 -right-6 w-36 h-36 bg-white rounded-2xl border border-[#E5EAF2] shadow-xl p-2 z-10">
              <div className="w-full h-full relative">
                <Industrial3DCanvas className="w-full h-full min-h-[120px]" />
                <div className="absolute bottom-1 left-0 right-0 text-center pointer-events-none">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#123D8D] bg-white/90 px-1 py-0.5 rounded">
                    Rotor 3D
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Business Content */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#123D8D]/10 text-[#123D8D] text-xs font-bold uppercase tracking-wider">
              <Settings className="w-3.5 h-3.5" />
              Company Background
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172033] tracking-tight font-heading leading-tight">
              Your Partner in Industrial Equipment.
            </h2>

            <p className="text-base text-[#64748B] leading-relaxed">
              SRIVAARI AGENCIES supplies industrial equipment and products across relevant machinery categories and connects customers with established manufacturers and brands. Headquartered in Secunderabad, Telangana, we assist manufacturing plants, road contractors, and process facilities in procuring authentic equipment and high-wear replacement spares.
            </p>

            <p className="text-sm text-[#64748B] leading-relaxed">
              From precision combustion burners and steam boilers to rotary gear pumps, asphalt pavers, and pollution control systems, our portfolio is curated to maintain uptime, satisfy emission standards, and provide dependable operational performance.
            </p>

            {/* Four Concrete Credibility Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {COMPANY_INFO.credibilityPoints.map((pt, i) => (
                <div key={i} className="bg-white p-3.5 rounded-xl border border-[#E5EAF2] shadow-sm">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#123D8D] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-[#172033]">{pt.title}</h4>
                      <p className="text-[11px] text-[#64748B] mt-0.5 line-clamp-2">{pt.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Links */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold text-white bg-[#123D8D] hover:bg-[#09275E] transition-all shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#123D8D]/50"
              >
                <span>Know Our Company</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-[#172033] bg-white hover:bg-slate-100 border border-[#E5EAF2] transition-colors"
              >
                <span>Visit Our Office</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
