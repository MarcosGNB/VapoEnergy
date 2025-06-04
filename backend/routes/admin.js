import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import Product from '../models/Product.js';
import upload from '../middlewares/upload.js';

const router = express.Router();

// Para usar __dirname en ESModules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ruta para agregar un nuevo producto
router.post('/add', upload.single('image'), async (req, res) => {
  try {
    // Logs para depurar
    console.log('✅ Entró al POST /api/admin/add');
    console.log('BODY:', req.body);
    console.log('FILE:', req.file);

    const { name, description, price, category, isFeatured, nuevo } = req.body;

    // Validación mínima
    if (!name || !price || !category || !req.file) {
      return res.status(400).json({ message: 'Faltan campos obligatorios o la imagen' });
    }

    // Ruta de la imagen accesible públicamente
    const image = `/images/${req.file.filename}`;

    // Crear nuevo producto con conversión correcta de tipos
    const product = new Product({
      name,
      description,
      price: Number(price),            // Asegurar que sea número
      category,
      image,
      isFeatured: isFeatured === 'true', // Convertir string a boolean
      nuevo: nuevo === 'true'            // Convertir string a boolean
    });

    console.log('📦 Producto a guardar:', product);

    await product.save();

    res.status(201).json({ message: 'Producto agregado correctamente', product });
  } catch (error) {
    console.error('❌ Error al agregar producto:', error);
    res.status(500).json({ message: 'Error al agregar producto', error: error.message || error.toString() });
  }
});

export default router;
