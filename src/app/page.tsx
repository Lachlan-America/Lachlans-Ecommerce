import { CartProvider } from "./context/CartContext";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import ProductGrid from "@/app/components/ProductGrid";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center">
      <div className="min-w-screen text-center">
          <CartProvider>
            <Header />
            <Hero />
            <ProductGrid />
            <Footer />
          </CartProvider>
      </div>
    </div>
  );
}
