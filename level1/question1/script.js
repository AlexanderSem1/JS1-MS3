//Use RegEx to validate form

function validateMyFormInput() {
    let myInputName = /^[a-zA-Z]+$/;
    let myInputNumber = /^[0-9]{8,10}$/; 
    let myInputEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/; 
    
    
    let inputFirstname = document.getElementById("firstname").value;
    let inputLastName = document.getElementById("lastname").value;
    let inputPhoneNumber = document.getElementById("phonenumber").value;
    let inputEmail = document.getElementById("email").value; 
    
    (function checkFirstName(){
        if(inputFirstname.match(myInputName)){
            document.getElementById("firstnameresult").innerHTML = "First Name is accepted";
        }else
        
        {
            document.getElementById("firstnameresult").innerHTML = "Please write your first name";
        }  
    })(); 

    (function checkLastName(){
        if(inputLastName.match(myInputName)){
            document.getElementById("lastnameresult").innerHTML = "Last name is accepted";
        }
        else{
            document.getElementById("lastnameresult").innerHTML = "Please write your last name"; 
        }
        
    })();


    (function checkPhoneNumber(){
        if(inputPhoneNumber.match(myInputNumber)){
            document.getElementById("phoneresult").innerHTML = "The phone input is correct";
        }
        else{
            document.getElementById("phoneresult").innerHTML = "Phone number is missing";
        }
    })();

    (function checkmyEmail(){
        if(inputEmail.match(myInputEmail)){
            document.getElementById("emailresult").innerHTML = "The email input is correct ";
        }
        else{
            document.getElementById("emailresult").innerHTML = "Please provide valid email";
        }
    })();


}












