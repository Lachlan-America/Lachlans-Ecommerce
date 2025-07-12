import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
    title: "Lachlan's Ecommerce",
    description: "A portfolio app to buy the latest products, of course (they are fake though).",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body>
                <Providers>
                {children}
                </Providers>
            </body>
        </html>
    );
}
