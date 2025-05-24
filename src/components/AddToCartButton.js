import { useCart } from '../context/CartContext';

const AddToCartButton = ({ product }) => {
  const { addToCart, getQuantityById } = useCart();
  const quantity = getQuantityById(product.id);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => addToCart(product)}
        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors"
      >
        Agregar al carrito
      </button>

      {quantity > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
          {quantity}
        </span>
      )}
    </div>
  );
};

export default AddToCartButton;
