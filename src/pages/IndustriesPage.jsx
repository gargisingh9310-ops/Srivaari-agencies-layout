import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Droplets, 
  Flame, 
  Factory, 
  FlaskConical, 
  Milk, 
  Pill, 
  Zap, 
  Wine, 
  Wheat, 
  Cog,
  PhoneCall
} from 'lucide-react';
import { INDUSTRIES_DATA } from '../data/industriesData';

export default function IndustriesPage() {
  useEffect(() => {
    document.title = "Industries & Applications | SRIVAARI AGENCIES";
  }, []);

  const iconMap = {
    'Layers': Layers,
    'Milk': Milk,
    'FlaskConical': FlaskConical,
    'Cog': Cog,
    'Pill': Pill,
    'Zap': Zap,
    'Wine': Wine,
    'Wheat': Wheat
  };

  return (
    <div className="bg-[#F5F7FB] min-h-screen">
      
      {/* 1. Hero */}
      <section className="bg-[#09275E] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img 
            src="/assets/hero-img-2.jpg" 
            alt="Industries background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#09275E] via-[#09275E]/90 to-[#09275E]/75" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold uppercase tracking-wider text-white mb-3">
              <Briefcase className="w-3.5 h-3.5 text-[#F04438]" />
              <span>Plant & Sector Solutions</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading tracking-tight leading-tight mb-3">
              Industries & Application Sectors
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Supplying tailored thermal, combustion, pumping, and road infrastructure hardware engineered to satisfy strict continuous duty conditions.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Industries Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172033] font-heading mb-2">
              Cross-Industry Equipment Delivery
            </h2>
            <p className="text-sm sm:text-base text-[#64748B]">
              Discover how our boilers, burners, gear pumps, and dust collectors support varied processing requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES_DATA.map((ind) => {
              const Icon = iconMap[ind.icon] || Factory;
              return (
                <div
                  key={ind.id}
                  className="bg-white rounded-2xl border border-[#E5EAF2] p-6 card-shadow card-shadow-hover flex flex-col justify-between transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#123D8D]/10 text-[#123D8D] flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#123D8D] bg-[#F5F7FB] px-2.5 py-1 rounded border border-[#E5EAF2]">
                        Plant Sector
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#172033] font-heading mb-2">
                      {ind.name}
                    </h3>

                    <p className="text-xs text-[#64748B] leading-relaxed mb-5">
                      {ind.description}
                    </p>

                    {/* Equipment list */}
                    <div className="space-y-1.5 mb-6">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        Equipment Supplied:
                      </span>
                      {ind.equipmentSupplied.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#123D8D] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Operational Highlight */}
                    <div className="p-3 bg-[#F5F7FB] rounded-xl border border-[#E5EAF2] text-[11px] text-slate-600 mb-6 italic">
                      &ldquo;{ind.highlight}&rdquo;
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      to={`/products`}
                      className="text-xs font-bold text-[#123D8D] hover:underline inline-flex items-center gap-1"
                    >
                      <span>Explore Equipment</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <Link
                      to={`/enquiry?industry=${encodeURIComponent(ind.name)}`}
                      className="text-xs font-bold text-[#F04438] hover:underline"
                    >
                      Enquire for Plant
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. Engineering Guidance CTA */}
      <section className="py-16 bg-[#123D8D] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading">
            Operating in Another Industry or Custom Facility?
          </h2>
          <p className="text-slate-100 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Our technical team assists with equipment sizing, nozzle selection, and pressure ratings tailored to non-standard fluid and thermal dynamics.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              to="/enquiry"
              className="px-6 py-3.5 rounded-xl bg-[#F04438] hover:bg-[#d83227] text-white font-bold text-xs shadow-md transition-all"
            >
              Submit Custom Industry Requirement
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-all"
            >
              Contact Our Engineers
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
