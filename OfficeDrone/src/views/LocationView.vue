<script setup lang="ts">
</script>

<template>

    <main class="d-flex flex-column h-100">
      <section class="d-flex pt-2">
        <div class="container-fluid text-center">
          <h3>Salp Spotting</h3>
          <button class="btn btn-outline-primary btn-light">Come Visit Us!</button>
          <p class="text-end text-center"><strong>"Bringing the world together one sip at a time"</strong></p>
        </div>
        <div class="container-fluid text-center">
          <h3>CWI SWDV<br>Department</h3>
          <button onclick="window.location.href='https://catalog.cwi.edu/course-descriptions/swdv/'" class="btn btn-outline-success btn-light">CWI Portal</button>
          <p class="text-end text-center"><strong>Your own league of<br>Fledgling Developers</strong></p>
        </div>
      </section>

      <section class="d-flex flex-column flex-sm-row justify-content-center">
        <div class="d-flex flex-column align-items-center bg-info-light container m-sm-2 shadow bg-gradient rounded-1">
          <strong class="text-center">Office Drone<br>Distributors&reg;</strong>
          <img style="max-width: 80px" src="/assets/images/DeskIcon(1).svg">
          <button onclick="window.location.href=''" type="button" class="btn btn-outline-dark m-3">Visit Site</button>
        </div>

        <div class="d-flex flex-column align-items-center bg-info-light container m-sm-2 shadow bg-gradient rounded-1">
          <strong class="text-center">Pateron<br></strong>
          <img style="max-width: 80px" src="/assets/images/patreon-round-color-icon.png">
          <button onclick="window.location.href='https://www.patreon.com/'" type="button"  target="https://www.patreon.com/" class="btn btn-outline-dark m-3">Visit Site</button>
        </div>

        <div class="d-flex flex-column align-items-center bg-info-light container m-sm-2 shadow bg-gradent rounded-1">
          <strong class="text-center">Meta</strong>
          <img style="max-width: 100px" src="/assets/images/meta-icon.png">
          <button onclick="window.location.href='https://www.meta.com/'" type="button" class="btn btn-outline-dark m-1.5">Visit Site</button>
        </div>
      </section>

      <section class="d-flex flex-column flex-md-row container-fluid bg-dark-subtle rounded-2 m-1 text-white" style="text-shadow: 1px 1px rgb(76, 103, 138); background-image: url('/assets/images/WarehouseBackground(6).jpg'); background-size: cover; position: relative;">
        <h1 class="mw-25">Come Visit Our Store Today!</h1>
        <p class="text-end"></p>

        <div class="row">
          <div class="col-lg-6 my-4">
            <iframe src="https://www.google.com/maps/d/embed?mid=1VhMZ4-KrZ-oBUzs4dVWwnDMtWbyFq4k&ehbc=2E312F"
              class="w-100" height="100%" loading="lazy"></iframe>
          </div>
          <div class="col-lg-6 my-4 d-flex align-items-center">
            <div >
              <h6>Office Drone Locations & Hours:</h6>
              <p class="d-flex justify-content-end">Lorem ipsum - Lorem ipsum<br>Lorem ipsum - Lorem ipsum<br>Lorem ipsum - Lorem ipsum<br>Lorem ipsum - Lorem ipsum<br>Lorem ipsum - Lorem ipsum<br>Lorem ipsum - Lorem ipsum<br></p>
            </div>
          </div>
        </div>
      </section>

    </main>
  
</template>