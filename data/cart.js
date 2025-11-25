export let cart = JSON.parse(localStorage.getItem('cart')) ||
  [{
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 2,
    deliveryOptionId: '1'
  }, {
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
      quantity: 1,
      deliveryOptionId: '2'
  }];




function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId) {
  const selectorQuantity = document.querySelector(`.js-quantity-selector-${productId}`);
  const selectedQuantity = parseInt(selectorQuantity.value, 10);
  
  let matchingItem;
    
  cart.forEach((item) => {
    if (productId === item.productId) {
      matchingItem = item;
    }
  });
  saveToStorage();
  if (matchingItem) {
    matchingItem.quantity += selectedQuantity;
  } else {
    cart.push({
      productId: productId,
      quantity: selectedQuantity,
      deliveryOptionId: '2'
    })
  }
  saveToStorage();
}

export function updateCartQuantity() {
  let cartQuantity = 0;
    
    cart.forEach((item) => {
      cartQuantity += item.quantity;
    })
    saveToStorage();
    return cartQuantity;
}

export function removeCartItem(productId) {
  const newCart = [];
  
  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });
  
  cart = newCart;
  saveToStorage();
}