
const productsContainer = document.querySelector('.products');

function addToCart(productName, price, imageUrl) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const item = { productName, price, imageUrl }; 
  cart.push(item);
  localStorage.setItem('cart', JSON.stringify(cart));

  // Вспливаюче вікно з повідомленням про успішне додавання в корзину
  const popup = document.createElement('div');
  popup.classList.add('popup');
  popup.textContent = 'Товар додано в корзину!';
  document.body.appendChild(popup);

  setTimeout(function() {
    popup.style.opacity = '1';
  }, 100);

  setTimeout(function() {
    popup.style.opacity = '0';
    setTimeout(function() {
      document.body.removeChild(popup);
    }, 1000);
  }, 2000);
  
}

function redirectToErrorPage() {
  window.location.href = 'error.html';
}

function displayCartItems() {
  const cartItems = document.querySelector('.cart-items');
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  cart.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `<p>${item.productName} - ${item.price}</p>`;
    cartItems.appendChild(cartItem);
  });
}

function addProductTile(title, description, price, imageUrl, category
  ) {const productsContainer = document.querySelector(`#${category} .products`);
  const productTile = document.createElement('div');
  productTile.classList.add('product');

  const productImage = document.createElement('img');
  productImage.src = imageUrl;
  productImage.alt = title;

  const productTitle = document.createElement('h3');
  productTitle.textContent = title;

  const productDescription = document.createElement('p');
  productDescription.textContent = description;

  const productPrice = document.createElement('h3');
  productPrice.textContent = `Ціна: ${price}`;

  const addToCartButton = document.createElement('button');
  addToCartButton.onclick = function() {
    addToCart(title, price, imageUrl);
  
  
  }
  function displayCartItems() {
    const cartItems = document.querySelector('.cart-items');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    cartItems.innerHTML = ''; 
  
    cart.forEach((item, index) => {
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
  
      const productImage = document.createElement('img');
      productImage.src = item.imageUrl; 
      productImage.alt = item.productName;
  
      const productName = document.createElement('p');
      productName.textContent = item.productName;
  
      const productPrice = document.createElement('p');
      productPrice.textContent = `Ціна: ${item.price}`;
  
      const removeButton = document.createElement('button');
      removeButton.onclick = function() {
        removeFromCart(index);
        displayCartItems();
        updateTotalAmount(); 
      };
  
      cartItem.appendChild(productImage);
      cartItem.appendChild(productName);
      cartItem.appendChild(productPrice);
      cartItem.appendChild(removeButton);
  
      cartItems.appendChild(cartItem);
    });
  
    updateTotalAmount(); 
  }
  
  function removeFromCart(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  function updateTotalAmount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalAmount = cart.reduce((total, item) => total + item.price, 0);
    document.getElementById('totalAmount').textContent = totalAmount.toFixed(2);
  } 
  function redirectToPage(page) {
    window.location.href = page;
  }  
  
  document.addEventListener('DOMContentLoaded', function() {
    displayCartItems();
    checkCart();
  });  
  productTile.appendChild(productImage);
  productTile.appendChild(productTitle);
  productTile.appendChild(productDescription);
  productTile.appendChild(productPrice);
  productTile.appendChild(addToCartButton);
  productsContainer.appendChild(productTile);
}

addProductTile('St. Thomas University Mv Sport College Sweatshirt', 'Small Purple Cotton', 1026.00, 'img/product/product2.jpg','category1');
addProductTile('Ohio State Champion College Hoodie', 'Small Grey Cotton Blend', 1177.00, 'img/product/product12.jpg','category1');
addProductTile('Ralph Lauren 1/4 Zip', 'XL Purple Cotton', 1920.00, 'img/product/product3.jpg','category1');
addProductTile('West Chester University Jansport College Hoodie', 'Small Orange Cotton Blend', 1126.00, 'img/product/product4.jpg','category1');
addProductTile('Adidas Sweatshirt', 'mall White Cotton', 1192.00, 'img/product/product5.jpg','category1');
addProductTile('Washington Champion Hoodie', 'Small Grey Cotton Blend', 1177.00, 'img/product/product11.jpg','category1');
addProductTile('L.L.Bean Jacket', 'Large Red Polyester', 1882.00, 'img/product/product6.jpg','category2');
addProductTile('L.L.Bean Jacket', 'Large Blue Nylon', 1882.00, 'img/product/product7.jpg','category2');
addProductTile('Levis Jacket', 'XL Brown Cotton', 1882.00, 'img/product/product8.jpg','category2');
addProductTile('Tommy Hilfiger Jacket', 'Small Block Colour Polyester', 1177.00, 'img/product/product9.jpg','category2');
addProductTile('Asics Jacket', 'Small Blue Polyester', 706.00, 'img/product/product10.jpg','category2');
addProductTile('Calvin Klein Jacket', 'Medium Brown Polyester', 2582.00, 'img/product/product1.jpg','category2');
displayCartItems();
