import type { Metadata } from "next";
import "./globals.css";
import CartProvider from "./context/CartContext";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Lachlan's Ecommerce",
  description: "A portfolio app to buy the latest products, of course (they are fake though).",
};

export default function RootLayout({ children, }: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body>
          <div className="min-h-screen min-w-screen flex items-center justify-center">
            <div className="min-w-screen text-center">
                <CartProvider>
                  <Header />
                    {children}
                  <Footer />
                </CartProvider>
            </div>
          </div>
      </body>
    </html>
  );
}
