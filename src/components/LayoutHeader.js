import React from 'react';
import logo from '../assets/vapoenergy-logo.png'; // Asegúrate de que la ruta sea correcta

const LayoutHeader = () => {
  return (
    <header className="bg-black text-white py-4 px-6 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          {/* Reemplaza el SVG con tu logo */}
          <img 
            src={logo} 
            alt="VapoEnergy Logo" 
            className="h-14 w-auto" // Ajusta el tamaño según necesites
          />
          <h1 className="text-xl font-bold">VapoEnergy</h1>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-red-500 transition-colors">Inicio</a>
          <a href="#products" className="hover:text-red-500 transition-colors">Productos</a>
          <a href="#about" className="hover:text-red-500 transition-colors">Nosotros</a>
          <a href="#contact" className="hover:text-red-500 transition-colors">Contacto</a>
        </nav>
        <button className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default LayoutHeader;