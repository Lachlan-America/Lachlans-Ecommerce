'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Product types - how they are presented from the API
export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    description?: string;
    category?: string;
    rating?: number;
    inStock?: boolean;
}

// Extends the normal product by adding an associated quantity per the user
export interface CartProduct extends Product {
    quantity: number;
}

// Cart context returns
interface CartContextType {
    cartProducts: CartProduct[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
    updateQuantity: (productId: number, quantity: number) => void;
    getTotalPrice: () => number;
    getTotalItems: () => number;
}

// Create a context where elements can share instead of prop-drilling
const CartContext = createContext<CartContextType | undefined>(undefined);
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export default function CartProvider ({ children }: { children: ReactNode }) {
    // Cart products are an ARRAY of type CartProduct (Product with associated quantity)
    const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);

    const addToCart = (product: Product) => {
        setCartProducts(prev => {
            // Check if an item already exists in our cart
            const existingItem = prev.find(item => item.id === product.id);
            if (existingItem) {
                // If the item is the one being added, then increment its id. For every other item, return the same item
                return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
            }
            // If the item doesn't exist already, it needs to be concatenated to the array as an object
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    // Remove an ID from the cart through filtering (anything but the ID we want)
    const removeFromCart = (productId: number) => { setCartProducts(prev => prev.filter(item => item.id !== productId));};
    const updateQuantity = (productId: number, quantity: number) => {
        if (quantity <= 0) {
            removeFromCart(productId);
            return;
        }
        setCartProducts(prev =>
            prev.map(item =>
                item.id === productId ? { ...item, quantity } : item
            )
        );
    };
    const getTotalPrice = () => { return cartProducts.reduce((total, item) => total + item.price * item.quantity, 0);};
    const getTotalItems = () => { return cartProducts.reduce((total, item) => total + item.quantity, 0);};

    return (
        <CartContext.Provider
            value={{
                cartProducts,
                addToCart,
                removeFromCart,
                updateQuantity,
                getTotalPrice,
                getTotalItems,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
