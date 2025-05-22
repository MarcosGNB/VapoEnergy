import React, { useState, useEffect } from 'react';

// Importa las imágenes desde assets
import nastyImg from '../assets/nasty.png';
import nastImg from '../assets/nastyamarillo.png';
import mangoImg from '../assets/mangp.png';
import xlim from '../assets/xlim.png';
import sk from '../assets/lifesk.png';
import elfbar40 from '../assets/elfbar40k.png'

const images = [nastyImg, nastImg, mangoImg,xlim,sk,elfbar40 ];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000); // Cambia cada 8 segundos

    return () => clearInterval(interval);
  }, []);

  // Función para hacer scroll suave a la sección "productosestaticos"
  const scrollToProducts = () => {
  const element = document.getElementById('productosestaticos');
  if (element) {
    console.log('Elemento encontrado:', element);
    console.log('Bounding rect:', element.getBoundingClientRect());
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    console.log('No se encontró la sección productosestaticos');
  }
};


  return (
    <section id="home" className="relative bg-gradient-to-r from-black to-gray-900 text-white py-20 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Energiza tu experiencia de vapeo</h1>
          <p className="text-lg mb-8">Descubre los mejores productos premium para una experiencia única</p>
       
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-blue-500 rounded-full opacity-20 blur-xl"></div>
            <div className="relative bg-gray-800 rounded-2xl p-6 shadow-2xl">
              <img
                src={images[currentIndex]}
                alt="Producto de vapeo"
                className="w-full h-auto rounded-lg object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
