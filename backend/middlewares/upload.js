// middlewares/upload.js
import multer from 'multer';
import path from 'path';

// Configurar almacenamiento para imágenes
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'images/'); // Guarda en carpeta /images dentro de backend
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + path.extname(file.originalname);
    cb(null, uniqueName);
  }
});

// Crear instancia de multer con la config
const upload = multer({ storage });

export default upload;
