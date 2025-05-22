import React from 'react';
import nastyImg from '../assets/nasty.png';
import nastImg from '../assets/nastyamarillo.png';
import mangoImg from '../assets/mangp.png';
import ballinImg from '../assets/BALLIN-BLOODY-BERRY.png';
import d9Img from '../assets/d9d366_3b42111114f94f2190a53168e31894b0~mv2.png'
import imagessImg from '../assets/images.png';
import mentaImg from '../assets/menta.png';
import nassImg from '../assets/Nasty_SaltNic_Cushman_Banana_30ml_E-Juice__18833.png';
import NastyImg from '../assets/NastyJuiceSalt30ml-BadBlood.png';
import FatBoyImg from '../assets/NastyJuiceSalt30ml-FatBoy.png';
import carameloImg from '../assets/NastyJuiceSaltBronzeBlend-CaramelTobacco_800x.png';
import trapImg from '../assets/NastyJuiceTrapQueenSalt.png';
import StargazingImg from '../assets/STARGAZING.png';
import uvaImg from '../assets/uva.png';
import wickImg from '../assets/wicked_haze_high_mint_by_nasty_4737_1_f7129ab8602b40e71e3270d3f766816a_20230424092644.png'

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
import souring1 from '../assets/images (1).png';
import xlim from '../assets/xlim.png';




import kitvinci from '../assets/VOOPOO-VINCI-2-KIT-VELVET-BLUE.png';

import kitcaptai from '../assets/captain.png';

import kitdrag from '../assets/vapodrag.png';

import fume from '../assets/kit-smoke-vape-pen-22.png';

import Vovinci from '../assets/voopoo-vinci-ii-pod-kit_9.png';








const ProductCard = ({ product, variant = 'default' }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={`bg-white rounded-xl overflow-hidden shadow-md ${
        variant === 'category' ? 'border-t-4 border-black' : ''
      }`}
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-60 object-contain p-4 bg-gray-50"
          loading="lazy"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {product.isNew && (
            <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm">
              NUEVO
            </span>
          )}
          {product.isFeatured && (
            <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm">
              DESTACADO
            </span>
          )}
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold mb-2 line-clamp-2 h-14">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 h-10">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl font-bold text-gray-900">${product.price}</span>
            {product.originalPrice && (
              <span className="ml-2 text-sm text-gray-400 line-through">${product.originalPrice}</span>
            )}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white p-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
export default ProductCard;