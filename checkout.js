import {products} from "/product.js"



let cart;
if (typeof Storage !== "undefined") {
  cart = JSON.parse(localStorage.getItem("cart")) || [];
} else {
  cart = [];
}


let product;
let count = 0;
let total=0;


function checkOutList() {
  total=0;
  if (cart.length > 0) {
    for (let i = 0; i < cart.length; i++) {
      product = products.find((item) => item.id === cart[i].id);
      count++;
      total+= cart[i].price;
      if (product) {
        document.getElementById("checkOut_cart").innerHTML += `
          <li class="list-group-item d-flex justify-content-between lh-condensed mt-2">
            <div>
              <h6>${product.name}</h6>
              <small class="">${product.category}</small>
            </div>
            <span class="">${product.price}</span>
          </li>
        `;
      }
    }
  } else {
    document.getElementById("checkOut_cart").innerHTML = "Cart is empty :(";
    
  }

  document.getElementById("total").innerText = "Total:"+ "  " +total;;
  document.getElementById("quantity").innerText = count;
  count=0;
}

checkOutList();
      



  const inputElement = document.getElementById('discount');
  const buttonElement = document.getElementById('btn');
  const checkOutBtn = document.getElementById('checkoutBtn');
  
  buttonElement.addEventListener('click', () => {
  
    const userInput = inputElement.value;
    if (userInput == 'Tester') {
      document.getElementById("total").innerText = "Thanks for Visiting ,Free order !"
    }
  });


checkOutBtn.addEventListener('click' ,(event)=>
{
  event.preventDefault();
  if(count == 0 ){
    alert("Your cart is empty!")
  }
else{


  let formData = {
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      email: document.getElementById("email").value,
      address: document.getElementById("address").value,
      index: "checkout"
      };

  localStorage.setItem("formData" , JSON.stringify(formData));
  window.location.href= "postform.html";
  }
}
)





