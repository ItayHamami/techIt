

function sendval(event) {
    event.preventDefault();
    let formData = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("email").value,
        text: document.getElementById("textarea").value,
        index: "contact"
        };
    if (formData.firstName.length < 2) {
    alert("First name too short!");
    } else if (formData.lastName.length < 2) {
    alert("Last name is too short!");
//} else if (formData.email.indexOf("@") == -1 || email.indexOf(".") == -1) {
//    alert("Please enter valid email!");
    } else if(formData.text.length <2){
        alert("Please Enter text!")
    }

    else{
    localStorage.setItem("formData" , JSON.stringify(formData));
    window.location.href= "postform.html";
    }
}
