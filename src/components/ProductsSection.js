import React, { useEffect, useRef, useState } from 'react';
import ProductCard from './ProductCard';
import nastyImg from '../assets/nasty.png';
import nastImg from '../assets/nastyamarillo.png';
import mangoImg from '../assets/mangp.png';
import ballinImg from '../assets/BALLIN-BLOODY-BERRY.png';
import d9Img from '../assets/d9d366_3b42111114f94f2190a53168e31894b0~mv2.png';
import imagessImg from '../assets/images.png';
import mentaImg from '../assets/menta.png';
import nassImg from '../assets/Nasty_SaltNic_Cushman_Banana_30ml_E-Juice__18833.png';
import NastyImg from '../assets/NastyJuiceSalt30ml-BadBlood.png';
import FatBoyImg from '../assets/NastyJuiceSalt30ml-FatBoy.png';
import carameloImg from '../assets/NastyJuiceSaltBronzeBlend-CaramelTobacco_800x.png';
import trapImg from '../assets/NastyJuiceTrapQueenSalt.png';
import StargazingImg from '../assets/STARGAZING.png';
import uvaImg from '../assets/uva.png';
import myntyImg from '../assets/wicked_haze_high_mint_by_nasty_4737_1_f7129ab8602b40e71e3270d3f766816a_20230424092644.png';

/////////////////////////////////77

import drag2 from '../assets/grang2.png';
import captai from '../assets/captain.png';
import dragx from '../assets/dragx.png';
import md from '../assets/md.png';

import Uwell from '../assets/uwell-caliburn-a3-pod-vape-kit-blue-29968330227799.png';
import uwell3 from '../assets/uwell-caliburn-gk2-pod-kit-green.png';
import souring from '../assets/suorin-edge.png';
import vinciq from '../assets/vincciq.png';
import vinciroyal from '../assets/vinci.png';
import vinci2 from '../assets/VOOPOO-VINCI-2-KIT-VELVET-BLUE.png';
import elbar from '../assets/Elf_Bar_Lux_1500_Puffs_Disposable_Kit.png';
import smokenovo from '../assets/smoke_novo.png';
import xros from '../assets/xros-pro-vaporesso.png';
import smoore from '../assets/SMOORE-FEELM-2.0-Image.png';

import xlim from '../assets/xlim.png';

///////////////////////////////



import kitvinci from '../assets/VOOPOO-VINCI-2-KIT-VELVET-BLUE.png';

import kitcaptai from '../assets/captain.png';

import kitdrag from '../assets/vapodrag.png';

import fume from '../assets/kit-smoke-vape-pen-22.png';

import Vovinci from '../assets/voopoo-vinci-ii-pod-kit_9.png';

import souring1 from '../assets/images (1).png';

//import  from '../assets/';

//import  from '../assets/';

//import  from '../assets/';

//import  from '../assets/';

//import  from '../assets/';

//import  from '../assets/';

//import  from '../assets/';

//import  from '../assets/';

//import  from '../assets/';


const ProductsSection = () => {
  const scrollRef = useRef(null);
  const [category, setCategory] = useState('todos');

  const products = [
    {
      id: 1,
      name: 'Nasty Juice Sal 30ML Wicked Haze',
      description: 'Sabores: Grosella negra y limonada',
      price: 80,
      image: nastyImg,
      category: 'salt',
    },
    {
      id: 2,
      name: 'Nasty Juice Devil Teeth Salt 30ml Recargable',
      description: 'Sabor Melón',
      price: 80,
      image: nastImg,
      category: 'salt',
    },
    {
      id: 3,
      name: 'Nasty Juice Mango Cushman 30ML',
      description: 'Sabor Mango',
      price: 80,
      image: mangoImg,
      category: 'salt',
    },
    {
      id: 4,
      name: 'Nasty Juice ASAP Grape 30ML',
      description: 'Sabor Uva dulce con menta',
      price: 80,
      image: ballinImg,
      category: 'salt',
    },
    {
      id: 5,
      name: 'Nasty Juice Slow Blow 30ML',
      description: 'Sabor Piña con soda lima',
      price: 80,
      image: d9Img,
      category: 'salt',
    },
    {
      id: 6,
      name: 'Nasty Juice Bad Blood 30ML',
      description: 'Sabor grosella negra y menta fresca',
      price: 80,
      image: imagessImg,
      category: 'salt',
    },
    {
      id: 7,
      name: 'Nasty Juice Green Ape 30ML',
      description: 'Sabor manzana verde y mentol',
      price: 80,
      image: mentaImg,
      category: 'salt',
    },
    {
      id: 8,
      name: 'Nasty Juice Fat Boy 30ML',
      description: 'Sabor mango maduro con menta',
      price: 80,
      image: nassImg,
      category: 'salt',
    },
    {
      id: 9,
      name: 'Nasty Juice Bronze Blend 30ML',
      description: 'Sabor tabaco con caramelo',
      price: 80,
      image: NastyImg,
      category: 'salt',
    },
    {
      id: 10,
      name: 'Nasty Juice Silver Blend 30ML',
      description: 'Sabor tabaco con vainilla',
      price: 80,
      image: FatBoyImg,
      category: 'salt',
    },
    {
      id: 11,
      name: 'Nasty Juice Trap Queen 30ML',
      description: 'Sabor fresa con menta',
      price: 80,
      image: carameloImg,
      category: 'salt',
    },
    {
      id: 12,
      name: 'Nasty Juice Cushman Banana 30ML',
      description: 'Sabor mango y banana',
      price: 80,
      image: trapImg,
      category: 'salt',
    },
    {
      id: 13,
      name: 'Nasty Juice Bloody Berry 30ML',
      description: 'Sabor frutas rojas y limón',
      price: 80,
      image: StargazingImg,
      category: 'salt',
    },
    {
      id: 14,
      name: 'Nasty Juice Stargazing 30ML',
      description: 'Sabor arándano suave',
      price: 80,
      image: uvaImg,
      category: 'salt',
    },
    {
      id: 15,
      name: 'Nasty Juice Wicked Mint 30ML',
      description: 'Sabor menta fuerte y refrescante',
      price: 80,
      image: myntyImg,
      category: 'salt',
    },








    /////////////////////////////////////////////////////





 
  {
    id: 16,
    name: 'Vincci Royal',
    description: 'Tanque de 50ml',
    price: 80,
    image: vinciroyal,
    category: 'recargables',
  },
  {
    id: 17,
    name: 'Smoke novo',
    description: 'Tanque de 60ml',
    price: 90,
    image: smokenovo,
    category: 'recargables',
  },
  {
    id: 18,
    name: 'Darg X',
    description: 'Tanque de 45ml',
    price: 75,
    image: dragx,
    category: 'recargables',
  },
  {
    id: 19,
    name: 'Souring Edge',
    description: 'Tanque de 55ml',
    price: 85,
    image: souring,
    category: 'recargables',
  },
  {
    id: 20,
    name: 'Captain Pro',
    description: 'Tanque de 65ml',
    price: 95,
    image: captai,
    category: 'recargables',
  },
  {
    id: 21,
    name: 'Voopoo Vinci Q',
    description: 'Tanque de 50ml',
    price: 88,
    image: vinciq,
    category: 'recargables',
  },
  {
    id: 22,
    name: 'Vaporesso XROS Pro',
    description: 'Tanque de 60ml',
    price: 100,
    image: xros,
    category: 'recargables',
  },
  {
    id: 23,
    name: 'Elfbar Lux',
    description: 'Tanque de 40ml',
    price: 70,
    image: elbar,
    category: 'recargables',
  },
  {
    id: 24,
    name: 'drag nano2',
    description: 'Tanque de 55ml',
    price: 78,
    image: drag2,
    category: 'recargables',
  },
  {
    id: 25,
    name: 'Vinci 2',
    description: 'Tanque de 50ml sabor menta',
    price: 82,
    image: vinci2,
    category: 'recargables',
  },
  {
    id: 26,
    name: 'Smoore Vapex',
    description: 'Tanque de 60ml',
    price: 92,
    image: smoore,
    category: 'recargables',
  },
  {
    id: 27,
    name: 'Sourin Air Plus',
    description: 'Tanque de 65ml',
    price: 105,
    image: souring1,
    category: 'recargables',
  },
  {
    id: 28,
    name: 'Xlim Go',
    description: 'Tanque de 50ml',
    price: 79,
    image: xlim,
    category: 'recargables',
  },
  {
    id: 29,
    name: 'Uwell 3',
    description: 'Tanque de 45ml',
    price: 74,
    image: uwell3,
    category: 'recargables',
  },
  {
    id: 30,
    name: 'Uwell ',
    description: 'Tanque de 50ml con sabor mentolado',
    price: 80,
    image: Uwell,
    category: 'recargables',
  },

  ////////////////////////////////////////////////////////////



  {
    id: 31,
    name: 'Vincci Kit Pro',
    description: 'Incluye pod + tanque 60ml + cable USB-C',
    price: 150,
    image: Vovinci,
    category: 'kit',
  },
  {
    id: 32,
    name: 'Darg Alpha Kit',
    description: 'Dispositivo + 2 pods recargables + estuche',
    price: 165,
    image: kitdrag ,
    category: 'kit',
  },
  {
    id: 33,
    name: 'Smoke Cloud Kit',
    description: 'Pod Smoke + tanque 50ml + repuestos',
    price: 140,
    image: '',
    category: 'kit',
  },
  {
    id: 34,
    name: 'Captain 2 Kit',
    description: 'Kit completo con líquidos y cargador rápido',
    price: 170,
    image: '',
    category: 'kit',
  },
  {
    id: 35,
    name: 'Voopoo Vinci Max Kit',
    description: 'Kit edición limitada con batería de larga duración',
    price: 180,
    image: '',
    category: 'kit',
  },
  {
    id: 36,
    name: 'XROS Starter Kit',
    description: 'Ideal para principiantes, incluye líquido mentolado',
    price: 135,
    image: '',
    category: 'kit',
  },
  {
    id: 37,
    name: 'Mynty Ice Kit',
    description: 'Kit con sabor a menta helada, incluye 2 pods',
    price: 145,
    image: '',
    category: 'kit',
  },
  {
    id: 38,
    name: 'Elfbar Boost Kit',
    description: 'Incluye dispositivo Elfbar + estuche + líquidos',
    price: 160,
    image: '',
    category: 'kit',
  },
  {
    id: 39,
    name: 'Waka Rush Kit',
    description: 'Pod + cable + líquido sabor frutas tropicales',
    price: 155,
    image: '',
    category: 'kit',
  },
  {
    id: 40,
    name: 'Souring One Kit',
    description: 'Incluye dispositivo compacto + líquidos frutales',
    price: 148,
    image: '',
    category: 'kit',
  },
  {
    id: 41,
    name: 'Nord Compact Kit',
    description: 'Versión portátil con batería de 800mAh',
    price: 130,
    image: '',
    category: 'kit',
  },
  {
    id: 42,
    name: 'GeekVape Titan Kit',
    description: 'Kit potente con líquido y protección contra fugas',
    price: 175,
    image: '',
    category: 'kit',
  },
  {
    id: 43,
    name: ' Caliburn Active Kit',
    description: 'Diseño deportivo, incluye líquido + cable',
    price: 143,
    image: '',
    category: 'kit',
  },
  {
    id: 44,
    name: 'Smoore Prime Kit',
    description: 'Kit premium con pod inteligente y sabores intensos',
    price: 185,
    image: '',
    category: 'kit',
  },
  {
    id: 45,
    name: 'Fume Start Kit',
    description: 'Ideal para empezar, incluye 2 sabores y cargador',
    price: 120,
    image: '',
    category: 'kit',
  },


   ////////////////////////////////////////////////////////////




     {
    id: 46,
    name: 'Elfbar 5000 Grape',
    description: 'Pod descartable con 5000 puffs sabor uva',
    price: 60,
    image: '',
    category: 'descartables',
  },
  {
    id: 47,
    name: 'Waka Smash Ice',
    description: 'Waka descartable con 6000 puffs sabor menta',
    price: 65,
    image: '',
    category: 'descartables',
  },
  {
    id: 48,
    name: 'Fume Unlimited Mango',
    description: 'Pod descartable con 7000 puffs sabor mango',
    price: 70,
    image: '',
    category: 'descartables',
  },
  {
    id: 49,
    name: 'Bang XXL Strawberry',
    description: 'Pod de 6000 puffs sabor frutilla',
    price: 68,
    image: '',
    category: 'descartables',
  },
  {
    id: 50,
    name: 'Solo Max Blueberry',
    description: 'Pod con 5000 puffs sabor arándano',
    price: 62,
    image: '',
    category: 'descartables',
  },
  {
    id: 51,
    name: 'Vozol Star9000 Melón',
    description: 'Pod descartable de 9000 puffs sabor melón',
    price: 75,
    image: '',
    category: 'descartables',
  },
  {
    id: 52,
    name: 'Elfbar Cola Ice',
    description: 'Pod de 5000 puffs sabor cola helada',
    price: 60,
    image: '',
    category: 'descartables',
  },
  {
    id: 53,
    name: 'Waka Crystal Apple',
    description: 'Waka descartable de 7000 puffs sabor manzana',
    price: 66,
    image: '',
    category: 'descartables',
  },
  {
    id: 54,
    name: 'Fume Recharge Piña',
    description: 'Pod recargable de 5000 puffs sabor piña',
    price: 65,
    image: '',
    category: 'descartables',
  },
  {
    id: 55,
    name: 'Bang XXL Watermelon',
    description: '6000 puffs con sabor a sandía dulce',
    price: 68,
    image: '',
    category: 'descartables',
  },
  {
    id: 56,
    name: 'Solo Pro Fruit Mix',
    description: 'Pod 5000 puffs con mezcla de frutas',
    price: 63,
    image: '',
    category: 'descartables',
  },
  {
    id: 57,
    name: 'Vozol Banana Ice',
    description: '9000 puffs con sabor a banana helada',
    price: 72,
    image: '',
    category: 'descartables',
  },
  {
    id: 58,
    name: 'Elfbar Peach Ice',
    description: 'Pod Elfbar de 5000 puffs con durazno helado',
    price: 61,
    image: '',
    category: 'descartables',
  },
  {
    id: 59,
    name: 'Fume Recharge Strawberry Kiwi',
    description: 'Recargable 7000 puffs sabor frutilla-kiwi',
    price: 69,
    image: '',
    category: 'descartables',
  },
  {
    id: 60,
    name: 'Waka Rush Guava Ice',
    description: 'Pod 6000 puffs con guayaba mentolada',
    price: 66,
    image: '',
    category: 'descartables',
  },



  {
    id: 61,
    name: 'Papelillos RAW King Size',
    description: 'Papel de fumar natural sin blanquear',
    price: 10,
    image: '',
    category: 'otros',
  },
  {
    id: 62,
    name: 'Filtros RAW Tips',
    description: 'Filtros de cartón para armar, paquete x50',
    price: 8,
    image: '',
    category: 'otros',
  },
  {
    id: 63,
    name: 'Bong de Vidrio Ice Catcher',
    description: 'Bong resistente con atrapa hielo, 30cm',
    price: 120,
    image: '',
    category: 'otros',
  },
  {
    id: 64,
    name: 'Pipa Metálica Compacta',
    description: 'Pipa de metal portátil, resistente al calor',
    price: 25,
    image: '',
    category: 'otros',
  },
  {
    id: 65,
    name: 'Encendedor Clipper Recargable',
    description: 'Encendedor clásico de gas recargable',
    price: 12,
    image: '',
    category: 'otros',
  },
  {
    id: 66,
    name: 'Grinder de Metal 4 Partes',
    description: 'Moledor de aluminio con recolector de polen',
    price: 40,
    image: '',
    category: 'otros',
  },
  {
    id: 67,
    name: 'Papelillos RAW Connoisseur',
    description: 'Con filtro incluido, tamaño 1¼',
    price: 11,
    image: '',
    category: 'otros',
  },
  {
    id: 68,
    name: 'Bandeja Rolling RAW Mini',
    description: 'Platito para armar, tamaño pequeño',
    price: 20,
    image: '',
    category: 'otros',
  },
  {
    id: 69,
    name: 'Curador de Hierbas 100ml',
    description: 'Frasco con tapa hermética para conservación',
    price: 15,
    image: '',
    category: 'otros',
  },
  {
    id: 70,
    name: 'Bong de Acrílico Color',
    description: 'Bong liviano y resistente, 20cm',
    price: 70,
    image: '',
    category: 'otros',
  },
  {
    id: 71,
    name: 'Pipa de Vidrio Decorada',
    description: 'Pipa artesanal de vidrio, varios colores',
    price: 35,
    image: '',
    category: 'otros',
  },
  {
    id: 72,
    name: 'Kit Papelillos + Filtro + Bandeja',
    description: 'Combo ideal para armar, edición limitada',
    price: 50,
    image: '',
    category: 'otros',
  },
  {
    id: 73,
    name: 'Lata RAW Storage',
    description: 'Lata metálica para guardar hierba o papelillos',
    price: 18,
    image: '',
    category: 'otros',
  },
  {
    id: 74,
    name: 'Porta Porro de Silicona',
    description: 'Contenedor resistente al agua y olores',
    price: 14,
    image: '',
    category: 'otros',
  },
  {
    id: 75,
    name: 'Grinder Acrílico RAW',
    description: 'Moledor de plástico RAW edición clásica',
    price: 22,
    image: '',
    category: 'otros',
  },

  ];

  const filteredProducts =
    category === 'todos'
      ? products
      : products.filter((product) => product.category === category);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const interval = setInterval(() => {
      if (scrollContainer) {
        scrollContainer.scrollBy({
          left: 300,
          behavior: 'smooth',
        });

        if (
          scrollContainer.scrollLeft + scrollContainer.offsetWidth >=
          scrollContainer.scrollWidth
        ) {
          scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="products" className="py-16 px-6 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Nuestros Productos</h2>

        {/* Botones de categoría */}
        <div className="mb-8 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setCategory('todos')}
            className={`px-4 py-2 rounded-full transition-colors ${category === 'todos' ? 'bg-black text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            Todos
          </button>
          <button
            onClick={() => setCategory('salt')}
            className={`px-4 py-2 rounded-full transition-colors ${category === 'salt' ? 'bg-black text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            Esencias/Salt
          </button>
          <button
            onClick={() => setCategory('recargables')}
            className={`px-4 py-2 rounded-full transition-colors ${category === 'recargables' ? 'bg-black text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            Recargables
          </button>
          <button
            onClick={() => setCategory('kit')}
            className={`px-4 py-2 rounded-full transition-colors ${category === 'kit' ? 'bg-black text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            Kits
          </button>
          <button
           onClick={() => setCategory('descartables')}
           className={`px-4 py-2 rounded-full transition-colors ${ category === 'descartable' ? 'bg-black text-white' : 'bg-gray-200 hover:bg-gray-300' }`}
          >
          Descartables
          </button>
              <button
          onClick={() => setCategory('otros')}
          className={`px-4 py-2 rounded-full transition-colors ${category === 'otro' ? 'bg-black text-white' : 'bg-gray-200 hover:bg-gray-300' }`}
          >
            Otro
          </button>
        </div>
        


          


        {/* Carrusel de productos filtrados */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-6 snap-x snap-mandatory scrollbar-hide px-2"
        >
          {filteredProducts.map((product) => (
            <div key={product.id} className="snap-start shrink-0 w-72">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
