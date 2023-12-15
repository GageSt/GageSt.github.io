<!--[Devlog]
- Create a Vue page through the terminal 
- Added BS5 Js & CSS to framework
- Implemented Previous Project Template
Solved: BS5 JS, JQuery, not loading anymore| -Added through App.vue script
-
-->

<script setup lang="ts">
/* [JQuery import] */
import { RouterLink, RouterView } from 'vue-router'
let jqueryScript = document.createElement('script')
jqueryScript.setAttribute('src', '/assets/scripts/jquery.min.js')

/* [Bootstrap 5 JS link] */
let bootstrapScript = document.createElement('script')
bootstrapScript.setAttribute('src', '/assets/scripts/bootstrap.min.js')
document.head.appendChild(jqueryScript)
document.head.appendChild(bootstrapScript)
</script>

<!-- [Beginning of Base Page Content (Head, Navbar, Body)] -->
<template>
<!-- [Beginning of Header]-->
  <head>
    <title> Project 1 Bootstrap Webpage [ SWDV - 140 | Gage Tranter ]</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width-device-width">
    <link rel="stylesheet" href="/assets/scripts/bootstrap.min.css">
    <link rel="stylesheet" href="/assets/styles/css/styles.css">
  </head>

  <header>
   
    <div class ="p-5 bg-warning bg-gradient text-white text-left">
      <div class="navbar-brand" href="">

          <img src="/assets/images/DeskIcon(1).svg" alt="Aquatic Logo" width="100px">
           <h1 id="header_logo">Office Drone Supplies™</h1>

      </div>
    </div>

<!-- [Beginning of Navbar] -->
  <!-- *** navbar light does not effect text-color   V -->
  <!-- ^^^ Adding navbar-dark after bg-dark corrects color problems-->
    <nav class="navbar navbar-expand-md container-fluid bg-dark bg-gradient navbar-dark ">
      <div class="container">

        <router-link to="/info" class="navbar-logo" alt="[Navbar Logo]"><img src="/assets/images/DeskIcon(1).svg"><h6 class="text-light">Office Drone Distributors&reg</h6></router-link>

          <button 
            class="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#nav_menu">
            <span class="navbar-toggler-icon"></span>
          </button>

    <!-- [Beginning of Navbar Collapsed] -->
          <div class="collapse navbar-collapse container-fluid" id="nav_menu">
    <!-- [Navbar Items List] -->
      <!-- --- UL Class ms-auto positions nav-list items to the far right-->
              <ul class="navbar-nav ms-auto d-flex">
                <li class="nav-item">
                  <router-link to="/" class="nav-link"><button class="btn btn-outline-success"> Home </button></router-link>
                </li>

                <li class="nav-item">
                  <router-link to="/join" class="nav-link"><button class="btn btn-outline-success"> Join Us </button>  </router-link>
                </li>

                <li class="nav-item">
                  <router-link to="/info" class="nav-link"><button class="btn btn-outline-success"> Info </button> </router-link>
                </li>

                <li class="nav-item">
                  <router-link to="/shop" class="nav-link"><button class="btn btn-outline-success"> Shop </button> </router-link>
                </li>

                <li class="nav-item">
                  <router-link to="/location" class="nav-link"><button class="btn btn-outline-success"> Contact </button> </router-link>
                </li>

              </ul>
          </div> <!-- [Collapse End] -->
        </div> <!-- [Container End] -->
      </nav>
    
  </header>

<!--[Router Link to Website Page's Content]-->
<RouterView />



<!-- [CDN link to Bootstrap js bootstrap icon stylings] -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css">

<!-- [Beginning of Footer] -->
  <footer class="pg-5 bg-dark bg-gradient text-white text-center">
    <!-- [Footer Outer Container] -->
          <div class="container"> 
            <!-- [Media Links Container] -->
            <section class="mb-2 border-bottom">
                <a class="btn btn-outline btn-floating m-1" href="https://www.facebook.com/" role="button"> 
                  <i class="bi bi-facebook text-light"></i>
                </a>
        
                <a class="btn btn-outline btn-floating m-1" href="https://twitter.com/?lang=en" role="button"> 
                  <i class="bi bi-twitter text-light"></i>
                </a>
        
                <a class="btn btn-outline btn-floating m-1" href="https://mail.google.com/" role="button"> 
                  <i class="bi bi-google text-light"></i>
                </a>
        
                <a class="btn btn-outline btn-floating m-1" href="https://www.instagram.com/" role="button"> 
                  <i class="bi bi-instagram text-light"></i>
                </a>
        
                <a class="btn btn-outline btn-floating m-1" href="https://github.com/" role="button"> 
                  <i class="bi bi-github text-light"></i>
                </a>
            </section>

            <section class="d-flex flex-column flex-md-row justify-content-center">
              <router-link to="/" class=""><img style="width:25px;" class="border border-white rounded-3" src="/assets/images/DeskIcon(1).svg"> </router-link>
              <p>Office Drone Distribution <small>LLC</small>&reg</p>
            </section>
          </div>

          <!-- [Copyright Footer Container] -->
          <div class="text-center p-4">
            © 2023 Copyright:
            <a class="text-reset fw-bold" href="#">SWDV-143</a>
          </div>
          
      
      <!-- [Return To Top Button] -->
          <div>
            <a href="#" class="position-sticky bottom-0 end-0 p-0">
              <i class="bi bi-arrow-up-circle text-bg-dark" style="font-size: 50px"></i>
              
            </a>
          </div>
          
  </footer>
</template>

<style scoped>
</style>
