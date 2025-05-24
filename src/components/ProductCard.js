import React from 'react';
import AddToCartButton from './AddToCartButton';


// Imágenes (puedes limpiar los import que no uses en este componente si quieres)
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
import wickImg from '../assets/wicked_haze_high_mint_by_nasty_4737_1_f7129ab8602b40e71e3270d3f766816a_20230424092644.png';
import waka10k from '../assets/waka10k.png';
import waka36k from '../assets/waka36k.png';

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
import sk from '../assets/lifesk.png';
import elfbar40 from '../assets/elfbar40k.png';

import kitvinci from '../assets/VOOPOO-VINCI-2-KIT-VELVET-BLUE.png';
import kitcaptai from '../assets/captain.png';
import kitdrag from '../assets/vapodrag.png';
import fume from '../assets/kit-smoke-vape-pen-22.png';
import Vovinci from '../assets/voopoo-vinci-ii-pod-kit_9.png';


const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <div className="p-4">
        <img src={product.image} alt={product.name} className="w-full h-48 object-contain mb-4" />
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-red-600">
            ₲{product.price.toLocaleString('es-PY')}
          </span>
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
