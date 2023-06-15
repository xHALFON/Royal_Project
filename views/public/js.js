const productListElement = document.getElementById('productList');
const products = [];
var str = "hUKEwi5irXX48T_AhXiVaQEHYaqDy8Q4dUDCAk&uact=5&oq=dsa&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgsILhCvARDHARCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQguEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgsIABCABBCxAxCDAToRCC4QgAQQsQMQgwEQxwEQ0QM6CAgAEIAEELEDOgsIABCABBAKEAEQKjoLCC4QgAQQxwEQ0QNQAFhqYLsCaABwAHgAgAGfAYgBzAOSAQMwLjOYAQ";

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
}
function dynamicSort(property) { // sort function
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        /* next line works with strings and numbers, 
         * and you may want to customize it to your needs
         */
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}
// Render the products on the page
function renderProducts() {
    var i = 0;
    if(window.location.href.indexOf("shop_SortByPrice") > -1){
        products.sort(dynamicSort("price"));
    }else if(window.location.href.indexOf("shop_SortByCategory") > -1){
        products.sort(dynamicSort("category"));
    }else if(window.location.href.indexOf("shop_SortByName") > -1){
        products.sort(dynamicSort("name"));
    }else if(window.location.href.indexOf("shop_SortByStock") > -1){
        products.sort(dynamicSort("countInStock"));
    }else if(window.location.href.indexOf("shop_brands") > -1){
        i = products.length - 6;
    }
  while (i < products.length) {
        if(window.location.href.indexOf("shop_ring") > -1){
        const product = products[i];
        if(product.category == "ring"){
        const productElement = document.getElementById('productList');
        var t = productElement.appendChild(document.createElement('div'));
        t.setAttribute('class','product');
        var img = t.appendChild(document.createElement('img'));
        img.setAttribute('style','width: 175px;');
        img.src = product.imageUrl;
        var s = t.appendChild(document.createElement('div'));
        s.setAttribute('class','insideproduct');
        s.innerHTML = `<h4><b>${product.name}</b></h4><p>In Stock: <b>${product.countInStock}<b></p><p>${product.price}$</p> 
        <center> 
        <button type="submit" class="buy">Buy Now</button>  
        </center>`;
        }
    }else if(window.location.href.indexOf("shop_necklace") > -1){
        const product = products[i];
        if(product.category == "necklace"){
        const productElement = document.getElementById('productList');
        var t = productElement.appendChild(document.createElement('div'));
        t.setAttribute('class','product');
        var img = t.appendChild(document.createElement('img'));
        img.setAttribute('style','width: 175px;');
        img.src = product.imageUrl;
        var s = t.appendChild(document.createElement('div'));
        s.setAttribute('class','insideproduct');
        s.innerHTML = `<h4><b>${product.name}</b></h4><p>In Stock: <b>${product.countInStock}<b></p><p>${product.price}$</p> 
        <center> 
        <button type="submit" class="buy">Buy Now</button>  
        </center>`; 
        }
    }else if(window.location.href.indexOf("shop_brace") > -1){
        const product = products[i];
        if(product.category == "brace"){
        const productElement = document.getElementById('productList');
        var t = productElement.appendChild(document.createElement('div'));
        t.setAttribute('class','product');
        var img = t.appendChild(document.createElement('img'));
        img.setAttribute('style','width: 175px;');
        img.src = product.imageUrl;
        var s = t.appendChild(document.createElement('div'));
        s.setAttribute('class','insideproduct');
        s.innerHTML = `<h4><b>${product.name}</b></h4><p>In Stock: <b>${product.countInStock}<b></p><p>${product.price}$</p> 
        <center> 
        <button type="submit" class="buy">Buy Now</button>  
        </center>`; 
        }
    }else if(window.location.href.indexOf("shop_clock") > -1){
        const product = products[i];
        if(product.category == "clock"){
        const productElement = document.getElementById('productList');
        var t = productElement.appendChild(document.createElement('div'));
        t.setAttribute('class','product');
        var img = t.appendChild(document.createElement('img'));
        img.setAttribute('style','width: 175px;');
        img.src = product.imageUrl;
        var s = t.appendChild(document.createElement('div'));
        s.setAttribute('class','insideproduct');
        s.innerHTML = `<h4><b>${product.name}</b></h4><p>In Stock: <b>${product.countInStock}<b></p><p>${product.price}$</p> 
        <center> 
        <button type="submit" class="buy">Buy Now</button>  
        </center>`;
        }
    }else if(window.location.href.indexOf("shop_earrings") > -1){
        const product = products[i];
        if(product.category == "earrings"){
        const productElement = document.getElementById('productList');
        var t = productElement.appendChild(document.createElement('div'));
        t.setAttribute('class','product');
        var img = t.appendChild(document.createElement('img'));
        img.setAttribute('style','width: 175px;');
        img.src = product.imageUrl;
        var s = t.appendChild(document.createElement('div'));
        s.setAttribute('class','insideproduct');
        s.innerHTML = `<h4><b>${product.name}</b></h4><p>In Stock: <b>${product.countInStock}<b></p><p>${product.price}$</p> 
        <center> 
        <button type="submit" class="buy">Buy Now</button>  
        </center>`;
        }
        }else{ // Prints all products
        const product = products[i];
        const productElement = document.getElementById('productList');
        var t = productElement.appendChild(document.createElement('div'));
        t.setAttribute('class','product');
        var img = t.appendChild(document.createElement('img'));
        img.src = product.imageUrl;
        img.setAttribute('style','width: 175px;');
        var s = t.appendChild(document.createElement('div'));
        s.setAttribute('class','insideproduct');
        s.innerHTML = `<h4><b>${product.name}</b></h4><p>In Stock: <b>${product.countInStock}<b></p><p>${product.price}$</p> 
        <center> 
        <button type="submit" class="buy">Buy Now</button>  
        </center>`;
    }
    i++;
}
}

function log(){
   var name = document.getElementById('username').value;
   var pass = document.getElementById('password').value;
   var msg = document.getElementById('errorlogmsg');
   
    if(name == 'admin' && pass == 'admin'){
        window.location.assign(str);
    }else{
        msg.style.display = "block";
        msg.innerHTML = "Error: Username or Password are Wrongs."
    }
}

function linktoadd(){
    window.location.assign('/adminaddproducthUKEwi5irXX48T_AhXiVaQEHYaqDy8Q4dUDCAk&uact=5&oq=dsa&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgsILhCvARDHARCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQguEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgsIABCABBCxAxCDAToRCC4QgAQQsQMQgwEQxwEQ0QM6CAgAEIAEELEDOgsIABCABBAKEAEQKjoLCC4QgAQQxwEQ0QNQAFhqYLsCaABwAHgAgAGfAYgBzAOSAQMwLjOYAQ');
}