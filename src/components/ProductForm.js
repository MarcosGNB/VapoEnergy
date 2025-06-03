import React, { useState } from 'react';
import axios from 'axios';

function ProductForm() {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    destacado: false,
    nuevo: false,
  });
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProduct({
      ...product,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in product) {
      formData.append(key, product[key]);
    }
    formData.append('image', image);

    try {
      await axios.post('http://localhost:5000/api/admin/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Producto agregado con éxito');
    } catch (err) {
      console.error('Error al enviar producto:', err);
      alert('Error al agregar producto');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4 bg-white rounded shadow max-w-md mx-auto">
      <input name="name" placeholder="Nombre" onChange={handleChange} className="w-full p-2 border" required />
      <input name="description" placeholder="Descripción" onChange={handleChange} className="w-full p-2 border" required />
      <input name="price" type="number" placeholder="Precio" onChange={handleChange} className="w-full p-2 border" required />
      <input name="category" placeholder="Categoría" onChange={handleChange} className="w-full p-2 border" required />
      
      <label className="block">
        Imagen:
        <input type="file" onChange={handleImageChange} accept="image/*" className="w-full mt-1" required />
      </label>

      <label className="block">
        <input type="checkbox" name="destacado" onChange={handleChange} /> Destacado
      </label>
      <label className="block">
        <input type="checkbox" name="nuevo" onChange={handleChange} /> Nuevo
      </label>

      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
        Agregar Producto
      </button>
    </form>
  );
}

export default ProductForm;
