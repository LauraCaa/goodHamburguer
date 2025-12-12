import { calculateCartTotals, validateAddItem } from '@/utils/cartLogic';
import { CartItem, Product} from '@/types';

const mockProduct = (
    id: string, 
    category: 'sandwich' | 'extra', 
    type: Product['type'],
    price: number
): CartItem => ({
    id, 
    name: 'Test Item', 
    price, 
    category, 
    type 
});

describe('Cart Logic Rules', () => {

    describe('validateAddItem (Restrictions)', () => {
        it('should allow adding a sandwich if cart is empty', () => {
            const cart: CartItem[] = [];
            const newSandwich = mockProduct('1', 'sandwich', 'burger', 5);
            const error = validateAddItem(cart, newSandwich);
            expect(error).toBeNull();
        });

        it('should PREVENT adding a second sandwich', () => {
            const cart = [mockProduct('1', 'sandwich', 'burger', 5)];
            const newSandwich = mockProduct('2', 'sandwich', 'egg', 4.5);
            const error = validateAddItem(cart, newSandwich);
            expect(error).toBe("You can only add one sandwich to the cart.");
        });

        it('should PREVENT adding a second fries', () => {
            const cart = [mockProduct('1', 'extra', 'fries', 2)];
            const newFries = mockProduct('2', 'extra', 'fries', 2);
            const error = validateAddItem(cart, newFries);
            expect(error).toBe("You can only add one fries per order.");
        });
    });

    describe('calculateCartTotals (Discounts)', () => {
        const burger = mockProduct('1', 'sandwich', 'burger', 5.00);
        const fries = mockProduct('2', 'extra', 'fries', 2.00);
        const drink = mockProduct('3', 'extra', 'drink', 2.50);

        it('should apply 20% discount for FULL COMBO (Sandwich + Fries + Drink)', () => {
            const cart = [burger, fries, drink];
            const result = calculateCartTotals(cart);

            expect(result.subtotal).toBeCloseTo(9.5);
            expect(result.discountPercentage).toBe(0.20);
            expect(result.discount).toBeCloseTo(1.9);
            expect(result.total).toBeCloseTo(7.6);
        });

        it('should apply 15% discount for Sandwich + Drink', () => {
            const cart = [burger, drink];
            const result = calculateCartTotals(cart);

            expect(result.discountPercentage).toBe(0.15);
            expect(result.total).toBeCloseTo(6.375);
        });

        it('should apply 10% discount for Sandwich + Fries', () => {
            const cart = [burger, fries];
            const result = calculateCartTotals(cart);
            expect(result.discountPercentage).toBe(0.10);
        });

        it('should apply NO discount for single items', () => {
            const cart = [burger];
            const result = calculateCartTotals(cart);
            expect(result.discountPercentage).toBe(0);
            expect(result.total).toBe(5);
        });
    });
});