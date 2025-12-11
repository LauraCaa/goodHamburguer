import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Good Hamburger",
  description: "Best burgers in town",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900`} suppressHydrationWarning={true}>
        <CartProvider>
          <Navbar />  
          <main className="min-h-screen pb-10">
             {children}
          </main>
        </CartProvider>
      </body>
    </html>
  );
}