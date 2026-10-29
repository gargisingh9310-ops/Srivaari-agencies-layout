import React, { useEffect } from 'react';
import HeroCarousel from '../components/home/HeroCarousel';
import CategoryShowcase from '../components/home/CategoryShowcase';
import AboutEditorial from '../components/home/AboutEditorial';
import FeaturedProducts from '../components/home/FeaturedProducts';
import BrandShowcase from '../components/home/BrandShowcase';
import IndustriesSection from '../components/home/IndustriesSection';
import EnquiryCTA from '../components/home/EnquiryCTA';

export default function HomePage() {
  useEffect(() => {
    document.title = "SRIVAARI AGENCIES | Industrial Boilers, Burners, Pumps & Machinery";
  }, []);

  return (
    <div>
      {/* 1. Hero Section */}
      <HeroCarousel />

      {/* 2. Main Product Categories */}
      <CategoryShowcase />

      {/* 3. About Editorial with 3D Industrial Rotor */}
      <AboutEditorial />

      {/* 4. Curated Featured Products */}
      <FeaturedProducts />

      {/* 5. Brands We Work With */}
      <BrandShowcase />

      {/* 6. Industries & Applications */}
      <IndustriesSection />

      {/* 7. Enquiry Call to Action */}
      <EnquiryCTA />
    </div>
  );
}
