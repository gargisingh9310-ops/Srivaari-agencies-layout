import React, { useMemo, useEffect, useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  Layers, 
  ShieldCheck, 
  Flame, 
  Factory, 
  Gauge, 
  Truck, 
  Wind,
  PhoneCall
} from 'lucide-react';
import { CATEGORIES_DATA, PRODUCTS_DATA } from '../data/productsData';
import { BRANDS_DATA } from '../data/brandsData';

export default function CategoryPage() {
  const { categorySlug: paramSlug } = useParams();
  const location = useLocation();
  const [activeSubgroup, setActiveSubgroup] = useState('all');

  // Derive slug from param or pathname (e.g., /products/boilers -> 'boilers')
  const categorySlug = useMemo(() => {
    if (paramSlug) return paramSlug;
    const pathParts = location.pathname.split('/').filter(Boolean);
    return pathParts[1] || '';
  }, [paramSlug, location.pathname]);

  // Find current category
  const category = useMemo(() => {
    return CATEGORIES_DATA.find(
      (c) => c.slug === categorySlug || 
      (categorySlug === 'pumps' && c.id === 'pumps') ||
      (categorySlug === 'industrial-pumps' && c.id === 'pumps') ||
      (categorySlug === 'pollution-control' && c.id === 'pollution-control') ||
      (categorySlug === 'pollution-control-equipments' && c.id === 'pollution-control')
    );
  }, [categorySlug]);

  useEffect(() => {
    if (category) {
      document.title = `${category.name} | SRIVAARI AGENCIES — Industrial Supply`;
    }
    setActiveSubgroup('all');
  }, [category]);

  // Filter products belonging to this category
  const categoryProducts = useMemo(() => {
    if (!category) return [];
    return PRODUCTS_DATA.filter(
      (p) => p.category === category.id ||
      (category.id === 'pumps' && p.category === 'industrial-pumps') ||
      (category.id === 'pollution-control' && p.category === 'pollution-control-equipments')
    );
  }, [category]);

  // Subgroups for specialized filtering (especially Burners & Pumps)
  const subgroups = useMemo(() => {
    if (!category) return [];
    if (category.id === 'burners') {
      return [
        { id: 'all', label: 'All Burners' },
        { id: 'Fully Automatic Burners', label: 'Fully Automatic Burners' },
        { id: 'Manual Combustion Burners', label: 'Manual Burners' },
        { id: 'LDO Burners (External Gear Pump)', label: 'LDO External Gear Pump Burners' },
        { id: 'Burner Spares & Components', label: 'Spares & Servicing' }
      ];
    }
    if (category.id === 'pumps') {
      return [
        { id: 'all', label: 'All Pumps' },
        { id: 'Rotary Gear Pumps', label: 'Gear Pumps (Roti Fluid)' },
        { id: 'FIG Internal Gear Pumps', label: 'FIG Pumps (Prakash / Fluid Tech)' },
        { id: 'Industrial Piston Pumps', label: 'Piston Pumps (A1 Shakti)' },
        { id: 'Bitumen Pumps', label: 'Bitumen Pumps (KI Pump)' }
      ];
    }
    return [
      { id: 'all', label: 'All ' + category.shortTitle },
      ...category.subcategories.map(sub => ({ id: sub, label: sub }))
    ];
  }, [category]);

  const displayedProducts = useMemo(() => {
    if (activeSubgroup === 'all') return categoryProducts;
    return categoryProducts.filter(p => p.subCategory === activeSubgroup);
  }, [categoryProducts, activeSubgroup]);

  // Associated brands for this category
  const associatedBrands = useMemo(() => {
    if (!category) return [];
    return BRANDS_DATA.filter(b => 
      b.category === category.id ||
      (category.id === 'pumps' && b.category === 'pumps') ||
      (category.id === 'burners' && b.category === 'burners') ||
      (category.id === 'boilers' && b.category === 'boilers') ||
      (category.id === 'road-machinery' && b.category === 'road-machinery') ||
      (category.id === 'pollution-control' && b.category === 'pollution-control')
    );
  }, [category]);

  if (!category) {
    return (
      <div className="py-24 text-center">
        <h2 className="text-2xl font-bold text-[#172033] mb-4">Category Not Found</h2>
        <Link to="/products" className="text-sm font-bold text-[#123D8D] hover:underline">
          Return to All Products &rarr;
        </Link>
      </div>
    );
  }

  const categoryIcons = {
    'boilers': Gauge,
    'burners': Flame,
    'pumps': Factory,
    'road-machinery': Truck,
    'pollution-control': Wind
  };
  const Icon = categoryIcons[category.id] || Factory;

  return (
    <div className="bg-[#F5F7FB] min-h-screen">
      
      {/* 1. Category Hero */}
      <section className="bg-[#09275E] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={category.image} 
            alt={category.name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#09275E] via-[#09275E]/90 to-[#09275E]/75" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold uppercase tracking-wider text-white mb-4">
                <Icon className="w-3.5 h-3.5 text-[#F04438]" />
                <span>Specialized Machinery Division</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading tracking-tight leading-tight mb-4">
                {category.name}
              </h1>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl">
                {category.description}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  to={`/enquiry?category=${category.id}`}
                  className="px-6 py-3 rounded-xl bg-[#F04438] hover:bg-[#d83227] text-white font-bold text-xs shadow-md transition-all flex items-center gap-2"
                >
                  <span>Request Category Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+919490474638"
                  className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-all flex items-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-slate-300" />
                  <span>Call: +91 94904 74638</span>
                </a>
              </div>
            </div>

            {/* Studio Photography Preview Card */}
            <div className="lg:col-span-4 hidden lg:block">
              <div className="rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-white/5 backdrop-blur-sm p-3">
                <img 
                  src={category.studioImage || category.image} 
                  alt={category.name} 
                  className="w-full h-56 object-cover rounded-xl"
                />
                <div className="pt-3 px-1 text-center">
                  <span className="text-xs font-semibold text-slate-200">
                    {category.highlight}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Subgroup Filter Tabs */}
      <section className="py-6 bg-white border-b border-[#E5EAF2] sticky top-[73px] z-30 shadow-sm backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#64748B] mr-2 whitespace-nowrap">
              Filter By Type:
            </span>
            {subgroups.map((sub) => (
              <button
                key={sub.id}
                onClick={() => setActiveSubgroup(sub.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                  activeSubgroup === sub.id
                    ? 'bg-[#123D8D] text-white shadow-sm'
                    : 'bg-[#F5F7FB] text-[#64748B] hover:text-[#172033] border border-[#E5EAF2]'
                }`}
              >
                {sub.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Product Listings */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-8 flex items-center justify-between pb-3 border-b border-[#E5EAF2]">
            <h2 className="text-xl font-bold text-[#172033] font-heading">
              Available Models & Configurations ({displayedProducts.length})
            </h2>
            <Link to="/products" className="text-xs font-bold text-[#123D8D] hover:underline">
              Browse All Categories &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl border border-[#E5EAF2] overflow-hidden card-shadow card-shadow-hover flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  <div className="relative h-60 bg-slate-50 overflow-hidden border-b border-[#E5EAF2]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                    
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-md text-[11px] font-bold text-[#123D8D] shadow-sm uppercase tracking-wider">
                      {product.subCategory}
                    </div>

                    {product.brand && (
                      <div className="absolute bottom-3 right-3 bg-[#09275E]/90 text-white backdrop-blur-sm px-2.5 py-1 rounded-md text-[11px] font-semibold shadow-sm">
                        Brand: {product.brand}
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-[#172033] group-hover:text-[#123D8D] transition-colors font-heading mb-2">
                      <Link to={`/products/${product.slug}`} className="focus:outline-none">
                        {product.name}
                      </Link>
                    </h3>

                    <p className="text-xs text-[#64748B] line-clamp-2 leading-relaxed mb-4">
                      {product.shortDesc}
                    </p>

                    <div className="space-y-1.5 mb-6">
                      {product.features.slice(0, 3).map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#123D8D] shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between gap-3 border-t border-slate-100 mt-auto">
                  <Link
                    to={`/products/${product.slug}`}
                    className="text-xs font-bold text-[#123D8D] hover:text-[#09275E] py-2 inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Full Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    to={`/enquiry?product=${encodeURIComponent(product.name)}&category=${product.category}`}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#F04438] hover:bg-[#d83227] text-white text-xs font-bold transition-colors shadow-sm"
                  >
                    <span>Enquire Now</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Associated Brands Section */}
      {associatedBrands.length > 0 && (
        <section className="py-14 bg-white border-y border-[#E5EAF2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#123D8D]">
                Manufacturer Network
              </span>
              <h3 className="text-2xl font-bold text-[#172033] font-heading mt-1">
                Associated Brands for {category.shortTitle}
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {associatedBrands.map((b) => (
                <Link
                  key={b.id}
                  to={`/brands/${b.slug}`}
                  className="p-4 rounded-xl border border-[#E5EAF2] hover:border-[#123D8D] bg-white flex flex-col items-center justify-center text-center transition-all group"
                >
                  <div className="w-full h-14 flex items-center justify-center mb-2">
                    <img 
                      src={b.logo} 
                      alt={b.name} 
                      className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all"
                    />
                  </div>
                  <span className="text-xs font-bold text-[#172033] group-hover:text-[#123D8D] truncate w-full">
                    {b.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. Category Enquiry CTA */}
      <section className="py-16 bg-[#123D8D] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading">
            Need Pricing or Engineering Advice for {category.name}?
          </h2>
          <p className="text-slate-100 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Specify your fuel type, fluid viscosity, flow rate, or road paver model for tailored quotation and delivery timeline.
          </p>
          <div className="pt-2">
            <Link
              to={`/enquiry?category=${category.id}`}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#F04438] hover:bg-[#d83227] text-white font-bold text-sm shadow-xl transition-all"
            >
              <span>Enquire for {category.shortTitle}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
