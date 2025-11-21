export const cart = [];

export function addToCart(productId) {
  const selectorQuantity = document.querySelector(`.js-quantity-selector-${productId}`);
  const selectedQuantity = parseInt(selectorQuantity.value, 10);
  
  let matchingItem;
    
  cart.forEach((item) => {
    if (productId === item.productId) {
      matchingItem = item;
    }
  });
  
  if (matchingItem) {
    matchingItem.quantity += selectedQuantity;
  } else {
    cart.push({
      productId: productId,
      quantity: selectedQuantity
    })
  }
}

export function updateCartQuantity() {
  let cartQuantity = 0;
    
    cart.forEach((item) => {
      cartQuantity += item.quantity;
    })
    
    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
}