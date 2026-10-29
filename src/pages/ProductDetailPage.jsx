import React, { useMemo, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowUpRight, 
  ChevronRight, 
  Share2, 
  PhoneCall, 
  Layers,
  FileText
} from 'lucide-react';
import { PRODUCTS_DATA, CATEGORIES_DATA } from '../data/productsData';
import { BRANDS_DATA } from '../data/brandsData';

export default function ProductDetailPage() {
  const { slug } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);

  const product = useMemo(() => {
    return PRODUCTS_DATA.find((p) => p.slug === slug || p.id === slug);
  }, [slug]);

  useEffect(() => {
    if (product) {
      document.title = `${product.name} | SRIVAARI AGENCIES`;
      setSelectedImage(product.image);
    }
  }, [product]);

  // Find category info
  const categoryInfo = useMemo(() => {
    if (!product) return null;
    return CATEGORIES_DATA.find(
      (c) => c.id === product.category || 
      (product.category === 'industrial-pumps' && c.id === 'pumps') ||
      (product.category === 'pollution-control-equipments' && c.id === 'pollution-control')
    );
  }, [product]);

  // Find associated brand
  const brandInfo = useMemo(() => {
    if (!product || !product.brand) return null;
    return BRANDS_DATA.find((b) => product.brand.toLowerCase().includes(b.name.toLowerCase()));
  }, [product]);

  // Related products in the same category
  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return PRODUCTS_DATA.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);
  }, [product]);

  if (!product) {
    return (
      <div className="py-24 text-center">
        <h2 className="text-2xl font-bold text-[#172033] mb-4">Product Not Found</h2>
        <p className="text-sm text-[#64748B] mb-6">
          The requested product does not exist or has been moved.
        </p>
        <Link to="/products" className="px-6 py-2.5 rounded-lg bg-[#123D8D] text-white text-xs font-bold">
          Return to Product Catalogue
        </Link>
      </div>
    );
  }

  const galleryImages = [
    product.image,
    product.secondaryImage
  ].filter(Boolean);

  return (
    <div className="bg-[#F5F7FB] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-[#64748B] mb-8 overflow-x-auto whitespace-nowrap">
          <Link to="/" className="hover:text-[#123D8D]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/products" className="hover:text-[#123D8D]">Products</Link>
          {categoryInfo && (
            <>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link to={`/products/${categoryInfo.slug}`} className="hover:text-[#123D8D]">
                {categoryInfo.shortTitle}
              </Link>
            </>
          )}
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#172033] font-bold truncate max-w-xs">{product.name}</span>
        </nav>

        {/* Main Product Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-white rounded-3xl p-6 sm:p-10 border border-[#E5EAF2] shadow-sm mb-12">
          
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative h-[340px] sm:h-[420px] bg-slate-50 rounded-2xl overflow-hidden border border-[#E5EAF2]">
              <img
                src={selectedImage || product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center transition-all duration-300"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-md text-xs font-bold text-[#123D8D] shadow-sm">
                {product.subCategory}
              </div>
            </div>

            {/* Thumbnail switcher if secondary image exists */}
            {galleryImages.length > 1 && (
              <div className="flex items-center gap-3 pt-2">
                {galleryImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(img)}
                    className={`w-20 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                      selectedImage === img
                        ? 'border-[#123D8D] scale-105 shadow-sm'
                        : 'border-[#E5EAF2] hover:border-slate-400 opacity-80'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
                <span className="text-xs text-[#64748B] pl-2">
                  Click to switch view
                </span>
              </div>
            )}

            {/* Quick Sourcing Assurance */}
            <div className="bg-[#F5F7FB] p-4 rounded-xl border border-[#E5EAF2] flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-slate-700">
                <ShieldCheck className="w-4 h-4 text-[#123D8D]" />
                <span>Original Manufacturer Equipment & Parts</span>
              </div>
              <span className="font-semibold text-[#123D8D]">Direct B2B Supply</span>
            </div>
          </div>

          {/* Right Column: Details & Actions */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div>
              
              {/* Category & Brand Tags */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                {categoryInfo && (
                  <Link
                    to={`/products/${categoryInfo.slug}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#123D8D]/10 text-[#123D8D] text-xs font-bold hover:bg-[#123D8D]/20 transition-colors"
                  >
                    <span>{categoryInfo.shortTitle}</span>
                  </Link>
                )}

                {product.brand && (
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-[#172033] text-xs font-semibold border border-slate-200">
                    Manufacturer: <strong className="text-[#09275E]">{product.brand}</strong>
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#172033] font-heading tracking-tight mb-4">
                {product.name}
              </h1>

              {/* Overview */}
              <p className="text-sm sm:text-base text-[#64748B] leading-relaxed mb-6">
                {product.overview}
              </p>

              {/* Key Features */}
              <div className="space-y-3 mb-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#172033]">
                  Key Engineering Features:
                </h3>
                <ul className="space-y-2">
                  {product.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#123D8D] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Actions: Direct Enquiry pre-filled */}
            <div className="pt-6 border-t border-[#E5EAF2] space-y-4">
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to={`/enquiry?product=${encodeURIComponent(product.name)}&category=${product.category}`}
                  className="flex-1 min-w-[200px] py-4 px-6 rounded-xl bg-[#F04438] hover:bg-[#d83227] text-white font-bold text-sm text-center shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-[#F04438]/40"
                >
                  <span>Enquire About This Product</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="tel:+919490474638"
                  className="py-4 px-5 rounded-xl bg-[#123D8D] hover:bg-[#09275E] text-white font-semibold text-sm transition-colors flex items-center gap-2 shadow"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call Us</span>
                </a>
              </div>

              <p className="text-[11px] text-[#64748B] text-center sm:text-left">
                Clicking &ldquo;Enquire About This Product&rdquo; automatically pre-fills your enquiry form with this model.
              </p>
            </div>

          </div>

        </div>

        {/* Technical Specifications Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E5EAF2] shadow-sm mb-12">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#123D8D] mb-3">
            <FileText className="w-4 h-4" />
            <span>Technical Parameters</span>
          </div>
          <h2 className="text-2xl font-bold text-[#172033] font-heading mb-6">
            Technical Specifications & Operating Range
          </h2>

          {product.specs && product.specs.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-[#E5EAF2] bg-[#F5F7FB] text-[#64748B]">
                    <th className="py-3 px-4 font-bold uppercase tracking-wider">Parameter</th>
                    <th className="py-3 px-4 font-bold uppercase tracking-wider">Specification Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5EAF2]">
                  {product.specs.map((s, i) => (
                    <tr key={i} className="hover:bg-[#F5F7FB]/60 transition-colors">
                      <td className="py-3.5 px-4 font-semibold text-[#172033] w-1/3 sm:w-1/4">
                        {s.label}
                      </td>
                      <td className="py-3.5 px-4 text-[#64748B]">
                        {s.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-6 bg-[#F5F7FB] rounded-xl text-center text-sm text-[#64748B]">
              Specifications available on request. Please contact our engineering desk with your specific plant duty requirements.
            </div>
          )}

          {/* Applications list */}
          {product.applications && product.applications.length > 0 && (
            <div className="mt-8 pt-6 border-t border-[#E5EAF2]">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#172033] mb-3">
                Typical Plant Applications:
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.applications.map((app, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium bg-[#F5F7FB] text-slate-700 px-3 py-1.5 rounded-lg border border-[#E5EAF2]"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Related Products in the same category */}
        {relatedProducts.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-[#E5EAF2]">
              <h2 className="text-xl font-bold text-[#172033] font-heading">
                Related Equipment in this Category
              </h2>
              {categoryInfo && (
                <Link to={`/products/${categoryInfo.slug}`} className="text-xs font-bold text-[#123D8D] hover:underline">
                  View All in {categoryInfo.shortTitle} &rarr;
                </Link>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <div
                  key={rel.id}
                  className="group bg-white rounded-2xl border border-[#E5EAF2] overflow-hidden card-shadow hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="h-44 bg-slate-50 overflow-hidden relative">
                    <img 
                      src={rel.image} 
                      alt={rel.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2 bg-white/90 text-[10px] font-bold text-[#123D8D] px-2 py-0.5 rounded shadow">
                      {rel.subCategory}
                    </div>
                  </div>
                  <div className="p-4 flex flex-col justify-between flex-grow">
                    <div>
                      <h4 className="text-sm font-bold text-[#172033] group-hover:text-[#123D8D] transition-colors line-clamp-1 mb-1">
                        {rel.name}
                      </h4>
                      <p className="text-xs text-[#64748B] line-clamp-2 mb-3">
                        {rel.shortDesc}
                      </p>
                    </div>
                    <Link
                      to={`/products/${rel.slug}`}
                      className="text-xs font-bold text-[#123D8D] hover:text-[#09275E] inline-flex items-center gap-1 pt-2 border-t border-slate-100"
                    >
                      <span>View Specifications</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
