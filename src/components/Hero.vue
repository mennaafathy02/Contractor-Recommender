<template>
  <div
    class="hero d-flex flex-column align-items-center justify-content-center"
  >
    <div class="hero-content">
      <div class="title text-light fs-1 text-bold w-50 text-center">
        <slot name="hero-title"></slot>
      </div>
      <div class="para text-light text-bold w-50 text-center">
        <slot name="hero-para"></slot>
      </div>
    </div>
    <slot name="imgHero"></slot>
  </div>
</template>
<script setup>
// img props imported from parent component
import { ref } from "vue";
const img = ref(null);
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap");
.hero {
  position: relative;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: overlay;
  font-family: "Roboto", sans-serif;
  height: 100vh;
}
.hero:after {
  content: "";
  position: absolute;
  inset: 0;
}
.hero img {
  filter: brightness(0.3);
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 1;
}
.title {
  font-size: 4.5rem !important;
  margin-bottom: 20px;
}
.para {
  font-size: 1.5rem !important;
}

@media (width < 992px) {
  .title {
    font-size: 3.5rem !important;
  }
  .para {
    font-size: 1.2rem !important;
  }
}
@media (width < 768px) {
  .title {
    font-size: 2.5rem !important;
  }
  .para {
    font-size: 1rem !important;
  }
}
@media (width < 576px) {
  .hero {
    min-height: 70vh;
  }
  .hero img {
    height: 70vh;
    object-fit: cover;
  }
  .title {
    font-size: 1.5rem !important;
    line-height: 1.2 !important;
  }
  .para {
    font-size: 0.8rem !important;
    line-height: 1.2 !important;
    font-weight: 300 !important;
  }
}
</style>
