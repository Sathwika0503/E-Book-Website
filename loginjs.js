var email=document.forms['form']['email'];
var password=document.forms['form']['password'];
var email_error=document.getElementById('email_error');
var pass_error=document.getElementById('pass_error');
email.addEventListener('textInput',email_Verify);
password.addEventListener('textInput',pass_Verify);
function validated(){
    if(email.value==="245121737148"){
        if(password.value==="uservalid"){
       alert("Login Successful");
       window.open("C:\\Users\\HP\\Desktop\\Mini Project\\index.html");
       }
       else{
           alert("Login Unsuccessful");
       }
    }
    if(email.value==="245121737129"){
         if(password.value==="uservalid"){
        alert("Login Successful");
        window.open("C:\\Users\\HP\\Desktop\\Mini Project\\index.html");
        }
        else{
            alert("Login Unsuccessful");
        }
    }
    if(email.value==="245121737138"){
        if(password.value==="uservalid"){
       alert("Login Successful");
       window.open("C:\\Users\\HP\\Desktop\\Mini Project\\index.html");
       }
       else{
        alert("Login Unsuccessful");
    }
    
   
   }
    else{
        alert("Login Unsuccessful");
    }
}