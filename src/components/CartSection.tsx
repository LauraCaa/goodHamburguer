"use client";
import { useCart } from "@/context/CartContext";

export default function CartSection() {
    const { 
        cart, 
        removeItemFromCart, 
        orderTotals, 
        errors, 
        customerName, 
        setCustomerName, 
        submitOrder 
    } = useCart();

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-fit sticky top-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                🛒 Your Order
                <span className="bg-gray-100 text-gray-600 text-xs font-normal px-2 py-1 rounded-full">
                    {cart.length} items
                </span>
            </h2>

            {/* Zona de Errores (Feedback visual) */}
            {errors && (
                <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-r text-sm animate-fade-in">
                    <p className="font-medium">Oops!</p>
                    <p>{errors}</p>
                </div>
            )}

            {/* Lista de Items en el Carrito */}
            {cart.length === 0 ? (
                <div className="text-center py-10 px-4 border-2 border-dashed border-gray-100 rounded-lg">
                    <p className="text-gray-400 mb-1">Your cart is empty</p>
                    <p className="text-xs text-gray-300">Add items from the menu to start</p>
                </div>
            ) : (
                <ul className="space-y-3 mb-8">
                    {cart.map((item) => (
                        <li key={item.id} className="flex justify-between items-center group p-2 hover:bg-gray-50 rounded-lg transition-colors">
                            <div className="flex items-center gap-3">
                                {/* Icono simple basado en categoría */}
                                <span className="text-xl">
                                    {item.category === 'sandwich' ? '🍔' : item.type === 'fries' ? '🍟' : '🥤'}
                                </span>
                                <div>
                                    <p className="font-medium text-gray-900 text-sm">{item.name}</p>
                                    <p className="text-xs text-gray-500">${item.price.toFixed(2)}</p>
                                </div>
                            </div>
                            <button 
                                onClick={() => removeItemFromCart(item.id)}
                                className="text-gray-400 hover:text-red-500 text-xs font-medium px-2 py-1 rounded border border-transparent hover:border-gray-200 transition-all"
                                aria-label={`Remove ${item.name}`}
                            >
                                ✕
                            </button>
                        </li>
                    ))}
                </ul>
            )}

            {/* Resumen de Pago y Formulario */}
            {cart.length > 0 && (
                <div className="border-t border-gray-100 pt-6 space-y-4">
                    {/* Cálculos */}
                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between text-gray-600">
                            <span>Subtotal</span>
                            <span>${orderTotals.subtotal.toFixed(2)}</span>
                        </div>
                        
                        {/* Solo mostramos la fila de descuento si existe descuento */}
                        {orderTotals.discount > 0 && (
                            <div className="flex justify-between text-green-600 font-medium bg-green-50 px-2 py-1 rounded">
                                <span>Combo Discount ({orderTotals.discountPercentage * 100}%)</span>
                                <span>-${orderTotals.discount.toFixed(2)}</span>
                            </div>
                        )}
                    </div>

                    <div className="flex justify-between items-end text-gray-900 pt-2 border-t border-gray-100">
                        <span className="text-sm font-medium">Total to Pay</span>
                        <span className="text-2xl font-bold tracking-tight">${orderTotals.total.toFixed(2)}</span>
                    </div>

                    {/* Input de Nombre */}
                    <div className="pt-4">
                        <label htmlFor="customerName" className="block text-xs font-semibold text-gray-700 mb-1 uppercase tracking-wider">
                            Customer Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="customerName"
                            value={customerName}
                            onChange={(e) => setCustomerName(e.target.value)}
                            placeholder="e.g. Marty McFly"
                            className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block p-2.5 outline-none transition-all"
                        />
                    </div>

                    {/* Botón de Acción Principal */}
                    <button
                        onClick={submitOrder}
                        className="w-full text-white bg-gray-900 hover:bg-black focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-3 text-center transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={!customerName.trim()}
                    >
                        Complete Order
                    </button>
                </div>
            )}
        </div>
    );
}