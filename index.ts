interface Product {
    name: string;
    price: number;
    description?: string; 
}
type ShoppingCart = {
    products: Product[];
    getTotal(): number;
};
type AddToCart = (product: Product) => void;
class Productstore {
    private cart: ShoppingCart;
    constructor() {
        this.cart = {
            products: [],
            getTotal: () => {
                return this.cart.products.reduce((total, product) => total + product.price, 0);
            },
        };
    }
    addToCart: AddToCart = (product) => {
        this.cart.products.push(product);
    };
    showCartTotal() {
        console.log(`Total: $${this.cart.getTotal().toFixed(2)}`);
    }
}

const storee = new Productstore();
const product_1: Product = { name: "Laptop", price: 999.99 };
const product_2: Product = { name: "Mouse", price: 29.99 };
storee.addToCart(product_1);
storee.addToCart(product_2);
storee.showCartTotal();