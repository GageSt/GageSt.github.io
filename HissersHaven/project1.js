"use strict"

let dropdown_visible = false;
/* function determines visibility of the dropdown menu*/
function nav_button(){
  /* change CSS dropdown when button is pressed*/
  if(dropdown_visible){
    document.getElementById("dropdown").style.display = "none";
  } else{
   document.getElementById("dropdown").style.display = "block"; 
  }
  dropdown_visible = !dropdown_visible;
}

/* Question for myself- could I have, should I have made the faqs.js within this file??? */

