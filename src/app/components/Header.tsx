'use client'
import { useState } from 'react';
import { Search, ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '@/app/context/CartContext';
import Cart from './Cart';
import Link from 'next/link';
import ProfileIcon from './ProfileIcon';

export default function Header() {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { getTotalItems } = useCart();

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'Shop', href: '/shop' },
        { name: 'Categories', href: '/categories' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <>
            <header className="bg-white shadow-sm sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <h1 className="text-2xl font-bold text-blue-600 mr-5">L&apos;sCommerce</h1>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex space-x-8">
                            {navigation.map((item) => (
                                <Link key={item.name} href={item.href} className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">{item.name}</Link>
                            ))}
                        </nav>

                        {/* Search Bar */}
                        <div className="hidden sm:flex items-center flex-1 max-w-lg mx-8">
                            <div className="relative w-full">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        </div>

                        {/* Right Icons */}
                        <div className="flex items-center space-x-4">
                            <ProfileIcon />

                            <button onClick={() => setIsCartOpen(true)} className="p-2 text-gray-700 hover:text-blue-600 transition-colors relative" >
                                <ShoppingCart className="h-6 w-6" />
                                {getTotalItems() > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                        {getTotalItems()}
                                    </span>
                                )}
                            </button>

                            {/* Mobile menu button */}
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
                            >
                                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    {isMobileMenuOpen && (
                        <div className="md:hidden border-t border-gray-200 py-4">
                            <div className="space-y-2">
                                {navigation.map((item) => (
                                    <Link key={item.name} href={item.href} className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors">{item.name}</Link>
                                ))}
                            </div>
                            {/* Mobile Search */}
                            <div className="mt-4 px-3">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                                    <input
                                        type="text"
                                        placeholder="Search products..."
                                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </header>
            <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </>
    );
};