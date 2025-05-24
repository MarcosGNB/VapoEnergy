import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(email, password);
    if (success) {
      navigate('/cart');
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <div className="bg-gray-900 p-8 rounded-2xl shadow-2xl w-full max-w-md border border-gray-700">
        <h2 className="text-3xl font-extrabold text-teal-500 text-center mb-6 tracking-wider uppercase">
          Vapo Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-teal-400 mb-1 font-medium">Correo electrónico</label>
            <input
              type="email"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-600 text-white rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="email@vapoenergy.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-teal-400 mb-1 font-medium">Contraseña</label>
            <input
              type="password"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-600 text-white rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 shadow-md uppercase tracking-wide"
          >
            Iniciar sesión
          </button>
        </form>
        <p className="text-center text-sm text-gray-400 mt-6">¿Olvidaste tu contraseña? Próximamente 🔒</p>
      </div>
    </div>
  );
};

export default Login;
