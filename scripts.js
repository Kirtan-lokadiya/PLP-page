document.addEventListener('DOMContentLoaded', function () {
  // Fetch and display all products
  fetchProducts();

  function fetchProducts() {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(products => {
        renderProductList(products);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }

  function renderProductList(products) {
    const productListContainer = document.getElementById('product-list');
    productListContainer.innerHTML = '';
    
    // Create rows and columns
    for (let i = 0; i < products.length; i += 3) {
      const row = document.createElement('div');
      row.className = 'row mb-3';
      
      for (let j = i; j < i + 3 && j < products.length; j++) {
        const column = document.createElement('div');
        column.className = 'col-md-4';
        const card = renderProductCard(products[j]);
        column.appendChild(card);
        row.appendChild(column);
      }
      
      productListContainer.appendChild(row);
    }
  }

  function renderProductCard(product) {
    const card = document.createElement('div');
    card.className = 'card m-2';
    card.style = 'width: 18rem;';

    const image = document.createElement('img');
    image.src = product.image;
    image.className = 'card-img-top';
    image.alt = 'Product Image';

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const title = document.createElement('h5');
    title.className = 'card-title';
    title.textContent = product.title;

    const description = document.createElement('p');
    description.className = 'card-text';
    description.textContent = product.description;

    // No button in this version

    cardBody.appendChild(title);
    cardBody.appendChild(description);
    card.appendChild(image);
    card.appendChild(cardBody);

    return card;
  }
});

