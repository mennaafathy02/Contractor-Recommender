<template>
  <div data-aos="fade-up" class="latest-projects bg-light">
    <div class="container row d-flex justify-content-even mx-auto">
      <h3 class="text-bold text-center">Latest Projects</h3>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
export default {
  setup() {},
  components: {
    Card,
  },
};
</script>
<style>
.latest-projects {
  padding-block: 100px;
}
</style>
