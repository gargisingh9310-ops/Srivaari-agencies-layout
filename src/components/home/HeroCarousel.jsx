import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck, PhoneCall } from 'lucide-react';
import gsap from 'gsap';

const SLIDES = [
  {
    id: 1,
    image: "/assets/hero-img-1.jpg",
    headline: "Industrial Heating. Engineered for Performance.",
    supportingText: "Explore industrial burners and boiler solutions for demanding applications.",
    categoryTag: "Thermal & Combustion Utilities",
    link: "/products/burners",
    linkText: "Explore Burners & Boilers"
  },
  {
    id: 2,
    image: "/assets/hero-img-2.jpg",
    headline: "Reliable Equipment for the Road Ahead.",
    supportingText: "Explore road machinery and equipment solutions for industrial and infrastructure requirements.",
    categoryTag: "Road Infrastructure & Paving",
    link: "/products/road-machinery",
    linkText: "Explore Road Machinery"
  },
  {
    id: 3,
    image: "/assets/hero-img-3.jpg",
    headline: "The Right Equipment. The Right Industrial Partner.",
    supportingText: "Discover pumps, pollution-control equipment, burners, and industrial machinery from established brands.",
    categoryTag: "Heavy Plant & Fluid Handling",
    link: "/products",
    linkText: "Explore Complete Catalogue"
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const textRef = useRef(null);
  const slideCount = SLIDES.length;

  // Auto advance slide every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideCount);
    }, 7000);
    return () => clearInterval(timer);
  }, [slideCount]);

  // GSAP animation on slide change
  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: "power2.out" }
      );
    }
  }, [currentSlide]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slideCount);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);

  return (
    <section className="relative w-full h-[78vh] min-h-[580px] max-h-[760px] overflow-hidden bg-[#09275E]">
      {/* Slides Background Images */}
      {SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.headline}
            className="w-full h-full object-cover object-center transform scale-100 transition-transform duration-7000 ease-out"
          />
          {/* Light overlay: ~15% dark with subtle left gradient for text readability while keeping photography clearly visible */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#09275E]/75 via-[#09275E]/30 to-black/15" />
        </div>
      ))}

      {/* Hero Content Container */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-2xl text-white pt-6">
          <div ref={textRef} className="space-y-4">
            
            {/* Category Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-semibold tracking-wider uppercase text-white shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#F04438]" />
              <span>{SLIDES[currentSlide].categoryTag}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] drop-shadow-sm font-heading">
              {SLIDES[currentSlide].headline}
            </h1>

            {/* Supporting Sentence */}
            <p className="text-base sm:text-lg text-slate-100 font-normal leading-relaxed max-w-xl drop-shadow-sm">
              {SLIDES[currentSlide].supportingText}
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to={SLIDES[currentSlide].link}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-bold text-[#172033] bg-white hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white active:scale-[0.98]"
              >
                <span>{SLIDES[currentSlide].linkText}</span>
                <ArrowRight className="w-4 h-4 text-[#123D8D]" />
              </Link>

              <Link
                to="/enquiry"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-bold text-white bg-[#F04438] hover:bg-[#d83227] transition-all shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#F04438]/50 active:scale-[0.98]"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* Discreet Navigation Arrows & Indicators */}
      <div className="absolute z-20 bottom-8 right-6 sm:right-12 flex items-center gap-4 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
        <button
          onClick={prevSlide}
          className="p-1.5 text-white/80 hover:text-white rounded-full hover:bg-white/20 transition-colors focus:outline-none"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Indicators */}
        <div className="flex items-center gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
                i === currentSlide ? 'w-6 bg-[#F04438]' : 'w-2 bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-1.5 text-white/80 hover:text-white rounded-full hover:bg-white/20 transition-colors focus:outline-none"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Bottom Floating Stats / Trust Banner */}
      <div className="hidden md:block absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-[#09275E]/90 to-transparent py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs text-slate-200">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#F04438]" />
              <span>Verified Supplier of 15+ Established Industrial Brands</span>
            </span>
            <span className="text-white/30">•</span>
            <span>Secunderabad, Telangana Supply Hub</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-slate-300">Technical Support:</span>
            <a href="tel:+919490474638" className="font-semibold text-white hover:text-[#F04438] transition-colors">
              +91 94904 74638
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
