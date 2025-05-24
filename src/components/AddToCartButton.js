import { useCart } from '../context/CartContext';

const AddToCartButton = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(product)}
      className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors"
    >
      Agregar al carrito
    </button>
  );
};

export default AddToCartButton;
