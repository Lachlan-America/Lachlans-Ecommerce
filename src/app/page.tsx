import Hero from "@/app/components/Hero";
import ProductGrid from "@/app/components/ProductGrid";
import { Toaster } from "@/components/ui/sonner";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProductGrid />
      <Toaster />
    </div>
  );
}
