"use strict"
const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () =>{

  $("#join_list").addEventListener("click", () =>{
    const email1 = $("#email_1");
    const email2 = $("#email_2");
    const textBox = $("#text_box");

    let errorMessage = "";
    let submitMessage ="Your message has been sent!\nRedirecting to HomePage...";

    if (email1.value == "") { 
      errorMessage += "First email is required.\n";
  }

  if (email2.value == "") { 
      errorMessage += "Second email is required.\n";
  }

  if (email1.value != email2.value) { 
      errorMessage += "Both emails must match.\n";
  }

  if (textBox.value == "") {
      errorMessage += "First name is required.\n";
  }
  
  if (errorMessage == "") {
    $("#contact_form").submit();
    alert(submitMessage);
} else {
   alert(errorMessage);}
  })
});

document.addEventListener("DOMContentLoaded", () =>{

  $("#get_updates").addEventListener("click", () =>{
    const name = $("#name");
    const emailRegister = $("#email_register");
    const number = $("phone");

    let updateErrorMsg = "";

    if (name.value == ""){
      updateErrorMsg += "You must enter a name.\n";
    }
    if (emailRegister ==""){
      updateErrorMsg += "You must add an email\n";
    }
    

    if (updateErrorMsg == ""){
      $("#update_form").submit();
    }else{
      alert(updateErrorMsg);
    }
  })
});