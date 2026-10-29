import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUpRight, 
  ShieldCheck, 
  CheckCircle2, 
  ChevronRight
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';
import { CATEGORIES_DATA } from '../../data/productsData';
import { FacebookIcon, LinkedinIcon } from '../common/SocialIcons';

export default function Footer() {
  return (
    <footer className="bg-[#09275E] text-white pt-16 pb-12 border-t-4 border-[#123D8D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Col 1 & 2: Company Profile & Logo */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="inline-block bg-white p-2.5 rounded-lg shadow-sm">
              <img 
                src="/assets/logo.png" 
                alt="SRIVAARI AGENCIES Logo" 
                className="h-10 w-auto object-contain"
              />
            </Link>
            
            <p className="text-slate-300 text-sm leading-relaxed pr-4">
              SRIVAARI AGENCIES is a premier B2B supplier of industrial plant equipment, process steam boilers, combustion burners, positive displacement pumps, road construction machinery, and industrial pollution control systems.
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 bg-white/5 py-2 px-3 rounded-lg border border-white/10 w-fit">
              <ShieldCheck className="w-4 h-4 text-[#F04438]" />
              <span>Over {COMPANY_INFO.experienceYears} Years of Engineering & Technical Guidance</span>
            </div>

            <div className="flex items-center gap-3 pt-1">
              <a 
                href={COMPANY_INFO.socials.facebook}
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook Page"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#123D8D] flex items-center justify-center text-white transition-colors"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a 
                href={COMPANY_INFO.socials.linkedin}
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn Page"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#123D8D] flex items-center justify-center text-white transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Product Categories */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F04438]" />
              Equipment
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {CATEGORIES_DATA.map((cat) => (
                <li key={cat.id}>
                  <Link 
                    to={`/products/${cat.slug}`}
                    className="hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all text-slate-300"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#123D8D]" />
                    <span>{cat.shortTitle}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link 
                  to="/products"
                  className="text-xs font-semibold text-[#F04438] hover:underline inline-flex items-center gap-1"
                >
                  View Full Catalogue &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#123D8D]" />
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About Srivaari</Link>
              </li>
              <li>
                <Link to="/brands" className="hover:text-white transition-colors">Brands Directory</Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-white transition-colors">Industries & Applications</Link>
              </li>
              <li>
                <Link to="/enquiry" className="hover:text-white transition-colors">Request a Quote</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact Our Team</Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Verified Contact Details */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F04438]" />
              Head Office
            </h4>
            <div className="space-y-3.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F04438] shrink-0 mt-0.5" />
                <span>
                  {COMPANY_INFO.address.line1}, {COMPANY_INFO.address.line2}, {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.pincode}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#123D8D] shrink-0" />
                <div>
                  <a href={`tel:${COMPANY_INFO.phones[0].value}`} className="hover:text-white transition-colors block font-semibold text-slate-200">
                    {COMPANY_INFO.phones[0].display}
                  </a>
                  <a href={`tel:${COMPANY_INFO.phones[1].value}`} className="hover:text-white transition-colors block text-slate-400">
                    {COMPANY_INFO.phones[1].display}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#123D8D] shrink-0" />
                <a 
                  href={`mailto:${COMPANY_INFO.emails[0]}`}
                  className="hover:text-white transition-colors font-semibold text-slate-200 break-all"
                >
                  {COMPANY_INFO.emails[0]}
                </a>
              </div>

              <div className="pt-2">
                <Link
                  to="/enquiry"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#F04438] hover:bg-[#d83227] text-white text-xs font-semibold transition-colors"
                >
                  <span>Submit Technical Enquiry</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} SRIVAARI AGENCIES. All rights reserved. Industrial equipment supplier.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-slate-400">Authentic Industrial Spares & Equipment</span>
            <Link to="/contact" className="hover:text-slate-200 transition-colors">Location & Map</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
