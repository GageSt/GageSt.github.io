<!--[Devlog]
Error: Banner should not be outside the main.| Unwanted padding inside main
-->
<script setup lang="ts">
/* [Link to Email Verification JS] */
let aboutScript = document.createElement('script')
aboutScript.setAttribute('src', '/assets/scripts/about.js')
document.head.appendChild(aboutScript)
</script>

<template>

<!-- [Beginning of Body] -->
<!-- [Beginning of Banner] -->
    <div class="about_banner" 
    style="background-image: url('/assets/images/Crew(1).jpg');">

<!-- [Banner Text Visual Effects]-->
      <div class="color-overlay d-flex justify-content-center align-items-center">
        <h1>Join Our Crew!</h1>
      </div>
    </div>

<!-- [Beginning of Main] -->
        
    <main class="container-fluid d-flex flex-column">                   <!-- [Main Container] -->
      <section class="d-flex flex-column flex-md-row"> <!-- [Bootstrap Screen Shift Classes for email and following paragraph] -->
        <div class="bg-warning rounded-2 p-2">

          <div class="d-flex flex-column">
          
            <h2>Become a Member Today!</h2>
            <p>Contact us to hear about openings and opprotunities at one of our locations-</p>
          </div>

  <!-- [Beginning of Email List] -->
            
          <form id="email_form" class="d-flex flex-column" name="email_form" >

            <div class="p-1">
              <label for="email_1">Email Address:</label>
              <input type="text" id="email_1" name="email_1">
              <p class="text-danger form-error-hidden">*</p>
            </div>
              
            <div class="p-1">
              <label for="email_2">Confirm Email Address:</label>
              <input type="text" id="email_2" name="email_2">
              <p class="text-danger  form-error-hidden">*</p>
            </div>
              
            <div class="p-1">
              <label for="first_name">First Name:</label>
              <input type="text" id="first_name" name="first_name">
              <p class="text-danger form-error-hidden">*</p>
            </div>
                          
            <div class="p-1">
              <label for="last_name">Last Name:</label>
              <input type="text" id="last_name" name="last_name">
              <p class="text-danger form-error-hidden">*</p>
            </div>
                          
            <div class="p-1">
              <label for="state">State Code:</label>
              <input type="text" id="state" name="state">
              <p class="text-danger form-error-hidden">*</p>
            </div>
                                      
            <div class="p-1">
              <label for="zip_code">Zip Code:</label>
              <input type="text" id="zip_code" name="zip_code">
              <p class="text-danger form-error-hidden">*</p>
            </div>
              
            <div class="d-flex p-1">
              <label>Email me about:</label>
              <input class="m-1" type="checkbox" name="web" id="web" value="web">Crew Member 
              <input class="m-1" type="checkbox" name="java" id="java" value="java">Managerial Staff 
              <input class="m-2" type="checkbox" name="net" id="net" value="net">Delivery Driver 
              <p class="text-danger form-error-hidden">*</p>
            </div>

            <div>
              <label>&nbsp;</label>
              <input type="submit" id="join_list" name="join_list" value="Submit">
              <input type="reset" id="reset" name="reset" value="Reset">
            </div>  

          </form>
        </div>
  <!-- *** Background color screen size change BS5 Does not work ***-->
        <div class="d-flex flex-column bg-dark bg-md-primary text-white rounded-2 p-2">
          <p><strong>Our Mission</strong> We strive to compete with the top sellers of company and business products with lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
      </section>
      
    </main>
  
</template>