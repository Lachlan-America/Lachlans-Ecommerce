import Image from "next/image";
import { CartProduct  } from "@/app/context/CartContext";
import { X, Plus, Minus } from 'lucide-react';

type CartcartItemProps = {
    cartItem: CartProduct;
    updateQuantity: (id: number, quantity: number) => void;
    removeFromCart: (id: number) => void;
};

export default function CartItem({ cartItem, updateQuantity, removeFromCart }: CartcartItemProps) {
    return (
        <div key={cartItem.id} className="flex cartItems-center space-x-4 p-4 border rounded-lg">
            <Image
            width={400}
            height={400}
            src={cartItem.image}
            alt={cartItem.name}
            className="w-16 h-16 object-cover rounded-lg"
            />
            <div className="flex-1">
                <h3 className="font-medium text-gray-900 line-clamp-2">{cartItem.name}</h3>
                <p className="text-gray-600">${cartItem.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center space-x-2">
                <button onClick={() => updateQuantity(cartItem.id, cartItem.quantity - 1)} className="p-1 hover:bg-gray-100 rounded transition-colors">
                    <Minus className="h-4 w-4" />
                </button>
                <span className="w-8 text-center">{cartItem.quantity}</span>
                <button onClick={() => updateQuantity(cartItem.id, cartItem.quantity + 1)} className="p-1 hover:bg-gray-100 rounded transition-colors">
                    <Plus className="h-4 w-4" />
                </button>
            </div>
            <button onClick={() => removeFromCart(cartItem.id)} className="p-2 text-red-500 hover:bg-red-50 rounded transition-colors">
                <X className="h-4 w-4" />
            </button>
        </div>
    );
}