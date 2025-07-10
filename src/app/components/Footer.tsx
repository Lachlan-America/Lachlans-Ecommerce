import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import FooterList from './FooterList';

export interface LinkType {
    name: string,
    href: string
}

export default function Footer() {
    const footerLinks = {
        shop: [
            { name: 'All Products', href: '/products' },
            { name: 'Categories', href: '/categories' },
            { name: 'New Arrivals', href: '/new' },
            { name: 'Sale Items', href: '/sales' },
        ],
        support: [
            { name: 'Contact Us', href: '/contact' },
            { name: 'FAQ', href: '/faq' },
            { name: 'Shipping Info', href: '/shipping_info' },
            { name: 'Returns', href: '/returns' },
        ],
        company: [
            { name: 'About Us', href: '/about' },
            { name: 'Careers', href: '/careers' },
            { name: 'Press', href: '/press' },
            { name: 'Blog', href: '/blog' },
        ],
    };

    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <h3 className="text-2xl font-bold text-blue-400 mb-4">L&apos;sCommerce</h3>
                        <p className="text-gray-300 mb-6 max-w-md">
                            Your one-stop destination for quality products at amazing prices.
                            We&apos;re committed to providing exceptional shopping experiences.
                        </p>
                        <div className="space-y-2">
                            <div className="flex items-center space-x-3 text-gray-300">
                                <MapPin className="h-4 w-4" />
                                <span>Melbourne, VIC</span>
                            </div>
                            <div className="flex items-center space-x-3 text-gray-300">
                                <Phone className="h-4 w-4" />
                                <span>(+61) 123-456-789</span>
                            </div>
                            <div className="flex items-center space-x-3 text-gray-300">
                                <Mail className="h-4 w-4" />
                                <span>admin@lscommerce.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Links Sections */}
                    <FooterList linkList={footerLinks.shop} />
                    <FooterList linkList={footerLinks.support} />
                    <FooterList linkList={footerLinks.company} />
                </div>

                {/* Newsletter Section */}
                <div className="border-t border-gray-800 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div>
                            <h4 className="font-semibold mb-2">Stay Updated</h4>
                            <p className="text-gray-300 text-sm">
                                Subscribe to our newsletter for the latest deals and updates.
                            </p>
                        </div>
                        <div className="flex space-x-2 w-full md:w-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 md:w-64 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                            />
                            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p className="text-gray-400 text-sm">
                        © 2024 ShopHub. All rights reserved.
                    </p>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                            <Facebook className="h-5 w-5" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                            <Twitter className="h-5 w-5" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                            <Instagram className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}