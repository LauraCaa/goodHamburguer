import { Product } from "@/types";
import menuData from "@/data/menu.json";

export const fetchMenu = () : Promise<Product[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(menuData as Product[]);
        }, 1000);
    });
}