// Declare variables
const menuOpen = document.getElementById('openbutton');
const sidepanel = document.getElementById('menu_panel');
const menuClose = document.getElementById('closebutton');


// Menu Panel
// Click to open or close the modal
menuOpen.onclick = function(){
  sidepanel.style.width = "300px";
}

menuClose.onclick = function(){
  sidepanel.style.width = "0";
}

// When user click the area outside of menu panel, menu panel will be close
window.onclick = function(e){
  if(e.target != sidepanel && e.target != menuOpen){
    sidepanel.style.width = "0";
  }
}

// Chatbot Settings
// When click on the DialogFlow icon, open the chatbot
const openBot = document.getElementById('chatbot');
const Bot = document.querySelector(".chatbot_container");
const closeBot = document.querySelector(".close_chatbot");

openBot.addEventListener('click', () =>{
  openBot.style.display = "none";
  Bot.style.display = "block";
});

closeBot.addEventListener('click', () =>{
  openBot.style.display = "block";
  Bot.style.display = "none";
})