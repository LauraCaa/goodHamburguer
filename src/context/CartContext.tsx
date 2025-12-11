"use client";
import { createContext, useContext, ReactNode } from "react";
import { useCartLogic } from "@/hooks/useCart";

type CartContextType = ReturnType<typeof useCartLogic>;

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const cartLogic = useCartLogic();

    return (
        <CartContext.Provider value={cartLogic}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};