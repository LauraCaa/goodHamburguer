import { CartItem, Product } from "@/types";

export const validateAddItem = (cart: CartItem[], newItem: Product): string | null => {
    if ( newItem.category === 'sandwich') {
        if (cart.some((item) => item.category === 'sandwich')) {
            return 'You can only add one sandwich to the cart.';
        }
    }

    if ( newItem.type === 'fries') {
        if (cart.some((item) => item.type === 'fries')) {
            return 'You can only add one fries per order.';
        }
    }

     if ( newItem.type === 'drink') {
        if (cart.some((item) => item.type === 'drink')) {
            return 'You can only add one drink per order.';
        }
    }
    return null;
}

export const calculateCartTotals = (cart: CartItem[]) => {
    const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
    
    const hasSandwich = cart.some((item) => item.category === 'sandwich');
    const hasFries = cart.some((item) => item.type === 'fries');
    const hasDrink = cart.some((item) => item.type === 'drink');
    
    let discountPercentage = 0;

    if (hasSandwich && hasFries && hasDrink) {
        discountPercentage = 0.20;
    } else if (hasSandwich && hasDrink) {
        discountPercentage = 0.15;
    } else if (hasSandwich && hasFries) {
        discountPercentage = 0.10;
    }

    const discount = subtotal * discountPercentage;
    const total = subtotal - discount;
    
    return {
        subtotal,
        discount,
        discountPercentage,
        total
    };
}