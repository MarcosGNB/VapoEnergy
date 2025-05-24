const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config(); // Carga variables de entorno desde .env

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas (las agregaremos luego)
app.get('/', (req, res) => {
  res.send('API de VapoEnergy funcionando ✅');
});

// Conexión a MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('✅ Conectado a MongoDB');
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`🚀 Servidor escuchando en el puerto ${PORT}`));
  })
  .catch((err) => console.error('❌ Error al conectar a MongoDB:', err));
