import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import CategoryPage from './pages/CategoryPage';
import ProductDetailPage from './pages/ProductDetailPage';
import BrandsPage from './pages/BrandsPage';
import BrandDetailPage from './pages/BrandDetailPage';
import IndustriesPage from './pages/IndustriesPage';
import EnquiryPage from './pages/EnquiryPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import { initSmoothScroll } from './utils/smoothScroll';

export default function App() {
  useEffect(() => {
    // Initialize Lenis + GSAP ScrollTrigger smooth scrolling
    const lenis = initSmoothScroll();
    return () => {
      if (lenis) lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Main Pages */}
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          
          {/* Products & Category Pages */}
          <Route path="products" element={<ProductsPage />} />
          <Route path="products/boilers" element={<CategoryPage />} />
          <Route path="products/burners" element={<CategoryPage />} />
          <Route path="products/pumps" element={<CategoryPage />} />
          <Route path="products/road-machinery" element={<CategoryPage />} />
          <Route path="products/pollution-control" element={<CategoryPage />} />
          
          {/* Category alias redirects */}
          <Route path="products/industrial-pumps" element={<Navigate to="/products/pumps" replace />} />
          <Route path="products/pollution-control-equipments" element={<Navigate to="/products/pollution-control" replace />} />

          {/* Dynamic Product Detail Page */}
          <Route path="products/:slug" element={<ProductDetailPage />} />

          {/* Brands Directory & Brand Details */}
          <Route path="brands" element={<BrandsPage />} />
          <Route path="brands/:slug" element={<BrandDetailPage />} />

          {/* Industries Page */}
          <Route path="industries" element={<IndustriesPage />} />

          {/* Enquiry & Contact */}
          <Route path="enquiry" element={<EnquiryPage />} />
          <Route path="contact" element={<ContactPage />} />

          {/* 404 Route */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
