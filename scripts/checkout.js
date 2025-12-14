import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { loadProducts, loadCart } from '../data/products.js';
// import '../data/cart-class.js';
// import '../data/backend-practice.js';

/*loadProducts(() => {
  renderOrderSummary();  
  renderPaymentSummary();
});*/

/*new Promise((resolve) => {
   loadProducts(() => {
     resolve();
   });
}).then(() => {
  return new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  });
}).then(() => {
  renderOrderSummary();  
  renderPaymentSummary();
});*/

Promise.all([
  new Promise((resolve) => {
    loadProducts(() => {
      resolve();
    });
  }), 
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  })
]).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});