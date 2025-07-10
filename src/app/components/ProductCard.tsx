'use client'
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { Product, useCart } from '@/app/context/CartContext';
import { useState } from 'react';
import { toast } from "sonner"
import Image from 'next/image';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard ({ product }: ProductCardProps) {
    // Cart context
    const { addToCart } = useCart();
    // Used to update the state of the like button (to re-render red)
    const [isLiked, setIsLiked] = useState(false);

    const handleAddToCart = () => {
        if (!product.inStock) {
            toast(`${product.name} is out of stock.`);
            return;
        }

        addToCart(product);
        toast(`${product.name} has been added to your cart.`);
    };

    const renderStars = (rating: number = 0) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />);
        }

        if (hasHalfStar) {
            stars.push(<Star key="half" className="h-4 w-4 fill-yellow-400/50 text-yellow-400" />);
        }

        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />);
        }

        return stars;
    };

    return (
        <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
            {/* Product Image */}
            <div className="relative overflow-hidden">
                <Image
                    width={400}
                    height={400}
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Overlay buttons */}
                <div className="absolute top-2 right-2 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                        onClick={() => setIsLiked(!isLiked)}
                        className={`p-2 rounded-full shadow-lg transition-colors ${isLiked
                                ? 'bg-red-500 text-white'
                                : 'bg-white text-gray-600 hover:bg-gray-100'
                            }`}
                    >
                        <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
                    </button>
                </div>

                {/* Stock status badge */}
                {!product.inStock && (
                    <div className="absolute top-2 left-2">
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                            Out of Stock
                        </span>
                    </div>
                )}
            </div>

            {/* Product Info */}
            <div className="p-4">
                <div className="mb-2">
                    <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2 hover:text-blue-600 transition-colors">
                        {product.name}
                    </h3>
                    {product.category && (
                        <span className="text-xs text-gray-500 uppercase tracking-wide">
                            {product.category}
                        </span>
                    )}
                </div>

                {product.description && (
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {product.description}
                    </p>
                )}

                {/* Rating */}
                {product.rating && (
                    <div className="flex items-center gap-2 mb-3">
                        <div className="flex">
                            {renderStars(product.rating)}
                        </div>
                        <span className="text-sm text-gray-500">({product.rating})</span>
                    </div>
                )}

                {/* Price and Add to Cart */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <span className="text-xl font-bold text-gray-900">
                            ${product.price.toFixed(2)}
                        </span>
                    </div>

                    <button
                        onClick={handleAddToCart}
                        disabled={!product.inStock}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${product.inStock
                                ? 'bg-blue-600 text-white hover:bg-blue-700 hover:scale-105'
                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            }`}
                    >
                        <ShoppingCart className="h-4 w-4" />
                        <span className="text-sm">Add</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
