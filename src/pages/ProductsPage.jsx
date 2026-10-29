import React, { useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  Tag, 
  X,
  Gauge,
  Flame,
  Factory,
  Truck,
  Wind
} from 'lucide-react';
import { CATEGORIES_DATA, PRODUCTS_DATA } from '../data/productsData';

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    document.title = "Products Catalogue | SRIVAARI AGENCIES — Boilers, Burners, Pumps & Spares";
  }, []);

  // Sync category param if URL changes
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    if (catId === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', catId);
    }
    setSearchParams(searchParams);
  };

  // Filter products based on search query and category
  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((product) => {
      const matchesCategory = 
        selectedCategory === 'all' || 
        product.category === selectedCategory ||
        (selectedCategory === 'pumps' && product.category === 'industrial-pumps') ||
        (selectedCategory === 'pollution-control' && product.category === 'pollution-control-equipments');

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.shortDesc.toLowerCase().includes(q) ||
        product.subCategory.toLowerCase().includes(q) ||
        (product.brand && product.brand.toLowerCase().includes(q)) ||
        product.applications.some(app => app.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const categoryIcons = {
    'boilers': Gauge,
    'burners': Flame,
    'pumps': Factory,
    'road-machinery': Truck,
    'pollution-control': Wind
  };

  return (
    <div className="bg-[#F5F7FB] min-h-screen">
      
      {/* 1. Header Hero */}
      <section className="bg-[#09275E] text-white py-14 sm:py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img 
            src="/assets/hero-img-1.jpg" 
            alt="Industrial equipment background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#09275E] via-[#09275E]/90 to-[#09275E]/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold uppercase tracking-wider text-white mb-3">
              <Tag className="w-3.5 h-3.5 text-[#F04438]" />
              <span>Commercial Product Directory</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading tracking-tight leading-tight mb-3">
              Industrial Product Catalogue
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Explore steam boilers, combustion burners, positive displacement pumps, asphalt machinery spares, and air quality systems from established manufacturers.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Five Main Category Cards */}
      <section className="py-12 bg-white border-b border-[#E5EAF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex justify-between items-center">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#64748B]">
              Primary Product Categories
            </h2>
            <span className="text-xs text-[#123D8D] font-semibold">
              Select category to view dedicated page
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {CATEGORIES_DATA.map((cat) => {
              const Icon = categoryIcons[cat.id] || Factory;
              return (
                <Link
                  key={cat.id}
                  to={`/products/${cat.slug}`}
                  className="group bg-[#F5F7FB] hover:bg-white p-4 rounded-xl border border-[#E5EAF2] hover:border-[#123D8D] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="w-full h-24 rounded-lg overflow-hidden mb-3 bg-slate-200">
                    <img 
                      src={cat.studioImage || cat.image} 
                      alt={cat.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                    />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#172033] group-hover:text-[#123D8D] transition-colors font-heading truncate">
                      {cat.name}
                    </h3>
                    <p className="text-[11px] text-[#64748B] line-clamp-1 mt-0.5">
                      {cat.tagline}
                    </p>
                  </div>
                  <div className="pt-2 mt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-bold text-[#123D8D]">
                    <span>Category Page</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Search & Interactive Filter Controls */}
      <section className="py-8 bg-[#F5F7FB] border-b border-[#E5EAF2] sticky top-[73px] z-30 backdrop-blur-md bg-[#F5F7FB]/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-[#64748B] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products, brands, or models..."
                className="w-full pl-10 pr-9 py-2.5 bg-white border border-[#E5EAF2] rounded-xl text-sm text-[#172033] placeholder-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#123D8D]/20 focus:border-[#123D8D] transition-all shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 rounded-full"
                  aria-label="Clear Search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              <button
                onClick={() => handleCategoryChange('all')}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-[#123D8D] text-white shadow-sm'
                    : 'bg-white text-[#64748B] hover:text-[#172033] border border-[#E5EAF2]'
                }`}
              >
                All Products ({PRODUCTS_DATA.length})
              </button>
              {CATEGORIES_DATA.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-[#123D8D] text-white shadow-sm'
                      : 'bg-white text-[#64748B] hover:text-[#172033] border border-[#E5EAF2]'
                  }`}
                >
                  {cat.shortTitle}
                </button>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 4. Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Active status bar */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E5EAF2]">
            <p className="text-sm text-[#64748B]">
              Showing <span className="font-bold text-[#172033]">{filteredProducts.length}</span> industrial products
              {selectedCategory !== 'all' && (
                <span> in <span className="font-semibold text-[#123D8D] capitalize">{selectedCategory.replace('-', ' ')}</span></span>
              )}
              {searchQuery && (
                <span> matching &ldquo;<span className="font-semibold text-[#172033]">{searchQuery}</span>&rdquo;</span>
              )}
            </p>

            {(selectedCategory !== 'all' || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                  setSearchParams({});
                }}
                className="text-xs font-bold text-[#F04438] hover:underline inline-flex items-center gap-1"
              >
                <X className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>

          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-2xl border border-[#E5EAF2] p-12 text-center max-w-md mx-auto my-12">
              <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-[#172033] mb-2">No Matching Products Found</h3>
              <p className="text-xs text-[#64748B] mb-6">
                We couldn&apos;t find equipment matching your search query. We also source unlisted models and spares upon request.
              </p>
              <Link
                to="/enquiry"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#123D8D] text-white text-xs font-bold"
              >
                <span>Submit Product Request</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group bg-white rounded-2xl border border-[#E5EAF2] overflow-hidden card-shadow card-shadow-hover flex flex-col justify-between transition-all duration-300"
                >
                  <div>
                    {/* Image */}
                    <div className="relative h-56 bg-slate-50 overflow-hidden border-b border-[#E5EAF2]">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                        loading="lazy"
                      />
                      
                      {/* Subcategory Badge */}
                      <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-md text-[11px] font-bold text-[#123D8D] shadow-sm uppercase tracking-wider">
                        {product.subCategory}
                      </div>

                      {/* Brand Label */}
                      {product.brand && (
                        <div className="absolute bottom-3 right-3 bg-[#09275E]/90 text-white backdrop-blur-sm px-2.5 py-1 rounded-md text-[11px] font-semibold shadow-sm">
                          {product.brand}
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

                      {/* Features */}
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

                  {/* Actions */}
                  <div className="p-6 pt-0 flex items-center justify-between gap-3 border-t border-slate-100 mt-auto">
                    <Link
                      to={`/products/${product.slug}`}
                      className="text-xs font-bold text-[#123D8D] hover:text-[#09275E] py-2 inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Specifications</span>
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
          )}

        </div>
      </section>

    </div>
  );
}
