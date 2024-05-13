const openForm = document.getElementById('enter_form');
const closeForm = document.querySelector(".cancel");
const form = document.getElementById('form_container');
const content = document.getElementById('form_signup');
const show_psw = document.querySelectorAll(".eye");
const psw = document.getElementById('psw');
const psw_rpt = document.getElementById('psw-repeat');
const submit = document.querySelector(".signup");

// Open and close the form
openForm.addEventListener('click', ()=>{
    form.style.display = "block";
});

closeForm.addEventListener('click', ()=>{
    form.style.display = "none";
});

window.onclick = function(e){
    if(e.target == form){
        form.style.display = "none";
    }
}

// When user clicks on the "hide eye" icon, the password will either show or hidden
show_psw.forEach((show_psw, index) => {
    show_psw.addEventListener("click", () => {
        const psw = document.querySelectorAll('.input_psw')[index];
        if(psw.type === "password"){
            psw.type = "text";
        } else{
            psw.type = "password";
        }
    });
})

// Check whether the repeated password is same as the password
function checkPassword(){
    if (psw_rpt.value == psw.value){
        psw_rpt.setCustomValidity("");
    } else{
        psw_rpt.setCustomValidity("Password does not match.");
    }
}
