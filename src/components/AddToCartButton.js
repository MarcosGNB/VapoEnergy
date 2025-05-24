import { useCart } from '../context/CartContext';
import { MinusCircle } from 'lucide-react'; // ícono moderno

const AddToCartButton = ({ product }) => {
  const { addToCart, removeOneFromCart, getQuantityById } = useCart();
  const quantity = getQuantityById(product.id);

  return (
    <div className="inline-flex items-center space-x-2">
      {/* Botón Agregar */}
      <button
        onClick={() => addToCart(product)}
        className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-900 transition-colors shadow-md"
      >
        Agregar
      </button>

      {/* Mostrar cantidad */}
      {quantity > 0 && (
        <>
          <span className="text-sm font-semibold text-gray-800">{quantity}</span>

          {/* Botón moderno para quitar de a 1 */}
          <button
            onClick={() => removeOneFromCart(product.id)}
            className="bg-red-500 hover:bg-red-600 text-white px-2 py-2 rounded-full shadow transition-all flex items-center justify-center"
            title="Quitar uno del carrito"
          >
            <MinusCircle size={20} />
          </button>
        </>
      )}
    </div>
  );
};

export default AddToCartButton;
