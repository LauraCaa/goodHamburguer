"use client";
import { useCart } from "@/context/CartContext";

export default function OrdersList() {
    const { orders } = useCart();

    if (orders.length === 0) return null;

    return (
        <div className="mt-12 border-t pt-8">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Submitted Orders History</h3>
            
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                {orders.map((order) => (
                    <div key={order.id} className="bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-sm">
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <p className="font-bold text-gray-900">{order.customerName}</p>
                                <p className="text-xs text-gray-500">
                                    {new Date(order.createdAt).toLocaleTimeString()}
                                </p>
                            </div>
                            <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">
                                Paid: ${order.total.toFixed(2)}
                            </span>
                        </div>
                        <div className="text-sm text-gray-600">
                            <span className="font-semibold text-xs text-gray-400 uppercase">Items: </span>
                            {order.items.map(i => i.name).join(', ')}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}