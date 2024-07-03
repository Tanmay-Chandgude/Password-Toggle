let eyeclose = document.getElementById("eyeclose");
let password = document.getElementById("password");

eyeclose.onclick = function(){
    if(password.type == "password"){
        password.type = "text";
        eyeclose.src = "eye-open.svg";
    }
    else{
        password.type = "password";
        eyeclose.src = "eye-slash.svg";

    }
}