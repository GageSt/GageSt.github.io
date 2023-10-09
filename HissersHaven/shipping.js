"use strict";

const processEntries = () => {
    const location = $("#shipping").value; 
    const quote = $("#shippingQuote");

    switch (location){
        default:
            quote.innerHTML = "Please Select an Option";
            quote.style = "color: red;";
        break;
        case "usa":
          quote.innerHTML = "Ships in 5-7 days";
          quote.style = "color: black;";
        break;
        case "canada":
          quote.innerHTML = "Ships in 7 days";
          quote.style = "color: black;";
        break;
        case "south":
          quote.innerHTML = "Ships around 30 days";
          quote.style = "color: orange;";
          break;
        case "tooFar":
          quote.innerHTML = "Shipping Not Available!";
          quote.style = "color: red;";
        break;
    }
}

document.addEventListener("DOMContentLoaded", () => {
   
    $("#submit_location").addEventListener("click", processEntries);
});