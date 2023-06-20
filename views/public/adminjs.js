const productListElement = document.getElementById('productList');
const products = [];
var products2 = [];
var SearchStr=[];
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
        img.src = product.imageUrl;
        var s = t.appendChild(document.createElement('div'));
        s.setAttribute('class','insideproduct');
        s.innerHTML = `<h4><b>${product.name}</b></h4><p>In Stock: <b>${product.countInStock}<b></p><p>${product.price}$</p> <p style="color: red;">ID: ${product.id}</p>`;
        }
    }else if(window.location.href.indexOf("shop_necklace") > -1){
        const product = products[i];
        if(product.category == "necklace"){
        const productElement = document.getElementById('productList');
        var t = productElement.appendChild(document.createElement('div'));
        t.setAttribute('class','product');
        var img = t.appendChild(document.createElement('img'));
        img.src = product.imageUrl;
        var s = t.appendChild(document.createElement('div'));
        s.setAttribute('class','insideproduct');
        s.innerHTML = `<h4><b>${product.name}</b></h4><p>In Stock: <b>${product.countInStock}<b></p><p>${product.price}$</p> <p style="color: red;">ID: ${product.id}</p>`; 
        }
    }else if(window.location.href.indexOf("shop_brace") > -1){
        const product = products[i];
        if(product.category == "brace"){
        const productElement = document.getElementById('productList');
        var t = productElement.appendChild(document.createElement('div'));
        t.setAttribute('class','product');
        var img = t.appendChild(document.createElement('img'));
        img.src = product.imageUrl;
        var s = t.appendChild(document.createElement('div'));
        s.setAttribute('class','insideproduct');
        s.innerHTML = `<h4><b>${product.name}</b></h4><p>In Stock: <b>${product.countInStock}<b></p><p>${product.price}$</p><p style="color: red;">ID: ${product.id}</p> `; 
        }
    }else if(window.location.href.indexOf("shop_clock") > -1){
        const product = products[i];
        if(product.category == "clock"){
        const productElement = document.getElementById('productList');
        var t = productElement.appendChild(document.createElement('div'));
        t.setAttribute('class','product');
        var img = t.appendChild(document.createElement('img'));
        img.src = product.imageUrl;
        var s = t.appendChild(document.createElement('div'));
        s.setAttribute('class','insideproduct');
        s.innerHTML = `<h4><b>${product.name}</b></h4><p>In Stock: <b>${product.countInStock}<b></p><p>${product.price}$</p> <p style="color: red;">ID: ${product.id}</p>`;
        }
    }else if(window.location.href.indexOf("shop_earrings") > -1){
        const product = products[i];
        if(product.category == "earrings"){
        const productElement = document.getElementById('productList');
        var t = productElement.appendChild(document.createElement('div'));
        t.setAttribute('class','product');
        var img = t.appendChild(document.createElement('img'));
        img.src = product.imageUrl;
        var s = t.appendChild(document.createElement('div'));
        s.setAttribute('class','insideproduct');
        s.innerHTML = `<h4><b>${product.name}</b></h4><p>In Stock: <b>${product.countInStock}<b></p><p>${product.price}$</p> <p style="color: red;">ID: ${product.id}</p>`;
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
        s.innerHTML = `<h4><b>${product.name}</b></h4><p>In Stock: <b>${product.countInStock}</b></p><p>Purchased: <b>${product.purchased}</b></p><p>${product.price}$</p><p style="color: red;">ID: ${product.id}</p> `;
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
function sure(){
    document.getElementById('yes').style.display = "inline";
    document.getElementById('no').style.display = "inline";
    document.getElementById('linkremove').style.display = "none";
    document.getElementById('suremsg').style.display = "inline";
}

function no(){
    document.getElementById('yes').style.display = "none";
    document.getElementById('no').style.display = "none";
    document.getElementById('linkremove').style.display = "inline";
    document.getElementById('suremsg').style.display = "none";
}

function linktoremove(){
    axios.post('/deleteall').then(response => {
    })
    .catch(error => {
    console.error(error);
    }); 
    document.getElementById('msg').innerHTML = "All Products deleted, Refresh Page";
    alert('All Products Deleted, Please Refresh Page');
}

function ShowGraph(){
    var purchasering = 0;
    var purchasenecklace = 0;
    var purchasebrace = 0;
    var purchaseearring = 0;
    var purchaseclock = 0;
    for(i = 0; i < products.length; i++){
        if(products[i].category == "ring"){
            purchasering =  purchasering + products[i].purchased;
        }
        if(products[i].category == "necklace"){
            purchasenecklace =  purchasenecklace + products[i].purchased;
        }
        if(products[i].category == "brace"){
            purchasebrace =  purchasebrace + products[i].purchased;
        }
        if(products[i].category == "earrings"){
            purchaseearring =  purchaseearring + products[i].purchased;
        }
        if(products[i].category == "clock"){
            purchaseclock =  purchaseclock + products[i].purchased;
        }

    }
    var chart = JSC.chart('chartDiv', {
    debug: true,
    type: 'column',
    title_label_text: 'Purchases by Category',
    legend_position: 'inside top right',
    yAxis_label_text: "Purchases",
    xAxis_label_text: "Category",
    legend_defaultEntry_style_color: "red",
    series: [
        {
        name: 'Purchases',
        points: [
            ['Ring', purchasering],
            ['Clock', purchaseclock],
            ['Earring', purchaseearring],
            ['Necklace', purchasenecklace],
            ['Brace', purchasebrace]
        ]
        }
    ]
    });    

    var countring = 0;
    var countnecklace = 0;
    var countbrace = 0;
    var countearring = 0;
    var countclock = 0;
    for(i = 0; i < products.length; i++){
        if(products[i].category == "ring"){
            countring =  countring + products[i].countInStock;
        }
        if(products[i].category == "necklace"){
            countnecklace =  countnecklace + products[i].countInStock;
        }
        if(products[i].category == "brace"){
            countbrace =  countbrace + products[i].countInStock;
        }
        if(products[i].category == "earrings"){
            countearring =  countearring + products[i].countInStock;
        }
        if(products[i].category == "clock"){
            countclock =  countclock + products[i].countInStock;
        }

    }
    var chart2 = JSC.chart('chartDiv2', {
    debug: true,
    type: 'column',
    title_label_text: 'CountInStock by Category',
    legend_position: 'inside top right',
    yAxis_label_text: "CountInStock",
    xAxis_label_text: "Category",
    legend_defaultEntry_style_color: "red",
    series: [
        {
        name: 'CountInStock',
        points: [
            ['Ring', countring],
            ['Clock', countclock],
            ['Earring', countearring],
            ['Necklace', countnecklace],
            ['Brace', countbrace]
        ]
        }
    ]
    });    
}

function searchProducts() {
    SearchStr = document.getElementById("SearchTextBox").value;
    /*searchTest();*/ 
    axios.post('/api/search', {name: SearchStr}).then(response => {
     products2 = response.data;
    renderProducts2();
    console.log(products2);
      })
      .catch(error => {
        console.error(error);
      }); 
}

// Save the products into the array
function saveProducts2(data) {
      products2.push(data.name);
  }
  
  function renderProducts2()
  {
    var i=0;
    console.log(i);
    while (i < products2.length) {
        const product = products2[i];
        const productElement = document.getElementById('productList');
        if (i==0)
        {
        while (productElement.firstChild) {
            productElement.removeChild(productElement.firstChild);
          }
        }
        var t = productElement.appendChild(document.createElement('div'));
        t.setAttribute('class','product');
        var img = t.appendChild(document.createElement('img'));
        img.src = product.imageUrl;
        img.setAttribute('style','width: 175px;');
        var s = t.appendChild(document.createElement('div'));
        s.setAttribute('class','insideproduct');
        s.innerHTML = `<h4><b>${product.name}</b></h4><p>In Stock: <b>${product.countInStock}</b></p><p>Purchased: <b>${product.purchased}</b></p><p>${product.price}$</p><p style="color: red;">ID: ${product.id}</p> `;
        i++;
        }
}

  async function searchTest() {
    fetch('/api/search', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(`${SearchStr}`)
    })
}