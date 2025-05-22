import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from './ProductCard';

// Importa todas tus imágenes
import nastyImg from '../assets/nasty.png';
import vinciroyal from '../assets/vinci.png';
import souring from '../assets/suorin-edge.png';
import souring1 from '../assets/images (1).png';
import waka10k from '../assets/waka10k.png'
import waka36k from '../assets/waka36k.png'
import v120 from '../assets/ignitev120.png'
import sk from '../assets/lifesk.png';
import elfbar40 from '../assets/elfbar40k.png'
import xlim from '../assets/xlim.png'
// ... importa todas las imágenes necesarias


const StaticProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState('todos');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('featured');
  

  const allProducts = [
    {
      id: 1,
      name: 'Nasty Juice Sal 30ML Wicked Haze',
      description: 'Sabores: Grosella negra y limonada',
      price: 80,
      image: nastyImg,
      category: 'salt',
      isFeatured: true,
      isNew: false
    },
    {
      id: 2,
      name: 'Vincci Royal',
      description: 'Tanque de 50ml',
      price: 80,
      image: vinciroyal,
      category: 'recargables',
      isFeatured: true,
      isNew: true
    },
    {
      id: 3,
      name: 'Souring Air Plus',
      description: 'Tanque de 50ml',
      price: 80,
      image: souring1,
      category: 'recargables',
      isFeatured: true,
      isNew: true
    },
    {
      id: 4,
      name: 'Waka 10k Puff',
      description: 'Sandia Menta Frutilla con banana',
      price: 80,
      image: waka10k,
      category: 'descartables',
      isFeatured: true,
      isNew: true
    },
    {
      id: 5,
      name: 'IGNITE V120 PRO BLACK WATERMELON ICE',
      description: 'PRO BLACK WATERMELON ICE',
      price: 6.7,
      image: v120,
      category: 'descartables',
      isFeatured: true,
      isNew: true
    },
    {
      id: 6,
      name: 'Life POdSK 15.000  ',
      description: 'Waterberry Frost | Vape Desechable ',
      price: 8.7,
      image: sk,
      category: 'descartables',
      isFeatured: true,
      isNew: true
    },
     {
      id: 7,
      name: 'Elf Bar Ice King 40.000',
      description: 'Frescura (Ice) ajustable por botón. Pantalla con nivel de líquido y batería. Carga tipo C.',
      price: 8.7,
      image: elfbar40,
      category: 'descartables',
      isFeatured: true,
      isNew: true
    },
     {
      id: 8,
      name: 'Xlim',
      description: 'Tanque 50 ml y resistente ',
      price: 8.7,
      image: xlim,
      category: 'recargables',
      isFeatured: true,
      isNew: true
    },
    // Agrega todos tus productos aquí
  ];

  const filteredProducts = useMemo(() => {
    return allProducts.filter(product => {
      const matchesCategory = activeCategory === 'todos' || product.category === activeCategory;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesCategory && matchesPrice && matchesSearch;
    }).sort((a, b) => {
      switch(sortOption) {
        case 'price-asc': return a.price - b.price;
        case 'price-desc': return b.price - a.price;
        case 'newest': return b.id - a.id;
        case 'featured': 
          if(a.isFeatured && !b.isFeatured) return -1;
          if(!a.isFeatured && b.isFeatured) return 1;
          return 0;
        default: return 0;
      }
    });
  }, [activeCategory, priceRange, searchTerm, sortOption, allProducts]);

  const categories = [
    { id: 'todos', name: 'Todos' },
    { id: 'salt', name: 'Esencias' },
    { id: 'recargables', name: 'Recargables' },
    { id: 'kit', name: 'Kits' },
    { id: 'descartables', name: 'Descartables' },
    { id: 'otros', name: 'Accesorios' }
  ];

  const sortOptions = [
    { id: 'featured', name: 'Destacados' },
    { id: 'price-asc', name: 'Precio: menor a mayor' },
    { id: 'price-desc', name: 'Precio: mayor a menor' },
    { id: 'newest', name: 'Más nuevos' }
  ];

  return (
    <section id="productosestaticos" className="py-16 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
       
        <div className="mb-12 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-black"
          >
            Explora Nuestra Colección
          </motion.h2>
          
          <div className="max-w-md mx-auto relative">
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent shadow-sm"
            />
            <svg 
              className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        <div className="mb-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? 'bg-black text-white'
                      : 'bg-white text-gray-800 hover:bg-gray-100'
                  }`}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <label htmlFor="sort" className="text-sm font-medium text-gray-700">Ordenar por:</label>
              <select
                id="sort"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-black focus:outline-none focus:ring-black sm:text-sm"
              >
                {sortOptions.map(option => (
                  <option key={option.id} value={option.id}>{option.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Rango de precios</span>
              <span className="text-sm font-medium">${priceRange[0]} - ${priceRange[1]}</span>
            </div>
            <div className="px-4">
              <input
                type="range"
                min="0"
                max="200"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <input
                type="range"
                min="0"
                max="200"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2"
              />
            </div>
          </div>
        </div>

        <div className="mb-8">
          <p className="text-gray-600">
            Mostrando <span className="font-bold">{filteredProducts.length}</span> productos
          </p>
        </div>

        {filteredProducts.length > 0 ? (
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            <AnimatePresence>
              {filteredProducts.map(product => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProductCard 
                    product={product} 
                    variant={activeCategory === 'todos' ? 'default' : 'category'}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <h3 className="text-xl font-medium text-gray-500 mb-2">No se encontraron productos</h3>
            <p className="text-gray-400">Intenta ajustar tus filtros de búsqueda</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default StaticProductsSection;
