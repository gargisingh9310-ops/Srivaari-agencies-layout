import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Layers } from 'lucide-react';
import { CATEGORIES_DATA } from '../../data/productsData';

export default function CategoryShowcase() {
  return (
    <section className="py-20 bg-white border-b border-[#E5EAF2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#123D8D]/10 text-[#123D8D] text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            Core Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172033] tracking-tight font-heading mb-4">
            Industrial Equipment for Every Application
          </h2>
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            Explore our core product categories and discover equipment suited to your operational requirements.
          </p>
        </div>

        {/* 5 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATEGORIES_DATA.map((cat, index) => {
            // Give the first two categories a slightly wider visual presence or a clean uniform 3-col layout (with 5 items, 3 top, 2 bottom centered or full layout)
            const isFeatured = index === 0 || index === 1;
            return (
              <div
                key={cat.id}
                className="group bg-white rounded-2xl border border-[#E5EAF2] overflow-hidden card-shadow card-shadow-hover flex flex-col h-full transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-100">
                  <img
                    src={cat.studioImage || cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  {/* Category Label Pill */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold text-[#123D8D] shadow-sm">
                    {cat.shortTitle}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#172033] group-hover:text-[#123D8D] transition-colors font-heading mb-2">
                      {cat.name}
                    </h3>
                    
                    <p className="text-sm text-[#64748B] line-clamp-2 leading-relaxed mb-4">
                      {cat.description}
                    </p>

                    {/* Subcategories tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {cat.subcategories.slice(0, 3).map((sub, i) => (
                        <span 
                          key={i} 
                          className="text-[11px] font-medium bg-[#F5F7FB] text-[#64748B] px-2.5 py-1 rounded-md border border-[#E5EAF2]"
                        >
                          {sub}
                        </span>
                      ))}
                      {cat.subcategories.length > 3 && (
                        <span className="text-[11px] font-semibold text-[#123D8D] px-1.5 py-1">
                          +{cat.subcategories.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-4 border-t border-[#E5EAF2] flex items-center justify-between">
                    <Link
                      to={`/products/${cat.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#123D8D] group-hover:text-[#F04438] transition-colors focus:outline-none"
                    >
                      <span>Explore Category</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-200" />
                    </Link>
                    <span className="text-xs text-[#64748B]">
                      Verified Supply
                    </span>
                  </div>

                </div>
              </div>
            );
          })}

          {/* Quick Consultation Promo Card in 6th Slot */}
          <div className="bg-gradient-to-br from-[#123D8D] to-[#09275E] rounded-2xl p-8 text-white flex flex-col justify-between shadow-md">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white mb-6 border border-white/20">
                <ArrowRight className="w-6 h-6 text-[#F04438]" />
              </div>
              <h3 className="text-2xl font-bold font-heading mb-3">
                Need Specific Machinery Spares?
              </h3>
              <p className="text-sm text-slate-200 leading-relaxed mb-6">
                Our engineering team assists with cross-referencing obsolete pump models, burner nozzles, paver flight bars, and IBR certificates.
              </p>
            </div>
            
            <Link
              to="/enquiry"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-[#F04438] hover:bg-[#d83227] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all"
            >
              <span>Submit Custom Requirement</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
