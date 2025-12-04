class Cart {
  cartItems;
  #localStorageKey;
  
  constructor(localStorageKey) {
    this.#localStorageKey = localStorageKey;
    this.loadFromStorage();
  }
  
  loadFromStorage() {
    const stored = localStorage.getItem(this.#localStorageKey);
    this.cartItems = stored ? JSON.parse(stored) : [];
    
    if (!this.cartItems || this.cartItems.length === 0) {
      this.cartItems = [{
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 2,
        deliveryOptionId: '1'
      }, {
        productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
          quantity: 1,
          deliveryOptionId: '2' 
         }];
        } if (this.#localStorageKey === 'cart-bussines') {
          this.cartItems.push({
            productId: '77919bbe-0e56-475b-adde-4f24dfed3a04',
            quantity: 6,
            deliveryOptionId: '3'
          })
        }
      }
    
    saveToStorage() {
      localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));
    }
    
    addToCart(productId) {
      const selectorQuantity = document.querySelector(`.js-quantity-selector-${productId}`);
      if (!selectorQuantity) return;
      const selectedQuantity = parseInt(selectorQuantity.value, 10);
      
      let matchingItem;
        
      this.cartItems.forEach((item) => {
        if (productId === item.productId) {
          matchingItem = item;
        }
      });
      if (matchingItem) {
        matchingItem.quantity += selectedQuantity;
      } else {
        this.cartItems.push({
          productId: productId,
          quantity: selectedQuantity,
          deliveryOptionId: '2'
        })
      }
      this.saveToStorage();
    }
    
     updateCartQuantity() {
      let cartQuantity = 0;
        
        this.cartItems.forEach((item) => {
          cartQuantity += item.quantity;
        })
        this.saveToStorage();
        return cartQuantity;
    }
    
    removeCartItem(productId) {
      const newCart = [];
      
      this.cartItems.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
          newCart.push(cartItem);
        }
      });
      
      this.cartItems = newCart;
      this.saveToStorage();
    }
    
    updateDeliveryOption(productId, deliveryOptionId) {
      let matchingItem;
      
      this.cartItems.forEach((cartItem) => {
        if (productId === cartItem.productId) {
          matchingItem = cartItem;
        }
      });
      
      if (matchingItem) {
        matchingItem.deliveryOptionId = deliveryOptionId;
      this.saveToStorage();
      }
    }
}
export const cart = new Cart('cart-oop');
const bussinesCart = new Cart();
bussinesCart.localStorageKey = 'cart-bussines';

bussinesCart.loadFromStorage();

console.log(cart);
console.log(bussinesCart);