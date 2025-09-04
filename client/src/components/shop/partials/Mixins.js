// Mixins.js

// Get cart from localStorage safely
export const getCart = () => {
  try {
    const cart = JSON.parse(localStorage.getItem("cart"));
    return Array.isArray(cart) ? cart : [];
  } catch (err) {
    return [];
  }
};

// Get full cart list
export const cartList = () => {
  return getCart(); // always an array
};

// Get quantity of a specific product by id
export const quantity = (id) => {
  const cart = getCart();
  const product = cart.find((item) => item.id === id);
  return product ? product.quantity : 0;
};

// Get subtotal for a specific product
export const subTotal = (id, price) => {
  return quantity(id) * (price || 0);
};

// Get total cost of all products in cart
export const totalCost = () => {
  const cart = getCart();
  return cart.reduce((total, item) => {
    return total + (item.price || 0) * (item.quantity || 0);
  }, 0);
};
