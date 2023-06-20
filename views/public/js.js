const productListElement = document.getElementById('productList');
const products = [];
var flag = 1;
var countincart = 0;
var totalprice = 0;
var str = "hUKEwi5irXX48T_AhXiVaQEHYaqDy8Q4dUDCAk&uact=5&oq=dsa&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgsILhCvARDHARCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQguEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgsIABCABBCxAxCDAToRCC4QgAQQsQMQgwEQxwEQ0QM6CAgAEIAEELEDOgsIABCABBAKEAEQKjoLCC4QgAQQxwEQ0QNQAFhqYLsCaABwAHgAgAGfAYgBzAOSAQMwLjOYAQ";
// Make a request to the API endpoint using Axios
axios.get('/api').then(response => {
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
        i = products.length - 8;
    }
  while (i < products.length) {
        if(window.location.href.indexOf("shop_ring") > -1){
        const product = products[i];
        if(product.category == "ring"){
        const productElement = document.getElementById('productList');
        var t = productElement.appendChild(document.createElement('div'));
        t.setAttribute('class','product');
        t.style.animation = "fadeIn 1.5s";
        t.style.webkitAnimation = "fadeIn 1.5s";
        var img = t.appendChild(document.createElement('img'));
        img.setAttribute('style','width: 175px;  margin-left: 60px; float: left;');
        img.src = product.imageUrl;
        var s = t.appendChild(document.createElement('div'));
        s.setAttribute('class','insideproduct');
        if(product.countInStock == 0){
            s.innerHTML = `<h4><b>${product.name}</b></h4><p>In Stock: <b style="color: red;"> Sold Out </b></p><p><b>${product.price}$ </b></p> 
        <center>
        <button type="button" onclick="addtocart('${product.name}', '${product.price}', '${product.category}', '${product.countInStock}', '${product.imageUrl}','${product.id}', '${i}')" class="buy">Add to Cart</button>  
        </center>`;
        }else{
        s.innerHTML = `<h4><b>${product.name}</b></h4><p>In Stock: <b>${product.countInStock}<b></p><p>${product.price}$</p> 
        <center>
        <button type="button" onclick="addtocart('${product.name}', '${product.price}', '${product.category}', '${product.countInStock}', '${product.imageUrl}','${product.id}', '${i}')" class="buy">Add to Cart</button>  
        </center>`;
        }
        }
    }else if(window.location.href.indexOf("shop_necklace") > -1){
        const product = products[i];
        if(product.category == "necklace"){
        const productElement = document.getElementById('productList');
        var t = productElement.appendChild(document.createElement('div'));
        t.setAttribute('class','product');
        t.style.animation = "fadeIn 1.5s";
        t.style.webkitAnimation = "fadeIn 1.5s";
        var img = t.appendChild(document.createElement('img'));
        img.setAttribute('style','width: 175px;  margin-left: 60px; float: left;');
        img.src = product.imageUrl;
        var s = t.appendChild(document.createElement('div'));
        s.setAttribute('class','insideproduct');
        if(product.countInStock == 0){
            s.innerHTML = `<h4><b>${product.name}</b></h4><p>In Stock: <b style="color: red;"> Sold Out </b></p><p><b>${product.price}$ </b></p> 
        <center>
        <button type="button" onclick="addtocart('${product.name}', '${product.price}', '${product.category}', '${product.countInStock}', '${product.imageUrl}','${product.id}', '${i}')" class="buy">Add to Cart</button>  
        </center>`;
        }else{
        s.innerHTML = `<h4><b>${product.name}</b></h4><p>In Stock: <b>${product.countInStock}<b></p><p>${product.price}$</p> 
        <center>
        <button type="button" onclick="addtocart('${product.name}', '${product.price}', '${product.category}', '${product.countInStock}', '${product.imageUrl}','${product.id}', '${i}')" class="buy">Add to Cart</button>  
        </center>`;
        }
        }
    }else if(window.location.href.indexOf("shop_brace") > -1){
        const product = products[i];
        if(product.category == "brace"){
        const productElement = document.getElementById('productList');
        var t = productElement.appendChild(document.createElement('div'));
        t.setAttribute('class','product');
        t.style.animation = "fadeIn 1.5s";
        t.style.webkitAnimation = "fadeIn 1.5s";
        var img = t.appendChild(document.createElement('img'));
        img.setAttribute('style','width: 175px;  margin-left: 60px; float: left;');
        img.src = product.imageUrl;
        var s = t.appendChild(document.createElement('div'));
        s.setAttribute('class','insideproduct');
        if(product.countInStock == 0){
            s.innerHTML = `<h4><b>${product.name}</b></h4><p>In Stock: <b style="color: red;"> Sold Out </b></p><p><b>${product.price}$ </b></p> 
        <center>
        <button type="button" onclick="addtocart('${product.name}', '${product.price}', '${product.category}', '${product.countInStock}', '${product.imageUrl}','${product.id}', '${i}')" class="buy">Add to Cart</button>  
        </center>`;
        }else{
        s.innerHTML = `<h4><b>${product.name}</b></h4><p>In Stock: <b>${product.countInStock}<b></p><p>${product.price}$</p> 
        <center>
        <button type="button" onclick="addtocart('${product.name}', '${product.price}', '${product.category}', '${product.countInStock}', '${product.imageUrl}','${product.id}', '${i}')" class="buy">Add to Cart</button>  
        </center>`;
        }
        }
    }else if(window.location.href.indexOf("shop_clock") > -1){
        const product = products[i];
        if(product.category == "clock"){
        const productElement = document.getElementById('productList');
        var t = productElement.appendChild(document.createElement('div'));
        t.setAttribute('class','product');
        t.style.animation = "fadeIn 1.5s";
        t.style.webkitAnimation = "fadeIn 1.5s";
        var img = t.appendChild(document.createElement('img'));
        img.setAttribute('style','width: 175px;  margin-left: 60px; float: left;');
        img.src = product.imageUrl;
        var s = t.appendChild(document.createElement('div'));
        s.setAttribute('class','insideproduct');
        if(product.countInStock == 0){
            s.innerHTML = `<h4><b>${product.name}</b></h4><p>In Stock: <b style="color: red;"> Sold Out </b></p><p><b>${product.price}$ </b></p> 
        <center>
        <button type="button" onclick="addtocart('${product.name}', '${product.price}', '${product.category}', '${product.countInStock}', '${product.imageUrl}','${product.id}', '${i}')" class="buy">Add to Cart</button>  
        </center>`;
        }else{
        s.innerHTML = `<h4><b>${product.name}</b></h4><p>In Stock: <b>${product.countInStock}<b></p><p>${product.price}$</p> 
        <center>
        <button type="button" onclick="addtocart('${product.name}', '${product.price}', '${product.category}', '${product.countInStock}', '${product.imageUrl}','${product.id}', '${i}')" class="buy">Add to Cart</button>  
        </center>`;
        }
        }
    }else if(window.location.href.indexOf("shop_earrings") > -1){
        const product = products[i];
        if(product.category == "earrings"){
        const productElement = document.getElementById('productList');
        var t = productElement.appendChild(document.createElement('div'));
        t.setAttribute('class','product');
        t.style.animation = "fadeIn 1.5s";
        t.style.webkitAnimation = "fadeIn 1.5s";
        var img = t.appendChild(document.createElement('img'));
        img.setAttribute('style','width: 175px;  margin-left: 60px; float: left;');
        img.src = product.imageUrl;
        var s = t.appendChild(document.createElement('div'));
        s.setAttribute('class','insideproduct');
        if(product.countInStock == 0){
            s.innerHTML = `<h4><b>${product.name}</b></h4><p>In Stock: <b style="color: red;"> Sold Out </b></p><p><b>${product.price}$ </b></p> 
        <center>
        <button type="button" onclick="addtocart('${product.name}', '${product.price}', '${product.category}', '${product.countInStock}', '${product.imageUrl}','${product.id}', '${i}')" class="buy">Add to Cart</button>  
        </center>`;
        }else{
        s.innerHTML = `<h4><b>${product.name}</b></h4><p>In Stock: <b>${product.countInStock}<b></p><p>${product.price}$</p> 
        <center>
        <button type="button" onclick="addtocart('${product.name}', '${product.price}', '${product.category}', '${product.countInStock}', '${product.imageUrl}','${product.id}', '${i}')" class="buy">Add to Cart</button>  
        </center>`;
        }
        }
        }else{ // Prints all products
        const product = products[i];
        const productElement = document.getElementById('productList');
        var t = productElement.appendChild(document.createElement('div'));
        t.setAttribute('class','product');
        t.style.animation = "fadeIn 1.5s";
        t.style.webkitAnimation = "fadeIn 1.5s";
        var img = t.appendChild(document.createElement('img'));
        img.src = product.imageUrl;
        img.setAttribute('style','width: 175px;  margin-left: 60px; float: left;');
        var s = t.appendChild(document.createElement('div'));
        s.setAttribute('class','insideproduct');
        if(product.countInStock == 0){
            s.innerHTML = `<h4><b>${product.name}</b></h4><p>In Stock: <b style="color: red;"> Sold Out </b></p><p><b>${product.price}$ </b></p> 
        <center>
        <button type="button" onclick="addtocart('${product.name}', '${product.price}', '${product.category}', '${product.countInStock}', '${product.imageUrl}','${product.id}', '${i}')" class="buy">Add to Cart</button>  
        </center>`;
        }else{
        s.innerHTML = `<h4><b>${product.name}</b></h4><p>In Stock: <b>${product.countInStock}<b></p><p>${product.price}$</p> 
        <center>
        <button type="button" onclick="addtocart('${product.name}', '${product.price}', '${product.category}', '${product.countInStock}', '${product.imageUrl}','${product.id}', '${i}')" class="buy">Add to Cart</button>  
        </center>`;
        }
    }
    i++;
}
}
document.addEventListener("keyup", function(key) {
    if (key.key == 'Enter') {
        log();
    }
});
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


var ProductsCart = [];

function addtocart(name, price, category, count, image, id, i){
    if(products[i].countInStock <= 0){
        var t = document.getElementById('cartmsg');
        t.innerHTML = 'No Supply';
        t.style.display = 'block';
        return;
    }
    if(countincart === 7){
        var t = document.getElementById('cartmsg');
        t.innerHTML = 'Cart Is Full';
        t.style.display = 'block';
        return;
    }else{
        ProductsCart.push(id);
        var t = document.getElementById('cartmsg');
        console.log(products[i].countInStock);
        products[i].countInStock -= 1;
        countincart += 1;
        t.style.display = 'none';
        console.log(countincart);
    }
    var table = document.getElementById('cartTable');
    var tr = document.createElement('tr');
    if(flag == 1){
        tr.style.backgroundColor = "bisque";
        flag = 1 - flag;
    }else{
        flag = 1 - flag;
        tr.style.backgroundColor = "white";
    }
    totalprice = totalprice + Number(price);
    document.getElementById('price').innerHTML = 'Total: ' + totalprice + '$';
    table.appendChild(tr);
    var td = document.createElement('td');
    tr.appendChild(td).innerHTML = name;
    td.style.width = '56px';
    td.style.textAlign = 'center';
    td = document.createElement('td');
    tr.appendChild(td).innerHTML = price+'$';
    td.style.width = '50px';
    td.style.textAlign = 'center';
    td = document.createElement('td');
    tr.appendChild(td).innerHTML = category;
    td.style.width = '90px';
    td.style.textAlign = 'center';
    td = document.createElement('td');
    tr.appendChild(td).innerHTML = count;
    td.style.width = '128px';
    td.style.textAlign = 'center';
    td = document.createElement('td');
    tr.appendChild(td).innerHTML = id;
    td.style.width = '100px';
    td.style.textAlign = 'center';
    td = document.createElement('td');
    var a = tr.appendChild(td).appendChild(document.createElement('img'));
    a.src = image;
    a.style.width = "50px";
    td.style.border = "none";
    td.style.paddingRight = "0px;"
    td.style.width = '0';
    td.style.textAlign = 'center';
}

var cartDisplay = 0;
function cartdis(){
    var cart = document.getElementById('cartcont');
    if(cartDisplay === 0){
        cartDisplay = 1 - cartDisplay;
        document.getElementById('toblur1').style.filter = 'blur(5px)';
        document.getElementById('toblur2').style.filter = 'blur(5px)';
        document.getElementById('toblur3').style.filter = 'blur(5px)';
        cart.style.display = 'block';
        cart.style.animation = "fadeIn 1s";
        cart.style.webkitAnimation = "fadeIn 1s";
    }else{
        cartDisplay = 1 - cartDisplay;
        cart.style.display = 'none';
        document.getElementById('toblur1').style.filter = 'blur(0px)';
        document.getElementById('toblur2').style.filter = 'blur(0px)';
        document.getElementById('toblur3').style.filter = 'blur(0px)';
    }
}

    async function buy() {
        fetch('/purchase', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
    }

    async function prebuy() {
        fetch('/prepurchase', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ProductsCart)
        })
    }