import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import adminRoutes from './routes/admin.js';
import productRoutes from './routes/products.js';


const app = express();
const PORT = process.env.PORT || 5000; // ✅ Definir puerto

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // ✅ Necesario para leer form-data

// Servir imágenes estáticas
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/images', express.static(path.join(__dirname, 'images')));

// Rutas
app.use('/api/admin', adminRoutes);
app.use('/api/products', productRoutes);

// Conexión a MongoDB Atlas
mongoose.connect('mongodb+srv://admin:admin@vapoenergy.rxt6dpk.mongodb.net/vapoenergy?retryWrites=true&w=majority&appName=vapoenergy', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('🟢 Conectado a MongoDB Atlas');
})
.catch((error) => {
  console.error('🔴 Error de conexión a MongoDB Atlas:', error);
});

// Middleware para rutas no encontradas
app.use((req, res, next) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});

// Middleware global de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Error interno del servidor' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
