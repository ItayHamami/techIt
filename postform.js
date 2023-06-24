
let index = JSON.parse(localStorage.getItem("formData")).index;


function userFormDetails(){
    
    document.getElementById("thankyoudiv").innerHTML+= `<h1 class="mainH">Hello , ${JSON.parse(localStorage.getItem("formData")).firstName} ${JSON.parse(localStorage.getItem("formData")).lastName}</h1 id="header"> </br> We have recieved your message and will answer as fast as possible! <br> response will be sent to: ${JSON.parse(localStorage.getItem("formData")).email} <br>
    
    the message we have recieved is: <br>
    <p>"${JSON.parse(localStorage.getItem("formData")).text} "</p>
    <br>
    <a class="socLinks" href="index.html">
Click Here To return :)
</a>`
localStorage.clear("formData");
    }

if(index == "contact"){userFormDetails()}
else
{
    document.getElementById("thankyoudiv").innerHTML+= `<h1 class="mainH">Hello , ${JSON.parse(localStorage.getItem("formData")).firstName} ${JSON.parse(localStorage.getItem("formData")).lastName}</h1 id="header"> </br> Thank you for yur order , and for visiting my website! <br> Any updates about your shipment will be sent to: ${JSON.parse(localStorage.getItem("formData")).email} <br>
    
    Your Order Will be sent to: <br>
    <p>"${JSON.parse(localStorage.getItem("formData")).address} "</p>
    <br>
    <a class="socLinks" href="index.html">  
Click Here To return :)
</a>`
localStorage.clear("cart");
localStorage.clear("formData");
}
;


