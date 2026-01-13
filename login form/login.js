const form=document.getElementById('loginForm');
const email=document.getElementById('email');
const password=document.getElementById('password');     
const successMessage=document.getElementById('successMessage');

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    validateInputs();
});

function validateInputs(){
    let isValid=true;
    successMessage.textContent="";

    if (email.value.trim()===""){
        showError(email,"email is required");
        isValid=false;
    } else if (!isValidEmail(email.value)){
        showError(email,"enter a valid email address");
        isValid=false;
    }else{
        showSuccess(email);
    }

    if (password.value.trim()===""){
        showError(password,"password is required");
        isValid=false;
    } else if (password.value.length<8){
        showError(password,"password must be at least 8 characters");
        isValid=false;
    }else{
        showSuccess(password);
    }
    if (isValid){
        successMessage.textContent="Login successful!";
    }

    function showError(input,message){
        const formcontrol=input.parentElement;
        const small=formcontrol.querySelector('small');
        small.textContent=message;
        small.style.visibility="visible";
    }
    function showSuccess(input){
    const formcontrol=input.parentElement;
    const small=formcontrol.querySelector('small');
    small.textContent="";
    small.style.visibility="hidden";

    
}
    function isValidEmail(email){
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }   

}
