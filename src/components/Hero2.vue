<template>
  <div data-aos="fade-up" class="hero-2 bg-light">
    <div class="container row d-flex justify-content-center mx-auto">
      <div
        class="col-lg-6 py-3 py-md-1 d-flex flex-column justify-content-center text-md-start text-center"
      >
        <div class="fs-1 text-bold">
          <slot name="hero-heading"></slot>
          <!-- Contractor recommender system -->
        </div>
        <div class="text fs-4 pt-4">
          <p class="text-secondary">
            <slot name="heading-sec"></slot>
            <!-- Decentralized Tendering System -->
          </p>
          <slot name="content"></slot>
          <!-- Our tendering system is presented for construction projects, excute
          all tendering steps, store information through the process, evaluating
          bids, and awarding of the contract. -->
        </div>
      </div>
      <div class="col-12 col-lg-6">
        <slot name="hero-img"></slot>
        <!-- <img
          src="../../assets/pexels-zahid-iqbal-15063590.jpg"
          alt=""
          class="img-fluid"
        /> -->
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style>
.hero-2 {
  padding-block: 150px;
}
</style>
