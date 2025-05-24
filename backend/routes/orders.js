import express from 'express';
import Order from '../models/Order.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

// Crear orden (protegido)
router.post('/', verifyToken, async (req, res) => {
  const { products, totalPrice } = req.body;

  const newOrder = new Order({
    user: req.user.id,
    products,
    totalPrice,
    status: 'pending',
  });

  try {
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Obtener órdenes del usuario autenticado
router.get('/', verifyToken, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }).populate('products.product');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
