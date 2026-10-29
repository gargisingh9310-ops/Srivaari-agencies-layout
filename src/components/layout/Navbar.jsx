import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { 
  ChevronDown, 
  Menu, 
  X, 
  PhoneCall, 
  ArrowRight,
  Flame,
  Gauge,
  Factory,
  Wind,
  Truck
} from 'lucide-react';
import { CATEGORIES_DATA } from '../../data/productsData';
import { BRANDS_DATA } from '../../data/brandsData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [brandsDropdownOpen, setBrandsDropdownOpen] = useState(false);
  const location = useLocation();

  const productsTimeoutRef = useRef(null);
  const brandsTimeoutRef = useRef(null);

  // Detect scroll state for sticky header backdrop
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
    setBrandsDropdownOpen(false);
  }, [location.pathname]);

  const categoryIcons = {
    'boilers': Gauge,
    'burners': Flame,
    'pumps': Factory,
    'road-machinery': Truck,
    'pollution-control': Wind,
  };

  const handleProductsEnter = () => {
    clearTimeout(productsTimeoutRef.current);
    setProductsDropdownOpen(true);
  };

  const handleProductsLeave = () => {
    productsTimeoutRef.current = setTimeout(() => {
      setProductsDropdownOpen(false);
    }, 150);
  };

  const handleBrandsEnter = () => {
    clearTimeout(brandsTimeoutRef.current);
    setBrandsDropdownOpen(true);
  };

  const handleBrandsLeave = () => {
    brandsTimeoutRef.current = setTimeout(() => {
      setBrandsDropdownOpen(false);
    }, 150);
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E5EAF2] py-2' 
          : 'bg-white border-b border-[#E5EAF2]/80 py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center focus:outline-none focus:ring-2 focus:ring-[#123D8D]/30 rounded transition-transform duration-200 hover:opacity-95"
            aria-label="Srivaari Agencies Homepage"
          >
            <img 
              src="/assets/logo.png" 
              alt="SRIVAARI AGENCIES Logo" 
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <NavLink 
              to="/" 
              end
              className={({ isActive }) => 
                `px-3 py-2 text-sm font-semibold rounded-md transition-colors relative ${
                  isActive 
                    ? 'text-[#123D8D]' 
                    : 'text-[#172033] hover:text-[#123D8D]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Home
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#123D8D] rounded-full" />
                  )}
                </>
              )}
            </NavLink>

            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `px-3 py-2 text-sm font-semibold rounded-md transition-colors relative ${
                  isActive 
                    ? 'text-[#123D8D]' 
                    : 'text-[#172033] hover:text-[#123D8D]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  About Us
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#123D8D] rounded-full" />
                  )}
                </>
              )}
            </NavLink>

            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleProductsEnter}
              onMouseLeave={handleProductsLeave}
            >
              <NavLink 
                to="/products"
                className={({ isActive }) => 
                  `flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-md transition-colors relative ${
                    isActive 
                      ? 'text-[#123D8D]' 
                      : 'text-[#172033] hover:text-[#123D8D]'
                  }`
                }
              >
                <span>Products</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${productsDropdownOpen ? 'rotate-180 text-[#123D8D]' : ''}`} />
              </NavLink>

              {/* Mega Dropdown Menu */}
              {productsDropdownOpen && (
                <div 
                  className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-xl border border-[#E5EAF2] p-3 animate-in fade-in slide-in-from-top-2 duration-150 z-50"
                  role="menu"
                >
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#64748B] px-3 py-1 mb-1 border-b border-slate-100">
                    Product Categories
                  </div>
                  <div className="space-y-1">
                    {CATEGORIES_DATA.map((cat) => {
                      const Icon = categoryIcons[cat.id] || Factory;
                      return (
                        <Link
                          key={cat.id}
                          to={`/products/${cat.slug}`}
                          className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#F5F7FB] transition-colors group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#123D8D]/10 text-[#123D8D] group-hover:bg-[#123D8D] group-hover:text-white transition-colors flex items-center justify-center shrink-0 mt-0.5">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-[#172033] group-hover:text-[#123D8D] transition-colors">
                              {cat.shortTitle}
                            </div>
                            <div className="text-xs text-[#64748B] line-clamp-1">
                              {cat.tagline}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                  <div className="mt-2 pt-2 border-t border-slate-100">
                    <Link 
                      to="/products"
                      className="flex items-center justify-between px-3 py-2 text-xs font-bold text-[#123D8D] hover:bg-[#123D8D]/5 rounded-lg transition-colors"
                    >
                      <span>Explore Complete Catalogue</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Brands Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleBrandsEnter}
              onMouseLeave={handleBrandsLeave}
            >
              <NavLink 
                to="/brands"
                className={({ isActive }) => 
                  `flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-md transition-colors relative ${
                    isActive 
                      ? 'text-[#123D8D]' 
                      : 'text-[#172033] hover:text-[#123D8D]'
                  }`
                }
              >
                <span>Brands</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${brandsDropdownOpen ? 'rotate-180 text-[#123D8D]' : ''}`} />
              </NavLink>

              {/* Brands Quick Dropdown */}
              {brandsDropdownOpen && (
                <div 
                  className="absolute top-full left-0 w-88 bg-white rounded-xl shadow-xl border border-[#E5EAF2] p-4 animate-in fade-in slide-in-from-top-2 duration-150 z-50"
                  role="menu"
                >
                  <div className="flex justify-between items-center pb-2 mb-2 border-b border-slate-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">
                      Supplier Brands
                    </span>
                    <Link to="/brands" className="text-xs font-semibold text-[#123D8D] hover:underline">
                      View All 15+ Brands
                    </Link>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {BRANDS_DATA.slice(0, 9).map((b) => (
                      <Link
                        key={b.id}
                        to={`/brands/${b.slug}`}
                        className="p-1.5 border border-[#E5EAF2] hover:border-[#123D8D] rounded-lg bg-white flex flex-col items-center justify-center text-center transition-all group"
                      >
                        <div className="w-14 h-9 flex items-center justify-center p-1 mb-1">
                          <img 
                            src={b.logo} 
                            alt={b.name} 
                            className="max-h-full max-w-full object-contain filter group-hover:scale-105 transition-transform" 
                          />
                        </div>
                        <span className="text-[10px] font-semibold text-[#172033] truncate w-full">
                          {b.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <NavLink 
              to="/industries" 
              className={({ isActive }) => 
                `px-3 py-2 text-sm font-semibold rounded-md transition-colors relative ${
                  isActive 
                    ? 'text-[#123D8D]' 
                    : 'text-[#172033] hover:text-[#123D8D]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Industries
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#123D8D] rounded-full" />
                  )}
                </>
              )}
            </NavLink>

            <NavLink 
              to="/enquiry" 
              className={({ isActive }) => 
                `px-3 py-2 text-sm font-semibold rounded-md transition-colors relative ${
                  isActive 
                    ? 'text-[#123D8D]' 
                    : 'text-[#172033] hover:text-[#123D8D]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Enquiry
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#123D8D] rounded-full" />
                  )}
                </>
              )}
            </NavLink>

            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `px-3 py-2 text-sm font-semibold rounded-md transition-colors relative ${
                  isActive 
                    ? 'text-[#123D8D]' 
                    : 'text-[#172033] hover:text-[#123D8D]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Contact
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#123D8D] rounded-full" />
                  )}
                </>
              )}
            </NavLink>
          </nav>

          {/* Action CTAs: Restrained Tomato-Red CTA for Quote */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/enquiry"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#F04438] hover:bg-[#d83227] shadow-sm hover:shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#F04438]/50 active:scale-[0.98]"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#172033] hover:text-[#123D8D] rounded-lg hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#123D8D]/30"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-white border-b border-[#E5EAF2] shadow-2xl max-h-[calc(100vh-80px)] overflow-y-auto px-4 py-5 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-2">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `px-4 py-3 rounded-lg text-base font-semibold ${
                  isActive ? 'bg-[#123D8D]/10 text-[#123D8D]' : 'text-[#172033] hover:bg-slate-100'
                }`
              }
            >
              Home
            </NavLink>

            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `px-4 py-3 rounded-lg text-base font-semibold ${
                  isActive ? 'bg-[#123D8D]/10 text-[#123D8D]' : 'text-[#172033] hover:bg-slate-100'
                }`
              }
            >
              About Us
            </NavLink>

            {/* Products with accordion */}
            <div className="border border-slate-100 rounded-lg p-2 bg-[#F5F7FB]">
              <NavLink 
                to="/products"
                className="block px-3 py-2 text-base font-bold text-[#123D8D]"
              >
                Products Overview
              </NavLink>
              <div className="mt-1 space-y-1 pl-3 border-l-2 border-[#123D8D]/20">
                {CATEGORIES_DATA.map((cat) => (
                  <Link
                    key={cat.id}
                    to={`/products/${cat.slug}`}
                    className="block py-1.5 text-sm font-medium text-[#172033] hover:text-[#123D8D]"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>

            <NavLink 
              to="/brands" 
              className={({ isActive }) => 
                `px-4 py-3 rounded-lg text-base font-semibold ${
                  isActive ? 'bg-[#123D8D]/10 text-[#123D8D]' : 'text-[#172033] hover:bg-slate-100'
                }`
              }
            >
              Brands Directory
            </NavLink>

            <NavLink 
              to="/industries" 
              className={({ isActive }) => 
                `px-4 py-3 rounded-lg text-base font-semibold ${
                  isActive ? 'bg-[#123D8D]/10 text-[#123D8D]' : 'text-[#172033] hover:bg-slate-100'
                }`
              }
            >
              Industries Served
            </NavLink>

            <NavLink 
              to="/enquiry" 
              className={({ isActive }) => 
                `px-4 py-3 rounded-lg text-base font-semibold ${
                  isActive ? 'bg-[#123D8D]/10 text-[#123D8D]' : 'text-[#172033] hover:bg-slate-100'
                }`
              }
            >
              Enquiry
            </NavLink>

            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `px-4 py-3 rounded-lg text-base font-semibold ${
                  isActive ? 'bg-[#123D8D]/10 text-[#123D8D]' : 'text-[#172033] hover:bg-slate-100'
                }`
              }
            >
              Contact Us
            </NavLink>

            <div className="pt-4 border-t border-slate-200 mt-2">
              <Link
                to="/enquiry"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-base font-semibold text-white bg-[#F04438] hover:bg-[#d83227] shadow transition-colors"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
