import React from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const { cart, addToCart, removeFromCart, removeOneFromCart, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleProceedToCheckout = () => {
    if (!user) {
      navigate('/login');
    } else {
      navigate('/checkout');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl p-6">
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
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-contain rounded-md border border-gray-300"
                    />
                    <div>
                      <p className="text-lg font-semibold text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-600">
                        Precio unitario: ₲{item.price.toLocaleString('es-PY')}
                      </p>
                      <div className="flex items-center space-x-2 mt-2">
                        {/* Botón - */}
                        <button
                          onClick={() => removeOneFromCart(item.id)}
                          className="w-8 h-8 rounded-full bg-red-500 text-white hover:bg-red-600 text-sm flex items-center justify-center"
                          title="Quitar uno"
                        >
                          -
                        </button>

                        {/* Cantidad */}
                        <span className="text-sm font-medium text-gray-800">{item.quantity}</span>

                        {/* Botón + */}
                        <button
                          onClick={() => addToCart(item)}
                          className="w-8 h-8 rounded-full bg-green-500 text-white hover:bg-green-600 text-sm flex items-center justify-center"
                          title="Agregar uno"
                        >
                          +
                        </button>

                        {/* Botón eliminar todo */}
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-600 hover:text-red-800 text-sm underline ml-4"
                        >
                          Eliminar todo
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {/* Total y acciones */}
            <div className="mt-6 border-t pt-4">
              <p className="text-xl font-bold text-black text-right">
                Total: ₲{total.toLocaleString('es-PY')}
              </p>
              <div className="flex justify-between mt-6">
                <button
                  onClick={clearCart}
                  className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded shadow-md"
                >
                  Vaciar carrito
                </button>
                <button
                  className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded shadow-md"
                  onClick={handleProceedToCheckout}
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
