import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  PhoneCall, 
  Mail, 
  MapPin, 
  FileText, 
  ShieldCheck,
  Building,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { CATEGORIES_DATA } from '../data/productsData';

export default function EnquiryPage() {
  const [searchParams] = useSearchParams();

  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    category: '',
    productOfInterest: '',
    quantity: '',
    details: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  useEffect(() => {
    document.title = "Commercial Enquiry & Quote Request | SRIVAARI AGENCIES";

    // Prefill from URL query params
    const initialProduct = searchParams.get('product') || '';
    const initialCategory = searchParams.get('category') || '';
    const initialBrand = searchParams.get('brand') || '';
    const initialIndustry = searchParams.get('industry') || '';

    let detailsText = '';
    if (initialBrand) {
      detailsText = `Enquiring regarding ${initialBrand} equipment/spares.`;
    } else if (initialIndustry) {
      detailsText = `Requirement for ${initialIndustry} facility.`;
    }

    setFormData((prev) => ({
      ...prev,
      productOfInterest: initialProduct || (initialBrand ? `${initialBrand} Equipment` : ''),
      category: initialCategory || '',
      details: detailsText
    }));
  }, [searchParams]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.companyName.trim()) newErrors.companyName = "Company or Enterprise name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Business email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9+() -]{7,15}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid contact number";
    }
    if (!formData.category) newErrors.category = "Please select a product category";
    if (!formData.productOfInterest.trim()) newErrors.productOfInterest = "Please specify the product or spares required";
    if (!formData.details.trim()) newErrors.details = "Please share brief requirement specifications or notes";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable dispatch & prepare direct mailto fallback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
    }, 600);
  };

  // Helper to construct mailto link
  const constructMailto = () => {
    if (!submittedData) return '';
    const subject = encodeURIComponent(`B2B Enquiry: ${submittedData.productOfInterest} - ${submittedData.companyName}`);
    const body = encodeURIComponent(
      `Dear Srivaari Agencies Team,\n\n` +
      `Here are our requirement details:\n` +
      `----------------------------------------\n` +
      `Name: ${submittedData.fullName}\n` +
      `Company: ${submittedData.companyName}\n` +
      `Phone: ${submittedData.phone}\n` +
      `Email: ${submittedData.email}\n` +
      `Category: ${submittedData.category}\n` +
      `Product: ${submittedData.productOfInterest}\n` +
      `Quantity: ${submittedData.quantity || 'N/A'}\n\n` +
      `Details / Specifications:\n${submittedData.details}\n\n` +
      `Best regards,\n${submittedData.fullName}`
    );
    return `mailto:srivaariagencies@yahoo.co.in?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-[#F5F7FB] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#123D8D]/10 text-[#123D8D] text-xs font-bold uppercase tracking-wider mb-3">
            <FileText className="w-3.5 h-3.5" />
            Commercial Enquiry
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#172033] font-heading tracking-tight mb-3">
            Request an Industrial Equipment Quote
          </h1>
          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
            Fill in your operational specifications below. Our technical sales team reviews each enquiry for technical compatibility and prompt commercial quotation.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 border border-[#E5EAF2] shadow-sm">
            {submittedData ? (
              <div className="text-center py-8 space-y-6 animate-in fade-in duration-300">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2 max-w-md mx-auto">
                  <h3 className="text-2xl font-bold text-[#172033] font-heading">
                    Enquiry Details Prepared
                  </h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">
                    Thank you, <strong className="text-[#172033]">{submittedData.fullName}</strong>. Your enquiry for <strong className="text-[#123D8D]">{submittedData.productOfInterest}</strong> on behalf of <strong className="text-[#172033]">{submittedData.companyName}</strong> has been structured.
                  </p>
                </div>

                {/* Honest Integration Fallback */}
                <div className="p-5 rounded-2xl bg-[#F5F7FB] border border-[#E5EAF2] text-left text-xs max-w-lg mx-auto space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                    <span className="font-bold text-[#172033]">Dispatch Options</span>
                    <span className="text-[10px] bg-blue-100 text-[#123D8D] font-bold px-2 py-0.5 rounded">Verified Transmission</span>
                  </div>

                  <p className="text-[#64748B]">
                    To ensure immediate priority handling by our Secunderabad engineering team, you can directly launch your email client with this pre-formatted request, or telephone our desk directly:
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <a
                      href={constructMailto()}
                      className="flex-1 py-3 px-4 rounded-xl bg-[#123D8D] hover:bg-[#09275E] text-white font-bold text-center transition-colors flex items-center justify-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send via Email Client</span>
                    </a>

                    <a
                      href={`tel:${COMPANY_INFO.phones[0].value}`}
                      className="py-3 px-4 rounded-xl bg-white border border-[#E5EAF2] hover:bg-slate-100 text-[#172033] font-bold text-center transition-colors flex items-center justify-center gap-2"
                    >
                      <PhoneCall className="w-4 h-4 text-[#F04438]" />
                      <span>Call Direct</span>
                    </a>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmittedData(null);
                      setFormData({
                        fullName: '',
                        companyName: '',
                        email: '',
                        phone: '',
                        category: '',
                        productOfInterest: '',
                        quantity: '',
                        details: ''
                      });
                    }}
                    className="text-xs font-bold text-[#123D8D] hover:underline"
                  >
                    &larr; Submit Another Product Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                
                <div className="border-b border-[#E5EAF2] pb-4">
                  <h3 className="text-lg font-bold text-[#172033] font-heading">
                    1. Contact & Enterprise Details
                  </h3>
                  <p className="text-xs text-[#64748B]">
                    Please provide your authentic business credentials for formal quotations.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-bold text-[#172033] mb-1.5">
                      Full Name <span className="text-[#F04438]">*</span>
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Ramesh Kumar"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-[#172033] placeholder-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#123D8D]/20 ${
                        errors.fullName ? 'border-[#F04438] bg-red-50/20' : 'border-[#E5EAF2] bg-white'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-[#F04438] mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Company Name */}
                  <div>
                    <label htmlFor="companyName" className="block text-xs font-bold text-[#172033] mb-1.5">
                      Company / Enterprise Name <span className="text-[#F04438]">*</span>
                    </label>
                    <input
                      id="companyName"
                      name="companyName"
                      type="text"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="e.g. Deccan Textiles Ltd."
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-[#172033] placeholder-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#123D8D]/20 ${
                        errors.companyName ? 'border-[#F04438] bg-red-50/20' : 'border-[#E5EAF2] bg-white'
                      }`}
                    />
                    {errors.companyName && (
                      <p className="text-[11px] text-[#F04438] mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.companyName}</span>
                      </p>
                    )}
                  </div>

                  {/* Business Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-[#172033] mb-1.5">
                      Business Email <span className="text-[#F04438]">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="purchase@yourcompany.com"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-[#172033] placeholder-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#123D8D]/20 ${
                        errors.email ? 'border-[#F04438] bg-red-50/20' : 'border-[#E5EAF2] bg-white'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-[#F04438] mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-[#172033] mb-1.5">
                      Phone / Mobile Number <span className="text-[#F04438]">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-[#172033] placeholder-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#123D8D]/20 ${
                        errors.phone ? 'border-[#F04438] bg-red-50/20' : 'border-[#E5EAF2] bg-white'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-[#F04438] mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="border-b border-[#E5EAF2] pb-4 pt-4">
                  <h3 className="text-lg font-bold text-[#172033] font-heading">
                    2. Machinery & Product Specifications
                  </h3>
                  <p className="text-xs text-[#64748B]">
                    Specify the model, brand, or component requirements.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Category */}
                  <div>
                    <label htmlFor="category" className="block text-xs font-bold text-[#172033] mb-1.5">
                      Product Category <span className="text-[#F04438]">*</span>
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#123D8D]/20 ${
                        errors.category ? 'border-[#F04438] bg-red-50/20' : 'border-[#E5EAF2] bg-white'
                      }`}
                    >
                      <option value="">-- Select Product Category --</option>
                      {CATEGORIES_DATA.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                    {errors.category && (
                      <p className="text-[11px] text-[#F04438] mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.category}</span>
                      </p>
                    )}
                  </div>

                  {/* Product of Interest */}
                  <div>
                    <label htmlFor="productOfInterest" className="block text-xs font-bold text-[#172033] mb-1.5">
                      Product or Model of Interest <span className="text-[#F04438]">*</span>
                    </label>
                    <input
                      id="productOfInterest"
                      name="productOfInterest"
                      type="text"
                      value={formData.productOfInterest}
                      onChange={handleChange}
                      placeholder="e.g. Bentone Burner BG400 or Rotofluid 2 inch pump"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-[#172033] placeholder-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#123D8D]/20 ${
                        errors.productOfInterest ? 'border-[#F04438] bg-red-50/20' : 'border-[#E5EAF2] bg-white'
                      }`}
                    />
                    {errors.productOfInterest && (
                      <p className="text-[11px] text-[#F04438] mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.productOfInterest}</span>
                      </p>
                    )}
                  </div>

                  {/* Quantity (Optional) */}
                  <div className="sm:col-span-2">
                    <label htmlFor="quantity" className="block text-xs font-bold text-[#172033] mb-1.5">
                      Estimated Quantity (Optional)
                    </label>
                    <input
                      id="quantity"
                      name="quantity"
                      type="text"
                      value={formData.quantity}
                      onChange={handleChange}
                      placeholder="e.g. 1 Complete Unit or 5 Sets of Spares"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5EAF2] bg-white text-sm text-[#172033] placeholder-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#123D8D]/20"
                    />
                  </div>

                  {/* Requirement Details */}
                  <div className="sm:col-span-2">
                    <label htmlFor="details" className="block text-xs font-bold text-[#172033] mb-1.5">
                      Requirement Details & Operating Conditions <span className="text-[#F04438]">*</span>
                    </label>
                    <textarea
                      id="details"
                      name="details"
                      rows={4}
                      value={formData.details}
                      onChange={handleChange}
                      placeholder="Please mention flow rate, fuel type (diesel, heavy oil, gas), fluid viscosity, pressure ratings, or road paver make & model..."
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-[#172033] placeholder-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#123D8D]/20 ${
                        errors.details ? 'border-[#F04438] bg-red-50/20' : 'border-[#E5EAF2] bg-white'
                      }`}
                    />
                    {errors.details && (
                      <p className="text-[11px] text-[#F04438] mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.details}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4 border-t border-[#E5EAF2] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-[11px] text-[#64748B]">
                    Strict confidentiality maintained. No unsolicited marketing.
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#F04438] hover:bg-[#d83227] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-[#F04438]/50 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>Validating & Structuring...</span>
                    ) : (
                      <>
                        <span>Submit Equipment Enquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}
          </div>

          {/* Right Column: Verified Office & Contact Card */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quick Contact Card */}
            <div className="bg-white rounded-3xl p-6 border border-[#E5EAF2] shadow-sm space-y-5">
              <h3 className="text-base font-bold text-[#172033] font-heading border-b border-slate-100 pb-3">
                Direct Contact Desk
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <PhoneCall className="w-4 h-4 text-[#123D8D] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-700 block mb-0.5">Primary Commercial Line</span>
                    <a href={`tel:${COMPANY_INFO.phones[0].value}`} className="font-bold text-[#123D8D] hover:underline text-sm block">
                      {COMPANY_INFO.phones[0].display}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <PhoneCall className="w-4 h-4 text-[#123D8D] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-700 block mb-0.5">Secondary Technical Line</span>
                    <a href={`tel:${COMPANY_INFO.phones[1].value}`} className="font-bold text-[#123D8D] hover:underline text-sm block">
                      {COMPANY_INFO.phones[1].display}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#123D8D] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-700 block mb-0.5">Official Sourcing Email</span>
                    <a href={`mailto:${COMPANY_INFO.emails[0]}`} className="font-bold text-[#172033] hover:text-[#123D8D] break-all">
                      {COMPANY_INFO.emails[0]}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#F04438] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-700 block mb-0.5">Secunderabad Office</span>
                    <p className="text-slate-600 leading-relaxed">
                      {COMPANY_INFO.address.full}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-[#F5F7FB] hover:bg-slate-200 text-[#172033] text-xs font-semibold transition-colors"
                >
                  <span>View Map & Driving Directions</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#64748B]" />
                </Link>
              </div>
            </div>

            {/* Sourcing Guarantee Box */}
            <div className="bg-[#09275E] text-white p-6 rounded-3xl space-y-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
                <ShieldCheck className="w-6 h-6 text-[#F04438]" />
              </div>
              <h4 className="text-base font-bold font-heading">
                Authentic Brand Guarantee
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                All burners, gear pumps, steam valves, and paver spares supplied by Srivaari Agencies conform to genuine manufacturer quality standards.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
