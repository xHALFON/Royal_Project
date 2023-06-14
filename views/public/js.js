const productListElement = document.getElementById('productList');
const products = [];

// Make a request to the API endpoint using Axios
axios.get('/api')
  .then(response => {
    const arr = response.data;
    saveProducts(arr);
    renderProducts();
  })
  .catch(error => {
    console.error(error);
  });

// Save the products into the array
function saveProducts(data) {
  for (let i = 0; i < data.length; i++) {
    products.push(data[i]);
  }
  console.error(products);

}

// Render the products on the page
function renderProducts() {
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const productElement = document.getElementById('productList');
    var t = productElement.appendChild(document.createElement('div'));
    t.setAttribute('class','product');
    var img = t.appendChild(document.createElement('img'));
    img.src = product.imageUrl;
    var s = t.appendChild(document.createElement('div'));
    s.setAttribute('class','insideproduct');
    s.innerHTML = `<h4><b>${product.name}</b></h4><p>In Stock: <b>${product.countInStock}<b></p><p>${product.price}$</p> 
    <center>
    <button type="submit" class="buy">Add Cart</button> 
    </center>`;
  }
}