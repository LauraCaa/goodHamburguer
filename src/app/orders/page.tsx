import OrdersList from "@/components/OrdersList";
import Link from "next/link";

export default function OrdersPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Your Orders</h1>
        <Link 
            href="/"
            className="text-yellow-600 hover:text-yellow-700 font-medium text-sm underline underline-offset-4"
        >
            ← Back to Menu
        </Link>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 min-h-[50vh]">
        <OrdersList />
        <p className="text-center text-gray-400 text-sm mt-4">
            Orders are stored in memory. If you refresh the page, they will disappear.
        </p>
      </div>
    </div>
  );
}