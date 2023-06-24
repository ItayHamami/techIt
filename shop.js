import {products} from "/product.js"


let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let body = document.querySelector('body');
let cartSelector = document.querySelector('.quantity');
let listCart = document.querySelector('.listCart');
let total = document.querySelector('.total');



//openShopping.addEventListener('click', reloadCart());
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})


    if (typeof(Storage) !== "undefined") {

        var cart = JSON.parse(localStorage.getItem("cart")) || [];
    }
    else{
        let cart = [];
    }
    let cartQuantity; 
    cart.length ? cartQuantity=cart.length : cartQuantity = 0;
    cartSelector.innerText= cartQuantity;


window.addToCart = (index) => {
        var product = products[index];
            cart.push(product);
            localStorage.setItem("cart", JSON.stringify(cart));
            console.log("Product added to cart:", product);
            cartQuantity=cart.length;
            cartSelector.innerText = `${cartQuantity}`;
            console.log(cart);
            cartQuantity= cart.length;
            cartSelector.innerText = cartQuantity;

        
    }

window.removeFromCart = (productId)  => {

        var index = cart.findIndex(item => item.id === productId);
    
        if (index !== -1) {

            var removedProduct = cart.splice(index, 1)[0];
            localStorage.setItem("cart", JSON.stringify(cart));
            console.log("Product removed from cart:", removedProduct);
            cart.length ? cartQuantity=cart.length : cartQuantity = 0;
            cartSelector.innerText= cartQuantity;
            reloadCart();
        } else {
            console.log("Product not found in cart");
        }
        }

    window.clearCart= () => {
        if(confirm("Are you sure you want to clear your cart?"))
        {
            cart = [];
            localStorage.setItem("cart", JSON.stringify(cart));
            body.classList.remove('active');
            alert("Cart Cleared");
            

            cartQuantity=0;
            cartSelector.innerText= cartQuantity;
        } 

        }






    window.setModal = (index) => {
        document.getElementById("title").innerText = products[index].name;
        document.getElementById("mbody").innerHTML = `
        <p><b>Serial Number:</b> ${products[index].id}</p>
        <p><b>Category:</b> ${products[index].category}</p>
        <p><b>Description:</b> ${products[index].description}</p>
        <h5 class="text-end">Price: ${products[index].price} </h5>`
        document.getElementById("mfooter").innerHTML= `
        <a class="btn btn-secondary w-100" onclick="addToCart(${index})">Add To cart</a>
        `;
        
    }
    
    
    
    function showCards() {
    for (let i = 0; i < products.length; i++) {
        document.getElementById("products").innerHTML += `
            <div class="card-item col-12 col-sm-6 col-lg-4 mt-4">
            <div class="card" style="width: 18rem;">
    <img src=${products[i].image} class="card-img-top" alt=${products[i].name}>
    <div class="card-content">
        <h5 class="card-title">${products[i].name}</h5>
        <p class="card-text">${products[i].category}</p>
        <a data-bs-toggle="modal" data-bs-target="#infoModal" class="btn w-100" onclick="setModal(${i})">See More</a>
    </div>
    </div>
            </div>
            `;
    }
    }
    
    showCards();

    window.filterCards = () =>{
        const category = document.getElementById("category").value;
        const cards = document.getElementsByClassName("card-item");
    
        for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        const cardCategory = products[i].category;
    
        if (category === "all" || cardCategory == category) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
        }
    }


   window.reloadCart = () => {
        console.log(cartQuantity);
        if(cartQuantity==0){
            body.classList.remove('active');
            alert("Your cart is empty.")
        }
        else{
            body.classList.add('active');
            listCart.innerHTML = '';
            let count = 0;
            let totalPrice = 0;
            console.log(cart);
            for(let i=0; i< cart.length; i++){ 
                listCart.innerHTML+= 
            ` <li>
            <div class="mt-2"><img src="image/${cart[i].image}"/></div>
            <div>${cart[i].name}</div>
            <div>${cart[i].price.toLocaleString()}</div>
            <button onclick="removeFromCart(${cart[i].id})"><i class="fa-solid fa-trash-can"></i></button>
                </li>`;
                count++;
                totalPrice+= cart[i].price;
            }
    
            cartSelector.innerText == count;
            total.innerHTML = `<p>Total:${totalPrice}</p>`;
        }
    

    }

