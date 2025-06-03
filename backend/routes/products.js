import express from 'express';
import Product from '../models/Product.js';

const router = express.Router();

// Obtener todos los productos
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
   console.error('❌ Error al obtener productos:', error);
res.status(500).json({ message: 'Error al obtener productos', error: error.message });
  }
});

export default router;
