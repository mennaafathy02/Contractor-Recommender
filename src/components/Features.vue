<template>
  <div data-aos="fade-left" class="features mx-auto">
    <div class="container row mx-auto d-flex flex-wrap justify-content-evenly">
      <FeatureBox>
        <template v-slot:feature-icon>
          <i class="bi bi-stopwatch-fill"></i>
        </template>
        <template v-slot:feature-title>Increased Efficiency</template>
      </FeatureBox>

      <FeatureBox>
        <template v-slot:feature-icon>
          <i class="bi bi-piggy-bank pink"></i>
        </template>
        <template v-slot:feature-title>Cost Savings</template>
      </FeatureBox>

      <FeatureBox>
        <template v-slot:feature-icon>
          <i class="bi bi-stars yellow"></i>
        </template>
        <template v-slot:feature-title>Reduced Bias</template>
      </FeatureBox>

      <FeatureBox>
        <template v-slot:feature-icon>
          <i class="bi bi-eye"></i>
        </template>
        <template v-slot:feature-title>Enhanced Transparency</template>
      </FeatureBox>
    </div>
  </div>
</template>

<script setup>
import FeatureBox from "./FeatureBox.vue";
</script>

<style scoped>
.features {
  padding-block: 150px;
}
.feature-box {
  width: 200px;
  margin: 10px;
  padding: 20px;
  box-shadow: 1px 1px 10px #4d4d4d;
  border-radius: 10px;
}
.feature-box i {
  margin-inline: auto;
  font-size: 80px;
}
.yellow {
  color: #f1c40f;
}
.pink {
  color: #e91e63;
}
</style>
