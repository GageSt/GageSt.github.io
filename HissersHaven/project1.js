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

const $ = selector => document.querySelector(selector);
    
const imageCache = [];
let imageCounter = 0;
let timer = null;
let image = null;

const mainImage = $("#main_image");   // the img element for the show

const runSlideShow = () => {
    imageCounter = (imageCounter + 1) % imageCache.length;
    image = imageCache[imageCounter];
    mainImage.src = image.src;
    mainImage.alt = image.alt;
    
};
         
document.addEventListener("DOMContentLoaded", () => {
    const links = $("#image_list").querySelectorAll("#image_list a");
    
    // process image links
    for ( let link of links ) {
        // Preload image and copy title properties
        image = new Image();
        image.src = link.href;
        // add image to array 
        imageCache[imageCache.length] = image;
    }

    // attach start and pause event handlers
    $("#main_image").addEventListener("mouseover", () => {
        runSlideShow();
        timer = setInterval(runSlideShow, 2000);
        /*$("#start").disabled = true;
        $("#pause").disabled = false;*/
    });

    $("#main_image").addEventListener("mouseout", () => {
      clearInterval(timer);
    });
   
    
});
