'use client'
import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { Product } from '@/app/context/CartContext';

// Mock data - replace with your API call
const mockProducts: Product[] = [
    {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        price: 99.99,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&crop=center",
        description: "Premium wireless headphones with noise cancellation",
        category: "Electronics",
        rating: 4.5,
        inStock: true
    },
    {
        id: 2,
        name: "Smart Watch Pro",
        price: 299.99,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center",
        description: "Advanced fitness tracking and smart notifications",
        category: "Electronics",
        rating: 4.8,
        inStock: true
    },
    {
        id: 3,
        name: "Premium Coffee Maker",
        price: 179.99,
        image: "https://images.unsplash.com/photo-1544985361-b420d7a77043?w=400&h=400&fit=crop&crop=center",
        description: "Programmable coffee maker with built-in grinder",
        category: "Home & Kitchen",
        rating: 4.3,
        inStock: true
    },
    {
        id: 4,
        name: "Ergonomic Office Chair",
        price: 249.99,
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center",
        description: "Comfortable office chair with lumbar support",
        category: "Furniture",
        rating: 4.6,
        inStock: false
    },
    {
        id: 5,
        name: "Wireless Charging Pad",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1594736797933-d0e501ba2fe6?w=400&h=400&fit=crop&crop=center",
        description: "Fast wireless charging for all Qi-enabled devices",
        category: "Electronics",
        rating: 4.2,
        inStock: true
    },
    {
        id: 6,
        name: "Yoga Mat Premium",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop&crop=center",
        description: "Non-slip yoga mat with alignment guides",
        category: "Sports & Fitness",
        rating: 4.7,
        inStock: true
    },
    {
        id: 7,
        name: "Laptop Stand Adjustable",
        price: 69.99,
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop&crop=center",
        description: "Adjustable aluminum laptop stand for better ergonomics",
        category: "Office",
        rating: 4.4,
        inStock: true
    },
    {
        id: 8,
        name: "Organic Green Tea Set",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1556881672-81a5a5f6f3df?w=400&h=400&fit=crop&crop=center",
        description: "Premium organic green tea collection",
        category: "Food & Beverage",
        rating: 4.9,
        inStock: true
    }
];

const ProductGrid = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState<string>('All');

    const categories = ['All', ...new Set(mockProducts.map(p => p.category || 'Other'))];

    useEffect(() => {
        // Simulate API call
        const fetchProducts = async () => {
            setLoading(true);
            // Replace this with your actual API call
            // await new Promise(resolve => setTimeout(resolve, 1000));
            // setProducts(mockProducts);
            const res = await fetch('https://api.escuelajs.co/api/v1/products');
            const data = await res.json();

            const products: Product[] = data.map((item: any) => ({
                id: item.id,
                name: item.title, 
                price: item.price,
                image: item.images?.[0] || '',
                description: item.description,
                category: item.category.name,
                rating: Math.round(5*Math.random() * 2) / 2,
                inStock: item.id <= 40,
            })).filter((item: Product) => item.id <= 50);

            setProducts(products)
            setLoading(false);
        };

        fetchProducts();
    }, []);

    const filteredProducts = selectedCategory === 'All'
        ? products
        : products.filter(product => product.category === selectedCategory);

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Featured Products
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Discover our carefully curated collection of high-quality products
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === category
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-white text-gray-700 hover:bg-gray-100'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Products Grid */}
                {loading ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {[...Array(8)].map((_, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-sm p-4 animate-pulse">
                                <div className="bg-gray-200 rounded-lg h-48 mb-4"></div>
                                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                                <div className="h-4 bg-gray-200 rounded w-2/3 mb-2"></div>
                                <div className="h-6 bg-gray-200 rounded w-1/3"></div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )}

                {filteredProducts.length === 0 && !loading && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">No products found in this category.</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProductGrid;
