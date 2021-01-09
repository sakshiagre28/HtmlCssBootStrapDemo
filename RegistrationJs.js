console.log("Hello")
var fullName ="Sakshi";
var sal =2000.00
var carArray = new Array("MAruti","BMW");
var city = new String("Mumbai");


function display()
{
    alert("Registration page is loaded");
    console.log("Registration page is loaded");
}
function validateData()
{   
//var cpass = window.document.registrationForm.txtCPassword.value;
//var pass = window.document.registrationForm.txtPassword.value;
var cpassword = document.getElementById("txtCPassword").value;
var password = document.getElementById("txtPassword").value;
if(cpassword != password)
{
    alert("Passwords do not match. Please re-enter")
}
   // var fndata = window.document.registrationForm.txtFirstnameId.value;
  
return true;
}