// Implementing the Product Store
var ProductStore = /** @class */ (function () {
    function ProductStore() {
        var _this = this;
        // Method to add a product to the cart
        this.addToCart = function (product) {
            _this.cart.products.push(product);
        };
        this.cart = {
            products: [],
            getTotal: function () {
                return _this.cart.products.reduce(function (total, product) { return total + product.price; }, 0);
            },
        };
    }
    // Method to display cart total
    ProductStore.prototype.showCartTotal = function () {
        console.log("Total: $".concat(this.cart.getTotal().toFixed(2)));
    };
    return ProductStore;
}());
// Example usage
var store = new ProductStore();
var product1 = { name: "Laptop", price: 999.99 };
var product2 = { name: "Mouse", price: 29.99 };
store.addToCart(product1);
store.addToCart(product2);
store.showCartTotal();
