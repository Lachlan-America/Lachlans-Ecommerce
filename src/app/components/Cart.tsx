import { X, ShoppingBag } from 'lucide-react';
import { useCart } from "@/app/context/CartContext";
import CartItem from './CartItem';

interface CartProps {
    isOpen: boolean;
    onClose: () => void;
}

const Cart = ({ isOpen, onClose }: CartProps) => {
    const { cartProducts, updateQuantity, removeFromCart, getTotalPrice, getTotalItems } = useCart();

    return (
        <div className={`fixed inset-0 z-50 overflow-hidden ${!isOpen ? "pointer-events-none" : 'pointer-events-auto'}`}>
            {/* Backdrop */}
            <div onClick={onClose} className={`absolute inset-0 bg-black transition-opacity duration-300 ${isOpen ? 'opacity-50 pointer-events-auto' : 'opacity-0'}`} />

            {/* Cart Panel */}
            <div className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex h-full flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b">
                        <h2 className="text-lg font-semibold">Shopping Cart ({getTotalItems()})</h2>
                        <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                            <X className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Cart Items */}
                    <div className="flex-1 overflow-y-auto p-6">
                        {cartProducts.length === 0 ? (
                                <div className="text-center py-12">
                                    <ShoppingBag className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                                    <p className="text-gray-500 mb-4">Your cart is empty</p>
                                    <button onClick={onClose} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                                        Continue Shopping
                                    </button>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {cartProducts.map((item) => (
                                        <CartItem key={item.name} cartItem={item} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />
                                    ))}
                                </div>
                            )}
                    </div>

                    {/* Footer */}
                    {cartProducts.length > 0 && (
                        <div className="border-t p-6 space-y-4">
                            <div className="flex justify-between text-lg font-semibold">
                                <span>Total:</span>
                                <span>${getTotalPrice().toFixed(2)}</span>
                            </div>
                            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">Proceed to Checkout</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Cart;
