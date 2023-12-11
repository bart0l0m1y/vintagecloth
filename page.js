// Функція для отримання параметрів товару з URL
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
  
  // Функція для відображення даних товару на сторінці
  function displayProductDetails() {
    const productName = document.getElementById('product-name');
    const productSize = document.getElementById('product-size');
    const productPrice = document.getElementById('product-price');
    const productImg = document.getElementById('product-img');
  
    // Отримання параметрів товару з URL
    const name = getParameterByName('name');
    const size = getParameterByName('size');
    const price = getParameterByName('price');
    const image = getParameterByName('image');
  
    // Відображення даних товару на сторінці
    productName.textContent = name;
    productSize.textContent = `Size: ${size}`;
    productPrice.textContent = `Price: $${price}`;
    productImg.src = image;
  }
  
  // Виклик функції для відображення даних товару
  displayProductDetails();
  