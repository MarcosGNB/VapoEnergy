import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 px-6 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Contacto</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
              <a href="https://wa.me/521234567890" className="text-blue-600 hover:underline">+595 976 532870</a>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <a href="mailto:contacto@vapoenergy.com" className="text-blue-600 hover:underline">contacto@vapoenergy.com</a>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Dirección</h3>
              <p className="text-gray-700">Caacupé, Ypacaraí, Itauguá,Luque</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;