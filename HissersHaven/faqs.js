"use strict";

// the event handler for the click event of each h2 element
const toggle = evt => {
    const aElement = evt.currentTarget;                 // get the clicked h2 element
    const divElement = aElement.parentElement.nextElementSibling;     // get h2's sibling div
// when an element is nested in another element it is a child, and element next to an element is a sibling
    //aElement.parentElement.classList.toggle("minus");
   if( aElement.parentElement.classList.contains("minus")){
        aElement.parentElement.classList.remove("minus");
    } else{
        aElement.parentElement.classList.add("minus");
    };
    //divElement.classList.toggle("open");
    if( divElement.classList.contains("open")){
        divElement.classList.remove("open");
    } else{
        divElement.classList.add("open");
    };
    evt.preventDefault();   // cancel default action of h2 tag's <a> tag
};

document.addEventListener("DOMContentLoaded", () => {
    // get the h2 tags
    const aElements = faqs.querySelectorAll("#faqs h2 a");
    
    // attach event handler for each h2 tag	    
    for (let aElement of aElements) {
        aElement.addEventListener("click", toggle);
    }
    // set focus on first h2 tag's <a> tag
    //h2Elements[0].firstChild.focus();       
});