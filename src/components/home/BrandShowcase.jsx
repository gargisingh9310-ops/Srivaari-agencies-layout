import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award } from 'lucide-react';
import { BRANDS_DATA } from '../../data/brandsData';

export default function BrandShowcase() {
  return (
    <section className="py-20 bg-[#F5F7FB] border-b border-[#E5EAF2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#123D8D]/10 text-[#123D8D] text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            Supply Network
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172033] tracking-tight font-heading mb-4">
            Brands We Work With
          </h2>
          <p className="text-base text-[#64748B] leading-relaxed">
            Srivaari Agencies connects industrial plants with established domestic and international equipment manufacturers.
          </p>
        </div>

        {/* Brand Logos Grid: 15 Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {BRANDS_DATA.map((brand) => (
            <Link
              key={brand.id}
              to={`/brands/${brand.slug}`}
              className="group bg-white p-5 rounded-xl border border-[#E5EAF2] hover:border-[#123D8D] card-shadow hover:shadow-md transition-all duration-300 flex flex-col items-center justify-between text-center"
            >
              <div className="w-full h-16 sm:h-20 flex items-center justify-center p-2 mb-3">
                <img
                  src={brand.logo}
                  alt={`${brand.name} official logo`}
                  className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
                  loading="lazy"
                />
              </div>

              <div className="w-full pt-2 border-t border-slate-100">
                <h4 className="text-xs font-bold text-[#172033] group-hover:text-[#123D8D] transition-colors truncate">
                  {brand.name}
                </h4>
                <p className="text-[10px] text-[#64748B] mt-0.5 truncate">
                  {brand.categoryLabel}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Brands CTA Link */}
        <div className="mt-12 text-center">
          <Link
            to="/brands"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-[#123D8D] text-[#123D8D] hover:bg-[#123D8D] hover:text-white text-sm font-bold transition-all"
          >
            <span>View All Brand Profiles & Equipment</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
