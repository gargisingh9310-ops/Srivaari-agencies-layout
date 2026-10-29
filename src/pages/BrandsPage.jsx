import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Award, ArrowRight, CheckCircle2, ShieldCheck, Factory, Search } from 'lucide-react';
import { BRANDS_DATA } from '../data/brandsData';

export default function BrandsPage() {
  const [filterCategory, setFilterCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    document.title = "Supplier Brands Directory | SRIVAARI AGENCIES";
  }, []);

  const categories = [
    { id: 'all', label: 'All Brands' },
    { id: 'burners', label: 'Burners & Combustion' },
    { id: 'pumps', label: 'Industrial Pumps' },
    { id: 'boilers', label: 'Boilers & Valves' },
    { id: 'road-machinery', label: 'Road Machinery' },
    { id: 'pollution-control', label: 'Pollution Control' }
  ];

  const filteredBrands = BRANDS_DATA.filter((b) => {
    const matchesCat = filterCategory === 'all' || b.category === filterCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q || b.name.toLowerCase().includes(q) || b.description.toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-[#F5F7FB] min-h-screen">
      
      {/* 1. Hero */}
      <section className="bg-[#09275E] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img 
            src="/assets/hero-img-3.jpg" 
            alt="Brands background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#09275E] via-[#09275E]/90 to-[#09275E]/75" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold uppercase tracking-wider text-white mb-3">
              <Award className="w-3.5 h-3.5 text-[#F04438]" />
              <span>Manufacturer Supply Network</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading tracking-tight leading-tight mb-3">
              Established Brands Directory
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Explore leading domestic and international manufacturers of industrial combustion burners, positive displacement pumps, boiler fittings, and road construction machinery.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Filter & Search Controls */}
      <section className="py-6 bg-white border-b border-[#E5EAF2] sticky top-[73px] z-30 shadow-sm backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto scrollbar-none pb-2 md:pb-0">
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setFilterCategory(c.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                    filterCategory === c.id
                      ? 'bg-[#123D8D] text-white shadow-sm'
                      : 'bg-[#F5F7FB] text-[#64748B] hover:text-[#172033] border border-[#E5EAF2]'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-[#64748B] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search brand names..."
                className="w-full pl-9 pr-3 py-1.5 bg-[#F5F7FB] border border-[#E5EAF2] rounded-lg text-xs text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#123D8D]/20 focus:border-[#123D8D]"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 3. Brands Directory Grid */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-6 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
              Showing {filteredBrands.length} Verified Brands
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBrands.map((brand) => (
              <div
                key={brand.id}
                className="group bg-white rounded-2xl border border-[#E5EAF2] p-6 card-shadow card-shadow-hover flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  {/* Top Bar: Logo & Category */}
                  <div className="flex items-center justify-between gap-4 mb-5 pb-4 border-b border-slate-100">
                    <div className="h-16 w-32 bg-slate-50 p-2 rounded-lg border border-[#E5EAF2] flex items-center justify-center">
                      <img
                        src={brand.logo}
                        alt={`${brand.name} official logo`}
                        className="max-h-full max-w-full object-contain filter group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <span className="text-[11px] font-bold text-[#123D8D] bg-[#123D8D]/10 px-2.5 py-1 rounded-md text-right">
                      {brand.categoryLabel}
                    </span>
                  </div>

                  {/* Brand Name & Description */}
                  <h3 className="text-lg font-bold text-[#172033] font-heading group-hover:text-[#123D8D] transition-colors mb-2">
                    <Link to={`/brands/${brand.slug}`}>
                      {brand.name}
                    </Link>
                  </h3>

                  <p className="text-xs text-[#64748B] leading-relaxed mb-4">
                    {brand.description}
                  </p>

                  {/* Associated Equipment Tags */}
                  <div className="space-y-1.5 mb-6">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Supplied Equipment:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {brand.products.map((p, i) => (
                        <span key={i} className="text-[11px] font-medium bg-[#F5F7FB] text-slate-700 px-2 py-0.5 rounded border border-[#E5EAF2]">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Links */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to={`/brands/${brand.slug}`}
                    className="text-xs font-bold text-[#123D8D] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Brand Overview</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    to={`/enquiry?brand=${encodeURIComponent(brand.name)}`}
                    className="text-xs font-bold text-[#F04438] hover:underline"
                  >
                    Enquire Spares
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Sourcing Disclaimer Section */}
      <section className="py-12 bg-white border-t border-[#E5EAF2]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="p-6 rounded-2xl bg-[#F5F7FB] border border-[#E5EAF2] text-xs text-[#64748B] leading-relaxed">
            <strong className="text-[#172033] block mb-1">Manufacturer Relationship Notice:</strong>
            Srivaari Agencies procures, stocks, and distributes industrial components, pumps, burners, and spares originating from these established manufacturers. All trademarks, registered logos, and brand names belong to their respective proprietors.
          </div>
        </div>
      </section>

    </div>
  );
}
