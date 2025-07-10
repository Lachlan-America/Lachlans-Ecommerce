
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-left">
                            Discover Amazing Products
                        </h1>
                        <p className="text-xl text-blue-100 text-left">
                            Shop the latest trends and find everything you need in one place.
                            Quality products, great prices, fast delivery.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                                Shop Now
                                <ArrowRight className="h-5 w-5" />
                            </button>
                            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                                Learn More
                            </button>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                            <div className="text-3xl font-bold mb-2">🛍️</div>
                            <h3 className="text-2xl font-semibold mb-4">Featured Collection</h3>
                            <p className="text-blue-100 mb-6">
                                Explore our curated selection of premium products
                            </p>
                            <div className="grid grid-cols-2 gap-4 text-center">
                                <div>
                                    <div className="text-2xl font-bold">1000+</div>
                                    <div className="text-sm text-blue-200">Products</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold">50+</div>
                                    <div className="text-sm text-blue-200">Categories</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};