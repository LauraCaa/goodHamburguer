"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const pathname = usePathname();
  const { cart, orders } = useCart();

  const getLinkClass = (path: string) => 
    `px-4 py-2 rounded-lg font-medium transition-colors ${
      pathname === path 
        ? "bg-yellow-500 text-white" 
        : "text-gray-600 hover:bg-gray-100"
    }`;

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 max-w-6xl h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-extrabold tracking-tight">
          <span className="text-yellow-500">GOOD</span> HAMBURGER
        </Link>

        <div className="flex gap-2">
          <Link href="/" className={getLinkClass("/")}>
            Menu
            {cart.length > 0 && (
              <span className="ml-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                {cart.length}
              </span>
            )}
          </Link>
          
          <Link href="/orders" className={getLinkClass("/orders")}>
            Orders History
            {orders.length > 0 && (
              <span className="ml-2 bg-gray-200 text-gray-700 text-xs px-2 py-0.5 rounded-full">
                {orders.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}