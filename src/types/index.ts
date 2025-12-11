export type Category = 'sandwich' |'extra';

export interface Product {
    id: string;
    name: string;
    price: number;
    category: Category;
    type: 'burger' | 'egg' | 'bacon'| 'drink' | 'fries';
}
export type CartItem = Product;

export interface Order {
    id: string;
    customerName: string;
    items: CartItem[];
    subtotal: number;
    discount: number;
    total: number;
    createdAt: string;
}