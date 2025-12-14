class Product {
  id;
  image;
  name;
  rating;
  priceCents;
  
  constructor(productDetails) {
    this.id = productDetails.id;
    this.image = productDetails.image;
    this.name = productDetails.name;
    this.rating = productDetails.rating;
    this.priceCents = productDetails.priceCents;
  }
  
  getStarsUrl() {
    return `images/ratings/rating-${this.rating.stars * 10}.png`;
  }
  
  getPrice(formatCurrency) {
    return `${formatCurrency(this.priceCents)}`;
  }
  
  extraInfoHTML() {
    return '';
  }
}

class Clothing extends Product {
  sizeChartLink;
  
  constructor(productDetails) {
    super(productDetails);
    this.sizeChartLink = productDetails.sizeChartLink;
  }
  
  extraInfoHTML() {
    return `
      <a href="${this.sizeChartLink}" target="_blank">
        Size chart
      </a>
    `;
  }
}

/*
  const date = new Date();
  console.log(date);
  console.log(date.toLocaleString());
*/

function logThis() {
  console.log(this);
}
console.log(logThis.call('Hello World, Success!'));

export let products = [];

export function loadProducts(fun) {
  const xhr = new XMLHttpRequest();
  
  xhr.addEventListener('load', () => {
    products = JSON.parse(xhr.response).map((productDetails) => {
      if (productDetails.type === 'clothing') {
        return new Clothing(productDetails);
      } 
      return new Product(productDetails);
    });
    console.log('load products');
    fun();
  });
  
  xhr.open('GET', 'https://supersimplebackend.dev/products');
  xhr.send();
}

export function loadCart(fun) {
  const xhr = new XMLHttpRequest();
  
  xhr.addEventListener('load', () => {
    console.log(xhr.response);
    fun();
  });
  
  xhr.open('GET', 'https://supersimplebackend.dev/cart');
  xhr.send();
}

export function getProduct(productId) {
  let matchingProduct;
    
    products.forEach((product) => {
      if (productId === product.id) {
        matchingProduct = product;
      }
    });
    
    return matchingProduct;
}

