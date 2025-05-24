import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LayoutHeader from './components/LayoutHeader';
import HeroSection from './components/HeroSection';
import ProductsSection from './components/ProductsSection';
import StaticProductsSection from './components/StaticProductsSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import MapCard from './components/MapCard';
import WhatsAppButton from './components/WhatsAppButton';
import InstagramButton from './components/InstagramButton';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import CartPage from './pages/CartPage';
import Login from './pages/Login'; // 👈 Asegúrate de tener esta línea

const locations = [
  { title: 'Sucursal Caacupé', mapUrl: 'https://maps.app.goo.gl/4G9aajcVbchJscB87' },
  { title: 'Sucursal Ypacaraí', mapUrl: 'https://www.google.com/maps/embed?pb=...' },
  { title: 'Sucursal Itauguá', mapUrl: 'https://www.google.com/maps/embed?pb=...' },
  { title: 'Sucursal Luque', mapUrl: 'https://www.google.com/maps/embed?pb=...' },
];

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <div className="min-h-screen flex flex-col">
            <LayoutHeader />
            <main className="flex-grow">
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <HeroSection />
                      <ProductsSection />
                      <StaticProductsSection />
                      <AboutSection />
                      <ContactSection />
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
                  }
                />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/login" element={<Login />} /> {/* 👈 Esta línea es nueva */}
              </Routes>
            </main>
            <Footer />
            <WhatsAppButton />
            <InstagramButton />
          </div>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
