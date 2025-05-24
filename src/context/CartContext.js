import React, { createContext, useContext, useState } from 'react';

// Crear contexto
const CartContext = createContext();

// Hook personalizado para consumir el contexto fácilmente
export const useCart = () => useContext(CartContext);

// Proveedor del carrito
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar un producto al carrito
  const addToCart = (product) => {
    setCart(prevCart => {
      const itemExists = prevCart.find(item => item.id === product.id);

      if (itemExists) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Eliminar un producto por ID
  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  // Vaciar todo el carrito
  const clearCart = () => {
    setCart([]);
  };

  // Calcular total (opcional: útil para usarlo en distintos componentes)
  const getCartTotal = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  // Proveer valores
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
