const form = document.getElementById('submit')

form.addEventListener('submit', function(event) {
event.preventDefault();
const yourFName = document.getElementById('fname').value 
const yourLName = document.getElementById('lname').value 
const yourEmail = document.getElementById('e-mail').value 
const yourPhone = document.getElementById('phone').value 
})

function myFunction(){
   alert("Your information have submited");
}