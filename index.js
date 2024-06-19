function clearErrors() {
    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }

    }

    function seterror(id, error)
    {
        //set error 
        element = document.getElementById(id);
        element.getElementsByClassName('formerror')[0].innerHTML = error;
    }

    function validateform(){
        var returnval = true;
        clearErrors();
        
        var name = document.forms['myform']["fname"].value;
        if(name.length<5){
            seterror("name", "*Length of name is too short!");
            returnval = false;
        }

        if(name.length==0){
            seterror("name", "*Length of name cannot be zero!");
            returnval = false;
        }

        var email = document.forms['myform']["femail"].value;
        if(email.length>25){
            seterror("email", "*Email length is too long!");
            returnval = false;
        }
        

        var phone = document.forms['myform']["fphone"].value;
        if(phone.length!=10){
            seterror("phone", "*Phone Number should be 10 digits!");
            returnval = false;
        }

        var password = document.forms['myform']["fpass"].value;
        if(password.length < 6){
            seterror("pass", "*Password should be atleast 6 character long!");
            returnval = false;
        }


        var cpassword = document.forms['myform']["fcpass"].value;
        if(cpassword.length < 6){
            seterror("cpass", "*Password and Confirm Password should match!");
            returnval = false;
        }
        
        return returnval;

    }