import React from 'react';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-3xl font-bold mb-6 text-center text-black">🛒 Tu Carrito</h2>

        {cart.length === 0 ? (
          <div className="text-center text-gray-500">
            <p className="text-lg">Tu carrito está vacío.</p>
          </div>
        ) : (
          <>
            <ul className="divide-y divide-gray-200">
              {cart.map(item => (
                <li key={item.id} className="flex items-center justify-between py-4">
                  <div className="flex items-center space-x-4">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-contain rounded-md" />
                    <div>
                      <p className="text-lg font-semibold">{item.name}</p>
                      <p className="text-sm text-gray-500">Cantidad: {item.quantity}</p>
                      <p className="text-sm text-gray-700">Precio unitario: ₲{item.price.toLocaleString('es-PY')}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 text-sm font-medium"
                  >
                    Eliminar
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-6 border-t pt-4">
              <p className="text-xl font-bold text-black text-right">
                Total: ₲{total.toLocaleString('es-PY')}
              </p>
              <div className="flex justify-between mt-6">
                <button
                  onClick={clearCart}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                >
                  Vaciar carrito
                </button>
                <button
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
                  onClick={() => alert('Función de pago próximamente')}
                >
                  Proceder al Pago
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
