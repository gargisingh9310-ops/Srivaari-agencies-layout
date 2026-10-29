import React, { useMemo, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  ChevronRight, 
  ArrowUpRight,
  Factory
} from 'lucide-react';
import { BRANDS_DATA } from '../data/brandsData';
import { PRODUCTS_DATA } from '../data/productsData';

export default function BrandDetailPage() {
  const { slug } = useParams();

  const brand = useMemo(() => {
    return BRANDS_DATA.find((b) => b.slug === slug || b.id === slug);
  }, [slug]);

  useEffect(() => {
    if (brand) {
      document.title = `${brand.name} Equipment & Spares | SRIVAARI AGENCIES`;
    }
  }, [brand]);

  // Find products associated with this brand
  const matchingProducts = useMemo(() => {
    if (!brand) return [];
    return PRODUCTS_DATA.filter((p) => 
      p.brand && p.brand.toLowerCase().includes(brand.name.toLowerCase())
    );
  }, [brand]);

  if (!brand) {
    return (
      <div className="py-24 text-center">
        <h2 className="text-2xl font-bold text-[#172033] mb-4">Brand Profile Not Found</h2>
        <Link to="/brands" className="text-sm font-bold text-[#123D8D] hover:underline">
          Return to Brands Directory &rarr;
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#F5F7FB] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-[#64748B] mb-8">
          <Link to="/" className="hover:text-[#123D8D]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/brands" className="hover:text-[#123D8D]">Brands</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#172033] font-bold">{brand.name}</span>
        </nav>

        {/* Brand Profile Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E5EAF2] shadow-sm mb-12">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            
            {/* Logo Container */}
            <div className="w-48 h-28 sm:h-32 bg-slate-50 p-4 rounded-2xl border border-[#E5EAF2] flex items-center justify-center shrink-0">
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* Profile Info */}
            <div className="flex-grow space-y-3 text-center md:text-left">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                <span className="text-xs font-bold text-[#123D8D] bg-[#123D8D]/10 px-3 py-1 rounded-full">
                  {brand.categoryLabel}
                </span>
                <span className="text-xs font-semibold text-[#64748B] bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                  Origin: {brand.origin}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#172033] font-heading">
                {brand.name}
              </h1>

              <p className="text-sm text-[#64748B] leading-relaxed max-w-2xl">
                {brand.overview || brand.description}
              </p>

              <div className="pt-2 text-xs text-slate-700">
                <strong>Reputation & Key Features:</strong> {brand.reputation}
              </div>

              <div className="pt-4 flex flex-wrap justify-center md:justify-start gap-3">
                <Link
                  to={`/enquiry?brand=${encodeURIComponent(brand.name)}`}
                  className="px-5 py-2.5 rounded-xl bg-[#F04438] hover:bg-[#d83227] text-white text-xs font-bold transition-all shadow"
                >
                  Enquire for {brand.name} Equipment & Spares
                </Link>
                <Link
                  to="/products"
                  className="px-5 py-2.5 rounded-xl bg-[#F5F7FB] hover:bg-slate-200 text-[#172033] text-xs font-semibold border border-[#E5EAF2] transition-colors"
                >
                  View Product Directory
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* Matching Products */}
        <div className="mb-14">
          <h2 className="text-xl font-bold text-[#172033] font-heading mb-6">
            Supplied Equipment & Assemblies ({matchingProducts.length})
          </h2>

          {matchingProducts.length === 0 ? (
            <div className="bg-white rounded-2xl border border-[#E5EAF2] p-8 text-center text-sm text-[#64748B]">
              <Factory className="w-10 h-10 text-slate-300 mx-auto mb-2" />
              <p className="font-semibold text-[#172033] mb-1">Specific Spares Available on Enquiry</p>
              <p className="text-xs max-w-md mx-auto mb-4">
                We supply individual spares, seals, nozzles, and replacement parts for {brand.name}. Share your part number or drawing for immediate quotation.
              </p>
              <Link
                to={`/enquiry?brand=${encodeURIComponent(brand.name)}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#123D8D] text-white text-xs font-bold"
              >
                <span>Request Part Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {matchingProducts.map((p) => (
                <div
                  key={p.id}
                  className="group bg-white rounded-2xl border border-[#E5EAF2] overflow-hidden card-shadow hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="h-48 bg-slate-50 overflow-hidden relative">
                    <img 
                      src={p.image} 
                      alt={p.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2 bg-white/90 text-[10px] font-bold text-[#123D8D] px-2 py-0.5 rounded shadow">
                      {p.subCategory}
                    </div>
                  </div>

                  <div className="p-5 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="text-base font-bold text-[#172033] group-hover:text-[#123D8D] transition-colors mb-2">
                        {p.name}
                      </h3>
                      <p className="text-xs text-[#64748B] line-clamp-2 mb-4">
                        {p.shortDesc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <Link
                        to={`/products/${p.slug}`}
                        className="text-xs font-bold text-[#123D8D] hover:underline inline-flex items-center gap-1"
                      >
                        <span>Specifications</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>

                      <Link
                        to={`/enquiry?product=${encodeURIComponent(p.name)}`}
                        className="text-xs font-bold text-[#F04438] hover:underline inline-flex items-center gap-1"
                      >
                        <span>Enquire</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
