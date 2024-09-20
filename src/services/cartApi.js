export function addToCart(product) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = cart.find(item => item._id === product._id);

    if (!existingProduct) {
        // Add the product with quantity set to 1
        cart.push({ ...product, cartQuantity: 1 });
        localStorage.setItem("cart", JSON.stringify(cart));
    }
}


export function removeItemFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item._id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    return cart; // Return the updated cart
}

export function getCartItems() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

export function updateCartItem(productId, quantity) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const itemIndex = cart.findIndex(item => item._id === productId);
    
    if (itemIndex !== -1) {
        if (quantity >= 1) {
            cart[itemIndex].cartQuantity = quantity;
        }
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    
    return cart;
}

export function getCartTotal() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    return cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
}