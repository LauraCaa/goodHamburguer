"use client";
import { useState } from "react";
import { useCart } from "@/context/CartContext"; // Asegúrate de que la ruta coincida con el nombre de tu archivo
import { Category } from "@/types";

export default function MenuSection() {
    // 1. Consumimos los datos y funciones del contexto
    const { menu, isLoadingMenu, addItemToCart, cart } = useCart();
    
    // 2. Estado local para el filtro visual
    const [filter, setFilter] = useState<Category | 'all'>('all');

    // Lógica de filtrado
    const filteredMenu = filter === 'all'
        ? menu
        : menu.filter((item) => item.category === filter);

    // Helper para saber si un item ya está en el carrito (para cambiar el botón de color)
    const isItemInCart = (id: string) => cart.some(item => item.id === id);

    // 3. Estado de carga (Requerimiento 3 y 4 del examen)
    if (isLoadingMenu) {
        return (
            <div className="p-10 text-center">
                <p className="text-xl font-semibold text-gray-500 animate-pulse">
                    🍔 Loading delicious menu...
                </p>
            </div>
        );
    }

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                <h2 className="text-2xl font-bold text-gray-800">Menu</h2>
                
                {/* Botones de Filtro */}
                <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
                    {(['all', 'sandwich', 'extra'] as const).map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all capitalize 
                                ${filter === cat 
                                    ? 'bg-white text-yellow-600 shadow-sm' 
                                    : 'text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            {cat === 'all' ? 'All' : cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Grid de Productos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredMenu.map((product) => {
                    const added = isItemInCart(product.id);
                    return (
                        <div 
                            key={product.id} 
                            className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow flex flex-col justify-between bg-white"
                        >
                            <div className="mb-4">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-bold text-lg text-gray-900">{product.name}</h3>
                                    <span className="text-xs font-semibold bg-gray-100 text-gray-500 px-2 py-1 rounded capitalize">
                                        {product.category}
                                    </span>
                                </div>
                                {/* Si tuvieras descripciones en el JSON, irían aquí */}
                            </div>
                            
                            <div className="flex justify-between items-center pt-4 border-t border-gray-50">
                                <span className="font-bold text-xl text-gray-800">
                                    ${product.price.toFixed(2)}
                                </span>
                                
                                <button
                                    onClick={() => addItemToCart(product)}
                                    disabled={added}
                                    className={`px-5 py-2 rounded-lg font-medium text-sm transition-colors
                                        ${added 
                                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                                            : 'bg-yellow-500 hover:bg-yellow-600 text-white shadow-sm'
                                        }`}
                                >
                                    {added ? 'Added' : 'Add to Cart'}
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}