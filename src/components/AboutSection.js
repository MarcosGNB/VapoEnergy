import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-6 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Nosotros</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Nuestra Historia</h3>
            <p className="text-gray-700 mb-6">
              VapoEnergy nació de la pasión por ofrecer productos de vapeo de la más alta calidad. 
              Desde 2022, nos hemos dedicado a seleccionar cuidadosamente cada artículo en nuestro catálogo.
            </p>
            
            <h3 className="text-2xl font-semibold mb-4">Misión</h3>
            <p className="text-gray-700 mb-6">
              Proporcionar una alternativa premium al tabaco tradicional, con productos seguros, 
              innovadores y de excelente sabor.
            </p>
          </div>
          
          <div className="bg-gray-100 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4">Compromiso con la Calidad</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span>Productos testeados rigurosamente</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span>Ingredientes de la más alta calidad</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span>Garantía de satisfacción</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;