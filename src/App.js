import React, { useState } from 'react';
import LayoutHeader from './components/LayoutHeader';
import HeroSection from './components/HeroSection';
import ProductsSection from './components/ProductsSection';
import StaticProductsSection from './components/StaticProductsSection'; // Nueva sección
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import MapCard from './components/MapCard'; // 👈 nuevo import
import WhatsAppButton from './components/WhatsAppButton';
import InstagramButton from './components/InstagramButton';

const App = () => {
  const [currentPage] = useState('home');

  // 👇 Las ubicaciones
  const locations = [
    {
      title: 'Sucursal Caacupé',
      mapUrl: 'https://www.google.com/maps/place/Caacup%C3%A9/@-25.38874,-57.1884881,13z/data=!3m1!4b1!4m6!3m5!1s0x945c32f8a18019d1:0xc81a1185bc4fb6fd!8m2!3d-25.3888102!4d-57.1492272!16zL20vMDZ4aDVj?entry=ttu&g_ep=EgoyMDI1MDUxNS4xIKXMDSoASAFQAw%3D%3D',
    },
    {
      title: 'Sucursal Ypacaraí',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14418.300620323433!2d-57.2720926!3d-25.3961411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945d5df3fa5b48e5%3A0x91a43017314b1d98!2sYpacara%C3%AD%2C%20Paraguay!5e0!3m2!1ses!2spy!4v1620000000001!5m2!1ses!2spy',
    },
    {
      title: 'Sucursal Itauguá',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14418.1558268506!2d-57.3680504!3d-25.3836346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945d5b22f385a2ed%3A0x8dbb4ec703df90cd!2sItaugu%C3%A1%2C%20Paraguay!5e0!3m2!1ses!2spy!4v1620000000002!5m2!1ses!2spy',
    },
    {
      title: 'Sucursal Luque',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14395.672754365365!2d-57.5139261!3d-25.2617265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945daea6d03d6cb7%3A0x62f187c30c00794a!2sLuque%2C%20Paraguay!5e0!3m2!1ses!2spy!4v1620000000003!5m2!1ses!2spy',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <LayoutHeader />
      
      <main className="flex-grow">
        {currentPage === 'home' && (
          <>
            <HeroSection />
            <ProductsSection />
           


              {/* Nueva sección estática premium */}
            <StaticProductsSection 
              products={allProducts}
              className="py-16 bg-gradient-to-b from-white to-gray-50"
            />
            
            <AboutSection />
            <ContactSection />

            {/* Sección Sucursales Modernas */}
            <div className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-white text-center mb-8 drop-shadow">
                Nuestras Sucursales 🔥
              </h2>
              <p className="text-center text-purple-300 mb-10 max-w-2xl mx-auto">
                Visitá nuestras tiendas físicas y descubrí la energía de Vapo Energy en cada ciudad.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {locations.map((loc, index) => (
                  <MapCard key={index} title={loc.title} mapUrl={loc.mapUrl} />
                ))}
              </div>
            </div>
          </>
        )}
      </main>

      <Footer />
      <WhatsAppButton />
        <InstagramButton />
    </div>
  );
};

export default App;
