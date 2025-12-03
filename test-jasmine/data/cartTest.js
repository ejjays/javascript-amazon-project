import { addToCart, cart, loadFromStorage } from '../../data/cart.js';

describe('Test suite: AddToCart', () => {
 /*it('add an existing product to the cart', () => {
   
 });*/
 
 it('add a new product in the cart', () => {
   const fakeInput = document.createElement('input');
   fakeInput.className = 'js-quantity-selector-e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
   fakeInput.value = '2';
   
   document.body.appendChild(fakeInput);
   
   spyOn(localStorage, 'setItem');
   spyOn(localStorage, 'getItem').and.callFake(() => {
    return JSON.stringify([]);
  });
  loadFromStorage();
  
   addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
   expect(cart.length).toEqual(1);
   expect(localStorage.setItem).toHaveBeenCalledTimes(2);
   expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
   expect(cart[0].quantity).toEqual(2);
 });
});