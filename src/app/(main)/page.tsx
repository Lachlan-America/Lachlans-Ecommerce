import Hero from "@/app/components/Hero";
import ProductGrid from "@/app/components/ProductGrid";
import { Toaster } from "@/components/ui/sonner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductGrid />
      <Toaster />
    </>
  );
}
