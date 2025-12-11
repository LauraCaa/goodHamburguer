import { useState, useEffect } from "react";
import { Product, CartItem, Order } from "@/types";
import { fetchMenu } from "@/services/api";
import { validateAddItem, calculateCartTotals } from "@/utils/cartLogic";

export const useCartLogic = () => {
    const [menu, setMenu] = useState<Product[]>([]);
    const [isLoadingMenu, setIsLoadingMenu] = useState<boolean>(true);
    const [cart, setCart] = useState<CartItem[]>([]);
    const [errors, setErrors] = useState<string | null>(null);
    const [customerName, setCustomerName] = useState<string>('');
    const [orders, setOrders] = useState<Order[]>([]);
    
    const orderTotals = calculateCartTotals(cart);

    useEffect(() => {
        fetchMenu().then((data) => {
            setMenu(data);
            setIsLoadingMenu(false);
        });
    }, []);

    const addItemToCart = (product: Product) => {
        setErrors(null);
        const validationError = validateAddItem(cart, product);

        if(validationError) {
            setErrors(validationError);
            return;
        }
    
        setCart((prev) => [...prev, product ]);
    };

    const removeItemFromCart = (productId: string) => {
        setCart((prev) => prev.filter(item => item.id !== productId));
        setErrors(null);
    };

    const submitOrder = () => {
        if(!customerName.trim()) {
            setErrors('Customer name is required to place an order.');
            return;
        }

        const newOrder: Order = {
            id: crypto.randomUUID(),
            customerName,
            items: [...cart],
            ...orderTotals,
            createdAt: new Date().toISOString(),
        };

        setOrders((prev) => [newOrder, ...prev]);
        setCart([]);
        setCustomerName('');
        setErrors(null);
        alert(`Order placed! Total: $${orderTotals.total.toFixed(2)}`);
    };

    return {
        menu,
        isLoadingMenu,
        cart,
        orderTotals,
        errors,
        customerName,
        setCustomerName,
        addItemToCart,
        removeItemFromCart,
        submitOrder,
        orders,
    };
};