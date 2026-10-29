import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Tag, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { PRODUCTS_DATA } from '../../data/productsData';

export default function FeaturedProducts() {
  // Curate 6 high-impact products across different categories
  const featuredIds = [
    'bentone-burners',
    'rotofluid-gear-pumps',
    'steam-boilers-thermic-heaters',
    'road-paver-spares',
    'pulse-jet-bag-filters',
    'national-furnaces-burners'
  ];

  const featured = PRODUCTS_DATA.filter(p => featuredIds.includes(p.id));

  return (
    <section className="py-20 bg-white border-b border-[#E5EAF2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#123D8D]/10 text-[#123D8D] text-xs font-bold uppercase tracking-wider mb-3">
              <Tag className="w-3.5 h-3.5" />
              Featured Selection
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172033] tracking-tight font-heading">
              Featured Industrial Products
            </h2>
            <p className="text-base text-[#64748B] mt-2 max-w-xl">
              A curated look into our most requested combustion, fluid displacement, steam utility, and road plant equipment.
            </p>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#123D8D] hover:text-[#09275E] hover:underline"
          >
            <span>Browse Complete Product Catalogue</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 6 Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl border border-[#E5EAF2] overflow-hidden card-shadow card-shadow-hover flex flex-col justify-between transition-all duration-300"
            >
              <div>
                {/* Image Area */}
                <div className="relative h-56 bg-slate-50 overflow-hidden border-b border-[#E5EAF2]/60">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-md text-[11px] font-bold text-[#123D8D] shadow-sm uppercase tracking-wider">
                    {product.subCategory}
                  </div>

                  {/* Brand Tag if verified */}
                  {product.brand && (
                    <div className="absolute bottom-3 right-3 bg-[#09275E]/90 text-white backdrop-blur-sm px-2.5 py-1 rounded-md text-[11px] font-semibold shadow-sm">
                      Brand: {product.brand}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#172033] group-hover:text-[#123D8D] transition-colors font-heading mb-2">
                    <Link to={`/products/${product.slug}`} className="focus:outline-none">
                      {product.name}
                    </Link>
                  </h3>

                  <p className="text-xs text-[#64748B] line-clamp-2 leading-relaxed mb-4">
                    {product.shortDesc}
                  </p>

                  {/* Highlight Features */}
                  <div className="space-y-1.5 mb-6">
                    {product.features.slice(0, 2).map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#123D8D] shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 flex items-center justify-between gap-3 border-t border-slate-100 mt-auto">
                <Link
                  to={`/products/${product.slug}`}
                  className="text-xs font-bold text-[#123D8D] hover:text-[#09275E] py-2 inline-flex items-center gap-1 transition-colors"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  to={`/enquiry?product=${encodeURIComponent(product.name)}&category=${product.category}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F04438]/10 hover:bg-[#F04438] text-[#F04438] hover:text-white text-xs font-bold transition-colors"
                >
                  <span>Enquire Now</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#123D8D] hover:bg-[#09275E] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all"
          >
            <span>Explore All Products Across 5 Categories</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
