import React, { useState } from 'react';
import logo from '../assets/vapoenergy-logo.png';
import { Link, useNavigate, useLocation } from 'react-router-dom';  // Importa useLocation
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext'; 
import { ShoppingCart } from 'lucide-react';

const LayoutHeader = () => {
  const { cart } = useCart();
  const { user, logout } = useAuth();
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();  // Aquí obtenemos la ruta actual

  // Si la ruta es "/login", no mostramos el header
  if (location.pathname === '/login') {
    return null;
  }
  if (location.pathname === '/inicio') {
    return null;
  }
  if (location.pathname === '/Productos') {
    return null;
  }
  if (location.pathname === '/Nosotros') {
    return null;
  }
  if (location.pathname === '/Contacto') {
    return null;
  }

  const handleNavClick = (sectionId) => {
    const scrollToSection = () => {
      const element = document.getElementById(sectionId);
      if (element) {
        const yOffset = sectionId === 'cart' ? -120 : -40;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    };

    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(scrollToSection, 150);
    } else {
      scrollToSection();
    }

    setMobileMenuOpen(false);
  };

  const maskEmail = (email) => {
    const [name, domain] = email.split('@');
    const masked = name.slice(0, 4) + '***';
    return `${masked}@${domain}`;
  };

  return (
    <header className="bg-black text-white py-4 px-6 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="VapoEnergy Logo" className="h-14 w-auto" />
          <h1 className="text-xl font-bold">VapoEnergy</h1>
        </div>

        {/* Navegación desktop */}
        <nav className="hidden md:flex space-x-6 items-center">
          <button onClick={() => handleNavClick('home')} className="hover:text-red-500 transition-colors">Inicio</button>
          <button onClick={() => handleNavClick('products')} className="hover:text-red-500 transition-colors">Productos</button>
          <button onClick={() => handleNavClick('about')} className="hover:text-red-500 transition-colors">Nosotros</button>
          <button onClick={() => handleNavClick('contact')} className="hover:text-red-500 transition-colors">Contacto</button>

          <Link to="/cart" className="relative hover:text-red-500 transition-colors">
            <ShoppingCart className="w-6 h-6" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>

          {/* Usuario autenticado */}
          {user ? (
            <div className="flex items-center space-x-2">
              <span className="text-sm italic">{maskEmail(user.email)}</span>
              <button onClick={logout} className="text-red-400 hover:text-red-600 text-sm">Cerrar sesión</button>
            </div>
          ) : (
            <Link to="/login" className="text-sm text-red-400 hover:text-red-600">Iniciar sesión</Link>
          )}
        </nav>

        {/* Botón hamburguesa móvil */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menú móvil */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-black px-6 py-4 space-y-4">
          <button onClick={() => handleNavClick('home')} className="block w-full text-left hover:text-red-500">Inicio</button>
          <button onClick={() => handleNavClick('products')} className="block w-full text-left hover:text-red-500">Productos</button>
          <button onClick={() => handleNavClick('about')} className="block w-full text-left hover:text-red-500">Nosotros</button>
          <button onClick={() => handleNavClick('contact')} className="block w-full text-left hover:text-red-500">Contacto</button>
          <Link to="/cart" className="block relative hover:text-red-500">
            <ShoppingCart className="inline w-6 h-6 mr-2" />
            Carrito
            {totalItems > 0 && (
              <span className="absolute top-1 right-6 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          {user ? (
            <div className="flex flex-col space-y-2 text-sm">
              <span className="italic">{maskEmail(user.email)}</span>
              <button onClick={logout} className="text-red-400 hover:text-red-600 text-left">Cerrar sesión</button>
            </div>
          ) : (
            <Link to="/login" className="text-sm text-red-400 hover:text-red-600 block">Iniciar sesión</Link>
          )}
        </nav>
      )}
    </header>
  );
};

export default LayoutHeader;
